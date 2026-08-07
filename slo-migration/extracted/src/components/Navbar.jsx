import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Get a Quote', path: '/quote' }];


  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start shrink-0">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl lg:text-2xl font-black tracking-tight" style={{ color: '#CC0000' }}>SLO SEPTIC</span>
              <span className="text-xl lg:text-2xl font-black tracking-tight text-white">PUMPING LLC</span>
            </div>
            <span className="text-xs text-gray-400 -mt-1 hidden sm:block">Septic & Sewer Services</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
              isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'}`
              }>
              
                {link.label}
              </Link>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full blink-led" style={{ backgroundColor: '#22c55e' }}></span>
              <span className="text-xs text-gray-400 font-medium">Open 24/7</span>
            </div>
            <a
              href="tel:8058008931"
              className="text-white px-5 py-2.5 text-sm font-bold rounded flex items-center gap-2 pulse-red transition-transform hover:scale-105 whitespace-nowrap"
              style={{ backgroundColor: '#CC0000' }}>
              <Phone className="w-4 h-4 shrink-0" />
              Call Now: (805) 800-8931
            </a>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:8058008931" className="flex items-center gap-1.5 px-3 py-2 font-bold text-white text-xs rounded"
            style={{ backgroundColor: '#CC0000' }}>
              <Phone className="w-3.5 h-3.5" />
              <span>(805) 800-8931</span>
            </a>
            <button onClick={() => setOpen(!open)} className="text-white p-1">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open &&
      <div className="lg:hidden border-t border-gray-800" style={{ backgroundColor: '#111111' }}>
          <div className="px-4 py-4 space-y-1">
            {links.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`block px-3 py-3 text-sm font-semibold uppercase tracking-wider rounded transition-colors ${
            isActive(link.path) ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`
            }>
            
                {link.label}
              </Link>
          )}
          </div>
        </div>
      }
    </nav>);

}