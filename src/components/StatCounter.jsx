import { useEffect, useRef, useState } from 'react'

/**
 * StatCounter — animates a number from 0 to target when in view
 * 
 * @param {number|string} value - Target value (e.g. 10, 100)
 * @param {string} suffix - Suffix like '+', '%', 'k'
 * @param {string} label - Descriptive label below the number
 * @param {string} prefix - Optional prefix (e.g. '$')
 */
export default function StatCounter({ value, suffix = '', label, prefix = '' }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  // Handle non-numeric values like '24/7'
  const isNumeric = !isNaN(parseInt(value))
  const numericTarget = parseInt(value) || 0

  useEffect(() => {
    if (!isNumeric) {
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1800
          const steps = 60
          const increment = numericTarget / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= numericTarget) {
              setCount(numericTarget)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericTarget, hasAnimated, isNumeric])

  return (
    <div ref={ref} className="text-center group">
      <div className="flex items-end justify-center gap-1 mb-2">
        {prefix && <span className="text-2xl font-heading font-bold text-gold mb-1">{prefix}</span>}
        <span className="text-5xl sm:text-6xl font-heading font-extrabold text-white leading-none tabular-nums">
          {isNumeric ? count : value}
        </span>
        {suffix && (
          <span className="text-3xl font-heading font-bold text-gold mb-1">{suffix}</span>
        )}
      </div>
      <p className="text-white/60 text-sm font-medium tracking-wide">{label}</p>
    </div>
  )
}
