import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Sports Fields & Parks', path: '/sports-fields' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/e984c116b_IMG_9940.png"
                alt="Wentzel Irrigation & Turf Solutions"
                style={{ height: '70px', width: 'auto' }}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              25+ Years Serving San Luis Obispo County
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-white/90">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-white/50 hover:text-[#2E7D32] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-white/90">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+18056744333" className="flex items-center gap-2 text-sm text-white/50 hover:text-[#1A56DB] transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> (805) 674-4333
              </a>
              <a href="mailto:atwentzel@yahoo.com" className="flex items-center gap-2 text-sm text-white/50 hover:text-[#1A56DB] transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> atwentzel@yahoo.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> 5620 Bajada Avenue,<br />Atascadero, CA 93422
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Clock className="w-4 h-4 shrink-0" /> Mon–Fri 8AM–5PM
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-white/90">Credentials</h4>
            <div className="space-y-2 text-sm text-white/50">
              <p>CSLB #1103954</p>
              <p>Licensed · Bonded · Insured</p>
              <p>D-2 · T-1 Certified</p>
              <p>Certified Irrigation Technician</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Wentzel Irrigation & Turf Solutions. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              CSLB #1103954 · Licensed · Bonded · Insured · D-2 · T-1 · Certified Irrigation Technician
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}