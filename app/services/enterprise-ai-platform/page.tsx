import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata(
  '企业 AI 中台技术评估',
  '围绕模型接入、Agent 编排、知识检索、素材生产、权限审计与资产沉淀，评估企业 AI 中台落地路径。',
  '/services/enterprise-ai-platform/',
)

export default function EnterprisePlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise AI Platform"
        title="先评估组织与流程，再谈企业 AI 中台。"
        description="面向已有多个 AI 场景、需要统一模型能力、流程治理和资产沉淀的团队，提供架构梳理与分阶段实现建议。"
      >
        <div className="button-row"><Link className="button" href="/contact/">提交评估背景 →</Link></div>
      </PageHero>
      <section className="section surface-section">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Prototype</p><h2>从工作台到 Agent 画布的原型验证。</h2></div>
            <p>以下为自研产品设计预览，用于展示信息架构与工程方向，不代表已上线客户环境。</p>
          </div>
          <div className="image-pair">
            <div className="product-preview">
              <div className="preview-chrome"><span /><span /><span /><p>素材任务与审核流程</p></div>
              <Image src="/images/system/creative-batch-review.png" width={537} height={685} alt="素材批次审核与运行数据设计预览" />
            </div>
            <div className="product-preview">
              <div className="preview-chrome"><span /><span /><span /><p>Agent 编排画布</p></div>
              <Image src="/images/system/agent-orchestration.png" width={873} height={701} alt="Agent 节点编排、知识检索与人工审批设计预览" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow">
          <p className="eyebrow">Assessment Scope</p>
          <h2>技术评估覆盖的六个层面。</h2>
          <div className="detail-list">
            {[
              ['业务场景', '场景优先级、角色、流程和验收口径。'],
              ['模型与工具', '模型路由、外部 API、MCP 与成本约束。'],
              ['知识与数据', '检索范围、数据权限、引用与更新机制。'],
              ['Agent 编排', '节点职责、状态、重试、人工审批与观测。'],
              ['安全治理', '最小权限、敏感信息、日志审计和供应商边界。'],
              ['实施路线', '从试点到平台化的阶段目标、风险与依赖。'],
            ].map(([title, description]) => <div className="detail-row" key={title}><strong>{title}</strong><p>{description}</p></div>)}
          </div>
        </div>
      </section>
    </>
  )
}
