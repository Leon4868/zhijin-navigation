import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata(
  'AI Skill 与虚拟产品',
  '面向电商与出海运营的可复用 AI Skill 产品规划，覆盖商品理解、卖点提炼、内容改写与运营辅助。',
  '/products/',
)

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Products"
        title="把反复验证过的工作流，沉淀为可复用产品。"
        description="首批产品聚焦电商内容任务。不是一组脱离业务的提示词，而是包含输入规范、执行步骤、检查规则和输出模板的 Skill。"
      >
        <div className="button-row"><Link className="button" href="/products/ecommerce-ai-skills/">查看首批 Skill 规划 →</Link></div>
      </PageHero>
      <section className="section surface-section">
        <div className="shell content-grid">
          <article className="info-card"><p className="eyebrow">Reusable</p><h2>可复用</h2><p>把输入、规则与输出约定固化下来，降低每次从零调试提示词的成本。</p></article>
          <article className="info-card"><p className="eyebrow">Reviewable</p><h2>可审核</h2><p>为事实、品牌用语与敏感表述设置检查清单，让结果能够进入真实协作。</p></article>
          <article className="info-card"><p className="eyebrow">Configurable</p><h2>可配置</h2><p>品牌语气、平台约束与商品类目作为参数管理，而不是散落在聊天记录里。</p></article>
          <article className="info-card"><p className="eyebrow">Evolvable</p><h2>可迭代</h2><p>通过失败样本和人工反馈更新规则，让 Skill 随业务一起成长。</p></article>
        </div>
      </section>
    </>
  )
}
