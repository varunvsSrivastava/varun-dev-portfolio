
import { motion } from 'framer-motion'
import {
  FiBriefcase,
  FiBookOpen,
  FiAward,
  FiCalendar,
} from 'react-icons/fi'

import Section from '../common/Section'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, staggerContainer } from '../../utils/animations'

const experiences = [
  {
    type: 'work',
    icon: FiBriefcase,
    title: 'Software Engineer',
    organization: 'Full-time',
    period: '2026 – Present',
    description:
      'Working on software engineering solutions, applying development skills and engineering fundamentals to build reliable applications.',
  },
  {
    type: 'work',
    icon: FiBriefcase,
    title: 'Software Engineer Intern',
    organization: 'Internship',
    period: 'Feb 2026 – May 2026',
    description:
      'Completed a software engineering internship, gaining practical development experience and working on real-world engineering tasks.',
  },
  {
    type: 'education',
    icon: FiBookOpen,
    title: 'Master of Computer Applications',
    organization: 'RV College of Engineering',
    period: '2024 – 2026',
    description:
      'Completed MCA with a focus on computer science fundamentals, software development, and emerging technologies.',
  },
  {
    type: 'research',
    icon: FiAward,
    title: 'Research Paper',
    organization: 'ICICAI 2026',
    period: 'December 2026',
    description:
      'Dynamic Task Scheduling and Intelligent Process Control in AI-Native Operating Systems. Conditionally accepted for presentation at ICICAI 2026.',
  },
]

function Experience() {
  return (
    <Section id="experience">
      <Container>
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Journey"
            title="Experience &"
            highlight="education."
            description="My professional journey, academic background, and research milestones."
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mx-auto mt-14 max-w-4xl"
        >
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-primary via-violet-500/40 to-transparent sm:left-8" />

          <div className="space-y-8">
            {experiences.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  variants={fadeUp}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background text-primary-light shadow-lg shadow-primary/10 sm:left-3">
                    <Icon size={18} />
                  </div>

                  {/* Timeline Card */}
                  <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.05] sm:p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-text-muted">
                        <FiCalendar size={12} />
                        {item.period}
                      </span>

                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary-light">
                        {item.organization}
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-text-primary transition-colors group-hover:text-primary-light">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Experience
