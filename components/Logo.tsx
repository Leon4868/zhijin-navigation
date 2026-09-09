import Link from 'next/link'

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="ZHJIN AI 首页">
      <span className="brand-mark" aria-hidden="true">
        Z
      </span>
      <span>
        <strong>ZHJIN AI</strong>
        <small>Agent Engineering Studio</small>
      </span>
    </Link>
  )
}
