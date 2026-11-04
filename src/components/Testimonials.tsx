import { testimonials } from '../content'

export default function Testimonials() {
  return (
    <section className="section" id="yorumlar" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="testimonials-title">
            Kursu alanlar.
          </h2>
          <p className="lead">
            Dört öğrenci, dört farklı deneyim. Hepsi kursu bitirdikten sonra yazdı.
          </p>
        </div>

        <div className="reviews">
          {testimonials.map((item) => (
            <figure className="review" key={item.name}>
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
