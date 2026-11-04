import { links, price } from '../content'
import { Mail, Youtube } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <a className="wordmark" href="#top">
            <span className="wordmark-dot" aria-hidden="true" />
            <span>Yusuf İpek</span>
            <span className="wordmark-sub">Meta Class</span>
          </a>
          <p>
            YouTube'da içerik üretmek, izlenmek ve bunu sürdürülebilir bir işe dönüştürmek
            üzerine 48 ders.
          </p>
          <div className="footer-social">
            <a href={links.youtube} aria-label="YouTube kanalı" target="_blank" rel="noreferrer">
              <Youtube size={17} />
            </a>
            <a href={links.contact} aria-label="E-posta ile iletişim">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <h4>Kurs</h4>
            <ul>
              <li>
                <a href="#icerik">İçerik</a>
              </li>
              <li>
                <a href="#kurs">Fiyat</a>
              </li>
              <li>
                <a href="#sss">SSS</a>
              </li>
              <li>
                <a href={links.freeLesson}>İlk ders</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hesap</h4>
            <ul>
              <li>
                <a href={links.login}>Giriş yap</a>
              </li>
              <li>
                <a href={links.join}>Kursa katıl</a>
              </li>
              <li>
                <a href={links.videos} target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href={links.contact}>İletişim</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Yasal</h4>
            <ul>
              <li>
                <a href={links.privacy}>Gizlilik Politikası</a>
              </li>
              <li>
                <a href={links.terms}>Hizmet Şartları</a>
              </li>
              <li>
                <a href={links.distance}>Mesafeli Satış</a>
              </li>
              <li>
                <a href={links.refund}>İade Politikası</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Yusuf İpek. Tüm hakları saklıdır.</p>
          <p>
            Tek seferlik ödeme · {price.amount} {price.currency} · Ömür boyu erişim
          </p>
        </div>
      </div>
    </footer>
  )
}
