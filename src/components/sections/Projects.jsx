
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'

import Section from '../common/Section'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ProjectModal from '../projects/ProjectModal'
import { fadeUp, staggerContainer } from '../../utils/animations'
import { projects } from '../../data/projects'

const categories = [
  'All',
  'Machine Learning',
  'AI / LLM Engineering',
  'Full Stack Development',
]

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <Section id="projects">
      <Container>
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that"
            highlight="make an impact."
            description="A selection of projects demonstrating my engineering, machine learning, and problem-solving skills."
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                activeCategory === category
                  ? 'border-primary/40 bg-primary/15 text-primary-light'
                  : 'border-white/10 bg-white/[0.03] text-text-muted hover:border-white/20 hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-primary/30 hover:bg-white/[0.05]"
              >
                {/* Project Visual */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                  <span className="relative text-5xl font-bold tracking-tight text-white/10 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/20">
                    {project.title?.split(/[\s-]+/).map((word) => word[0]).join('').slice(0, 3)}
                  </span>

                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-medium text-primary-light">
                      Featured
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100"
                  >
                    View Case Study
                    <FiArrowUpRight size={14} />
                  </button>
                </div>

                {/* Project Details */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {project.title}
                    </h3>

                    <button
                      type="button"
                      aria-label={`View ${project.title} case study`}
                      onClick={() => setSelectedProject(project)}
                      className="rounded-lg p-2 text-text-muted transition-colors hover:bg-primary/10 hover:text-primary-light"
                    >
                      <FiArrowUpRight size={18} />
                    </button>
                  </div>

                  <p className="mb-5 text-sm leading-7 text-text-muted">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 5).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-white/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-sm font-medium text-primary-light transition-colors hover:text-secondary"
                    >
                      Case Study
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                      >
                        <FiGithub size={15} />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                      >
                        <FiExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  )
}

export default Projects
