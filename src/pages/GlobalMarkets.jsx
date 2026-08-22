import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0')
        el.classList.remove('opacity-0', 'translate-y-8')
        obs.unobserve(el)
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const markets = [
  {
    region: 'Middle East',
    countries: 'UAE, Saudi Arabia, Kuwait, Qatar, Oman, Bahrain',
    products: 'Spices, Rice, Pulses, Dehydrated Products',
    flag: '🌙',
    color: 'from-amber-900/20 to-amber-800/10',
    desc: 'The Middle East is one of India\'s largest trading partners, with strong demand for spices, rice, and agricultural commodities.',
  },
  {
    region: 'Africa',
    countries: 'Nigeria, Ghana, Kenya, South Africa, Ethiopia, Tanzania',
    products: 'Rice, Pulses, Groundnut, Sesame Seeds',
    flag: '🌍',
    color: 'from-emerald-900/20 to-emerald-800/10',
    desc: 'A fast-growing market with increasing demand for quality Indian food products, rice varieties, and oilseeds.',
  },
  {
    region: 'Europe',
    countries: 'Germany, UK, Netherlands, France, Spain, Italy',
    products: 'Organic Spices, Dehydrated Products, Sesame Seeds',
    flag: '🇪🇺',
    color: 'from-blue-900/20 to-blue-800/10',
    desc: 'Europe demands high-quality, food-safe products with complete traceability — a market we are actively developing.',
  },
  {
    region: 'Southeast Asia',
    countries: 'Vietnam, Thailand, Malaysia, Indonesia, Philippines',
    products: 'Groundnut, Sesame Seeds, Spices',
    flag: '🌏',
    color: 'from-red-900/20 to-red-800/10',
    desc: 'Growing demand for Indian oilseeds and spices as food processing industries expand across Southeast Asia.',
  },
  {
    region: 'North America',
    countries: 'USA, Canada',
    products: 'Spices, Basmati Rice, Dehydrated Products',
    flag: '🌎',
    color: 'from-indigo-900/20 to-indigo-800/10',
    desc: 'The Indian diaspora and growing multicultural food trends drive significant demand for Indian products in North America.',
  },
  {
    region: 'Asia Pacific',
    countries: 'Japan, South Korea, Australia, China',
    products: 'Sesame Seeds, Spices, Groundnut',
    flag: '🌐',
    color: 'from-teal-900/20 to-teal-800/10',
    desc: 'A premium market segment with high quality requirements and growing appetite for Indian specialty foods and ingredients.',
  },
]

