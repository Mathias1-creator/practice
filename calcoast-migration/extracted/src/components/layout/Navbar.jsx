import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = "/images/dfe294d37_B12D02B3-388F-4513-9216-4DB4F9F27A4A.png";

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact & Book', path: '/contact' },
];

const BOOK_PATH = '/contact';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setVisible(currentY < lastScrollY || currentY < 60);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-charcoal/85 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={LOGO_URL} alt="Cal Coast Hardscape & Irrigation" className="h-16 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-white bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to={BOOK_PATH}
                className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full hover:scale-103 active:scale-97 transition-transform duration-200 shadow-md"
                style={{ backgroundColor: '#C4A882', color: '#2B2B2B' }}
              >
                Book an Appointment
              </Link>
              <a
                href="tel:+18058066476"
                className="inline-flex items-center gap-2 bg-forest text-white font-bold text-sm px-5 py-2.5 rounded-full hover:scale-103 active:scale-97 transition-transform duration-200 shadow-lg shadow-forest/30"
              >
                <Phone className="w-4 h-4" />
                (805) 806-6476
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+18058066476"
                className="inline-flex items-center gap-1.5 bg-forest text-white font-bold text-xs px-3 py-2 rounded-full"
              >
                <Phone className="w-3.5 h-3.5" />
                Call
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-2">
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-bold py-4 border-b border-white/10 ${
                    location.pathname === link.path ? 'text-stone' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={BOOK_PATH}
                className="mt-6 flex items-center justify-center font-bold text-lg py-4 rounded-2xl"
                style={{ backgroundColor: '#C4A882', color: '#2B2B2B' }}
              >
                Book an Appointment
              </Link>
              <a
                href="tel:+18058066476"
                className="mt-3 flex items-center justify-center gap-2 bg-forest text-white font-bold text-lg py-4 rounded-2xl"
              >
                <Phone className="w-5 h-5" />
                (805) 806-6476
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}