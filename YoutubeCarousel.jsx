import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const YoutubeCarousel = () => {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) paginate(1)
    else if (diff < -50) paginate(-1)
    touchStartX.current = null
  }

  const videos = [
    {
      id: 1,
      videoId: 'bfqDGYovMaY',
      title: 'La Última Cena - Video 1',
      embedUrl: 'https://www.youtube.com/embed/bfqDGYovMaY',
    },
    {
      id: 2,
      videoId: '-i9lJHQphX4',
      title: 'La Última Cena - Video 2',
      embedUrl: 'https://www.youtube.com/embed/-i9lJHQphX4',
    },
    {
      id: 3,
      videoId: 'iPUmF2EB8W8',
      title: 'La Última Cena - Video 3',
      embedUrl: 'https://www.youtube.com/embed/iPUmF2EB8W8',
    },
    {
      id: 4,
      videoId: '160MOdrbZ-M',
      title: 'La Última Cena - Video 4',
      embedUrl: 'https://www.youtube.com/embed/160MOdrbZ-M',
    },
  ]

  const paginate = (dir) => {
    setCurrent((c) => (c + dir + videos.length) % videos.length)
  }

  return (
    <section className="section youtube-carousel">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            La Última <span className="gradient-text">Cena</span> en Video
          </h2>
          <p>Episodios completos en YouTube</p>
        </motion.div>

        {/* All iframes rendered at once — no reload on navigation */}
        <div
          className="carousel-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {videos.map((video, i) => {
            const offset =
              (((i - current) % videos.length) + videos.length) % videos.length
            const isCurrent = offset === 0
            const isNext = offset === 1
            const isPrev = offset === videos.length - 1
            const isVisible = isCurrent || isNext || isPrev

            return (
              <div
                key={video.id}
                className={`video-slot${isCurrent ? ' video-center' : ' video-side'}`}
                style={{
                  display: !isVisible ? 'none' : undefined,
                  order: isPrev ? 0 : isCurrent ? 1 : 2,
                  cursor: !isCurrent ? 'pointer' : 'default',
                }}
                onClick={
                  !isCurrent ? () => paginate(isNext ? 1 : -1) : undefined
                }
              >
                <iframe
                  src={video.embedUrl}
                  className="carousel-iframe"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
                {/* Overlay on side videos to intercept clicks cleanly */}
                {!isCurrent && <div className="video-overlay" />}
              </div>
            )
          })}
        </div>

        <div className="carousel-controls">
          <motion.button
            className="carousel-button"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={26} style={{ transform: 'rotate(180deg)' }} />
          </motion.button>

          <div className="carousel-dots">
            {videos.map((_, i) => (
              <motion.button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            className="carousel-button"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={26} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default YoutubeCarousel
