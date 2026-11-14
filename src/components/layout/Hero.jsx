
import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiGithub } from 'react-icons/fi'

import Container from '../common/Container'
import Button from '../common/Button'
import { fadeUp, staggerContainer } from '../../utils/animations'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pb-16 pt-28 sm:min-h-screen sm:pb-20 sm:pt-32"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          {/* Availability */}
          <motion.div variants={fadeUp}>
            <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-text-muted backdrop-blur-sm sm:px-5 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span>Software Engineer · ML Engineer</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Building intelligent
            <br />
            <span className="bg-gradient-to-r from-primary-light via-violet-400 to-secondary bg-clip-text text-transparent">
              digital experiences.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl px-2 text-sm leading-7 text-text-muted sm:mt-8 sm:text-base sm:leading-8 md:text-lg"
          >
            I build scalable software, machine learning applications, and
            intelligent systems that turn complex ideas into practical solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 px-4 sm:mt-10 sm:flex-row sm:items-center sm:px-0"
          >
            <Button href="#projects" icon={<FiArrowUpRight />}>
              Explore Projects
            </Button>

            <Button
              href="https://github.com/varunvsSrivastava"
              variant="secondary"
              icon={<FiGithub />}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            variants={fadeUp}
            href="#about"
            aria-label="Scroll to About section"
            className="mx-auto mt-14 flex w-fit flex-col items-center gap-2 text-text-muted transition-colors hover:text-primary-light sm:mt-20"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-xs tracking-widest uppercase">
              Scroll to explore
            </span>
            <FiArrowDown size={18} />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
