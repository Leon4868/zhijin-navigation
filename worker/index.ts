type ProjectRoute = {
  origin: string
  redirectOnly?: boolean
  // 产物自带子路径前缀时必须关掉 HTML 重写，否则前缀会被加成两层。
  rewriteHtml?: boolean
  // 把源站下发的 Cookie 收敛到这个项目的子路径。源站写的是 Path=/，照搬会让
  // 会话 Cookie 跟着官网的每一个请求一起发出去。
  cookiePath?: string
  // 源站校验它才放行，用来挡掉绕过本入口的直连。
  originToken?: string
}

const PROJECTS: Readonly<Record<string, ProjectRoute>> = {
  'chain-notebook': {
    origin:
      'http://chain-notebook-leon4868-20260810-36f9214.s3-website-us-west-2.amazonaws.com',
  },
  'blockchain-homework': {
    origin: 'http://35.93.216.60',
    redirectOnly: true,
  },
}

function routeFor(slug: string, env: Env): ProjectRoute | undefined {
  // 工作台这一条要从 secret 取地址和凭据，拿不到静态表里去。
  if (slug === 'ai-platform') {
    return {
      origin: env.AI_PLATFORM_ORIGIN,
      rewriteHtml: false,
      cookiePath: '/ai-platform',
      originToken: env.AI_PLATFORM_ORIGIN_TOKEN,
    }
  }

  return PROJECTS[slug]
}

function withScopedCookies(
  response: Response,
  cookiePath: string | undefined,
): Response {
  const cookies = cookiePath ? response.headers.getSetCookie() : []

  if (cookies.length === 0) {
    return response
  }

  const headers = new Headers(response.headers)
  headers.delete('set-cookie')

  for (const cookie of cookies) {
    headers.append(
      'set-cookie',
      cookie.replace(/;\s*Path=\/(?=;|$)/i, `; Path=${cookiePath}`),
    )
  }

  // 传 body 而不是读它：事件流要一直流下去，读干就等于把运行看死在这里。
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

class PrefixAttribute implements HTMLRewriterElementContentHandlers {
  private readonly attribute: string
  private readonly prefix: string

  constructor(attribute: string, prefix: string) {
    this.attribute = attribute
    this.prefix = prefix
  }

  element(element: Element): void {
    const value = element.getAttribute(this.attribute)

    if (value?.startsWith('/') && !value.startsWith('//')) {
      element.setAttribute(this.attribute, `${this.prefix}${value}`)
    }
  }
}

async function proxyProject(
  request: Request,
  incoming: URL,
  slug: string,
  project: ProjectRoute,
): Promise<Response> {
  const prefix = `/${slug}`
  const target = new URL(project.origin)
  target.pathname = incoming.pathname.slice(prefix.length) || '/'
  target.search = incoming.search

  const headers = new Headers(request.headers)
  headers.delete('host')

  if (project.originToken) {
    headers.set('x-origin-token', project.originToken)
  }

  const response = await fetch(
    new Request(target, {
      method: request.method,
      headers,
      body:
        request.method === 'GET' || request.method === 'HEAD'
          ? undefined
          : request.body,
      redirect: 'follow',
    }),
  )

  const scoped = withScopedCookies(response, project.cookiePath)
  const contentType = scoped.headers.get('content-type') ?? ''

  if (project.rewriteHtml === false || !contentType.includes('text/html')) {
    return scoped
  }

  return new HTMLRewriter()
    .on('[href]', new PrefixAttribute('href', prefix))
    .on('[src]', new PrefixAttribute('src', prefix))
    .transform(scoped)
}

export default {
  async fetch(request, env): Promise<Response> {
    const incoming = new URL(request.url)

    if (incoming.hostname === 'www.zhijin.fun') {
      incoming.hostname = 'zhijin.fun'
      return Response.redirect(incoming.toString(), 308)
    }

    const match = incoming.pathname.match(/^\/([^/]+)(?:\/|$)/)
    const slug = match?.[1]
    const project = slug ? routeFor(slug, env) : undefined

    if (!project || !slug) {
      return env.ASSETS.fetch(request)
    }

    if (incoming.pathname === `/${slug}`) {
      incoming.pathname = `/${slug}/`
      return Response.redirect(incoming.toString(), 308)
    }

    if (project.redirectOnly) {
      const target = new URL(project.origin)
      target.pathname = incoming.pathname.slice(`/${slug}`.length) || '/'
      target.search = incoming.search
      return Response.redirect(target.toString(), 302)
    }

    try {
      return await proxyProject(request, incoming, slug, project)
    } catch (error) {
      console.error(
        JSON.stringify({
          message: 'AWS project proxy failed',
          project: slug,
          path: incoming.pathname,
          error: error instanceof Error ? error.message : String(error),
        }),
      )

      return new Response('项目暂时无法访问，请稍后重试。', {
        status: 502,
        headers: { 'content-type': 'text/plain; charset=UTF-8' },
      })
    }
  },
} satisfies ExportedHandler<Env>
