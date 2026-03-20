import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const ReelsCarousel = () => {
  const [current, setCurrent] = useState(0)

  const reels = [
    {
      id: 1,
      iframeUrl: 'https://www.instagram.com/reel/DS3AG1WDLa_/embed/',
      title: 'La Última Cena - Episodio 1',
    },
    {
      id: 2,
      iframeUrl: 'https://www.instagram.com/reel/DScxfV_jIZk/embed/',
      title: 'La Última Cena - Episodio 2',
    },
    {
      id: 3,
      iframeUrl: 'https://www.instagram.com/reel/DOrj59VDEZC/embed/',
      title: 'La Última Cena - Episodio 3',
    },
    {
      id: 4,
      iframeUrl: 'https://www.instagram.com/reel/DQxO8REDNLo/embed/',
      title: 'La Última Cena - Episodio 4',
    },
  ]

  const paginate = (dir) => {
    setCurrent((c) => (c + dir + reels.length) % reels.length)
  }

  return (
    <section className="section reels-carousel">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            La Última <span className="gradient-text">Cena</span> en Reels
          </h2>
          <p>Los mejores momentos de nuestro programa en Instagram</p>
        </motion.div>

        {/* All iframes rendered at once — no reload on navigation */}
        <motion.div
          className="carousel-stage"
          drag="x"
          dragElastic={0}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            if (offset.x < -60) paginate(1)
            else if (offset.x > 60) paginate(-1)
          }}
        >
          {reels.map((reel, i) => {
            const offset =
              (((i - current) % reels.length) + reels.length) % reels.length
            const isCurrent = offset === 0
            const isNext = offset === 1
            const isPrev = offset === reels.length - 1
            const isVisible = isCurrent || isNext || isPrev

            return (
              <div
                key={reel.id}
                className={`reel-slot${isCurrent ? ' reel-center' : ' reel-side'}`}
                style={{
                  display: isVisible ? 'flex' : 'none',
                  order: isPrev ? 0 : isCurrent ? 1 : 2,
                  cursor: !isCurrent ? 'pointer' : 'default',
                }}
                onClick={
                  !isCurrent ? () => paginate(isNext ? 1 : -1) : undefined
                }
              >
                <iframe
                  src={reel.iframeUrl}
                  className="carousel-iframe"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                />
                {/* Overlay on side reels to intercept clicks cleanly */}
                {!isCurrent && <div className="reel-overlay" />}
              </div>
            )
          })}
        </motion.div>

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
            {reels.map((_, i) => (
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

export default ReelsCarousel
