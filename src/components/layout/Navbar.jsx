
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Active navigation section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-background/80 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group text-xl font-bold tracking-tight"
          >
            <span className="text-text-primary">Varun</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              .dev
            </span>
            <span className="ml-1 text-primary transition-colors group-hover:text-secondary">
              _
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute inset-0 -z-10 rounded-full border border-primary/20 bg-primary/10"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary-light transition-all hover:border-primary hover:bg-primary/10 md:flex"
          >
            Resume
            <FiArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-text-primary transition-colors hover:bg-white/5 md:hidden"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-white/10 bg-surface/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.replace('#', '')
                  const isActive = activeSection === sectionId

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary-light'
                          : 'text-text-muted hover:bg-white/5 hover:text-text-primary'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  )
                })}

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-violet-500 px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Download Resume
                  <FiArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
