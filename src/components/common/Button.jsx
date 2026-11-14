
import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg shadow-primary/20 hover:shadow-primary/40',
  secondary:
    'border border-white/10 bg-white/[0.03] text-text-primary hover:border-primary/30 hover:bg-white/[0.06]',
}

function Button({
  children,
  variant = 'primary',
  href,
  icon,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
    variants[variant] || variants.primary
  } ${className}`

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  }

  const renderIcon = () => {
    if (!icon) return null

    // Supports icon={<FiArrowUpRight />} and icon={FiArrowUpRight}
    if (typeof icon === 'function') {
      const IconComponent = icon
      return <IconComponent />
    }

    return icon
  }

  const content = (
    <>
      {icon && (
        <span className="inline-flex items-center">
          {renderIcon()}
        </span>
      )}

      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={classes}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button
