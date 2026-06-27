import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const LOGO_URL = '/images/77f4b8ab5_Voshal_logo_transparent.png';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E5]"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={LOGO_URL} alt="Voshal Integrated Plumbing Inc." className="w-auto" style={{ height: '64px', filter: 'invert(0)' }} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-sand'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Phone Button */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:8054007880"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg bg-charcoal text-white"
          >
            <Phone className="w-4 h-4" />
            (805) 400-7880
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-charcoal" />
          ) : (
            <Menu className="w-6 h-6 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-xl`}
      >
        <div className="px-5 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 text-sm font-medium tracking-wide uppercase border-b border-black/5 ${
                location.pathname === link.path ? 'text-charcoal' : 'text-charcoal/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:8054007880"
            className="flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-charcoal text-white text-sm font-semibold tracking-wide"
          >
            <Phone className="w-4 h-4" />
            (805) 400-7880
          </a>
        </div>
      </div>
    </nav>
  );
}