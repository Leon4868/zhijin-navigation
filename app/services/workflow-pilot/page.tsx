import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata(
  '7–14 天 AI 工作流试点',
  '用一个真实、可验收的业务流程，验证 Agent 工作流的效果、成本、安全边界与团队协作方式。',
  '/services/workflow-pilot/',
)

export default function WorkflowPilotPage() {
  return (
    <>
      <PageHero
        eyebrow="Workflow Pilot"
        title="7–14 天，验证一段 AI 工作流值不值得继续投入。"
        description="适合已有明确重复任务、能提供真实样本，并希望先看到可运行结果的电商与内容团队。"
      >
        <div className="button-row"><Link className="button" href="/contact/">申请首批共创 →</Link></div>
      </PageHero>
      <section className="section surface-section">
        <div className="shell content-grid">
          <article className="info-card">
            <p className="eyebrow">交付内容</p>
            <h2>你会得到什么</h2>
            <ul>
              <li>一份场景与可行性诊断</li>
              <li>可运行的工作流原型</li>
              <li>人工审核与失败兜底设计</li>
              <li>成本、效果与风险复盘</li>
              <li>继续、调整或停止的建议</li>
            </ul>
          </article>
          <article className="info-card">
            <p className="eyebrow">前置条件</p>
            <h2>你需要准备什么</h2>
            <ul>
              <li>一个具体而非宽泛的业务问题</li>
              <li>10–30 份脱敏后的真实样本</li>
              <li>一位熟悉流程的业务负责人</li>
              <li>可以被双方确认的验收标准</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow">
          <p className="eyebrow">Boundaries</p>
          <h2>试点的边界同样重要。</h2>
          <div className="detail-list">
            <div className="detail-row"><strong>不是完整 SaaS</strong><p>试点用于验证关键流程，不承诺第一阶段覆盖全部岗位和系统。</p></div>
            <div className="detail-row"><strong>不承诺虚假指标</strong><p>效率和成本目标将在看到真实样本后共同定义，并以可复现测试为准。</p></div>
            <div className="detail-row"><strong>保留人工决策</strong><p>对品牌、合规或高风险输出，默认设计审核节点和可追溯记录。</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
