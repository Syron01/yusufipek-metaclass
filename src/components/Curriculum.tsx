import { useEffect, useState } from 'react'
import { links, modules, price } from '../content'
import { scrollToId } from '../lib/smooth'
import { useReveal } from '../lib/useReveal'
import { ArrowRight, Play, Plus } from './Icons'

const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0)

export default function Curriculum() {
  const [openModule, setOpenModule] = useState<string | null>(null)
  const headRef = useReveal<HTMLDivElement>(0.1)
  const metaRef = useReveal<HTMLDivElement>(0.1)
  const modulesRef = useReveal<HTMLDivElement>(0.05)

  useEffect(() => {
    const onOpen = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail
      setOpenModule(detail)
      window.setTimeout(() => scrollToId(`#modul-${detail}`), 260)
    }
    window.addEventListener('open-module', onOpen)
    return () => window.removeEventListener('open-module', onOpen)
  }, [])

  return (
    <section className="section curriculum" id="icerik" aria-labelledby="curriculum-title">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <h2 className="section-title" id="curriculum-title">
            8 modül, 48 ders.
          </h2>
          <p className="lead">
            Fikir bulmaktan videoyu yayınlamaya, verileri okumaktan sponsor görüşmesine kadar
            kanalın bütün işleyişi. Sırayla izleyin ya da ihtiyacınız olan derse gidin.
          </p>
        </div>

        <div className="curriculum-meta reveal stagger" ref={metaRef}>
          <span className="reveal">
            <strong>{modules.length}</strong> modül
          </span>
          <span className="reveal">
            <strong>{totalLessons}</strong> ders
          </span>
          <span className="reveal">
            <strong>9</strong> sponsorluk dersi
          </span>
          <span className="reveal">
            <strong>{price.amount} {price.currency}</strong> tek ödeme
          </span>
        </div>

        <div className="modules stagger" ref={modulesRef}>
          {modules.map((module) => {
            const isOpen = openModule === module.no
            return (
              <div
                className="module reveal"
                key={module.no}
                id={`modul-${module.no}`}
                data-open={isOpen}
                data-featured={module.featured ? 'true' : undefined}
              >
                <button
                  type="button"
                  className="module-head"
                  aria-expanded={isOpen}
                  aria-controls={`modul-panel-${module.no}`}
                  onClick={() => setOpenModule(isOpen ? null : module.no)}
                >
                  <span className="module-no">{module.no.padStart(2, '0')}</span>
                  <span className="module-title-wrap">
                    <span className="module-title">{module.title}</span>
                    {module.featured ? (
                      <span className="module-badge">Sponsorluk bölümü · 9 ders</span>
                    ) : null}
                  </span>
                  <span className="module-side">
                    <span className="module-count">{module.lessons.length} ders</span>
                    <span className="module-icon" aria-hidden="true">
                      <Plus size={14} />
                    </span>
                  </span>
                </button>

                <div className="module-panel" id={`modul-panel-${module.no}`}>
                  <div className="module-panel-inner">
                    <ol className="lessons">
                      {module.lessons.map((lesson, index) => (
                        <li className="lesson" key={lesson}>
                          <span className="lesson-no">{String(index + 1).padStart(2, '0')}</span>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="curriculum-foot reveal">
          <a className="btn btn-ghost" href={links.freeLesson}>
            <Play size={12} />
            İlk dersi ücretsiz izle
          </a>
          <a className="link-arrow" href={links.join}>
            48 dersin tamamına eriş
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
