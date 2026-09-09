import Image from 'next/image'
import Link from 'next/link'
import { MotionReveal } from '@/components/MotionReveal'
import { capabilities, faq, productLadder } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Agent Engineering for Real Work</p>
            <h1>
              把商品资料，变成
              <span className="gradient-text">可审核、可复用的 AI 营销素材。</span>
            </h1>
            <p className="lead">
              ZHJIN AI 面向电商与出海内容团队，把大模型、知识库、工具调用与人工审批组合成真正能进入业务的 Agent 工作流。
            </p>
            <div className="button-row">
              <Link className="button" href="/contact/">
                申请工作流诊断 <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-secondary" href="/cases/">
                查看工程实践
              </Link>
            </div>
            <p className="hero-note">开放首批共创 · 从一个可验收流程开始</p>
          </div>
          <div className="hero-visual" aria-label="AI 工作流示意图">
            <div className="orb" />
            <div className="orbit" />
            <div className="orbit" />
            <div className="workflow-card card-a">
              <strong>01 · 理解商品</strong>
              <small>资料解析 · 知识检索 · 规则约束</small>
            </div>
            <div className="workflow-card card-b">
              <strong>02 · 生成方案</strong>
              <small>Agent 编排 · 文案与视觉任务</small>
            </div>
            <div className="workflow-card card-c">
              <strong>03 · 人工审核</strong>
              <small>版本记录 · 资产入库 · 持续复用</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell trust-strip">
          <div><strong>Agent 编排</strong><span>从模型调用到业务闭环</span></div>
          <div><strong>多模态生产</strong><span>文案、图片与素材流程</span></div>
          <div><strong>企业治理</strong><span>权限、审计与人工兜底</span></div>
          <div><strong>轻量试点</strong><span>用真实任务验证价值</span></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <MotionReveal className="section-heading">
            <div>
              <p className="eyebrow">What I Build</p>
              <h2>不卖“接个 API”，解决一段真实业务。</h2>
            </div>
            <p>从流程定义开始，让 AI 的输入、输出、成本和责任边界都可见。</p>
          </MotionReveal>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <MotionReveal className="capability-card" key={item.index}>
                <span className="index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="shell preview-layout">
          <MotionReveal className="product-preview">
            <div className="preview-chrome"><span /><span /><span /><p>产品设计预览 · 数据仅作流程示意</p></div>
            <Image
              src="/images/system/creative-production-dashboard.png"
              width={1316}
              height={1021}
              alt="ZHJIN AI 素材生产工作台设计预览，包含设计任务、进度与团队列表"
              priority={false}
            />
          </MotionReveal>
          <MotionReveal className="preview-copy">
            <p className="eyebrow">Platform Preview</p>
            <h2>一套面向企业流程的 AI 中台原型。</h2>
            <p>当前原型覆盖 Agent 编排、知识库、文档与素材生产等模块，用于验证复杂 AI 工作流如何被组织、执行和治理。</p>
            <ul className="preview-list">
              <li>多步骤 Agent 流程编排</li>
              <li>素材任务与人工审核</li>
              <li>企业知识与资产沉淀</li>
            </ul>
            <p className="disclaimer">这是产品设计与工程能力展示，不代表已交付客户案例或公开 SaaS。</p>
            <Link className="text-link" href="/services/enterprise-ai-platform/">了解中台技术评估 →</Link>
          </MotionReveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <MotionReveal className="section-heading">
            <div>
              <p className="eyebrow">Products & Services</p>
              <h2>从低风险试用，到可持续系统。</h2>
            </div>
            <p>产品和服务按投入深度分层，不要求你一开始就做一套“大而全”的平台。</p>
          </MotionReveal>
          <div className="service-grid">
            {productLadder.map((item, index) => (
              <MotionReveal className={`service-card ${index === 1 ? 'featured' : ''}`} key={item.title}>
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="status">{item.status}</span>
                <Link className="text-link" href={item.href}>查看详情 →</Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="shell">
          <MotionReveal className="section-heading">
            <div>
              <p className="eyebrow">A Small, Testable Start</p>
              <h2>一次试点，四个明确节点。</h2>
            </div>
          </MotionReveal>
          <div className="process-grid">
            {[
              ['01', '流程诊断', '确认真实痛点、数据样本和验收方式。'],
              ['02', '方案与边界', '定义 Agent、工具、人工环节与安全约束。'],
              ['03', '试点实现', '在 7–14 天内完成可运行的小范围流程。'],
              ['04', '复盘决策', '基于结果决定优化、产品化或停止投入。'],
            ].map(([index, title, description]) => (
              <div className="process-step" key={index}>
                <span className="step-number">{index}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>合作前，先把关键问题说清楚。</h2>
            </div>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <div className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell cta-panel">
          <p className="eyebrow">Start With One Workflow</p>
          <h2>把你最耗时的一段流程，发给我。</h2>
          <p>我会先判断它是否适合 Agent 化、需要哪些真实样本，以及用什么方式验收。适合再做，不适合也会直接说明。</p>
          <div className="button-row">
            <Link className="button" href="/contact/">准备一份诊断需求 →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
