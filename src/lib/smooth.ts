import Lenis from 'lenis'
import gsap from 'gsap'

let lenis: Lenis | null = null
let ticker: ((time: number) => void) | null = null

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  const override = new URLSearchParams(window.location.search).get('motion')
  if (override === 'full') return false
  if (override === 'reduce') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function initSmoothScroll() {
  const reduced = prefersReducedMotion()
  document.documentElement.dataset.motion = reduced ? 'reduce' : 'full'
  if (reduced) return null

  lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.4,
  })

  ticker = (time: number) => {
    lenis?.raf(time * 1000)
  }

  gsap.ticker.add(ticker)
  gsap.ticker.lagSmoothing(0)
  return lenis
}

export function destroySmoothScroll() {
  if (ticker) gsap.ticker.remove(ticker)
  ticker = null
  lenis?.destroy()
  lenis = null
}

export function scrollToId(id: string) {
  const target = document.querySelector(id)
  if (!target) return
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.1 })
  } else {
    ;(target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function lockScroll(locked: boolean) {
  if (locked) {
    lenis?.stop()
    document.documentElement.classList.add('is-locked')
  } else {
    lenis?.start()
    document.documentElement.classList.remove('is-locked')
  }
}
