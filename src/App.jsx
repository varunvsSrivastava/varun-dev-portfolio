
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'

import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'

import Section from './components/common/Section'
import Container from './components/common/Container'
import SectionHeading from './components/common/SectionHeading'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import BackgroundEffects from './components/common/BackgroundEffects'
import ScrollProgress from './components/common/ScrollProgress'

function App() {
  return (
    <main className="relative isolate min-h-screen bg-background text-text-primary">
      <BackgroundEffects />
      <ScrollProgress />
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <Projects />

      {/* EXPERIENCE PLACEHOLDER */}
      <Experience />

      {/* CONTACT PLACEHOLDER */}
      <Contact />

    </main>
  )
}

export default App
