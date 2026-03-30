import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiTerminal } from 'react-icons/fi'

const focus = [
  { icon: <FiTerminal size={18} />, label: 'Full Stack Development', desc: 'End-to-end web apps' },
]

const highlights = [
  { value: '10+', label: 'Projects' },
  { value: '8+', label: 'Technologies' },
  { value: '2+', label: 'Years coding' },
]

export const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section aria-label="About" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="section-label">About</span>
          <h2 className="section-title">
            Building software that <span className="gradient-text">matters</span>
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl space-y-5 mt-8"
        >
          <p className="text-text-secondary leading-relaxed text-[15px]">
            Full Stack Developer focused on creating scalable applications with 
            clean architecture. I design <span className="text-text-primary">API-First systems with Node.js and Swagger</span>, 
            build reactive interfaces with React, and implement AI-driven workflows 
            using tools like <span className="text-text-primary">Windsurf and prompt engineering</span>.
          </p>
          <p className="text-text-secondary leading-relaxed text-[15px]">
            I care about <span className="text-text-primary">quality assurance</span> — from automated testing with Playwright 
            to well-documented APIs. Every project I build is designed to be 
            maintainable, testable, and production-ready.
          </p>
        </motion.div>

        {/* Focus area + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mt-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border border-white/[0.04] 
                       bg-white/[0.02] hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-300 w-fit"
          >
            <span className="text-accent group-hover:scale-110 transition-transform duration-300">
              {focus[0].icon}
            </span>
            <div>
              <span className="text-text-secondary text-sm font-medium block">{focus[0].label}</span>
              <span className="text-text-muted text-xs block">{focus[0].desc}</span>
            </div>
          </motion.div>

          <div className="flex items-center gap-8 sm:gap-10">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                className="text-center"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">{h.value}</span>
                <p className="text-text-muted text-[10px] sm:text-xs font-medium mt-1 tracking-wide">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
