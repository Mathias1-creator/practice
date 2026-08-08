import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO_URL = '/images/d71be5701_wileman_logo_transparent.png';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 60) {
        // scrolling down past threshold — hide
        setHidden(true);
      } else if (current < lastScroll.current) {
        // any upward scroll — show immediately
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className="fixed left-0 right-0 z-[1000] transition-transform duration-[400ms] ease-in-out"
      style={{
        top: '0px',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        backgroundColor: '#060d18',
        borderBottom: '1px solid rgba(91,200,245,0.15)',
        height: '68px',
      }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-12 max-w-[1400px] mx-auto">
        <Link to="/" className="flex-shrink-0">
          <img src={LOGO_URL} alt="Wileman Plumbing" className="h-11 object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="uppercase text-sm tracking-[2px] transition-colors duration-200 font-body"
              style={{
                color: location.pathname === link.path ? '#5bc8f5' : '#94b8d0',
                borderBottom: location.pathname === link.path ? '2px solid #3b9fd4' : '2px solid transparent',
                paddingBottom: '4px',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => { e.target.style.color = '#7c3aed'; }}
              onMouseLeave={(e) => { if (location.pathname !== link.path) e.target.style.color = '#94b8d0'; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#0a1628' }}>
          <nav className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="uppercase text-sm tracking-[2px] font-body py-2"
                style={{
                  color: location.pathname === link.path ? '#5bc8f5' : '#94b8d0',
                  fontSize: '14px',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}