import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111111' }}>
      {/* Diagonal top edge */}
      <div className="w-full h-4 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-2xl font-black" style={{ color: '#CC0000' }}>SLO SEPTIC</span>
              <span className="text-2xl font-black text-white">PUMPING LLC</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">Serving SLO County for 19 Years</p>
            <p className="text-gray-500 text-xs">A Division of Rex's Rooter Plumbing Inc.</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About', path: '/about' },
                { label: 'Get a Quote', path: '/quote' },
              ].map((link) => (
                <Link key={link.path} to={link.path}
                  className="block text-gray-400 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:8058008931" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: '#CC0000' }}>
                <Phone className="w-4 h-4" />
                (805) 800-8931
              </a>
              <a href="tel:8057092760" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (805) 709-2760
              </a>
              <a href="mailto:RexSpringer1968@gmail.com" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                RexSpringer1968@gmail.com
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                Open 24 Hours
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">&copy; 2026 SLO SEPTIC PUMPING LLC. All Rights Reserved.</p>
          <p className="text-gray-500 text-xs">We do NOT pump RVs.</p>
        </div>
      </div>
    </footer>
  );
}