import { useEffect, useRef } from 'react'
import { story } from '../content'
import { prefersReducedMotion } from '../lib/smooth'

export default function Story() {
  const section = useRef<HTMLElement>(null)
  const fill = useRef<HTMLSpanElement>(null)
  const words = story.quote.split(' ')

  useEffect(() => {
    if (prefersReducedMotion()) return
    const root = section.current
    if (!root) return
    const spans = Array.from(root.querySelectorAll<HTMLElement>('.story-quote .word'))
    let frame = 0

    const update = () => {
      frame = 0
      const rect = root.getBoundingClientRect()
      const distance = Math.max(1, rect.height - window.innerHeight)
      const progress = Math.min(1, Math.max(0, -rect.top / distance))
      const lit = Math.min(1, Math.max(0, (progress - 0.04) / 0.8))

      spans.forEach((span, index) => {
        const local = Math.min(1, Math.max(0, lit * spans.length - index))
        span.style.opacity = String(0.16 + 0.84 * local)
      })

      if (fill.current) {
        fill.current.style.transform = `scaleX(${progress})`
      }
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

  return (
    <>
      <section className="story" ref={section} aria-labelledby="story-heading">
        <div className="story-sticky">
          <div className="container story-inner">
            <div className="story-portrait">
              <img
                src={`${import.meta.env.BASE_URL}assets/portrait/yusuf-avatar.webp`}
                alt="Yusuf İpek"
                width={64}
                height={64}
                loading="lazy"
              />
            </div>
            <p className="story-label">Yusuf İpek · Kişisel Yolculuk</p>

            <h2 id="story-heading" className="sr-only">
              Bu kursun arkasındaki deneyim
            </h2>

            <blockquote className="story-quote">
              {words.map((word, index) => (
                <span className="word" key={`${index}-${word}`}>
                  {word}
                </span>
              ))}
            </blockquote>

            <div className="story-sign">
              <span>{story.signature}</span>
              <span>{story.role}</span>
            </div>

            <div className="story-progress" aria-hidden="true">
              <span ref={fill} />
            </div>
          </div>
        </div>
      </section>

      <section className="section story-notes" aria-labelledby="story-notes-title">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title" id="story-notes-title">
              Bu kursta anlattıklarımın çoğu, ödediğim bedelin karşılığı.
            </h2>
            <p className="lead">İki şeyi baştan söyleyeyim.</p>
          </div>

          <div className="story-notes-grid">
            {story.notes.map((note) => (
              <article className="story-note" key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
