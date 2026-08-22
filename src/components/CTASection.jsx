import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'

/**
 * CTASection — Full-width call to action banner
 * 
 * @param {string} heading
 * @param {string} subheading
 * @param {string} primaryLabel
 * @param {string} primaryTo
 * @param {string} secondaryLabel
 * @param {string} secondaryTo
 */
export default function CTASection({
  heading = 'Ready to Start Trading?',
  subheading = 'Connect with SCARFACE for reliable, premium-quality products from India to your market.',
  primaryLabel = 'Contact Us',
  primaryTo = '/contact',
  secondaryLabel = 'View Our Products',
  secondaryTo = '/products',
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0B1C25 0%, #1F4050 50%, #152D3A 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 translate-x-1/3 translate-y-1/3" />
      {/* Thin gold border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container-max py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
              <MessageSquare size={18} className="text-gold" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            {heading}
          </h2>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-10">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={primaryTo} className="btn-primary">
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
            <Link to={secondaryTo} className="btn-ghost-light">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
