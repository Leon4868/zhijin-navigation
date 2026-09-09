import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZHJIN AI Studio',
    short_name: 'ZHJIN AI',
    description: '电商 AI 工作流与 Agent 工程服务',
    start_url: '/',
    display: 'standalone',
    background_color: '#070a10',
    theme_color: '#070a10',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
