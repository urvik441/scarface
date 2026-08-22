import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MapPin, Package, Globe, Tag } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)

  useEffect(() => {
    if (!product) navigate('/products', { replace: true })
  }, [product, navigate])

  if (!product) return null

  const related = getRelatedProducts(product.category, slug)

  return (
    <>
      {/* ─── BREADCRUMB + BACK ─────────────────────────────── */}
      <div className="bg-navy-dark pt-24 pb-6">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-white/50 text-xs font-heading mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gold">{product.name}</span>
          </nav>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-sm font-heading transition-colors duration-200 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* ─── PRODUCT HERO ──────────────────────────────────── */}
      <section id="product-detail-hero" className="bg-navy-dark pb-0" aria-label={`${product.name} details`}>
        <div className="container-max pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-0">
            {/* Image */}
            <div className="relative overflow-hidden rounded-t-2xl lg:rounded-2xl h-72 sm:h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Category */}
              <span className="absolute top-4 left-4 flex items-center gap-1 bg-navy/90 backdrop-blur-sm border border-gold/30 text-gold text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full">
                <Tag size={9} />
                {product.categoryLabel}
              </span>
            </div>

            {/* Info */}
            <div className="py-4 lg:py-8">
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-1.5 text-white/60 text-sm">
                  <MapPin size={13} className="text-gold" />
                  {product.origin}
                </div>
                <div className="flex items-center gap-1.5 text-white/60 text-sm">
                  <Package size={13} className="text-gold" />
                  MOQ: {product.moq}
                </div>
              </div>
              <div className="w-10 h-0.5 bg-gold mb-5" />
              <p className="text-white/70 text-base leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Markets */}
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-3">
                  <Globe size={14} className="text-gold" />
                  <span className="text-gold text-[10px] tracking-widest uppercase font-heading font-semibold">Available Markets</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.markets.map(m => (
                    <span key={m} className="px-3 py-1 rounded-full border border-white/20 text-white/70 text-xs font-heading">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="btn-primary" id="product-enquiry-cta">
                Request a Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DETAILS ─────────────────────────────────────────── */}
      <section id="product-detail-info" className="section-pad bg-offwhite" aria-label="Product specifications">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-navy text-2xl mb-4">Product Description</h2>
              <div className="w-10 h-0.5 bg-gold mb-6" />
              {product.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-charcoal/70 text-base leading-relaxed mb-4">{para}</p>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specifications */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-navy/8">
                <h3 className="font-heading font-bold text-navy text-lg mb-4">Specifications</h3>
                <div className="space-y-3">
                  {product.specifications.map(spec => (
                    <div key={spec.label} className="flex justify-between items-start gap-3 py-2.5 border-b border-navy/6 last:border-0">
                      <span className="text-charcoal/55 text-xs font-semibold tracking-wide uppercase font-heading flex-shrink-0">
                        {spec.label}
                      </span>
                      <span className="text-navy text-sm font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-navy/8">
                <h3 className="font-heading font-bold text-navy text-lg mb-4">Packaging Options</h3>
                <ul className="space-y-2">
                  {product.packaging.map(pkg => (
                    <li key={pkg} className="flex items-start gap-2 text-charcoal/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      {pkg}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick CTA */}
              <div className="bg-navy rounded-2xl p-6 border border-gold/20">
                <h3 className="font-heading font-bold text-white text-base mb-2">Interested in this product?</h3>
                <p className="text-white/60 text-sm mb-4">Send us an enquiry for pricing, samples, and availability.</p>
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ────────────────────────────────── */}
      {related.length > 0 && (
        <section id="related-products" className="section-pad bg-white" aria-label="Related products">
          <div className="container-max">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase font-heading block mb-2">Related</span>
                <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl">Similar Products</h2>
              </div>
              <Link to="/products" className="btn-secondary text-sm hidden sm:flex">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
