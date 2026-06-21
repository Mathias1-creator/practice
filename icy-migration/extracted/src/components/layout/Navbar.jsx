import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import AlpineLogo from '@/components/shared/AlpineLogo';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      if (currentY > lastScrollY && currentY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHidden && !mobileOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div
        className="transition-all duration-300"
        style={{ backgroundColor: '#1B3A2D' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo — light variant = white trees/text for dark navbar bg */}
            <AlpineLogo variant="light" height={48} linkTo="/" />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-outfit text-sm tracking-wide transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-alpine-terra'
                      : 'text-white/90 hover:text-alpine-terra'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-alpine-green text-white font-outfit text-sm px-5 py-2.5 rounded-lg hover:bg-alpine-green/90 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+16265595946"
                className="flex items-center gap-1.5 text-alpine-terra font-outfit text-sm hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                (626) 559-5946
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Terracotta accent line */}
        <div className="h-[2px] bg-alpine-terra" />
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-alpine-charcoal/95 backdrop-blur-[16px] border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-outfit text-base py-2 ${
                  location.pathname === link.path
                    ? 'text-alpine-terra'
                    : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-white/10">
              <a
                href="tel:+16265595946"
                className="flex items-center justify-center gap-2 w-full bg-alpine-terra text-white font-outfit py-3 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                (626) 559-5946
              </a>
              <Link
                to="/contact"
                className="block text-center w-full bg-alpine-green text-white font-outfit py-3 rounded-lg"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}