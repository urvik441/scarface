/**
 * SectionHeading component
 * 
 * @param {string} eyebrow - Small text above heading (optional)
 * @param {string} heading - Main heading text
 * @param {string} subheading - Subheading text (optional)
 * @param {'left'|'center'} align - Text alignment
 * @param {'dark'|'light'} theme - Color theme
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  theme = 'dark',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const headingColor = theme === 'light' ? 'text-white' : 'text-navy'
  const subColor = theme === 'light' ? 'text-white/65' : 'text-charcoal/65'
  const eyebrowColor = 'text-gold'

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      {eyebrow && (
        <span className={`text-xs font-semibold tracking-[0.22em] uppercase ${eyebrowColor} mb-3 font-heading`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight ${headingColor}`}>
        {heading}
      </h2>
      <span className={`block w-14 h-0.5 bg-gold mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      {subheading && (
        <p className={`mt-5 text-base sm:text-lg max-w-2xl leading-relaxed ${subColor}`}>
          {subheading}
        </p>
      )}
    </div>
  )
}
