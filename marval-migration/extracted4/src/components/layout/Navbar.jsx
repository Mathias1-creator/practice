import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Get a Free Quote', path: '/contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsVisible(currentY < lastScrollY || currentY < 80);
      setIsScrolled(currentY > 20);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl backdrop-saturate-150 shadow-lg border-b border-stone/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/images/7585689fd_Marvallandscaping_logo.jpg"
                alt="Marval Landscaping Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block">
                <p className={`font-playfair font-bold text-lg leading-tight ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
                  Marval
                </p>
                <p className={`text-[10px] uppercase tracking-[0.2em] ${isScrolled ? 'text-stone' : 'text-white/70'}`}>
                  Landscaping
                </p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    location.pathname === link.path
                      ? isScrolled ? 'text-forest' : 'text-white'
                      : isScrolled ? 'text-charcoal/70 hover:text-forest' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-forest transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Phone Button + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:8056022230"
                className="hidden md:flex items-center gap-2 bg-forest text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-forest/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-forest/25"
              >
                <Phone className="w-4 h-4" />
                (805) 602-2230
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-charcoal' : 'text-white'}`}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-playfair font-semibold py-3 border-b border-stone/20 ${
                    location.pathname === link.path ? 'text-forest' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:8056022230"
                className="mt-4 flex items-center justify-center gap-2 bg-forest text-white px-6 py-4 rounded-full text-lg font-semibold"
              >
                <Phone className="w-5 h-5" />
                (805) 602-2230
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}