import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, Globe, ShieldCheck,
  Truck, Package, MessageCircle, Handshake, Award, Clock,
  BadgePercent
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import StatCounter from '../components/StatCounter'
import CTASection from '../components/CTASection'
import { products } from '../data/products'

/* ─── Fade-in hook ───────────────────────────────────────────────────── */
function useFadeIn(threshold = 0.15) {
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

/* ─── WHY CHOOSE DATA ────────────────────────────────────────────────── */
const whyData = [
  {
    Icon: Award,
    title: 'Quality First',
    desc: 'We focus on consistent quality sourcing through established supplier networks and quality checks.',
  },
  {
    Icon: Globe,
    title: 'Global Standards',
    desc: 'Products and processes aligned with international food safety and trade documentation requirements.',
  },
  {
    Icon: BadgePercent,
    title: 'Competitive Pricing',
    desc: 'We offer competitive pricing backed by reliable sourcing and efficient supply-chain management. Our flexible pricing ensures excellent value while maintaining consistent product quality and export standards.',
  },
  {
    Icon: Truck,
    title: 'Efficient Logistics',
    desc: 'Coordinated shipping and documentation support for smoother international trade and delivery. We work toward dependable sourcing continuity so buyers receive consistent quantities on schedule.',
  },
  {
    Icon: MessageCircle,
    title: 'Transparent Communication',
    desc: 'Clear communication at every stage — from inquiry and sampling to shipment and payment.',
  },
  {
    Icon: Handshake,
    title: 'Long-Term Partnerships',
    desc: 'We aim to build lasting buyer-supplier relationships built on mutual trust and reliability.',
  },
]

/* ─── HOW WE WORK DATA ──────────────────────────────────────────────── */
const stepsData = [
  {
    num: '01',
    title: 'Source',
    desc: 'Identify reliable suppliers, evaluate quality, and establish dependable sourcing channels across India. We also source the best-quality raw materials directly from farmers and inspect all materials carefully to ensure quality and consistency.',
  },
  {
    num: '02',
    title: 'Quality Verification',
    desc: 'Ensure quality through detailed inspections, specifications review, and advanced Sortex machine cleaning. Our modern cleaning process reduces manual handling and helps deliver clean, consistent, and export-ready materials.',
  },
  {
    num: '03',
    title: 'Packaging',
    desc: 'Packaging and fumigation processes are handled in a hygienic and contamination-free environment to preserve freshness, aroma, and quality. We utilise food-grade materials and follow industry best practices to ensure products remain safe, clean, and suitable for international shipping.',
  },
  {
    num: '04',
    title: 'Delivery',
    desc: 'Coordinate logistics, customs clearance, freight arrangements, and international shipping documentation to ensure a smooth and efficient export process from India.',
  },
]

/* ─── STATS DATA ─────────────────────────────────────────────────────── */
const statsData = [
  { value: '10', suffix: '+', label: 'Product Categories' },
  { value: '6', suffix: '', label: 'Global Regions' },
  { value: '100', suffix: '%', label: 'Commitment to Quality' },
  { value: '24/7', suffix: '', label: 'Global Communication' },
]

/* ════════════════════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const introRef = useFadeIn()
  const whyRef = useFadeIn()
  const stepsRef = useFadeIn()

  const featuredProducts = products.slice(0, 6)

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=85')`,
          }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

        {/* Content */}
        <div className="container-max relative z-10 pt-24 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase font-heading">
                Gujarat, India · Global Trade
              </span>
              <span className="h-px w-10 bg-gold/60" />
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Connecting{' '}
              <span className="gold-shimmer">Gujarat</span>
              <br />
              to the World.
            </h1>

            {/* Subtext */}
            <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              SCARFACE is an India-based import and export company connecting quality products with trusted international buyers across South America, Europe, Africa, Asia, North America, and Central America.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" id="hero-cta-products" className="btn-primary text-base px-8 py-4">
                Explore Our Products
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" id="hero-cta-contact" className="btn-ghost-light text-base px-8 py-4">
                Contact Us
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center mt-16 gap-2 text-white/40">
              <span className="text-xs tracking-widest uppercase font-heading">Scroll to explore</span>
              <ChevronDown size={16} className="animate-bounce" />
            </div>
          </div>
        </div>

        {/* Bottom gold gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite to-transparent" aria-hidden="true" />
      </section>

      {/* ─── BRAND INTRO ─────────────────────────────────────────── */}
      <section id="brand-intro" className="section-pad bg-offwhite" aria-label="Brand introduction">
        <div className="container-max">
          <div
            ref={introRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-0 translate-y-8 transition-all duration-700"
          >
            {/* Left — Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-navy">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
                  alt="International trade and logistics operations"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
                {/* Origin badge */}
                <div className="absolute bottom-5 left-5 bg-navy/90 backdrop-blur-sm border border-gold/30 rounded-xl px-5 py-3">
                  <span className="text-gold text-[10px] tracking-widest uppercase font-semibold block">Origin</span>
                  <span className="text-white font-heading font-bold text-lg">Gujarat, India</span>
                </div>
              </div>
              {/* Decorative gold border frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold/25 rounded-2xl -z-10" />
            </div>

            {/* Right — Content */}
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase font-heading block mb-3">
                Who We Are
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight mb-2">
                From Gujarat to
              </h2>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight mb-5">
                <span className="gold-shimmer">Global Markets</span>
              </h2>
              <div className="w-14 h-0.5 bg-gold mb-6" />
              <p className="text-charcoal/70 text-base leading-relaxed mb-5">
                SCARFACE connects manufacturers, suppliers, buyers, and international markets through reliable import-export operations — with Gujarat as our home and the world as our market.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Quality sourcing from established suppliers',
                  'International food safety and trade standards',
                  'Professional export documentation',
                  'Long-term buyer-supplier partnerships',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal/75 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                About SCARFACE
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ────────────────────────────────────── */}
      <section id="products-home" className="section-pad bg-white" aria-label="Featured products">
        <div className="container-max">
          <SectionHeading
            eyebrow="What We Export"
            heading="Our Products"
            subheading="From India's finest spices to premium agricultural commodities — we source, verify, and export quality products to international buyers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className="opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
                ref={(el) => {
                  if (!el) return
                  const obs = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        el.classList.add('opacity-100', 'translate-y-0')
                        el.classList.remove('opacity-0', 'translate-y-8')
                        obs.unobserve(el)
                      }
                    },
                    { threshold: 0.1 }
                  )
                  obs.observe(el)
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATISTICS ──────────────────────────────────────────── */}
      <section
        id="statistics"
        className="section-pad relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1F4050 0%, #0B1C25 100%)' }}
        aria-label="Company statistics"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gold" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container-max relative z-10">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase font-heading">By The Numbers</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              SCARFACE at a Glance
            </h2>
            <p className="text-white/50 text-xs mt-2">(Placeholder figures — to be updated)</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {statsData.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ──────────────────────────────────────── */}
      <section id="why-us-home" className="section-pad bg-offwhite" aria-label="Why choose SCARFACE">
        <div className="container-max">
          <SectionHeading
            eyebrow="Why SCARFACE"
            heading="Why Choose Us"
            subheading="Built on trust, reliability, and quality — here is what makes SCARFACE a preferred trading partner."
          />
          <div
            ref={whyRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700"
          >
            {whyData.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="card p-7 border border-gold/10 hover:border-gold/35 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/8 border border-navy/15 flex items-center justify-center mb-5 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                  <Icon size={22} className="text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-charcoal/65 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ────────────────────────────────────────── */}
      <section id="how-we-work" className="section-pad bg-white" aria-label="How SCARFACE works">
        <div className="container-max">
          <SectionHeading
            eyebrow="Our Process"
            heading="How We Work"
            subheading="From sourcing to delivery, every step is handled with care and professionalism."
          />
          <div
            ref={stepsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative opacity-0 translate-y-8 transition-all duration-700"
          >
            {stepsData.map(({ num, title, desc }, i) => (
              <div key={num} className="relative group">
                {/* Connector line */}
                {i < stepsData.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold/50 to-gold/10 z-0 -translate-x-4" />
                )}
                <div className="relative z-10 card p-7 border border-navy/8 hover:border-gold/30 transition-all duration-300">
                  <span className="block font-heading font-extrabold text-5xl text-navy/8 leading-none mb-3 group-hover:text-gold/20 transition-colors duration-300">
                    {num}
                  </span>
                  <h3 className="font-heading font-bold text-navy text-xl mb-3">{title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
                  <div className="mt-4 w-8 h-0.5 bg-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── CTA BANNER ─────────────────────────────────────────── */}
      <CTASection
        heading="Let's Build Global Connections."
        subheading="Reach out to SCARFACE today and take the first step toward a reliable international trade partnership."
        primaryLabel="Send an Enquiry"
        primaryTo="/contact"
        secondaryLabel="Explore Our Products"
        secondaryTo="/products"
      />
    </>
  )
}
