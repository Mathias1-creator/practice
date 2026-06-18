import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import useMagneticButton from '../../hooks/useMagneticButton';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const magneticCallRef = useMagneticButton({ strength: 0.25, radius: 80 });

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 50) {
        setIsVisible(true);
      } else if (currentY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      style={{ backgroundColor: '#0A0A0A' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="https://media.base44.com/images/public/6a174d91ad108cbaff5bbd34/f2bbb9249_Screenshot2026-05-28at25122PM.png"
                alt="Ray Espinoza Plumbing"
                style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-dm font-medium text-sm tracking-wide uppercase transition-colors duration-200 nav-link-underline${isActive ? ' is-active' : ''}`}
                    style={{ color: '#FFFFFF', paddingBottom: '4px' }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#CC2200'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#FFFFFF'; }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative w-2.5 h-2.5">
                  <div className="absolute inset-0 bg-ray-red rounded-full"></div>
                  <div className="absolute inset-0 bg-ray-red rounded-full pulse-dot"></div>
                </div>
                <span className="font-dm text-xs font-semibold text-ray-red uppercase tracking-wider">24/7</span>
              </div>
              <a
                ref={magneticCallRef}
                href="tel:+18058352196"
                className="bg-ray-red text-white font-dm font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center gap-2"
                style={{ display: 'inline-flex' }}
              >
                <Phone className="w-4 h-4" />
                Call Now — (805) 835-2196
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Red accent line */}
        <div style={{ height: '2px', backgroundColor: '#CC2200' }}></div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: '#0A0A0A' }} className="lg:hidden border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-dm font-medium py-3 px-3 rounded-md transition-colors"
                  style={{
                    fontSize: '16px',
                    color: isActive ? '#CC2200' : '#FFFFFF',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+18058352196"
              className="flex items-center justify-center gap-2 w-full font-dm font-semibold text-white text-center py-3.5 rounded-md mt-4 hover:bg-red-700 transition-colors"
              style={{ backgroundColor: '#CC2200' }}
            >
              <Phone className="w-5 h-5" />
              Call Now — (805) 835-2196
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}