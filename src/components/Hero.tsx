import type { MouseEvent } from 'react'
import { hero, links, price } from '../content'
import { scrollToId } from '../lib/smooth'
import { ArrowRight, Play } from './Icons'

export default function Hero() {
  const go = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    scrollToId('#snap')
  }

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-portrait-spotlight" aria-hidden="true">
          <div className="spotlight-soft-aura" />
          <div className="spotlight-rings">
            <span className="ring ring-outer" />
            <span className="ring ring-inner" />
          </div>
          <div className="spotlight-img-wrap">
            <img
              src={`${import.meta.env.BASE_URL}assets/portrait/yusuf-cutout.png`}
              alt="Yusuf İpek"
              className="spotlight-avatar"
              width={380}
              height={380}
              loading="eager"
            />
            <div className="spotlight-fade-bottom" />
          </div>
        </div>

        <h1 className="hero-title">
          {hero.lines.map((line, index) => {
            const last = index === hero.lines.length - 1
            return (
              <span className="mask-line" key={line}>
                <span>
                  {last ? line.replace(/\.$/, '') : line}
                  {last ? <span className="dot">.</span> : null}
                </span>
              </span>
            )
          })}
        </h1>

        <p className="hero-lead">{hero.lead}</p>

        <div className="hero-cta">
          <a className="btn btn-primary btn-pill" href={links.join}>
            Kursa katıl · {price.amount} {price.currency}
            <ArrowRight size={15} />
          </a>
          <a className="btn btn-ghost btn-pill" href={links.freeLesson}>
            <Play size={11} />
            İlk dersi ücretsiz izle
          </a>
        </div>

        <p className="hero-micro">{hero.micro}</p>

        <div className="hero-stats" aria-label="Kanal ve deneyim">
          {hero.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <a className="hero-scroll" href="#snap" onClick={go} aria-label="Aşağı kaydır">
          <span className="hero-scroll-line" aria-hidden="true" />
          İncele
        </a>
      </div>
    </section>
  )
}
