import { testimonials } from '../content'
import { useReveal } from '../lib/useReveal'

export default function Testimonials() {
  const headRef = useReveal<HTMLDivElement>(0.1)
  const gridRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section className="section" id="yorumlar" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <h2 className="section-title" id="testimonials-title">
            Kursu alanlar.
          </h2>
          <p className="lead">
            Dört öğrenci, dört farklı deneyim. Hepsi kursu bitirdikten sonra yazdı.
          </p>
        </div>

        <div className="reviews stagger" ref={gridRef}>
          {testimonials.map((item) => (
            <figure className="review reveal" key={item.name}>
              <blockquote className="review-text">{item.quote}</blockquote>
              <figcaption className="review-person">
                <span className="review-name">{item.name}</span>
                <span className="review-meta">Kurs öğrencisi</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
