import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="page-hero section">
      <div className="shell narrow">
        <p className="eyebrow">404</p>
        <h1>这个页面还没有进入工作流。</h1>
        <p className="page-lead">地址可能已变更，或者内容仍在准备中。</p>
        <div className="button-row"><Link className="button" href="/">返回首页 →</Link></div>
      </div>
    </section>
  )
}
