import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Instagram } from 'lucide-react';

const LOGO_URL = "/images/dfe294d37_B12D02B3-388F-4513-9216-4DB4F9F27A4A.png";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={LOGO_URL} alt="Cal Coast Hardscape & Irrigation" className="h-16 w-auto mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              Licensed · Bonded · Insured · Central Coast
            </p>
            <p className="font-heading italic text-stone/80 text-sm mb-4" style={{ fontWeight: 300 }}>
              Built for the Central Coast. Built to Last.
            </p>
            <a
              href="https://www.instagram.com/cal_coast_hardscape.irrigation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone hover:text-white transition-colors text-sm font-medium"
            >
              <Instagram className="w-4 h-4" />
              @cal_coast_hardscape.irrigation
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-stone mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'About', path: '/about' },
                { label: 'Contact & Book', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-stone mb-6">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+18058066476" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-forest" /> (805) 806-6476
              </a>
              <a href="mailto:calcoasthardscape.irrigation@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-forest" /> calcoasthardscape.irrigation@gmail.com
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <Clock className="w-4 h-4 text-forest mt-0.5" />
                <span>Mon–Fri 7am–5pm · Sat 8am–2pm · Sun Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-white/40 text-xs">
            © 2026 Cal Coast Hardscape & Irrigation. All Rights Reserved. · Licensed · Bonded · Insured
          </p>
        </div>
      </div>
    </footer>
  );
}