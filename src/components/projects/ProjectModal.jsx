
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from 'react-icons/fi'

function ProjectModal({ project, onClose }) {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!project) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [project])

  // Close modal with Escape key
  useEffect(() => {
    if (!project) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close project modal"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/40"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 28,
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-5 border-b border-white/10 p-6 sm:p-8">
              <div>
                {project.featured && (
                  <span className="mb-3 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                    Featured Project
                  </span>
                )}

                <h2
                  id="project-modal-title"
                  className="text-2xl font-bold text-text-primary sm:text-3xl"
                >
                  {project.title}
                </h2>

                {project.category && (
                  <p className="mt-2 text-sm text-text-muted">
                    {project.category}
                  </p>
                )}
              </div>

              <motion.button
                type="button"
                aria-label="Close modal"
                onClick={onClose}
                whileHover={{ rotate: 90, scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-text-primary"
              >
                <FiX size={20} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="max-h-[65vh] space-y-8 overflow-y-auto p-6 sm:p-8">
              {/* Overview */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-text-primary">
                  Overview
                </h3>

                <p className="text-sm leading-7 text-text-muted">
                  {project.description}
                </p>
              </section>

              {/* Highlights */}
              {project.highlights?.length > 0 && (
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-text-primary">
                    Key Highlights
                  </h3>

                  <ul className="space-y-3">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm leading-6 text-text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Technologies */}
              {project.technologies?.length > 0 && (
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-text-primary">
                    Tech Stack
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs text-primary-light"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Footer Actions */}
            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 p-6 sm:px-8">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-text-primary transition-colors hover:border-primary/30 hover:bg-white/[0.05]"
                >
                  <FiGithub size={16} />
                  GitHub
                  <FiArrowUpRight size={14} />
                </motion.a>
              )}

              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/40"
                >
                  <FiExternalLink size={16} />
                  Live Demo
                  <FiArrowUpRight size={14} />
                </motion.a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="ml-auto rounded-full px-5 py-2.5 text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
