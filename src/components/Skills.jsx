import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiMysql, SiFirebase,
  SiPython, SiGit, SiGithub, SiVite,
  SiPostman, SiVuedotjs, SiMongodb, SiDocker, SiSwagger,
  SiBootstrap, SiFigma
} from 'react-icons/si'

const categories = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#e2e2e2' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    id: 'ui-design',
    title: 'UI & Design',
    skills: [
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#e2e2e2' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#e2e2e2' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -10 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl
                 border border-white/[0.05] bg-white/[0.02]
                 hover:border-white/[0.12] hover:bg-white/[0.05]
                 transition-all duration-400 cursor-default aspect-square"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500"
        style={{ backgroundColor: skill.color }}
      />

      {/* Radial glow behind icon */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-2xl
                   opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundColor: skill.color }}
      />

      <Icon
        className="relative text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300"
        style={{ color: skill.color }}
      />

      <span className="relative text-[11px] sm:text-xs font-medium text-text-muted group-hover:text-text-primary transition-colors duration-300 text-center">
        {skill.name}
      </span>
    </motion.div>
  )
}

export const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('frontend')

  const activeCategory = categories.find((c) => c.id === active)

  return (
    <section aria-label="Skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Tech <span className="gradient-text">stack</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mt-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer
                ${active === cat.id
                  ? 'text-primary'
                  : 'text-text-muted hover:text-text-secondary border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02]'
                }`}
            >
              {active === cat.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="mt-8 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
            >
              {activeCategory.skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Skill count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-white/[0.04]" />
          <span className="text-[11px] text-text-muted font-mono">
            {categories.reduce((acc, c) => acc + c.skills.length, 0)} technologies
          </span>
          <div className="h-px flex-1 bg-white/[0.04]" />
        </motion.div>
      </div>
    </section>
  )
}
