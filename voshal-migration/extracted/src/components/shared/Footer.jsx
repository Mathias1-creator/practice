import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram } from 'lucide-react';

const LOGO_URL = '/images/77f4b8ab5_Voshal_logo_transparent.png';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden" style={{ borderTop: '2px solid #C4A882' }}>
      {/* Large watermark logo */}
      <div className="absolute -right-24 -bottom-24 opacity-[0.04] pointer-events-none">
        <img src={LOGO_URL} alt="" className="w-[400px] h-[400px] object-contain" style={{ filter: 'invert(1)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left */}
          <div>
            <img src={LOGO_URL} alt="Voshal Integrated Plumbing Inc." className="w-auto mb-4" style={{ height: '70px', filter: 'invert(1)' }} />
            <p className="text-white/60 text-sm leading-relaxed">
              Voshal Integrated Plumbing Inc.
            </p>
            <p className="text-white/40 text-sm mt-1">Lic# 1092268</p>
            <p className="text-white/40 text-sm">Serving SLO County</p>
          </div>

          {/* Center */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-sand mb-5">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-sand mb-5">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:8054007880"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-sand" />
                (805) 400-7880
              </a>
              <a
                href="mailto:doug@voshalintegratedplumbing.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-sand" />
                doug@voshalintegratedplumbing.com
              </a>
              <p className="text-sm text-white/40 mt-2">Available 24/7</p>
              <a
                href="https://www.instagram.com/voshal_integrated_plumbing_inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300 mt-3"
              >
                <Instagram className="w-4 h-4 text-sand" />
                @voshal_integrated_plumbing_inc
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <p className="text-center text-xs text-white/30">
            © 2025 Voshal Integrated Plumbing Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}