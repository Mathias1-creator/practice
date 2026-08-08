import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (currentY > 50) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'shadow-sm' : ''}`}
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #e4dcd4',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className="font-heading italic font-semibold"
              style={{ fontSize: '1.6rem', color: '#1e1e1e', letterSpacing: '-0.01em' }}
            >
              Garden Chic <span style={{ color: '#c9547a' }}>Landscaping</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body font-semibold text-sm transition-colors duration-300"
                style={{
                  color: location.pathname === link.path ? '#c9547a' : '#5a5a5a',
                }}
                onMouseEnter={(e) => { if (location.pathname !== link.path) e.target.style.color = '#c9547a'; }}
                onMouseLeave={(e) => { if (location.pathname !== link.path) e.target.style.color = '#5a5a5a'; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:8058969695"
              className="flex items-center gap-2 font-body text-sm font-semibold transition-colors duration-300"
              style={{ color: '#5a5a5a' }}
            >
              <Phone className="w-4 h-4" style={{ color: '#6b9b6b' }} />
              (805) 896-9695
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-body font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ background: '#c9547a', borderRadius: '6px' }}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            style={{ color: '#1e1e1e' }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 pb-6 pt-4"
          style={{ background: 'rgba(255,255,255,0.98)', borderColor: '#e4dcd4' }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body font-semibold text-base py-2"
                style={{ color: location.pathname === link.path ? '#c9547a' : '#5a5a5a' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8058969695"
              className="flex items-center gap-2 font-body text-sm font-semibold py-2"
              style={{ color: '#5a5a5a' }}
            >
              <Phone className="w-4 h-4" style={{ color: '#6b9b6b' }} />
              (805) 896-9695
            </a>
            <Link
              to="/contact"
              className="text-center px-5 py-3 text-sm font-body font-semibold text-white"
              style={{ background: '#c9547a', borderRadius: '6px' }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}