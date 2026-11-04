import { useEffect, useRef, useState } from 'react'
import { snap } from '../content'
import { prefersReducedMotion, getLenis } from '../lib/smooth'

const pad = (value: number) => String(value).padStart(2, '0')

export default function Snap() {
  const section = useRef<HTMLElement>(null)
  const sticky = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const ticks = useRef<HTMLSpanElement>(null)
  const frames = useRef<HTMLImageElement[]>([])
  const ready = useRef(false)
  const reduced = useRef(prefersReducedMotion()).current
  const [active, setActive] = useState(reduced ? snap.phases.length - 1 : 0)
  const total = snap.frames

  useEffect(() => {
    const draw = (image: HTMLImageElement) => {
      const node = canvas.current
      const context = node?.getContext('2d')
      if (!node || !context) return
      context.clearRect(0, 0, node.width, node.height)
      context.drawImage(image, 0, 0, node.width, node.height)
    }

    const poster = new Image()
    poster.src = `${import.meta.env.BASE_URL}assets/snap/poster.webp`
    poster.onload = () => {
      if (!ready.current) draw(poster)
    }

    if (reduced) return

    let cancelled = false
    const images = Array.from({ length: total }, (_, index) => {
      const image = new Image()
      image.src = `${import.meta.env.BASE_URL}assets/snap/frames/f${pad(index)}.webp`
      return image
    })
    frames.current = images

    Promise.all(
      images.map((image) => (image.decode ? image.decode().catch(() => undefined) : undefined)),
    ).then(() => {
      if (cancelled) return
      ready.current = true
      draw(images[0])
    })

    let frame = 0
    const update = () => {
      frame = 0
      const root = section.current
      if (!root) return
      const rect = root.getBoundingClientRect()
      const distance = Math.max(1, rect.height - window.innerHeight)
      const progress = Math.min(1, Math.max(0, -rect.top / distance))
      const index = Math.round(progress * (total - 1))
      const image = images[index]

      if (ready.current && image?.complete) draw(image)

      if (ticks.current) {
        ticks.current.style.transform = `scaleX(${progress})`
      }

      if (sticky.current) {
        sticky.current.style.setProperty('--flash', String(Math.max(0, 1 - Math.abs(progress - 0.5) / 0.09)))
      }

      const next = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2
      setActive((current) => (current === next ? current : next))
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()

    // Lenis smooth scroll kullanıldığında Lenis'ten de dinle
    const lenis = getLenis()
    if (lenis) {
      lenis.on('scroll', onScroll)
    } else {
      window.addEventListener('scroll', onScroll, { passive: true })
    }
    window.addEventListener('resize', onScroll)
    return () => {
      cancelled = true
      if (lenis) {
        lenis.off('scroll', onScroll)
      } else {
        window.removeEventListener('scroll', onScroll)
      }
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [reduced, total])

  return (
    <section
      className="snap"
      id="snap"
      ref={section}
      data-reduced={reduced}
      aria-labelledby="snap-title"
    >
      <div className="snap-sticky" ref={sticky}>
        <div className="container snap-inner">
          <div className="snap-copy">
            <span className="snap-kicker-pill">02 — Metodoloji ve Netlik</span>
            <h2 className="snap-title" id="snap-title">
              <span className="sr-only">Dönüşüm süreci.</span>
              {snap.phases.map((phase, index) => (
                <span className="snap-word" data-active={active === index} aria-hidden="true" key={phase.word}>
                  {phase.word}
                </span>
              ))}
            </h2>
            <p className="snap-line" key={active}>
              {snap.phases[active].line}
            </p>
          </div>

          <div className="snap-stage">
            <div className="snap-media">
              <canvas
                ref={canvas}
                width={720}
                height={405}
                role="img"
                aria-label="Dönüşüm animasyonu görseli"
              />
              <span className="snap-flash" aria-hidden="true" />
              <span className="snap-vignette" aria-hidden="true" />
            </div>
          </div>

          <div className="snap-foot">
            <span>Aşama İlerlemesi</span>
            <span className="snap-ticks" aria-hidden="true">
              <span ref={ticks} />
            </span>
            <span className="snap-count">
              {pad(active + 1)} / {pad(snap.phases.length)}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
