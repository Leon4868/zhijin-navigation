import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'
import { productLadder } from '@/lib/site'

export const metadata: Metadata = createMetadata(
  'AI 工作流与 Agent 工程服务',
  '从 7–14 天工作流试点，到企业 AI 中台技术评估，以可验收方式让 AI 进入真实业务。',
  '/services/',
)

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="从一个真实流程开始，而不是从一套大系统开始。"
        description="先判断场景是否值得做，再用小范围试点验证效果、成本和协作方式。验证成立后，才进入产品化或企业级建设。"
      >
        <div className="button-row"><Link className="button" href="/contact/">申请工作流诊断 →</Link></div>
      </PageHero>
      <section className="section surface-section">
        <div className="shell service-grid">
          {productLadder.slice(1).map((item, index) => (
            <article className={`service-card ${index === 0 ? 'featured' : ''}`} key={item.title}>
              <p className="eyebrow">{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="status">{item.status}</span>
              <Link className="text-link" href={item.href}>查看服务范围 →</Link>
            </article>
          ))}
          <article className="service-card">
            <p className="eyebrow">适配方向</p>
            <h2>AI 提效咨询</h2>
            <p>围绕现有岗位和流程，识别真正适合自动化的环节，形成场景优先级、风险清单与实施路线。</p>
            <span className="status">诊断式合作</span>
            <Link className="text-link" href="/contact/">描述你的流程 →</Link>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow">
          <p className="eyebrow">Suitable Scenarios</p>
          <h2>什么样的任务更适合 Agent 化？</h2>
          <div className="detail-list">
            <div className="detail-row"><strong>重复发生</strong><p>团队每周或每天都在执行，已经占用稳定的人力。</p></div>
            <div className="detail-row"><strong>输入可描述</strong><p>有明确资料、规则或历史样本，不完全依赖个人直觉。</p></div>
            <div className="detail-row"><strong>结果可审核</strong><p>能定义“合格”的标准，并在关键节点保留人工确认。</p></div>
            <div className="detail-row"><strong>价值可追踪</strong><p>能够用时间、成本、一致性或响应速度衡量改善。</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
