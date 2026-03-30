import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

const NAV_HEIGHT = 64

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const updateActiveSection = useCallback(() => {
    const winHeight = window.innerHeight
    const docHeight = document.documentElement.scrollHeight

    // If near bottom, last section is active
    if (window.scrollY + winHeight >= docHeight - 100) {
      setActiveSection('contact')
      return
    }

    let current = 'hero'
    for (const link of navLinks) {
      const el = document.getElementById(link.to)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= NAV_HEIGHT + 80) {
          current = link.to
        }
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      updateActiveSection()
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateActiveSection()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateActiveSection])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/70 backdrop-blur-2xl'
          : 'bg-primary/50 backdrop-blur-lg md:bg-transparent md:backdrop-blur-none'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative">
        <button onClick={() => handleNavClick('hero')} className="cursor-pointer group">
          <span className="text-lg font-bold tracking-tight font-mono">
            <span className="text-accent group-hover:text-accent-light transition-colors">Y</span>
            <span className="text-text-muted group-hover:text-text-secondary transition-colors">.dev</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to} className="relative">
              <button
                onClick={() => handleNavClick(link.to)}
                className={`relative z-10 px-3.5 py-2 text-[13px] transition-all duration-300 cursor-pointer rounded-lg ${
                  activeSection === link.to
                    ? 'text-text-primary font-semibold'
                    : 'text-text-muted font-medium hover:text-text-primary hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </button>
              {activeSection === link.to && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-accent/[0.08] border border-accent/20"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
          <li className="ml-3">
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
      <div
        className={`absolute bottom-0 left-0 w-full h-[2px] overflow-hidden transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="h-full w-[200%] animate-slide-gradient"
          style={{
            background: 'linear-gradient(90deg, #7c3aed, #a78bfa, #f0abfc, #c4b5fd, #7c3aed, #a78bfa, #f0abfc, #c4b5fd, #7c3aed)',
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
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    onClick={() => handleNavClick(link.to)}
                    className={`text-2xl font-medium transition-all duration-300 cursor-pointer ${
                      activeSection === link.to
                        ? 'text-accent scale-110'
                        : 'text-text-secondary hover:text-accent'
                    }`}
                  >
                    {activeSection === link.to && (
                      <span className="text-accent mr-2 font-mono">//</span>
                    )}
                    {link.name}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
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
