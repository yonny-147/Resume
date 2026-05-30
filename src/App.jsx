import { useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const slides = [
  { id: 'hero', label: 'Home', Component: Hero },
  { id: 'about', label: 'About', Component: About },
  { id: 'skills', label: 'Skills', Component: Skills },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'contact', label: 'Contact', Component: Contact },
]

const spring = { type: 'spring', stiffness: 240, damping: 30 }

const Slide = ({ x, width, i, id, Component }) => {
  const delta = useTransform(x, (v) => v + i * width)
  const rotateY = useTransform(delta, [-width, 0, width], [42, 0, -42])
  const opacity = useTransform(delta, [-width, 0, width], [0.2, 1, 0.2])
  const scale = useTransform(delta, [-width, 0, width], [0.82, 1, 0.82])

  return (
    <motion.section
      style={{ width, rotateY, opacity, scale }}
      className="relative h-full shrink-0 overflow-y-auto overflow-x-hidden [transform-style:preserve-3d] [backface-visibility:hidden]"
    >
      <div className="min-h-full flex flex-col pt-20 pb-20">
        <div className="m-auto w-full">
          <Component />
          {id === 'contact' && <Footer />}
        </div>
      </div>
    </motion.section>
  )
}

export const App = () => {
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0
  )
  const x = useMotionValue(0)

  const go = useCallback((next) => {
    setIndex((prev) => {
      const target = typeof next === 'function' ? next(prev) : next
      return Math.max(0, Math.min(slides.length - 1, target))
    })
  }, [])

  // Track viewport width for px-based slide positioning
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Animate the track to the active slide
  useEffect(() => {
    const controls = animate(x, -index * width, spring)
    return controls.stop
  }, [index, width, x])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go((i) => i + 1)
      else if (e.key === 'ArrowLeft') go((i) => i - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const onDragEnd = (_, info) => {
    const threshold = width * 0.15
    if (info.offset.x < -threshold) go((i) => i + 1)
    else if (info.offset.x > threshold) go((i) => i - 1)
    else animate(x, -index * width, spring)
  }

  return (
    <ThemeProvider>
      <div className="relative h-[100dvh] w-screen overflow-hidden bg-primary [perspective:1600px]">
        {/* Subtle ambient light */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute w-[600px] h-[600px] bg-blue-500/[0.05] rounded-full blur-[150px] -top-72 left-1/4" />
          <div className="absolute w-[500px] h-[500px] bg-blue-700/[0.04] rounded-full blur-[130px] top-1/2 -right-64" />
          <div className="absolute w-[400px] h-[400px] bg-sky-400/[0.03] rounded-full blur-[120px] bottom-0 -left-48" />
        </div>

        <Navbar slides={slides} index={index} onNavigate={go} />

        {/* Horizontal 3D slide track */}
        <motion.div
          className="flex h-full w-full cursor-grab active:cursor-grabbing [transform-style:preserve-3d]"
          style={{ x }}
          drag="x"
          dragElastic={0.08}
          dragConstraints={{ left: -(slides.length - 1) * width, right: 0 }}
          onDragEnd={onDragEnd}
        >
          {slides.map((slide, i) => (
            <Slide key={slide.id} x={x} width={width} i={i} {...slide} />
          ))}
        </motion.div>

        {/* On-screen arrows */}
        <button
          onClick={() => go((i) => i - 1)}
          aria-label="Previous"
          className={`hidden sm:block fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full glass-strong text-text-secondary hover:text-accent transition-all duration-300 ${
            index === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'
          }`}
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          onClick={() => go((i) => i + 1)}
          aria-label="Next"
          className={`hidden sm:block fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full glass-strong text-text-secondary hover:text-accent transition-all duration-300 ${
            index === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'
          }`}
        >
          <FiChevronRight size={22} />
        </button>

        {/* Dots indicator */}
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              aria-label={`Go to ${s.label}`}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === index ? 'w-7 bg-accent' : 'w-2 bg-overlay/20 hover:bg-overlay/40'
              }`}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  )
}
