import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react'
import { products } from '../data/products'
import { companyDetails } from '../data/company'

const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Our Products' },
  { to: '/contact', label: 'Contact Us' },
]

const productLinks = products.slice(0, 6).map(p => ({
  to: `/products/${p.slug}`,
  label: p.name,
}))

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F7F8FA] text-charcoal border-t border-navy/10" aria-label="Site footer">
      {/* Main footer section (Light background for crisp logo visibility) */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-5 group" aria-label="SCARFACE Home">
              <img
                src="/logo.png"
                alt="SCARFACE — The Face of Global Trade"
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
              Connecting quality Indian products with international markets through trust, reliability, and professional global trade.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Twitter, label: 'Twitter', href: '#' },
                { Icon: Instagram, label: 'Instagram', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`SCARFACE on ${label}`}
                  className="w-9 h-9 rounded-full border border-navy/20 flex items-center justify-center text-navy/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-navy mb-5 text-sm tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {footerNav.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-charcoal/70 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200 text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="font-heading font-bold text-navy mb-5 text-sm tracking-widest uppercase">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-charcoal/70 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200 text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-navy mb-5 text-sm tracking-widest uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-charcoal/75 text-sm">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-navy">{companyDetails.location}</strong><br />
                  <span className="text-charcoal/60 text-xs leading-snug block mt-0.5">{companyDetails.fullAddress}</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-charcoal/75 text-sm">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-gold font-medium transition-colors">
                  {companyDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-charcoal/75 text-sm">
                <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="hover:text-gold font-medium transition-colors block">
                    {companyDetails.phone}
                  </a>
                  <a href={`tel:${companyDetails.phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-gold font-medium transition-colors block">
                    {companyDetails.phoneSecondary}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Gold Accent Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Bottom Bar (Navy Dark Footer Anchor) */}
      <div className="bg-navy-dark text-white/70 py-5">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">
            © {currentYear} <span className="text-gold font-semibold">SCARFACE</span>. All Rights Reserved.
          </p>
          <p className="text-white/40 text-xs">
            Gujarat, India · Import &amp; Export
          </p>
        </div>
      </div>
    </footer>
  )
}
