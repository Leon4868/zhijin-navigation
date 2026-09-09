import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export function createMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonical = new URL(path, siteConfig.url).toString()

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: '/og/zhijin-ai-og.svg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og/zhijin-ai-og.svg'],
    },
  }
}
