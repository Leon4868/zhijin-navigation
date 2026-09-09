import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { navigation, siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>让 AI 真正进入业务流程，而不是停在演示里。</p>
        </div>
        <div>
          <p className="footer-label">导航</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-label">联系与项目</p>
          <div className="footer-links">
            <Link href="/contact/">合作咨询</Link>
            <a href={siteConfig.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <Link href="/privacy/">隐私说明</Link>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} ZHJIN AI Studio</span>
        <span>独立 Agent 工程工作室 · 中国 / Remote</span>
      </div>
    </footer>
  )
}
