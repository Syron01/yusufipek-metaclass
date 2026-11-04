import { modules, sponsor } from '../content'
import { ArrowRight } from './Icons'
import { useReveal } from '../lib/useReveal'

const featured = modules.find((module) => module.featured)

export default function Sponsor() {
  const panelRef = useReveal<HTMLDivElement>(0.1)

  const openSponsorModule = () => {
    window.dispatchEvent(new CustomEvent('open-module', { detail: '5' }))
  }

  return (
    <section className="section sponsor" id="sponsorluk" aria-labelledby="sponsor-title">
      <div className="container">
        <div className="sponsor-panel reveal-scale" ref={panelRef}>
          <span className="sponsor-glow" aria-hidden="true" />

          <div className="section-head">
            <p className="sponsor-kicker">
              <span>09</span> ders · yalnızca sponsorluk
            </p>
            <h2 className="section-title" id="sponsor-title">
              {sponsor.title}
            </h2>
            <p className="lead sponsor-body">{sponsor.body}</p>
          </div>

          <div className="sponsor-lessons stagger">
            {featured?.lessons.map((lesson, index) => (
              <p className="sponsor-lesson reveal" key={lesson}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {lesson}
              </p>
            ))}
          </div>

          <div className="sponsor-cta">
            <button type="button" className="btn btn-primary" onClick={openSponsorModule}>
              {sponsor.cta}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
