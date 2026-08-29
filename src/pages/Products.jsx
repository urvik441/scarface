import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { products, categories, getProductsByCategory } from '../data/products'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [animKey, setAnimKey] = useState(0)

  // Debounce search input by 250ms
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 250)
    return () => clearTimeout(timer)
  }, [searchQuery])

  useEffect(() => {
    const filtered = getProductsByCategory(activeCategory).filter(p =>
      p.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(debouncedQuery.toLowerCase())
    )
    setFilteredProducts(filtered)
    setAnimKey(k => k + 1)
  }, [activeCategory, debouncedQuery])

  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B1C25 0%, #1F4050 100%)' }}
        aria-label="Products page hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=1920&q=80')` }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-max relative z-10 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase font-heading block mb-4">Export Portfolio</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight">
            Our Products
          </h1>
          <div className="w-14 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-white/65 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Premium quality Indian products sourced, verified, and exported to international buyers worldwide.
          </p>
        </div>
      </section>

      {/* ─── FILTER & GRID ─────────────────────────────────── */}
      <section id="products-grid" className="section-pad bg-offwhite" aria-label="Product catalog">
        <div className="container-max">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-10">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              id="product-search"
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-navy/15 rounded-xl text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all duration-300"
              aria-label="Search products"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12" role="tablist" aria-label="Product categories">
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                id={`cat-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold font-heading tracking-wide transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-navy text-white shadow-navy'
                    : 'bg-white text-charcoal/70 hover:text-navy border border-navy/15 hover:border-navy/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-center text-charcoal/50 text-sm mb-8">
            Showing <strong className="text-navy">{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div key={animKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, i) => (
                <div
                  key={product.id}
                  className="opacity-0 translate-y-6 transition-all duration-500"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  ref={el => {
                    if (!el) return
                    requestAnimationFrame(() => {
                      el.classList.add('opacity-100', 'translate-y-0')
                      el.classList.remove('opacity-0', 'translate-y-6')
                    })
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-charcoal/50 text-lg font-heading">No products found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
                className="btn-primary mt-6"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <CTASection
        heading="Looking for a Specific Product?"
        subheading="Can't find what you need? Contact us — we may be able to source additional products on request."
        primaryLabel="Send an Enquiry"
        primaryTo="/contact"
        secondaryLabel="About SCARFACE"
        secondaryTo="/about"
      />
    </>
  )
}
