import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react'

const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Our Products' },
  { to: '/global-markets', label: 'Global Markets' },
  { to: '/contact', label: 'Contact Us' },
]

const productLinks = [
  { to: '/products/cumin-seeds', label: 'Cumin Seeds' },
  { to: '/products/turmeric', label: 'Turmeric' },
  { to: '/products/groundnut', label: 'Groundnut' },
  { to: '/products/dehydrated-onion', label: 'Dehydrated Onion' },
  { to: '/products/basmati-rice', label: 'Basmati Rice' },
  { to: '/products/sesame-seeds', label: 'Sesame Seeds' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-5 group" aria-label="SCARFACE Home">
              <div
                className="flex items-center justify-center rounded-xl px-4 py-2 transition-all duration-300 group-hover:bg-white/8"
                style={{ background: 'rgba(10, 20, 28, 0.6)' }}
              >
                <img
                  src="/logo.jpg"
                  alt="SCARFACE — The Face of Global Trade"
                  className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  style={{ mixBlendMode: 'screen' }}
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Connecting quality Indian products with international markets through trust, reliability, and professional global trade.
            </p>
            {/* Social */}
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
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {footerNav.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/55 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm tracking-widest uppercase">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/55 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm tracking-widest uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Gujarat, India<br />
                  {/* PLACEHOLDER — replace with actual address */}
                  <span className="text-white/40 text-xs">(Address — placeholder)</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={15} className="text-gold flex-shrink-0" />
                <a href="mailto:info@example.com" className="hover:text-gold transition-colors">
                  info@example.com {/* PLACEHOLDER */}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={15} className="text-gold flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-gold transition-colors">
                  +91 XXXXX XXXXX {/* PLACEHOLDER */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Bottom bar */}
      <div className="container-max py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {currentYear} SCARFACE. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs">
            Gujarat, India · Import &amp; Export
          </p>
        </div>
      </div>
    </footer>
  )
}
