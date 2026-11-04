import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { links, nav, price } from '../content'
import { lockScroll, scrollToId } from '../lib/smooth'
import { ArrowRight, Youtube } from './Icons'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)
  const firstMenuLink = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 16)
      setHidden(y > 360 && y > lastY.current + 4)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    lockScroll(open)
    return () => lockScroll(false)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const timer = window.setTimeout(() => firstMenuLink.current?.focus(), 320)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(timer)
    }
  }, [open])

  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    if (open) {
      setOpen(false)
      lockScroll(false)
    }
    window.setTimeout(() => scrollToId(href), open ? 120 : 0)
  }

  return (
    <>
      <header className="nav" data-scrolled={scrolled} data-hidden={hidden && !open}>
        <div className="container nav-inner">
          <a href="#top" className="wordmark" onClick={(event) => go(event, '#top')}>
            <span className="wordmark-dot" aria-hidden="true" />
            <span>Yusuf İpek</span>
            <span className="wordmark-sub">Meta Class</span>
          </a>

          <nav className="nav-links" aria-label="Ana menü">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => go(event, item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-login" href={links.login}>
              Giriş
            </a>
            <a className="btn btn-primary btn-sm nav-cta" href={links.join}>
              Katıl · {price.amount} {price.currency}
              <ArrowRight size={13} />
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className="menu"
        id="mobile-menu"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
      >
        <div className="container menu-inner">
          <nav className="menu-links" aria-label="Mobil menü">
            {nav.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstMenuLink : undefined}
                href={item.href}
                style={{ '--i': index } as CSSProperties}
                onClick={(event) => go(event, item.href)}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="menu-footer">
            <a className="btn btn-primary" href={links.join} tabIndex={open ? 0 : -1}>
              Kursa katıl · {price.amount} {price.currency}
              <ArrowRight size={15} />
            </a>
            <div className="menu-meta">
              <a href={links.login} tabIndex={open ? 0 : -1}>
                Giriş yap
              </a>
              <a href={links.youtube} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
                <Youtube size={13} /> @yusufipk
              </a>
              <a href={links.contact} tabIndex={open ? 0 : -1}>
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
