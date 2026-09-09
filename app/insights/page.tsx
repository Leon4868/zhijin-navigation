import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata(
  'AI 工作流洞察',
  '围绕 Agent 工程、电商 AI、知识库、多模态内容生产和企业 AI 治理的实践文章规划。',
  '/insights/',
)

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="记录 Agent 如何从 Demo 进入真实工作。"
        description="这里将发布工程复盘、场景拆解和可复用方法。文章仍在准备中，暂不创建空白详情页。"
      />
      <section className="section surface-section">
        <div className="shell content-grid">
          <article className="info-card"><p className="eyebrow">选题规划 01</p><h2>为什么 Agent 项目应该先定义人工审批？</h2><p>从风险与责任边界出发，解释人工节点不是自动化失败，而是系统设计的一部分。</p><span className="case-status">即将发布</span></article>
          <article className="info-card"><p className="eyebrow">选题规划 02</p><h2>电商内容工作流，怎样选择第一个 AI 场景？</h2><p>用频率、标准化程度、数据条件和结果可审核性筛选高价值起点。</p><span className="case-status">即将发布</span></article>
          <article className="info-card"><p className="eyebrow">选题规划 03</p><h2>企业 AI 中台不是模型 API 集合。</h2><p>拆解编排、治理、知识、资产和观测如何共同构成可持续能力。</p><span className="case-status">即将发布</span></article>
          <article className="info-card"><p className="eyebrow">选题规划 04</p><h2>如何用真实样本验收一个 AI Skill？</h2><p>建立基础样本、失败分类与人工评分，让迭代依据不只来自主观感受。</p><span className="case-status">即将发布</span></article>
        </div>
      </section>
    </>
  )
}
