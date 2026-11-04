import { links, price } from '../content'
import { ArrowRight, Play } from './Icons'

export default function Closing() {
  return (
    <section className="closing" id="katil" aria-labelledby="closing-title">
      <div className="container closing-inner">
        <h2 className="closing-title" id="closing-title">
          İlk dersi izleyin.
        </h2>
        <p>
          Nasıl bir çalışma sürecine gireceğinizi ücretsiz derste görün. Devam etmek
          isterseniz bütün derslere ödeme sonrası hemen erişin, kendi hızınızda ilerleyin.
        </p>

        <div className="closing-cta">
          <a className="btn btn-primary" href={links.join}>
            Kursa katıl · {price.amount} {price.currency}
            <ArrowRight size={15} />
          </a>
          <a className="btn btn-ghost" href={links.freeLesson}>
            <Play size={11} />
            Ücretsiz ilk ders
          </a>
        </div>

        <p className="closing-note">Önce izleyin. Sonra karar verin.</p>
      </div>
    </section>
  )
}
