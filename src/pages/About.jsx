import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

function useFadeIn(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-8')
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const values = [
  { emoji: '🤝', title: 'Integrity', desc: 'Honest and transparent in all our business dealings.' },
  { emoji: '⭐', title: 'Quality', desc: 'Consistent focus on product quality and reliability.' },
  { emoji: '🌍', title: 'Global Mindset', desc: 'Building global connections through quality, trust, and innovation.' },
  { emoji: '📋', title: 'Professionalism', desc: 'Professional communication, documentation, and service.' },
  { emoji: '🔗', title: 'Partnership', desc: 'Building long-term relationships over short-term transactions.' },
  { emoji: '📈', title: 'Growth', desc: 'Continuously improving our reach, products, and services.' },
]

export default function About() {
  const storyRef = useFadeIn()
  const missionRef = useFadeIn()
  const valuesRef = useFadeIn()

  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B1C25 0%, #1F4050 100%)' }}
        aria-label="About page hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80')` }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container-max relative z-10 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase font-heading block mb-4">About SCARFACE</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight">
            The Face of Global Trade
          </h1>
          <div className="w-14 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A Gujarat-based import and export company built on the values of trust, quality, and long-term international partnerships.
          </p>
        </div>
      </section>

      {/* ─── OUR STORY ──────────────────────────────────────────── */}
      <section id="our-story" className="section-pad bg-white" aria-label="Our story">
        <div className="container-max">
          <div
            ref={storyRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center opacity-0 translate-y-8 transition-all duration-700"
          >
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase font-heading block mb-3">Our Story</span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight mb-2">Who We Are</h2>
              <div className="w-14 h-0.5 bg-gold mb-6" />
              <p className="text-charcoal/70 text-base leading-relaxed mb-5">
                SCARFACE is a India-based import and export company with a mission to connect India's finest products with international buyers across the world. Founded with a clear vision for global trade, we operate at the intersection of Indian quality and international commerce.
              </p>
              <p className="text-charcoal/70 text-base leading-relaxed mb-5">
                India has long been a hub of commerce and entrepreneurship. We leverage this heritage to build trade relationships that are not just transactional, but long-term and mutually beneficial. Our team is committed to professional, transparent, and reliable service at every stage of the export process.
              </p>
              <p className="text-charcoal/70 text-base leading-relaxed">
                We specialise in sourcing and exporting quality pulses, spices, oilseeds, and feed-meals, carefully selected to meet the requirements of international buyers. From direct sourcing and quality inspection to proper processing, packaging, and export coordination, we focus on delivering consistent products and dependable service to customers across South America, Europe, Africa, Asia, North America, and Central America.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="Business handshake representing global trade partnerships"
                className="w-full h-[400px] object-cover rounded-2xl shadow-card-hover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-navy rounded-2xl px-6 py-4 border border-gold/25 shadow-navy">
                <p className="text-gold text-xs tracking-widest uppercase font-heading font-semibold">Established</p>
                <p className="text-white font-heading font-bold text-2xl">Gujarat, India</p>
              </div>
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ───────────────────────────────────── */}
      <section id="mission-vision" className="section-pad bg-offwhite" aria-label="Mission and vision">
        <div className="container-max">
          <div
            ref={missionRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 translate-y-8 transition-all duration-700"
          >
            {[
              {
                Icon: Target,
                eyebrow: 'Our Mission',
                heading: 'What We Do',
                text: 'To connect quality Indian products with international markets through trust, reliability, and professional global trade — creating lasting value for our suppliers, buyers, and trade partners.',
              },
              {
                Icon: Eye,
                eyebrow: 'Our Vision',
                heading: 'Where We\'re Headed',
                text: 'To build SCARFACE into a trusted global trading partner connecting businesses across borders — known for consistency, integrity, and the quality of everything we export.',
              },
            ].map(({ Icon, eyebrow, heading, text }) => (
              <div key={eyebrow} className="bg-white rounded-2xl p-8 shadow-card border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-navy/8 border border-navy/15 flex items-center justify-center mb-5 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                  <Icon size={22} className="text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-heading font-semibold block mb-2">{eyebrow}</span>
                <h3 className="font-heading font-bold text-navy text-2xl mb-4">{heading}</h3>
                <div className="w-10 h-0.5 bg-gold mb-5" />
                <p className="text-charcoal/70 text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─────────────────────────────────────────────── */}
      <section id="our-values" className="section-pad bg-white" aria-label="Our values">
        <div className="container-max">
          <SectionHeading
            eyebrow="What We Stand For"
            heading="Our Values"
            subheading="The principles that guide every business decision and trade relationship at SCARFACE."
          />
          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 opacity-0 translate-y-8 transition-all duration-700"
          >
            {values.map(({ emoji, title, desc }) => (
              <div key={title} className="card p-6 border border-navy/8 hover:border-gold/30 transition-all duration-300 group flex gap-4">
                <span className="text-2xl flex-shrink-0">{emoji}</span>
                <div>
                  <h3 className="font-heading font-bold text-navy text-base mb-1 group-hover:text-gold transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <CTASection
        heading="Partner With SCARFACE"
        subheading="Connect with us to discuss sourcing, pricing, and export requirements for your business."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="View Our Products"
        secondaryTo="/products"
      />
    </>
  )
}
