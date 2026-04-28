'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/about', label: '회사소개' },
  { href: '/division', label: '사업부소개' },
  { href: '/business', label: '주요사업' },
  { href: '/news', label: '사업부소식' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link href="/" className="nav__logo">
          <span className="nav__logo-mark">AX</span>
          <span>CUDO AX 사업부</span>
        </Link>
        <div className="nav__links">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav__link${pathname === href ? ' active' : ''}`}
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="테마 전환">
            <span className="theme-toggle__knob" />
          </button>
        </div>
      </div>
    </nav>
  )
}
