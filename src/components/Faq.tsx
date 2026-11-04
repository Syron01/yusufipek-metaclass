import { useState } from 'react'
import { faq, links } from '../content'
import { Mail, Plus } from './Icons'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section" id="sss" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="faq-title">
            {faq.title}
          </h2>
          <p className="lead">
            Aradığınız cevabı bulamadıysanız yazın. Kursla ilgili her soruya kendim dönüyorum.
          </p>
          <a className="faq-contact" href={links.contact}>
            <Mail size={14} />
            İletişime geç
          </a>
        </div>

        <div className="faq-wrap">
          <div className="faq-list">
            {faq.items.map((item, index) => {
              const isOpen = open === index
              return (
                <div className="faq-item" key={item.q} data-open={isOpen}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="faq-no">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <Plus size={13} />
                    </span>
                  </button>
                  <div className="faq-a" id={`faq-panel-${index}`}>
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
