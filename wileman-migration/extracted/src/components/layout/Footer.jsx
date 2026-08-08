import { Link } from 'react-router-dom';

const LOGO_URL = '/images/d71be5701_wileman_logo_transparent.png';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#020810', padding: '64px 24px' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <img src={LOGO_URL} alt="Wileman Plumbing" className="h-[52px] object-contain self-start" />
            <p className="font-body text-[13px]" style={{ color: '#5a7a94' }}>
              Serving SLO County & the Central Coast
            </p>
            <a href="tel:8055509152" className="font-body text-[14px] hover:text-wp-accent-light transition-colors" style={{ color: '#94b8d0' }}>
              (805) 550-9152
            </a>
            <a href="mailto:wilemanplumbing@gmail.com" className="font-body text-[14px] hover:text-wp-accent-light transition-colors" style={{ color: '#94b8d0' }}>
              wilemanplumbing@gmail.com
            </a>
            <p className="font-body text-[12px]" style={{ color: '#5a7a94' }}>
              CA License# 1081234
            </p>
          </div>

          {/* Middle column */}
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-[14px] hover:text-wp-accent-light transition-colors"
                style={{ color: '#94b8d0' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right column */}
          <div className="flex items-end justify-end">
            <img src={LOGO_URL} alt="Wileman Plumbing" className="h-[48px] object-contain opacity-60" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(91,200,245,0.08)' }}>
          <p className="text-center font-body text-[11px]" style={{ color: '#5a7a94' }}>
            © 2025 Wileman Plumbing. All rights reserved. Licensed & Bonded.
          </p>
        </div>
      </div>
    </footer>
  );
}