import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import AlpineLogo from '@/components/shared/AlpineLogo';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { label: 'Masonry & Hardscaping', path: '/services#masonry-hardscaping' },
  { label: 'Irrigation Planning & Installation', path: '/services#irrigation-installation' },
  { label: 'Fencing Planning & Installation', path: '/services#fencing-installation' },
  { label: 'Lawn & Landscaping', path: '/services#lawn-landscaping' },
];

const serviceCities = ['La Habra Heights', 'Fullerton', 'Brea', 'La Mirada', 'Friendly Hills', 'Whittier'];

export default function Footer() {
  return (
    <footer className="bg-alpine-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <AlpineLogo variant="light" height={44} linkTo="/" />
            <p className="font-fraunces text-alpine-terra italic mt-5 text-sm">
              "Built Right. Built to Last."
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-outfit text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-outfit text-sm text-white/70 hover:text-alpine-terra transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-outfit text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-outfit text-sm text-white/70 hover:text-alpine-terra transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-outfit text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+16265595946" className="flex items-center gap-2 text-white/70 hover:text-alpine-terra transition-colors font-inter text-sm">
                  <Phone className="w-4 h-4 text-alpine-terra" />
                  (626) 559-5946
                </a>
              </li>
              <li>
                <a href="mailto:alpinemeadowsland@outlook.com" className="flex items-center gap-2 text-white/70 hover:text-alpine-terra transition-colors font-inter text-sm">
                  <Mail className="w-4 h-4 text-alpine-terra" />
                  alpinemeadowsland@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 font-inter text-sm">
                <Clock className="w-4 h-4 text-alpine-terra" />
                Mon–Fri 8am–4:30pm
              </li>
              <li className="flex items-center gap-2 text-white/70 font-inter text-sm">
                <MapPin className="w-4 h-4 text-alpine-terra" />
                La Habra Heights, CA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Area Strip */}
      <div className="border-t border-alpine-terra/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center font-outfit text-xs text-white/60">
            Serving: {serviceCities.join(' · ')}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center font-inter text-xs text-white/40">
            © 2026 Alpine Meadows Landscaping Construction Corp. All Rights Reserved. · Licensed · Bonded · Insured
          </p>
        </div>
      </div>
    </footer>
  );
}