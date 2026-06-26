import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_URL = "/images/e2fdd2dea_AndresBravo805621-4093-1.jpg";

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

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
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-[#0d0d0d] shadow-lg' : 'bg-[#0d0d0d]/90 backdrop-blur-xl'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={LOGO_URL} alt="AFE Pacific Landscape Management" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-grotesk text-sm tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#c8f500]'
                    : 'text-white hover:text-[#c8f500]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18056214093"
              className="font-grotesk text-sm text-[#c8f500] hover:text-[#c8f500]/80 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              (805) 621-4093
            </a>
            <Link to="/contact">
              <Button className="bg-[#c8f500] text-black font-grotesk font-bold text-sm px-6 uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:+18056214093" className="bg-[#c8f500] text-black p-2">
              <Phone className="w-4 h-4" />
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-2">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Lime accent line */}
      <div className="h-[2px] bg-[#c8f500]" />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-[#2a2a2a]">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-grotesk text-lg uppercase tracking-wider ${
                  location.pathname === link.path ? 'text-[#c8f500]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="block pt-4">
              <Button className="w-full bg-[#c8f500] text-black font-grotesk font-bold uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}