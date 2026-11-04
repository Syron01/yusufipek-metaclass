import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './smooth'

/**
 * Scroll-triggered reveal hook.
 * Adds `data-visible="true"` to the element when it enters the viewport.
 * CSS handles the actual animation via the data attribute.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) {
      if (el) el.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true'
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * Counter animation — counts up from 0 to `target` when element enters view.
 */
export function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      el.textContent = new Intl.NumberFormat('tr-TR').format(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const start = performance.now()
        const formatter = new Intl.NumberFormat('tr-TR')

        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(1, elapsed / duration)
          // ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = formatter.format(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}
