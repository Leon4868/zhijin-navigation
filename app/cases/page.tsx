import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata(
  '工程实践与产品原型',
  'ZHJIN AI 的工程实践、产品原型与实验项目。明确区分个人项目、设计预览与客户案例。',
  '/cases/',
)

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Practice"
        title="展示做过什么，也诚实说明做到哪一步。"
        description="这里收录自研原型与公开工程项目。首批商业案例正在共建，因此不会把个人实验包装成客户成果。"
      />
      <section className="section surface-section">
        <div className="shell narrow">
          <p className="eyebrow">Selected Projects</p>
          <div className="case-card">
            <div><h2>企业 AI 中台产品原型</h2><p>覆盖 Agent 编排、知识库、文档与素材生产的产品设计与工程验证。</p><div className="tag-row"><span className="tag">Agent Orchestration</span><span className="tag">Knowledge</span><span className="tag">Creative Workflow</span></div></div>
            <span className="case-status">自研原型</span>
          </div>
          <div className="case-card">
            <div><h2>Chain Notebook</h2><p>用于记录与展示区块链学习过程的公开 Web 工程项目，由本站 Cloudflare Worker 反向代理访问。</p><div className="button-row"><Link className="text-link" href="/chain-notebook/">打开项目 →</Link></div></div>
            <span className="case-status">个人工程项目</span>
          </div>
          <div className="case-card">
            <div><h2>Blockchain Homework</h2><p>区块链课程练习与实验页面，通过独立运行环境提供访问。</p><div className="button-row"><Link className="text-link" href="/blockchain-homework/">打开项目 →</Link></div></div>
            <span className="case-status">学习实验</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell cta-panel">
          <p className="eyebrow">Co-build The First Case</p>
          <h2>首批标杆案例共建中。</h2>
          <p>如果你有清晰、重复、可验收的电商内容流程，我们可以用一个小范围试点共同验证价值。</p>
          <div className="button-row"><Link className="button" href="/contact/">申请共创 →</Link></div>
        </div>
      </section>
    </>
  )
}
