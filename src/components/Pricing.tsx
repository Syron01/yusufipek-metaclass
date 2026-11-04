import { links, price, pricing } from '../content'
import { ArrowRight, Check } from './Icons'
import { useReveal } from '../lib/useReveal'

export default function Pricing() {
  const headRef = useReveal<HTMLDivElement>(0.1)
  const cardRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section className="section pricing" id="kurs" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <h2 className="section-title" id="pricing-title">
            {pricing.title}
          </h2>
          <p className="lead">{pricing.intro}</p>
        </div>

        <div className="pricing-card reveal-scale" ref={cardRef}>
          <div className="pricing-top">
            <p className="pricing-kicker">Kursun tamamı</p>
            <p className="pricing-price">
              {price.amount}
              <span className="currency">{price.currency}</span>
            </p>
            <p className="pricing-price-note">Abonelik yok. Bir kez öde, ömür boyu eriş.</p>
            <p className="pricing-installment">
              Taksit seçenekleri: ayda sadece <strong>{price.installment} ₺</strong>. Ödeme
              adımında seçebilirsiniz.
            </p>
          </div>

          <ul className="pricing-features stagger">
            {pricing.features.map((feature) => (
              <li className="reveal" key={feature}>
                <Check size={13} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pricing-cta">
            <a className="btn btn-primary" href={links.join}>
              Kursa katıl
              <ArrowRight size={15} />
            </a>
          </div>

          <p className="pricing-trust">
            {pricing.note} Tek seferlik ödeme. Erişim ödeme sonrası anında tanımlanır. Ömür
            boyu açık kalır.
          </p>

          <p className="pricing-legal">
            Satın alarak <a href={links.terms}>Hizmet Şartları</a>,{' '}
            <a href={links.distance}>Mesafeli Satış Sözleşmesi</a>,{' '}
            <a href={links.privacy}>Gizlilik Politikası</a> ve{' '}
            <a href={links.refund}>İade Politikası</a>&apos;nı kabul etmiş olursunuz.
          </p>
        </div>
      </div>
    </section>
  )
}
