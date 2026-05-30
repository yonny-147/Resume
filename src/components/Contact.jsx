import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const links = [
  {
    name: 'GitHub',
    icon: <FiGithub size={22} />,
    url: 'https://github.com/yonny-147',
    handle: '@yonny-147',
    color: 'group-hover:border-overlay/20',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin size={22} />,
    url: 'https://www.linkedin.com/in/yonnyalex',
    handle: 'in/yonnyalex',
    color: 'group-hover:border-blue-400/30',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp size={22} />,
    url: 'https://api.whatsapp.com/send/?phone=3112959285&text&type=phone_number&app_absent=0',
    handle: '+57 311 295 9285',
    color: 'group-hover:border-emerald-400/30',
  },
]

export const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section aria-label="Contact" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="text-text-muted text-sm mt-4 max-w-md">
            Open to new opportunities and collaborations. 
            Feel free to reach out through any channel.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact via ${link.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`group relative flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-2xl text-center
                         border border-overlay/[0.04] bg-overlay/[0.01]
                         hover:bg-overlay/[0.04] ${link.color}
                         transition-all duration-300 hover:-translate-y-1`}
            >
              <span className="p-2.5 sm:p-3 rounded-xl bg-overlay/[0.04] text-text-muted group-hover:text-accent 
                             group-hover:bg-accent/[0.08] transition-all duration-300">
                {link.icon}
              </span>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-text-primary block">
                  {link.name}
                </span>
                <span className="text-[10px] sm:text-xs text-text-muted mt-0.5 block truncate max-w-full">
                  {link.handle}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
