import type { Metadata } from 'next'
import Script from 'next/script'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { siteConfig } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ZHJIN AI｜电商 AI 工作流与 Agent 工程服务',
    template: '%s｜ZHJIN AI',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  keywords: ['AI 工作流', 'Agent 工程', '电商 AI', 'AI 中台', 'AI Skill', '多模态内容生产'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: siteConfig.name,
    title: 'ZHJIN AI｜电商 AI 工作流与 Agent 工程服务',
    description: siteConfig.description,
    images: [{ url: '/og/zhijin-ai-og.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZHJIN AI｜电商 AI 工作流与 Agent 工程服务',
    description: siteConfig.description,
    images: ['/og/zhijin-ai-og.svg'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: 'CN',
  serviceType: ['AI 工作流咨询与开发', 'Agent 工程服务', '电商 AI Skill'],
  sameAs: [siteConfig.github],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  )
}
