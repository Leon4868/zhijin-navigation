import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata(
  '电商 AI Skill 套装',
  '规划中的电商 AI Skill 套装：商品资料结构化、卖点提炼、多渠道文案与内容审核工作流。',
  '/products/ecommerce-ai-skills/',
)

const skills = [
  ['商品资料结构化', '把分散的标题、参数、图片说明和品牌资料整理成统一商品档案。'],
  ['核心卖点提炼', '基于目标人群、使用场景和差异化证据，形成可审核的卖点层级。'],
  ['多渠道文案改写', '按站点、平台与语气约束生成标题、详情页和广告文案草稿。'],
  ['内容合规检查', '根据品牌禁用词、事实边界和平台规则输出问题清单，而非直接替人签字。'],
]

export default function EcommerceSkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="E-commerce AI Skills"
        title="面向电商内容团队的首批 AI Skill 套装。"
        description="当前处于需求验证与首批共创阶段。页面公开产品方向和边界，不提前承诺尚未验证的效率或销量结果。"
      >
        <div className="button-row"><Link className="button" href="/contact/">提交使用场景 →</Link></div>
      </PageHero>
      <section className="section surface-section">
        <div className="shell content-grid">
          {skills.map(([title, description], index) => (
            <article className="info-card" key={title}>
              <p className="eyebrow">Skill 0{index + 1}</p>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="shell narrow">
          <p className="eyebrow">Product Status</p>
          <h2>当前状态：规划与样本验证中。</h2>
          <p className="page-lead">如果你愿意提供脱敏后的真实商品资料和现有工作方法，可以参与首批共创。具体交付形式、价格和授权范围将在验证后公开。</p>
        </div>
      </section>
    </>
  )
}
