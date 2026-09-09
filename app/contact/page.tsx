import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = createMetadata(
  '联系与合作',
  '提交你的电商 AI、Agent 工作流或企业 AI 中台需求背景，开始一次场景诊断。',
  '/contact/',
)

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="先描述问题，不急着决定方案。"
        description="为了让第一次沟通更有效，请准备下面四项信息。当前正式合作邮箱与表单通道正在配置，暂可通过 GitHub 查看公开项目。"
      />
      <section className="section surface-section">
        <div className="shell contact-layout">
          <div>
            <p className="eyebrow">Before We Talk</p>
            <h2>准备一份简短背景。</h2>
            <ol className="contact-checklist">
              <li>你的团队和主要业务是什么？</li>
              <li>目前哪段流程最重复、最耗时？</li>
              <li>有哪些脱敏样本可以用于验证？</li>
              <li>怎样的结果才算试点成功？</li>
            </ol>
          </div>
          <div className="contact-box">
            <p className="eyebrow">Channel Status</p>
            <h2>合作入口配置中</h2>
            <p>为避免展示一个无法正常送达的假表单，正式联系邮箱和隐私确认流程将在开通后上线。</p>
            <div className="notice">上线前待补充：企业邮箱、微信二维码或经过验证的表单接收服务。</div>
            <a className="button button-secondary" href={siteConfig.github} target="_blank" rel="noreferrer">先查看 GitHub ↗</a>
          </div>
        </div>
      </section>
    </>
  )
}
