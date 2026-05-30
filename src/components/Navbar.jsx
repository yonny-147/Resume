import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiMoon, FiSun, FiMonitor } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const themeConfig = {
  dark:   { Icon: FiMoon,    label: 'Dark',   next: 'light' },
  light:  { Icon: FiSun,     label: 'Light',  next: 'system' },
  system: { Icon: FiMonitor, label: 'System', next: 'dark' },
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const { Icon, label, next } = themeConfig[theme]
  return (
    <button
      onClick={() => setTheme(next)}
      title={`Theme: ${label}`}
      className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-overlay/[0.04] transition-all duration-300 cursor-pointer"
    >
      <Icon size={16} />
    </button>
  )
}

export const Navbar = ({ slides, index, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (i) => {
    onNavigate(i)
    setIsOpen(false)
  }

  const progress = slides.length > 0 ? (index + 1) / slides.length : 0

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-primary/70 backdrop-blur-2xl"
    >
      {/* Slide progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-accent-dark via-accent to-accent-light z-50"
        animate={{ scaleX: progress }}
        transition={{ type: 'spring', stiffness: 260, damping: 32 }}
      />

      <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative">
        <button onClick={() => handleNavClick(0)} className="cursor-pointer group">
          <span className="text-lg font-bold tracking-tight font-mono">
            <span className="text-accent group-hover:text-accent-light transition-colors">Y</span>
            <span className="text-text-muted group-hover:text-text-secondary transition-colors">.dev</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {slides.map((slide, i) => (
            <li key={slide.id} className="relative">
              <button
                onClick={() => handleNavClick(i)}
                className={`relative z-10 px-3.5 py-2 text-[13px] transition-all duration-300 cursor-pointer rounded-lg ${
                  index === i
                    ? 'text-text-primary font-semibold'
                    : 'text-text-muted font-medium hover:text-text-primary hover:bg-overlay/[0.04]'
                }`}
              >
                {slide.label}
              </button>
              {index === i && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-accent/[0.08] border border-accent/20"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle />
          </li>
          <li className="ml-1">
            <a
              href="https://drive.google.com/file/d/1Fevi-2etWrqLWxwi0n69Idl5N8QeHCrQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-5 !text-xs"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-accent transition-colors p-2 relative z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      {/* Animated gradient border bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
        <div
          className="h-full w-[200%] animate-slide-gradient"
          style={{
            background: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #93c5fd, #60a5fa, #1d4ed8, #3b82f6, #93c5fd, #60a5fa, #1d4ed8)',
          }}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 top-0 bg-primary backdrop-blur-2xl z-40 flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {slides.map((slide, i) => (
                <motion.li
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    onClick={() => handleNavClick(i)}
                    className={`text-2xl font-medium transition-all duration-300 cursor-pointer ${
                      index === i
                        ? 'text-accent scale-110'
                        : 'text-text-secondary hover:text-accent'
                    }`}
                  >
                    {index === i && (
                      <span className="text-accent mr-2 font-mono">//</span>
                    )}
                    {slide.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: slides.length * 0.08 }}
              >
                <ThemeToggle />
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (slides.length + 1) * 0.08 }}
              >
                <a
                  href="https://drive.google.com/file/d/1Fevi-2etWrqLWxwi0n69Idl5N8QeHCrQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
