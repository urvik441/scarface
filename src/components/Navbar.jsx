import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, FileDown } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Determine navbar theme (Light background when scrolled or on non-home pages)
  const isLight = scrolled || !isHome

  const navBg = isHome
    ? scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-navy/10'
      : 'bg-transparent border-b border-transparent shadow-none'
    : 'bg-white/95 backdrop-blur-md shadow-md border-b border-navy/10'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${navBg}`}>
      <div className="container-max">
        <nav className="flex items-center justify-between h-20 py-3" aria-label="Main navigation">
          {/* Logo — Direct transparent PNG with optimal sizing */}
          <Link to="/" className="flex-shrink-0 group" aria-label="SCARFACE Home">
            <img
              src="/SCARFACE_TM.png"
              alt="SCARFACE — The Face of Global Trade"
              className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${!isLight ? 'drop-shadow-[0_1px_4px_rgba(255,255,255,0.85)]' : ''
                }`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-heading tracking-wide rounded transition-all duration-200 ${isLight
                    ? isActive
                      ? 'text-gold font-bold'
                      : 'text-navy font-semibold hover:text-gold'
                    : isActive
                      ? 'text-gold font-bold'
                      : 'text-white/90 font-medium hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/Scarface-Overseas-Company-Profile.pdf"
              download="Scarface-Overseas-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-heading font-semibold px-3.5 py-2 rounded-lg border transition-all duration-300 ${isLight
                ? 'border-gold/50 text-navy hover:bg-gold/15 hover:border-gold shadow-sm'
                : 'border-gold/40 text-white/95 hover:bg-gold/15 hover:border-gold'
                }`}
              id="navbar-download-catalog"
              title="Download Company Profile (PDF)"
            >
              <FileDown size={15} className="text-gold" />
              <span>Brochure</span>
            </a>

            <Link
              to="/contact"
              className={`hidden lg:flex text-sm px-5 py-2.5 ${isLight ? 'btn-secondary' : 'btn-gold-outline'
                }`}
              id="navbar-cta"
            >
              Get in Touch
            </Link>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-200 ${isLight ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'
                }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } ${isLight ? 'bg-white border-t border-navy/10' : 'bg-navy-dark border-t border-white/10'}`}
      >
        <div className="container-max py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 text-base font-medium font-heading tracking-wide rounded transition-all duration-200 ${isLight
                  ? isActive
                    ? 'text-gold bg-navy/5 font-bold'
                    : 'text-navy hover:text-gold hover:bg-navy/5'
                  : isActive
                    ? 'text-gold bg-white/5 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className={`pt-3 border-t mt-2 flex flex-col gap-2.5 ${isLight ? 'border-navy/10' : 'border-white/10'}`}>
            <a
              href="/Scarface-Overseas-Company-Profile.pdf"
              download="Scarface-Overseas-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-gold/50 text-gold text-sm font-heading font-semibold hover:bg-gold/10 transition-colors"
              id="mobile-download-catalog"
            >
              <FileDown size={16} />
              Download Company Profile (PDF)
            </a>
            <Link
              to="/contact"
              className="btn-primary w-full text-center"
              id="mobile-contact-cta"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
