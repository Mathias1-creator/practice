import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const SERVICE_LINKS = [
  { label: 'Drain Cleaning', path: '/services#drain-cleaning' },
  { label: 'Water Line & Plumbing Repairs', path: '/services#water-line-repairs' },
  { label: 'Gas Line Services', path: '/services#gas-line-services' },
  { label: 'Water Heater Installation', path: '/services#water-heater-installation' },
];

const CITIES = [
  'Arroyo Grande', 'Grover Beach', 'Pismo Beach', 'Shell Beach', 'San Luis Obispo',
  'Santa Margarita', 'Atascadero', 'Templeton', 'Paso Robles', 'Creston'
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 - Brand */}
          <div>
            {/* LOGO SLOT — Replace with uploaded logo image */}
            <div className="mb-3">
              <span className="font-barlow font-bold text-2xl text-white">Ray Espinoza</span>
              <span className="font-dm font-medium text-2xl text-ray-red ml-1.5">Plumbing</span>
            </div>
            <p className="font-dm text-sm font-medium tracking-wide" style={{ color: '#CC2200' }}>
              Licensed · Honest · Available 24/7
            </p>
            <p className="font-inter text-sm mt-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Licensed residential and commercial plumber serving San Luis Obispo County.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-dm font-semibold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-inter text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-dm font-semibold text-white text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-inter text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-dm font-semibold text-white text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18058352196" className="flex items-center gap-3 font-inter text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <Phone className="w-4 h-4 shrink-0" style={{ color: '#CC2200' }} />
                  (805) 835-2196
                </a>
              </li>
              <li>
                <a href="mailto:raye@replumbing.org" className="flex items-center gap-3 font-inter text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <Mail className="w-4 h-4 shrink-0" style={{ color: '#CC2200' }} />
                  raye@replumbing.org
                </a>
              </li>
              <li className="flex items-start gap-3 font-inter text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#CC2200' }} />
                <span>1220 Corral Creek Ave #1<br />Paso Robles, CA 93446</span>
              </li>
              <li className="font-inter text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Available 24/7 · Lic# 1132312
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Area Strip */}
      <div style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CITIES.map((city) => (
              <span
                key={city}
                className="font-inter"
                style={{
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="font-dm text-center" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
            © 2025 Ray Espinoza Plumbing · All Rights Reserved · Lic# 1132312 · Paso Robles, CA
          </p>
        </div>
      </div>
    </footer>
  );
}