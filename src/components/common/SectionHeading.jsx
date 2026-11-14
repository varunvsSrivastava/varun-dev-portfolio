
function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={`mx-auto max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
