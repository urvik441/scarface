import { Link } from 'react-router-dom'
import { ArrowRight, Tag } from 'lucide-react'

/**
 * ProductCard component
 * 
 * @param {object} product - Product data object from products.js
 */
export default function ProductCard({ product }) {
  const { name, slug, category, categoryLabel, shortDescription, image } = product

  return (
    <article className="card group overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 flex items-center gap-1 bg-navy/90 backdrop-blur-sm text-gold text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
          <Tag size={9} />
          {categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-navy text-lg mb-2 leading-snug group-hover:text-gold transition-colors duration-300">
          {name}
        </h3>
        <p className="text-charcoal/65 text-sm leading-relaxed flex-1 mb-4">
          {shortDescription}
        </p>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-gold/40 to-transparent mb-4" />

        <Link
          to={`/products/${slug}`}
          className="inline-flex items-center gap-2 text-navy font-semibold font-heading text-sm hover:text-gold transition-colors duration-300 group/link"
          aria-label={`View details for ${name}`}
        >
          View Details
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  )
}
