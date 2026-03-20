import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Youtube,
  Instagram,
  Tv,
  MapPin,
  PlayCircle,
  MessageSquare,
  ChevronRight,
  Star,
  Smartphone,
  Share2,
  Clock,
  BarChart3,
  Menu,
  X,
} from 'lucide-react'
import ReelsCarousel from './ReelsCarousel'
import YoutubeCarousel from './YoutubeCarousel'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setVisible(y < lastY.current || y < 60)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const features = [
    {
      title: 'Exposición prolongada',
      desc: 'Cada programa genera cientos de horas de visualización real.',
      icon: <Clock size={24} />,
    },
    {
      title: 'Pantalla grande',
      desc: 'El mayor tiempo de consumo ocurre en televisores, con un promedio de 30 minutos.',
      icon: <Tv size={24} />,
    },
    {
      title: 'Alcance en redes',
      desc: 'Los reels superan las 20.000 visualizaciones promedio.',
      icon: <Smartphone size={24} />,
    },
    {
      title: 'Circulación social',
      desc: 'Los contenidos se comparten activamente dentro de la comunidad (100 por reel).',
      icon: <Share2 size={24} />,
    },
    {
      title: 'Contexto local',
      desc: 'Historias e invitados que pertenecen a Coronel Suárez y la región.',
      icon: <MapPin size={24} />,
    },
  ]

  const packages = [
    {
      title: 'Sponsor del programa',
      tag: 'Presencia Institucional',
      description: 'Mención de agradecimiento en cada emisión del programa.',
      icon: <Star size={32} />,
    },
    {
      title: 'PNT integrado',
      tag: 'Orgánico',
      description:
        'Mención comercial natural dentro de la conversación de la mesa.',
      icon: <MessageSquare size={32} />,
    },
    {
      title: 'Presencia de marca en mesa',
      tag: 'Visual',
      description:
        'Productos o elementos de tu marca visibles durante todo el programa.',
      icon: <Tv size={32} />,
    },
    {
      title: 'Contenido especial con figuras',
      tag: 'Redes Sociales',
      description:
        'Piezas producidas específicamente para redes sociales con las figuras del programa.',
      highlight: true,
      icon: <PlayCircle size={32} />,
    },
  ]

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; color: white; overflow-x: hidden; }

        .App {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section { padding: 100px 0; }

        .gradient-text {
          background: linear-gradient(135deg, #FF0000, #FF6B35, #FFB700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientAnim 3s ease infinite;
        }

        @keyframes gradientAnim {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .glass-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-5px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #FF0000, #FF6B35);
          border: none;
          padding: 15px 30px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255,0,0,0.3);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.3);
          padding: 15px 30px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          will-change: transform;
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 20px;
          gap: 40px;
        }
        .header-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .header-logo {
          width: 56px;
          height: 56px;
        }
        .desktop-nav {
          display: flex;
          gap: 40px;
          align-items: center;
        }
        .header-nav a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }
        .header-nav a:hover { color: #FF0000; }
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          transition: color 0.3s ease;
        }
        .mobile-menu-toggle:hover { color: #FF0000; }
        .mobile-nav {
          display: none;
          flex-direction: column;
          gap: 15px;
          padding: 20px;
          background: rgba(26,26,26,0.98);
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .mobile-nav a {
          padding: 12px 0;
          display: block;
          text-align: center;
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255,0,0,0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255,107,53,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
          width: 100%;
        }
        .hero-content {
          text-align: left;
          z-index: 2;
          position: relative;
          padding-bottom: 175px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 10px 20px;
          border-radius: 50px;
          margin-bottom: 30px;
          font-size: 14px;
          font-weight: 500;
        }
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-top: 60px;
          margin-bottom: 30px;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 40px;
          line-height: 1.6;
        }
        .hero-description {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 40px;
          line-height: 1.7;
          max-width: 650px;
        }
        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 60px;
          z-index: 1;
        }
        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(0,0,0,0.4);
          box-shadow: 0 0 60px rgba(255,0,0,0.1);
        }
        .video-wrapper video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0) 85%);
          mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0) 85%);
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .section-header h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .section-header p {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.7);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(255,0,0,0.3);
        }
        .stat-card-bg-icon {
          position: absolute;
          top: 0;
          right: 0;
          padding: 30px;
          opacity: 0.03;
        }
        .stat-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .stat-card-header svg {
          color: #FF0000;
        }
        .stat-card-header h3 {
          font-size: 1.3rem;
          font-weight: 800;
        }
        .stat-big {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 12px;
        }
        .stat-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }
        .stat-highlight-box {
          background: rgba(255,0,0,0.05);
          border: 1px solid rgba(255,0,0,0.15);
          border-radius: 16px;
          padding: 20px;
          margin-top: 20px;
        }
        .stat-highlight-box h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .stat-highlight-box p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }

        /* Content + Features */
        .content-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .content-quote {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 24px;
          margin-top: 30px;
          position: relative;
        }
        .content-quote p {
          font-style: italic;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }
        .feature-item {
          display: flex;
          gap: 16px;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          margin-bottom: 8px;
        }
        .feature-item:hover {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.05);
        }
        .feature-icon {
          width: 48px;
          height: 48px;
          background: rgba(255,0,0,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF0000;
          flex-shrink: 0;
        }
        .feature-item h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .feature-item p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
        }

        /* Packages Grid */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .package-card {
          text-align: center;
          position: relative;
        }
        .package-card.popular {
          border-color: #FF0000;
          background: rgba(255,0,0,0.05);
        }
        .package-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FF0000, #FF6B35);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
        }
        .package-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .package-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 15px;
        }
        .package-tag.highlight {
          background: rgba(255,0,0,0.15);
          color: #FF0000;
        }
        .package-tag.default {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
        }
        .package-desc {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Footer */
        .footer {
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 100px 0 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .footer-gradient-line {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #FF0000, transparent);
          opacity: 0.5;
        }
        .footer-logo {
          width: 64px;
          height: 64px;
          margin: 0 auto 30px;
        }
        .footer h2 {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .footer p {
          color: rgba(255,255,255,0.6);
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        .footer-social {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
        }
        .footer-social a {
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }
        .footer-social a:hover {
          background: #FF0000;
          transform: scale(1.1);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 30px;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }
        .footer-bottom a {
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .footer-bottom a:hover { color: rgba(255,255,255,0.7); }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .container { padding: 0 48px; }
          .header-container { padding: 1rem 48px; gap: 20px; }
          .section { padding: 80px 0; }
          .desktop-nav { display: none; }
          .mobile-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-nav { display: flex; }
          .hero { min-height: auto; padding-top: 110px; padding-bottom: 40px; }
          .hero-layout { grid-template-columns: 1fr; gap: 40px; }
          .hero-content { padding-bottom: 0; text-align: left; order: 1; }
          .hero-visual { order: 2; padding-top: 0; }
          .video-wrapper { aspect-ratio: 16/9; }
          .hero-title { font-size: 2.2rem; margin-top: 0; }
          .hero-subtitle { font-size: 1rem; }
          .hero-buttons { justify-content: flex-start; gap: 15px; }
          .section-header h2 { font-size: 2rem; }
          .section-header p { font-size: 1rem; }
          .section-header { margin-bottom: 50px; }
          .stats-grid { grid-template-columns: 1fr; }
          .content-layout { grid-template-columns: 1fr; gap: 40px; }
          .packages-grid { grid-template-columns: 1fr; gap: 20px; }
          .footer-bottom { flex-direction: column; gap: 15px; text-align: center; }
        }

        @media (max-width: 480px) {
          .container { padding: 0 40px; }
          .header-container { padding: 1rem 40px; }
          .header-brand { gap: 10px; }
          .header-logo { width: 36px; height: 36px; }
          .mobile-menu-toggle { padding: 6px; }
          .mobile-nav { padding: 15px; gap: 12px; }
          .mobile-nav a { padding: 10px 0; font-size: 0.9rem; }
          .section { padding: 60px 0; }
          .hero { padding-top: 100px; padding-bottom: 30px; }
          .hero-layout { gap: 30px; }
          .hero-title { font-size: 1.75rem; line-height: 1.2; margin-bottom: 20px; margin-top: 0; }
          .hero-subtitle { font-size: 0.9rem; margin-bottom: 15px; }
          .hero-description { font-size: 0.9rem; margin-bottom: 25px; }
          .hero-buttons { flex-direction: column; align-items: stretch; gap: 12px; }
          .btn-primary, .btn-secondary { padding: 13px 25px; font-size: 15px; justify-content: center; }
          .section-header { margin-bottom: 35px; }
          .section-header h2 { font-size: 1.6rem; margin-bottom: 10px; }
          .section-header p { font-size: 0.9rem; }
          .glass-card { padding: 20px; border-radius: 16px; }
          .stat-big { font-size: 2rem; }
          .stat-card { padding: 20px; }
          .feature-item { padding: 12px; }
          .feature-icon { width: 40px; height: 40px; }
          .package-icon { width: 50px; height: 50px; }
          .package-card h3 { font-size: 1.2rem; }
          .footer { padding: 60px 0 30px; }
          .footer h2 { font-size: 1.4rem; }
        }

        /* Carousel Styles */
        .carousel-stage {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 28px;
          overflow: hidden;
          width: 100%;
        }
        .reel-slot {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .reel-center {
          width: 340px;
          z-index: 2;
          box-shadow: 0 0 60px rgba(255,0,0,0.2);
          border: 1px solid rgba(255,100,0,0.25);
        }
        .reel-side {
          width: 255px;
          opacity: 0.35;
          transform: scale(0.93);
        }
        .reel-side:hover {
          opacity: 0.55;
        }
        .reel-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: transparent;
        }
        .carousel-iframe {
          width: 100%;
          height: 620px;
          display: block;
        }
        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }
        .carousel-button {
          background: rgba(255,0,0,0.6);
          border: none;
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .carousel-button:hover {
          background: #FF0000;
        }
        .carousel-dots {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .carousel-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .carousel-dots .dot.active {
          background: #FF0000;
          width: 36px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .reel-side { display: none; }
          .reel-center { width: min(320px, calc(100vw - 40px)); }
          .carousel-iframe { height: 568px; }
        }
        @media (max-width: 480px) {
          .reel-center { width: min(260px, calc(100vw - 40px)); }
          .carousel-iframe { height: 462px; }
        }

        /* YouTube Carousel Styles */
        .video-slot {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .video-center {
          width: 480px;
          z-index: 2;
          box-shadow: 0 0 60px rgba(255,0,0,0.2);
          border: 1px solid rgba(255,100,0,0.25);
        }
        .video-side {
          width: 360px;
          opacity: 0.35;
          transform: scale(0.93);
        }
        .video-side:hover {
          opacity: 0.55;
        }
        .video-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: transparent;
        }
        .youtube-carousel .carousel-iframe {
          height: 270px;
        }

        @media (max-width: 768px) {
          .video-side { display: none; }
          .video-center { width: min(360px, calc(100vw - 40px)); }
          .youtube-carousel .carousel-iframe { height: 202px; }
        }
        @media (max-width: 480px) {
          .video-center { width: min(280px, calc(100vw - 40px)); }
          .youtube-carousel .carousel-iframe { height: 157px; }
        }
        }
      `}</style>

      <script async src="https://www.instagram.com/embed.js" />

      {/* ─── Header ─── */}
      <motion.header
        className="header"
        animate={{ y: visible ? 0 : '-100%', opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(26,26,26,0.98) 100%)'
            : 'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <div className="container header-container">
          <div className="header-brand">
            <img
              src="https://res.cloudinary.com/dptdloagw/image/upload/v1773229447/logo_ekjvir.svg"
              alt="Radio del Volga"
              className="header-logo"
            />
          </div>

          <nav className="header-nav desktop-nav">
            <a href="#alcance">Alcance</a>
            <a href="#atractivo">Por qué elegirnos</a>
            <a href="#comercial">Participación</a>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="header-nav mobile-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <a href="#alcance" onClick={() => setMenuOpen(false)}>
                Alcance
              </a>
              <a href="#atractivo" onClick={() => setMenuOpen(false)}>
                Por qué elegirnos
              </a>
              <a href="#comercial" onClick={() => setMenuOpen(false)}>
                Participación
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                La Última <span className="gradient-text">Cena</span>
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Historias de vecinos y proyectos de Coronel Suárez y la región,
                con un formato conversacional que permite profundizar en cada
                experiencia, generando cercanía con la comunidad y conexión con
                el público.
              </motion.p>
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a href="#alcance" className="btn-primary">
                  Conocer Métricas <BarChart3 size={20} />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="video-wrapper">
                <video
                  src="https://res.cloudinary.com/dptdloagw/video/upload/v1773768595/Dise%C3%B1o_sin_t%C3%ADtulo_3_g4ow0z.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Alcance Section ─── */}
      <section
        id="alcance"
        className="section"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>
              El impacto en <span className="gradient-text">números</span>
            </h2>
            <p>
              No medimos solo vistas, medimos atención real. Nuestro contenido
              funciona más cerca del formato televisivo que del consumo rápido
              de redes sociales.
            </p>
          </motion.div>

          <div className="stats-grid">
            {/* YouTube */}
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="stat-card-bg-icon">
                <Youtube size={200} />
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="stat-card-header">
                  <Youtube size={28} />
                  <h3>YouTube</h3>
                </div>
                <div className="stat-big">1.900</div>
                <div className="stat-label">Promedio de reproducciones</div>
                <p className="stat-desc">
                  Este número en YouTube muestra que La Última Cena mantiene un
                  público constante, interesado en historias locales y
                  conversaciones profundas.
                </p>
                <div className="stat-highlight-box">
                  <h4>Smart TV: el dispositivo con mayor tiempo de consumo</h4>
                  <p>
                    La audiencia que ve La Última Cena en Smart TV permanece más
                    tiempo frente a la pantalla, disfrutando la experiencia de
                    la televisión tradicional: pantalla grande, atención
                    sostenida y consumo concentrado. Esto ofrece un espacio de
                    exposición prolongada y altamente efectivo para la marca.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="stat-card-bg-icon">
                <Instagram size={200} />
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="stat-card-header">
                  <Instagram size={28} />
                  <h3>Instagram (Reels)</h3>
                </div>
                <div className="stat-big">600.000</div>
                <div className="stat-label">Visualizaciones acumuladas</div>
                <p className="stat-desc">
                  Cada reel en Instagram llega a una gran cantidad de personas,
                  manteniendo activo el contenido del programa y ampliando la
                  presencia de la marca en redes.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <div className="stat-big">20.000</div>
                  <div className="stat-label">Promedio por reel</div>
                  <p className="stat-desc">
                    Cada reel funciona como un micro-impacto: la marca aparece
                    de forma breve, atractiva y con gran alcance dentro de la
                    plataforma.
                  </p>
                </div>
                <div className="stat-highlight-box">
                  <h4>100 compartidos promedio</h4>
                  <p>
                    Los espectadores comparten el contenido de manera espontánea
                    en Instagram, ayudando a que la marca llegue a más personas
                    dentro de la comunidad.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <YoutubeCarousel />

      {/* ─── Content + Features Section ─── */}
      <section id="atractivo" className="section">
        <div className="container">
          <motion.div
            className="content-layout"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <p
                style={{
                  color: '#FF0000',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  marginBottom: '16px',
                }}
              >
                El Contenido
              </p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  marginBottom: '24px',
                  lineHeight: 1.1,
                }}
              >
                Protagonistas de nuestra{' '}
                <span className="gradient-text">comunidad</span>
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                Historias de vecinos y proyectos de Coronel Suárez y la región,
                con un formato conversacional que permite profundizar en cada
                experiencia, generando cercanía con la comunidad y conexión con
                el público.
              </p>
              <div className="content-quote">
                <p>
                  "Para los auspiciantes, este contexto genera una presencia
                  natural dentro de un espacio donde el público presta atención
                  durante períodos prolongados."
                </p>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  marginBottom: '24px',
                }}
              >
                ¿Por qué es un espacio atractivo para las marcas?
              </h3>
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ReelsCarousel />

      {/* ─── Packages Section ─── */}
      <section
        id="comercial"
        className="section"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>
              Formas de <span className="gradient-text">participación</span>
            </h2>
            <p>
              Diseñamos espacios comerciales que se integran orgánicamente al
              contenido, respetando la atención del usuario.
            </p>
          </motion.div>

          <div className="packages-grid">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                className={`glass-card package-card${pkg.highlight ? ' popular' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="package-icon">{pkg.icon}</div>
                <span
                  className={`package-tag ${pkg.highlight ? 'highlight' : 'default'}`}
                >
                  {pkg.tag}
                </span>
                <h3>{pkg.title}</h3>
                <p className="package-desc">{pkg.description}</p>
                <a
                  href="#comercial"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Consultar formato <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="footer-gradient-line" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <img
            src="https://res.cloudinary.com/dptdloagw/image/upload/v1773229447/logo_ekjvir.svg"
            alt="Radio del Volga"
            className="footer-logo"
          />
          <h2>El espacio donde las historias locales se vuelven regionales.</h2>
          <p>
            Ofrecemos a las marcas un entorno de presencia sostenida dentro de
            la comunidad de Coronel Suárez y la zona.
          </p>
          <div className="footer-social">
            <a href="#">
              <Instagram size={22} />
            </a>
            <a href="#">
              <Youtube size={22} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} RADIO DEL VOLGA. CORONEL SUÁREZ.
            </span>
            <a href="#">MEDIA KIT COMERCIAL</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
