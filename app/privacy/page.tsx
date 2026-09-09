import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata(
  '隐私说明',
  'ZHJIN AI 官网的基础隐私说明。当前网站不提供账号系统，也不主动收集表单数据。',
  '/privacy/',
)

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="隐私说明"
        description="更新日期：2026 年 9 月 8 日。此页面描述当前官网版本的数据处理边界。"
      />
      <section className="section surface-section">
        <div className="shell narrow faq-list">
          <div className="faq-item"><h2>当前不收集联系表单</h2><p>本版本尚未接入联系表单、账号系统或支付功能，因此不会通过这些功能接收个人信息。</p></div>
          <div className="faq-item"><h2>基础访问日志</h2><p>网站托管与安全服务可能处理请求 IP、User-Agent、访问时间和错误日志，用于内容分发、安全防护与故障排查。具体保留策略以托管服务配置为准。</p></div>
          <div className="faq-item"><h2>第三方链接</h2><p>访问 GitHub 或独立项目后，将适用相应第三方的隐私政策。本网站无法控制第三方如何处理数据。</p></div>
          <div className="faq-item"><h2>后续更新</h2><p>接入邮箱、表单、统计分析或支付前，将同步更新本说明并明确用途、范围与保留方式。</p></div>
        </div>
      </section>
    </>
  )
}
