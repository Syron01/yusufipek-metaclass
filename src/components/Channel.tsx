import { useEffect, useState } from 'react'
import { channel, links } from '../content'
import { lockScroll } from '../lib/smooth'
import { Close, Play, Youtube } from './Icons'

type Video = (typeof channel.videos)[number]

export default function Channel() {
  const [active, setActive] = useState<Video | null>(null)

  useEffect(() => {
    if (!active) return
    lockScroll(true)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      lockScroll(false)
    }
  }, [active])

  return (
    <section className="section channel" id="kanal" aria-labelledby="channel-title">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="channel-title">
            {channel.title}
          </h2>
          <p className="lead">{channel.body}</p>

          <div className="channel-stats">
            {channel.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>

          <div className="channel-actions">
            <a className="btn btn-ghost btn-sm" href={links.youtube} target="_blank" rel="noreferrer">
              <Youtube size={15} />
              {channel.handle}
            </a>
            <a className="link-arrow" href={links.videos} target="_blank" rel="noreferrer">
              Tüm videolar
            </a>
          </div>
        </div>

        <div className="video-grid">
          {channel.videos.map((video) => (
            <button
              type="button"
              className="video-card"
              key={video.id}
              onClick={() => setActive(video)}
              aria-label={`${video.title} videosunu oynat`}
            >
              <span className="video-thumb">
                <img src={video.thumb} alt="" width={1280} height={720} loading="lazy" />
                <span className="video-play">
                  <Play size={13} />
                </span>
              </span>
              <span className="video-meta">
                <span className="video-title">{video.title}</span>
                <span className="video-date">{video.date}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="lightbox"
        data-open={active !== null}
        role="dialog"
        aria-modal="true"
        aria-label={active ? active.title : 'Video oynatıcı'}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null)
        }}
      >
        <div className="lightbox-frame">
          {active ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </div>
        <button type="button" className="lightbox-close" aria-label="Videoyu kapat" onClick={() => setActive(null)}>
          <Close size={16} />
        </button>
      </div>
    </section>
  )
}
