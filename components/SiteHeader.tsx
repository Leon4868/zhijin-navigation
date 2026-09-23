'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Logo } from '@/components/Logo'
import { navigation } from '@/lib/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">打开导航</span>
        </button>
        <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="主导航">
          {navigation.map((item) => (
            <Link
              key={item.href}
              className={pathname.startsWith(item.href) ? 'is-active' : undefined}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a className="button button-small" href="/ai-platform/" onClick={() => setOpen(false)}>
            打开 AI-Platform <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
