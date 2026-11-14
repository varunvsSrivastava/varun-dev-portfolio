
import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiTrendingUp } from 'react-icons/fi'
import Section from '../common/Section'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, staggerContainer } from '../../utils/animations'

const highlights = [
  {
    icon: FiCode,
    title: 'Software Engineering',
    description:
      'Building scalable applications with clean architecture, maintainable code, and practical engineering principles.',
  },
  {
    icon: FiCpu,
    title: 'Machine Learning',
    description:
      'Developing end-to-end ML solutions, from data preprocessing and model evaluation to deployment.',
  },
  {
    icon: FiTrendingUp,
    title: 'Continuous Growth',
    description:
      'Exploring emerging technologies, strengthening fundamentals, and continuously improving as an engineer.',
  },
]

function About() {
  return (
    <Section id="about">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="About Me"
            title="Engineering with"
            highlight="purpose."
            description="A little about my background, mindset, and what drives me."
          />
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Introduction */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold leading-snug text-text-primary sm:text-3xl">
              Turning ideas into{' '}
              <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                intelligent solutions.
              </span>
            </h3>

            <p className="leading-8 text-text-muted">
              I'm a software engineer with a strong interest in machine learning
              and AI engineering. I enjoy solving complex problems, designing
              practical systems, and building applications that deliver meaningful
              value.
            </p>

            <p className="leading-8 text-text-muted">
              My experience spans full-stack development, machine learning
              pipelines, API development, and deployment workflows. I believe in
              combining strong fundamentals with continuous experimentation to
              build reliable software.
            </p>

            <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-light">
                <FiCode size={20} />
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary">
                  MCA Graduate
                </p>
                <p className="text-xs text-text-muted">
                  RV College of Engineering · 2024–2026
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.05]"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary-light transition-colors group-hover:text-secondary">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-text-primary">
                        {item.title}
                      </h4>

                      <p className="text-sm leading-7 text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default About
