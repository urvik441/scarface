import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/global-markets', label: 'Global Markets' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Determine if we're on home page (transparent start)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navBg = isHome
    ? scrolled
      ? 'bg-navy-dark shadow-navy backdrop-blur-sm'
      : 'bg-transparent'
    : 'bg-navy-dark shadow-navy'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container-max">
        <nav className="flex items-center justify-between h-18 py-3" aria-label="Main navigation">
          {/* Logo — shown on dark background pill so white bg of JPEG is hidden */}
          <Link
            to="/"
            className="flex-shrink-0 group flex items-center"
            aria-label="SCARFACE Home"
          >
            <div
              className="flex items-center justify-center rounded-xl px-3 py-1.5 transition-all duration-300 group-hover:bg-white/10"
              style={{ background: 'rgba(15, 28, 35, 0.7)' }}
            >
              <img
                src="/logo.jpg"
                alt="SCARFACE — The Face of Global Trade"
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium font-heading tracking-wide rounded transition-all duration-200
                  ${isActive
                    ? 'text-gold'
                    : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:flex btn-gold-outline text-sm px-5 py-2.5"
              id="navbar-cta"
            >
              Get in Touch
            </Link>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:text-gold transition-colors duration-200"
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
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-navy-dark border-t border-white/10`}
      >
        <div className="container-max py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 text-base font-medium font-heading tracking-wide rounded transition-all duration-200 ${
                  isActive ? 'text-gold bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-white/10 mt-2">
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
