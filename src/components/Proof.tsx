import { proof } from '../content'

const formatter = new Intl.NumberFormat('tr-TR')

export default function Proof() {
  return (
    <section className="proof" aria-label="Deneyim rakamları">
      <div className="container">
        <div className="proof-grid">
          {proof.map((item) => (
            <div className="proof-cell" key={item.label}>
              <p className="proof-value">
                {formatter.format(item.count)}
                {item.suffix === '+' ? <span className="plus">+</span> : null}
              </p>
              <p className="proof-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
