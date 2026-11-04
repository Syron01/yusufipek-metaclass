import { useRef, useEffect } from 'react'
import { proof } from '../content'
import { prefersReducedMotion } from '../lib/smooth'
import { useReveal } from '../lib/useReveal'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const formatter = new Intl.NumberFormat('tr-TR')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      el.textContent = formatter.format(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const duration = 1400
        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(1, elapsed / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = formatter.format(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <p className="proof-value">
      <span ref={ref}>{formatter.format(target)}</span>
      {suffix === '+' ? <span className="plus">+</span> : null}
    </p>
  )
}

export default function Proof() {
  const ref = useReveal<HTMLElement>(0.15)

  return (
    <section className="proof reveal" ref={ref} aria-label="Deneyim rakamları">
      <div className="container">
        <div className="proof-grid stagger">
          {proof.map((item) => (
            <div className="proof-cell reveal-scale" key={item.label}>
              <CountUp target={item.count} suffix={item.suffix} />
              <p className="proof-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
