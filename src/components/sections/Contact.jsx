import { motion } from 'framer-motion'
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiMessageCircle,
} from 'react-icons/fi'

import Section from '../common/Section'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/animations'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/varunvsSrivastava',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/varun-srivastava-5813822b4/',
    icon: FiLinkedin,
  },
]

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white/[0.02] to-secondary/10 p-8 sm:p-12 lg:p-16"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/10 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary-light">
              <FiMessageCircle size={15} />
              Let's Connect
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-primary-light via-violet-400 to-secondary bg-clip-text text-transparent">
                Let's build it.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              I'm always interested in meaningful projects, interesting
              engineering challenges, and opportunities to build something
              impactful. Let's connect.
            </p>

            {/* Email CTA */}
            <motion.a
              href="mailto:varunsrivastavawork15@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-violet-500 px-7 py-4 font-medium text-white shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40"
            >
              <FiMail size={18} />
              Get in Touch
              <FiArrowUpRight size={16} />
            </motion.a>

            {/* Social Links */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <motion.a
                    key={social.label}
                    variants={fadeUp}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-text-muted transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-text-primary"
                  >
                    <Icon size={17} />
                    {social.label}
                    <FiArrowUpRight size={14} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-text-muted sm:flex-row"
        >
          <a
            href="#home"
            className="text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="text-text-primary">Varun</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              .dev
            </span>
          </a>

          <p>
            © {new Date().getFullYear()} Varun Srivastava. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-primary-light"
          >
            Back to top ↑
          </a>
        </motion.footer>
      </Container>
    </Section>
  )
}

export default Contact
