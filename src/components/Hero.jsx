import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Full Stack Developer'
]

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => setText(isDeleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1)),
        isDeleting ? 35 : 70
      )
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.4) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(167,139,250,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="section-container relative z-10 !py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-center lg:text-left"
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6 sm:mb-10"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-text-muted text-xs font-medium tracking-wide">Open to work</span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Yonny
              <span className="gradient-text"> Ospina</span>
            </h1>

            {/* Typing */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-lg text-text-muted">
                <span className="text-accent">{text}</span>
                <span className="inline-block w-[2px] h-5 bg-accent/70 ml-0.5 animate-pulse" />
              </span>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600/30 via-fuchsia-500/30 to-violet-600/30 blur-2xl animate-pulse-glow" />

            {/* Spinning gradient border */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-[3px]">
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #a78bfa, #f0abfc, #c4b5fd, #7c3aed)',
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-primary p-[3px]">
                <img
                  src="/imgs/image.jpg"
                  alt="Yonny Ospina"
                  className="w-full h-full object-cover rounded-full scale-125"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => {
            const el = document.getElementById('about')
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 64
              window.scrollTo({ top, behavior: 'smooth' })
            }
          }}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-2"
          >
            <div className="w-0.5 h-1.5 bg-accent/50 rounded-full" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
