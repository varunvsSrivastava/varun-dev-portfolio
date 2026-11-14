
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
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8"
        >
          {/* Hero Content */}
          <div className="relative z-10 text-center lg:text-left">
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
              className="text-4xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl"
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
              className="mx-auto mt-6 max-w-2xl px-2 text-sm leading-7 text-text-muted sm:mt-8 sm:text-base sm:leading-8 md:text-lg lg:mx-0 lg:px-0"
            >
              I build scalable software, machine learning applications, and
              intelligent systems that turn complex ideas into practical solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-stretch justify-center gap-3 px-4 sm:mt-10 sm:flex-row sm:items-center sm:px-0 lg:justify-start"
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
              className="mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-text-muted transition-colors hover:text-primary-light sm:mt-16 lg:mx-0"
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
          </div>

          {/* Profile Portrait */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-10 rounded-full bg-primary/30 blur-[100px]" />
            <div className="absolute inset-16 rounded-full bg-secondary/20 blur-[100px]" />

            {/* Portrait Frame */}
            
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20 blur-3xl" />

              {/* Portrait */}
              <img
                src="/images/vs-profile.jpeg"
                alt="Varun Srivastava"
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="eager"
              />

              {/* Left Blend */}
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#08080d] to-transparent" />

              {/* Bottom Blend */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#08080d] via-[#08080d]/60 to-transparent" />

              {/* Soft Right Blend */}
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#08080d]/30 to-transparent" />
            </div>

          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
