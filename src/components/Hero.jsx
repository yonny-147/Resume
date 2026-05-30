import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

const roles = [
  'Full Stack Developer',
  'Full Stack Developer with AI',
]

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 140])
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 90])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  // 3D tilt on the profile photo following the cursor
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [14, -14]), { stiffness: 200, damping: 18 })
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 18 })

  const onPhotoMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    tiltX.set((e.clientX - r.left) / r.width - 0.5)
    tiltY.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onPhotoLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
  }

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
    <section ref={ref} aria-label="Hero" className="relative flex items-center justify-center overflow-hidden">
      {/* Subtle grid with parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          y: yGrid,
          backgroundImage: `linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div style={{ y: yContent, opacity: fade }} className="section-container relative z-10 !py-0">
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-overlay/[0.06] bg-overlay/[0.02] mb-6 sm:mb-10"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-text-muted text-xs font-medium tracking-wide">Open to work</span>
            </motion.div>

            {/* Greeting with waving hand */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-text-secondary text-base sm:text-lg mb-3 flex items-center justify-center lg:justify-start gap-2"
            >
              Hi, I&apos;m
              <span className="inline-block origin-[70%_80%] animate-wave text-xl sm:text-2xl">👋</span>
            </motion.p>

            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.05]">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={onPhotoMove}
            onMouseLeave={onPhotoLeave}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="relative shrink-0"
          >
            {/* Backdrop glow blob */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-64 sm:w-80 sm:h-100 rounded-full bg-gradient-to-tr from-blue-700/30 via-sky-500/20 to-blue-400/30 blur-3xl animate-pulse-glow" />

            {/* Decorative orbit ring */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-100 md:h-80 rounded-full border border-overlay/[0.07]" />

            {/* Floating cutout photo */}
            <img
              src="/imgs/yonny2.gif"
              alt="Yonny Ospina"
              className="relative z-10 w-52 sm:w-64 md:w-72 lg:w-100 h-auto object-contain animate-float drop-shadow-[0_25px_45px_rgba(29,78,216,0.4)]"
            />

            {/* Ground shadow */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 sm:w-48 h-4 blur-xl rounded-[100%]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
