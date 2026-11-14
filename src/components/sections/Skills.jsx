
import { motion } from 'framer-motion'
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiCpu,
  FiDatabase,
  FiTool,
} from 'react-icons/fi'

import Section from '../common/Section'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, staggerContainer } from '../../utils/animations'

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: FiCode,
    skills: ['C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Frontend Development',
    icon: FiMonitor,
    skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend Development',
    icon: FiServer,
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Machine Learning',
    icon: FiCpu,
    skills: [
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'Pandas',
      'NumPy',
      'SHAP',
    ],
  },
  {
    title: 'Databases',
    icon: FiDatabase,
    skills: ['MongoDB', 'SQL', 'Apache Derby'],
  },
  {
    title: 'Tools & Platforms',
    icon: FiTool,
    skills: ['Git', 'GitHub', 'Docker', 'MLflow', 'Power BI', 'VS Code'],
  },
]

function Skills() {
  return (
    <Section id="skills">
      <Container>
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Technical Skills"
            title="Tools I work"
            highlight="with."
            description="Technologies and tools I use to build software and machine learning solutions."
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05]"
              >
                {/* Card Header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary-light transition-colors group-hover:text-secondary">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-semibold text-text-primary">
                    {group.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-text-muted transition-colors hover:border-primary/30 hover:text-primary-light"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}

export default Skills
