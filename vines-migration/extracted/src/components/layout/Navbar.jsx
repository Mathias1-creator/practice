import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import PrimaryButton from '../shared/PrimaryButton';

const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  {
    label: 'SERVICES',
    to: '/services',
    dropdown: [
      { label: 'Land Management', to: '/services#land-management' },
      { label: 'Vineyard & Ranch', to: '/services#vineyard-ranch' },
      { label: 'Pest & Vegetation Control', to: '/services#pest-vegetation-control' },
      { label: 'Poison Oak Removal', to: '/poison-oak-removal', highlight: true },
    ],
  },
  { label: 'FOR REALTORS', to: '/for-realtors' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
];

function Logo({ solid }) {
  return (
    <Link to="/" className="flex flex-col items-start leading-none">
      <span
        className="font-heading text-[24px] font-normal tracking-[0.01em] transition-colors duration-400"
        style={{ color: solid ? '#21261f' : '#ffffff' }}
      >
        AF VINES
      </span>
      <span
        className="font-body font-medium text-[9px] uppercase tracking-[0.32em] transition-colors duration-400"
        style={{ color: '#9a7b43' }}
      >
        Land Management
      </span>
    </Link>
  );
}

function DesktopDropdown({ items, solid }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="bg-bone rounded shadow-xl border border-line min-w-[280px] py-2">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`block px-5 py-2.5 text-[13px] font-body transition-colors hover:bg-sand ${
              item.highlight
                ? 'text-brass font-medium border-t border-line mt-1 pt-3'
                : 'text-body'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroHeight = isHome ? window.innerHeight * 0.85 : 100;
      setSolid(y > heroHeight);
      if (y > lastScrollY.current && y > 200) setHidden(true);
      else setHidden(false);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Non-home pages always solid
  const isSolid = !isHome || solid;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: isSolid ? '#f4efe5' : 'transparent',
          boxShadow: isSolid ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
          transform: hidden && !mobileOpen ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 flex items-center justify-between h-[72px] md:h-[80px]">
          <Logo solid={isSolid} />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  to={link.to}
                  className="font-body font-medium uppercase text-[12.5px] tracking-[0.14em] transition-colors duration-300 flex items-center gap-1"
                  style={{ color: isSolid ? '#21261f' : '#ffffff' }}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={13} className="mt-0.5 opacity-50" />}
                </Link>
                {link.dropdown && <DesktopDropdown items={link.dropdown} solid={isSolid} />}
              </div>
            ))}
            <PrimaryButton to="/contact" className="ml-2 !py-[11px] !px-[26px] !text-[12px]">
              Request a Quote
            </PrimaryButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} style={{ color: '#21261f' }} />
            ) : (
              <Menu size={24} style={{ color: isSolid ? '#21261f' : '#ffffff' }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-bone transition-all duration-400 lg:hidden flex flex-col ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-line">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-5 font-heading text-[28px] font-light text-heading"
                  >
                    {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                    <ChevronDown
                      size={20}
                      className={`text-caption transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: mobileServicesOpen ? '400px' : '0' }}
                  >
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className={`block py-2.5 pl-4 text-[15px] font-body ${
                          sub.highlight ? 'text-brass font-medium' : 'text-body'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                    <div className="h-3" />
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className="block py-5 font-heading text-[28px] font-light text-heading"
                >
                  {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-8">
            <PrimaryButton to="/contact" className="w-full text-center">
              Request a Quote
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Mobile floating call button */}
      <a
        href="tel:+17075924750"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-pine text-white flex items-center justify-center shadow-lg hover:bg-forest transition-all duration-300 lg:hidden"
        aria-label="Call AF Vines"
      >
        <Phone size={22} />
      </a>
    </>
  );
}