type ProjectRoute = {
  origin: string
  redirectOnly?: boolean
}

const PROJECTS: Readonly<Record<string, ProjectRoute>> = {
  'chain-notebook': {
    origin:
      'http://chain-notebook-leon4868-20260810-36f9214.s3-website-us-west-2.amazonaws.com',
  },
  'blockchain-homework': {
    origin: 'http://ec2-35-93-216-60.us-west-2.compute.amazonaws.com',
    redirectOnly: true,
  },
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

  const contentType = response.headers.get('content-type') ?? ''

  if (!contentType.includes('text/html')) {
    return response
  }

  return new HTMLRewriter()
    .on('[href]', new PrefixAttribute('href', prefix))
    .on('[src]', new PrefixAttribute('src', prefix))
    .transform(response)
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
    const project = slug ? PROJECTS[slug] : undefined

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
