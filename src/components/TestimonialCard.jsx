import { Star, Quote } from 'lucide-react'

/**
 * TestimonialCard
 * 
 * @param {string} quote - The testimonial text
 * @param {string} name - Person's name
 * @param {string} company - Company name
 * @param {string} country - Country flag/name
 * @param {number} rating - Star rating out of 5
 */
export default function TestimonialCard({ quote, name, company, country, rating = 5 }) {
  return (
    <div className="card p-7 flex flex-col gap-5 border border-gold/10 hover:border-gold/30 transition-colors duration-300">
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
        <Quote size={18} className="text-gold" />
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={i < rating ? 'text-gold fill-gold' : 'text-charcoal/20'}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-charcoal/75 text-sm leading-relaxed flex-1 italic">
        "{quote}"
      </p>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-gold/30 to-transparent" />

      {/* Person */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-navy/10 border border-navy/20 flex items-center justify-center">
          <span className="font-heading font-bold text-navy text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-heading font-semibold text-navy text-sm">{name}</p>
          <p className="text-charcoal/50 text-xs">{company} · {country}</p>
        </div>
      </div>
    </div>
  )
}
