import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Snap from './components/Snap'
import Story from './components/Story'
import Proof from './components/Proof'
import Curriculum from './components/Curriculum'
import Sponsor from './components/Sponsor'
import Fit from './components/Fit'
import Testimonials from './components/Testimonials'
import Channel from './components/Channel'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Closing from './components/Closing'
import Footer from './components/Footer'
import { MobileCta, ScrollProgress } from './components/Chrome'
import { destroySmoothScroll, initSmoothScroll, prefersReducedMotion } from './lib/smooth'

export default function App() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    initSmoothScroll()
    const scope = root.current
    if (!scope) return
    let context: ReturnType<typeof gsap.context> | undefined

    if (!prefersReducedMotion()) {
      context = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.nav-inner > *', { autoAlpha: 0, y: -8, duration: 0.5, stagger: 0.06 }, 0)
          .from('.hero-badge-pill', { autoAlpha: 0, y: 8, duration: 0.5 }, 0.05)
          .from('.hero-portrait-spotlight', { autoAlpha: 0, scale: 0.96, duration: 0.85, ease: 'power2.out' }, 0.1)
          .from(
            '.hero-title .mask-line > span',
            { yPercent: 112, duration: 0.85, stagger: 0.07, ease: 'power4.out' },
            0.18,
          )
          .from(
            '.hero-lead, .hero-cta, .hero-micro, .hero-stats, .hero-scroll',
            { autoAlpha: 0, y: 10, duration: 0.55, stagger: 0.05 },
            0.48,
          )
      }, scope)
    }

    return () => {
      context?.revert()
      destroySmoothScroll()
    }
  }, [])

  return (
    <div ref={root} className="app-root">
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <ScrollProgress />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Snap />
        <Story />
        <Proof />
        <Curriculum />
        <Sponsor />
        <Fit />
        <Testimonials />
        <Channel />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <MobileCta />
    </div>
  )
}
