import type { MetadataRoute } from 'next'
import { allRoutes, siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return allRoutes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/services') || route.startsWith('/products') ? 0.8 : 0.6,
  }))
}