/* Simple SVG world map representation */
function WorldMapSVG() {
  const dots = [
    // India (origin)
    { cx: 68, cy: 46, r: 4, color: '#C6A05F', label: 'India (Origin)', isPrimary: true },
    // Middle East
    { cx: 60, cy: 40, r: 2.5, color: '#C6A05F', label: 'Middle East' },
    // Africa
    { cx: 52, cy: 55, r: 2.5, color: '#C6A05F', label: 'Africa' },
    // Europe
    { cx: 50, cy: 30, r: 2.5, color: '#C6A05F', label: 'Europe' },
    // Southeast Asia
    { cx: 80, cy: 52, r: 2.5, color: '#C6A05F', label: 'SE Asia' },
    // North America
    { cx: 20, cy: 35, r: 2.5, color: '#C6A05F', label: 'North America' },
    // Asia Pacific
    { cx: 88, cy: 45, r: 2.5, color: '#C6A05F', label: 'Asia Pacific' },
  ]

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Map background */}
      <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-navy">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
          alt="World map showing SCARFACE global trade routes"
          className="w-full h-72 sm:h-96 object-cover opacity-40"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/60" />

        {/* SVG dots overlay */}
        <svg
          viewBox="0 0 100 70"
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'drop-shadow(0 0 4px rgba(198,160,95,0.6))' }}
        >
          {/* Lines from India to markets */}
          {dots.slice(1).map(d => (
            <line
              key={d.label}
              x1="68" y1="46"
              x2={d.cx} y2={d.cy}
              stroke="#C6A05F"
              strokeWidth="0.3"
              strokeDasharray="1 1"
              strokeOpacity="0.5"
            />
          ))}
          {/* Market dots */}
          {dots.map(d => (
            <g key={d.label}>
              {d.isPrimary && (
                <circle cx={d.cx} cy={d.cy} r={d.r + 3} fill="rgba(198,160,95,0.2)" />
              )}
              <circle cx={d.cx} cy={d.cy} r={d.r} fill={d.color} />
              {d.isPrimary && (
                <circle cx={d.cx} cy={d.cy} r={d.r - 1} fill="#fff" fillOpacity="0.6" />
              )}
            </g>
          ))}
        </svg>

        {/* India label */}
        <div className="absolute" style={{ left: '66%', top: '58%', transform: 'translate(-50%, -50%)' }}>
          <div className="bg-gold/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-gold/40 shadow-gold">
            <p className="text-navy font-heading font-bold text-[10px] tracking-widest">INDIA</p>
            <p className="text-navy/70 text-[8px]">Origin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GlobalMarkets() {
  const mapRef = useFadeIn()
  const marketsRef = useFadeIn()

  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B1C25 0%, #1F4050 100%)' }}
        aria-label="Global markets page hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')` }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-max relative z-10 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase font-heading block mb-4">Worldwide Presence</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight">
            Our Global Reach
          </h1>
          <div className="w-14 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-white/65 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From Gujarat, India to markets across five continents — SCARFACE connects quality Indian products with the world.
          </p>
        </div>
      </section>

      {/* ─── WORLD MAP ──────────────────────────────────────── */}
      <section id="world-map" className="section-pad bg-navy" aria-label="World trade map">
        <div className="container-max">
          <SectionHeading
            eyebrow="Trade Routes"
            heading="India to the World"
            subheading="Our origin is Gujarat, India. Our markets span the globe."
            theme="light"
          />
          <div
            ref={mapRef}
            className="opacity-0 translate-y-8 transition-all duration-700"
          >
            <WorldMapSVG />
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="flex items-center gap-2 text-white/60 text-xs font-heading">
                <div className="w-3 h-3 rounded-full bg-gold" />
                Origin — Gujarat, India
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs font-heading">
                <div className="w-2 h-2 rounded-full bg-gold/70" />
                Target / Current Markets
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs font-heading">
                <div className="w-8 h-px border-t border-dashed border-gold/60" />
                Trade Routes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARKET CARDS ──────────────────────────────────── */}
      <section id="market-regions" className="section-pad bg-offwhite" aria-label="Market regions">
        <div className="container-max">
          <SectionHeading
            eyebrow="Market Regions"
            heading="Where We Export"
            subheading="These represent our target and current markets. Market presence is being expanded and updated continually."
          />
          <div
            ref={marketsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700"
          >
            {markets.map(({ region, countries, products: prods, flag, desc }) => (
              <div
                key={region}
                className="card p-7 border border-navy/8 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{flag}</span>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-xl group-hover:text-gold transition-colors duration-300">
                      {region}
                    </h3>
                    <div className="w-8 h-0.5 bg-gold mt-1" />
                  </div>
                </div>
                <p className="text-charcoal/65 text-sm leading-relaxed mb-4">{desc}</p>

                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-charcoal/40 font-heading block mb-1">Countries</span>
                    <p className="text-charcoal/70 text-xs">{countries}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-charcoal/40 font-heading block mb-1">Key Products</span>
                    <p className="text-charcoal/70 text-xs">{prods}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-charcoal/40 text-xs mt-10">
            * Market information represents target/potential markets. Presence is placeholder for first website version.
          </p>
        </div>
      </section>

      {/* ─── ORIGIN HIGHLIGHT ──────────────────────────────── */}
      <section
        id="india-origin"
        className="section-pad relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #152D3A 0%, #1F4050 100%)' }}
        aria-label="India origin section"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase font-heading block mb-3">Our Advantage</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-5 leading-tight">
              Gujarat — India's Trade Gateway
            </h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Gujarat is home to Mundra — India's largest commercial port — and Kandla Port. This gives SCARFACE a significant logistical advantage for faster, more cost-effective shipments to global markets.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { icon: '🚢', label: 'Port Access', value: 'Mundra & Kandla' },
                { icon: '✈️', label: 'Air Freight', value: 'Ahmedabad Airport' },
                { icon: '🌾', label: 'Agricultural Hub', value: 'Saurashtra Region' },
                { icon: '🏭', label: 'Processing', value: 'Mahuva & Rajkot' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-white/8 border border-white/15 rounded-xl p-4 text-center hover:border-gold/30 transition-all duration-300">
                  <span className="text-2xl block mb-2">{icon}</span>
                  <p className="text-gold text-[9px] tracking-widest uppercase font-heading font-semibold mb-1">{label}</p>
                  <p className="text-white text-xs font-heading font-medium">{value}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary">
              Enquire About Exporting
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Import From India?"
        subheading="Connect with SCARFACE for sourcing, pricing, and shipping information to your market."
      />
    </>
  )
}
