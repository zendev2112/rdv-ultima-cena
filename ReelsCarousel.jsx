import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const ReelsCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const reels = [
    {
      id: 1,
      url: 'https://www.instagram.com/reel/DS3AG1WDLa_/',
      iframeUrl: 'https://www.instagram.com/reel/DS3AG1WDLa_/embed/',
      title: 'La Última Cena - Episodio 1',
    },
    {
      id: 2,
      url: 'https://www.instagram.com/reel/DScxfV_jIZk/',
      iframeUrl: 'https://www.instagram.com/reel/DScxfV_jIZk/embed/',
      title: 'La Última Cena - Episodio 2',
    },
    {
      id: 3,
      url: 'https://www.instagram.com/reel/DOrj59VDEZC/',
      iframeUrl: 'https://www.instagram.com/reel/DOrj59VDEZC/embed/',
      title: 'La Última Cena - Episodio 3',
    },
    {
      id: 4,
      url: 'https://www.instagram.com/reel/DQxO8REDNLo/',
      iframeUrl: 'https://www.instagram.com/reel/DQxO8REDNLo/embed/',
      title: 'La Última Cena - Episodio 4',
    },
  ]

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      paginate(1)
    }, 6000)
    return () => clearInterval(interval)
  }, [autoPlay, current])

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + reels.length) % reels.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
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

        <div className="carousel-wrapper">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              drag="x"
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x
                if (swipe < -10000) {
                  paginate(1)
                  setAutoPlay(false)
                } else if (swipe > 10000) {
                  paginate(-1)
                  setAutoPlay(false)
                }
              }}
              className="carousel-slide"
            >
              <div className="reel-embed">
                <iframe
                  src={reels[current].iframeUrl}
                  className="carousel-iframe"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            className="carousel-button prev"
            onClick={() => {
              paginate(-1)
              setAutoPlay(false)
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
          </motion.button>

          <motion.button
            className="carousel-button next"
            onClick={() => {
              paginate(1)
              setAutoPlay(false)
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          <div className="carousel-dots">
            {reels.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => {
                  setCurrent(index)
                  setAutoPlay(false)
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReelsCarousel
