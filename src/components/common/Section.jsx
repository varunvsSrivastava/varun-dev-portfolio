
function Section({
  id,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 sm:py-32 ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
