import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = createMetadata(
  '关于 ZHJIN AI',
  'ZHJIN AI 是由一名在职 Agent 工程师发起的独立工程工作室，专注 AI 工作流、Agent 编排和企业落地。',
  '/about/',
)

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="一个小型工作室，专注把 AI 做进流程。"
        description="ZHJIN AI 是由一名在职 Agent 工程师发起的独立工程工作室。现阶段以可复用 Skill、短周期试点和企业 AI 中台技术评估为核心。"
      />
      <section className="section surface-section">
        <div className="shell content-grid">
          <article className="info-card"><p className="eyebrow">Engineering</p><h2>工程优先</h2><p>关注状态、工具、权限、失败和观测，让工作流能够被运行、检查与维护。</p></article>
          <article className="info-card"><p className="eyebrow">Business</p><h2>业务优先</h2><p>从角色、任务和验收开始，不用技术名词替代真正的问题定义。</p></article>
          <article className="info-card"><p className="eyebrow">Honesty</p><h2>诚实表达</h2><p>明确区分产品原型、个人实践和客户结果，不用未经验证的数字制造信任。</p></article>
          <article className="info-card"><p className="eyebrow">Scope</p><h2>控制范围</h2><p>先验证最小闭环，再扩展系统；阶段性结果必须能够独立被验收。</p></article>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow">
          <p className="eyebrow">Public Work</p>
          <h2>公开项目与持续学习。</h2>
          <p className="page-lead">工程实践与部分学习项目会持续公开在 GitHub。商业合作中的敏感数据、流程和资产不会未经允许公开。</p>
          <div className="button-row"><a className="button button-secondary" href={siteConfig.github} target="_blank" rel="noreferrer">访问 GitHub ↗</a><Link className="button" href="/contact/">发起合作 →</Link></div>
        </div>
      </section>
    </>
  )
}
