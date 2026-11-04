import { fit, links } from '../content'
import { Check, Close } from './Icons'
import { useReveal } from '../lib/useReveal'

export default function Fit() {
  const headRef = useReveal<HTMLDivElement>(0.1)
  const gridRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section className="section" id="kime-gore" aria-labelledby="fit-title">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <h2 className="section-title" id="fit-title">
            Kime göre?
          </h2>
          <p className="lead">
            Bir kursu satın almadan önce, size uygun olmadığını bilmek de değerlidir. İki
            listeye de bakın; kararı acele etmeden verin.
          </p>
        </div>

        <div className="fit-grid reveal" ref={gridRef}>
          <div className="fit-col fit-col--yes">
            <p className="fit-label yes">Bu kurs size göre</p>
            <h3>Zaten üretiyorsanız ve bir sonraki adımı arıyorsanız.</h3>
            <ul className="fit-list yes stagger">
              {fit.yes.map((item) => (
                <li className="reveal" key={item}>
                  <Check size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fit-col fit-col--no">
            <p className="fit-label no">Bu kursu almayın</p>
            <h3>Kısa yol, otomasyon ya da hızlı para arıyorsanız.</h3>
            <ul className="fit-list no stagger">
              {fit.no.map((item) => (
                <li className="reveal" key={item}>
                  <Close size={13} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fit-foot reveal delay-2">
          <p>Emin değilseniz karar vermeden önce ilk dersi izleyin. Ücretsiz.</p>
          <a className="link-arrow" href={links.freeLesson}>
            İlk dersi izle
          </a>
        </div>
      </div>
    </section>
  )
}
