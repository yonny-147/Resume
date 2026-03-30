import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Subtle ambient light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] bg-violet-500/[0.03] rounded-full blur-[150px] -top-72 left-1/4" />
        <div className="absolute w-[500px] h-[500px] bg-fuchsia-500/[0.02] rounded-full blur-[130px] top-1/2 -right-64" />
        <div className="absolute w-[400px] h-[400px] bg-violet-400/[0.02] rounded-full blur-[120px] bottom-0 -left-48" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div id="hero">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  )
}
