import { useEffect, useRef, useState } from 'react'
import { links, price } from '../content'
import { ArrowRight } from './Icons'

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const node = bar.current
      if (!node) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      node.style.transform = `scaleX(${progress})`
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="progress" ref={bar} aria-hidden="true" />
}

export function MobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const remaining = document.documentElement.scrollHeight - y - window.innerHeight
      setVisible(y > window.innerHeight * 0.9 && remaining > 720)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="mobile-cta" data-visible={visible}>
      <div className="mobile-cta-price">
        <strong>
          {price.amount} {price.currency}
        </strong>
        <span>tek ödeme · ömür boyu</span>
      </div>
      <a className="btn btn-primary" href={links.join}>
        Kursa katıl
        <ArrowRight size={14} />
      </a>
    </div>
  )
}
