import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Chilling Time',
    description: 'Streaming platform with React and Tailwind — responsive UI, smooth interactions.',
    image: '/imgs/chilling.png',
    tags: ['Next.js', 'React', 'Tailwind', 'JS'],
    liveUrl: 'https://chillingtime.co/',
    cat: 'fullstack',
    featured: true,
  },
  {
    title: 'Plania Poker',
    description: 'Planning Poker application with Next.js and Tailwind — responsive UI, smooth interactions.',
    image: '/imgs/plania.png',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'firebase'],
    liveUrl: 'https://yao-aplicacion-planning-poker.vercel.app/',
    cat: 'fullstack',
    featured: false,
  },
  {
    title: 'CRUD University',
    description: 'Full-stack management system — Vue.js frontend, Laravel API, MySQL database.',
    image: '/imgs/crud.jpg',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    githubUrl: 'https://github.com/yonny-147/CRUD-universidad',
    liveUrl: 'https://github.com/yonny-147/CRUD-universidad',
    cat: 'fullstack',
  },
  {
    title: 'Image Gallery',
    description: 'React gallery with dynamic filtering, lazy loading, and responsive grid.',
    image: '/imgs/gallery.png',
    tags: ['React', 'JS', 'CSS', 'firebase'],
    liveUrl: 'https://github.com/yonny-147/Gallery/',
    githubUrl: 'https://github.com/yonny-147/Gallery/',
    cat: 'fullstack',
  },
  {
    title: 'Bank Card Form',
    description: 'Interactive card form with real-time preview and flip animation.',
    image: '/imgs/cardform.png',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://cardformyonnydev.netlify.app/',
    cat: 'frontend',
  },
  {
    title: 'Countdown Timer',
    description: 'Elegant countdown with date selection and responsive design.',
    image: '/imgs/countdown.png',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://countdownyonnydev.netlify.app/',
    cat: 'frontend',
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Classic game with modern visuals and score tracking.',
    image: '/imgs/piedra.jpg',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://piedra-papel-tijera-game-v1.netlify.app/',
    cat: 'frontend',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' }
]

const ProjectCard = ({ project, featured = false }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className={`group card overflow-hidden !p-0 ${featured ? 'sm:col-span-2' : ''}`}
  >
    <div className={`relative overflow-hidden ${featured ? 'aspect-video sm:aspect-[21/9]' : 'aspect-video'}`}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent 
                      opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

      <div className="absolute inset-0 flex items-center justify-center gap-3 
                      opacity-0 group-hover:opacity-100 transition-all duration-500">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live`}
            className="p-3 glass-strong rounded-xl text-white hover:text-accent hover:scale-110 transition-all duration-300"
          >
            <FiExternalLink size={18} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="p-3 glass-strong rounded-xl text-white hover:text-accent hover:scale-110 transition-all duration-300"
          >
            <FiGithub size={18} />
          </a>
        )}
      </div>

      {featured && (
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-[10px] font-mono font-semibold text-primary bg-accent rounded-full">
            Featured
          </span>
        </div>
      )}
    </div>

    <div className="p-4 sm:p-5">
      <h3 className="font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors text-[15px]">
        {project.title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-[10px] font-mono font-medium text-accent/80 
                       bg-accent/[0.06] rounded-md border border-accent/[0.08]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

export const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter((p) => p.cat === active)

  return (
    <section aria-label="Projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          <div>
            <span className="section-label">Projects</span>
            <h2 className="section-title">
              Selected <span className="gradient-text">work</span>
            </h2>
          </div>

          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  active === f.value
                    ? 'bg-accent text-primary'
                    : 'text-text-muted border border-white/[0.06] hover:text-text-secondary hover:border-white/[0.12]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                featured={project.featured}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
