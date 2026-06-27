import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const LOGO_URL = "/images/e2fdd2dea_AndresBravo805621-4093-1.jpg";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d0d0d' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <img src={LOGO_URL} alt="AFE Pacific" className="h-16 w-auto mb-4" />
            <h3 className="font-grotesk text-sm font-bold uppercase tracking-widest text-white mb-2">AFE Pacific Landscape Management</h3>
            <p className="font-dm text-[#888888] text-sm leading-relaxed mb-4">
              Licensed Landscape Contractor · SLO & Santa Barbara County
            </p>
            <p className="font-dm text-[#888888] text-sm mb-4">
              Free Estimates · Warranties · Se Habla Español
            </p>
            <a
              href="https://www.instagram.com/afepacificlandscape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c8f500] hover:text-[#c8f500]/80 transition-colors font-grotesk text-sm"
            >
              <Instagram className="w-4 h-4" />
              @afepacificlandscape
            </a>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-grotesk text-xs tracking-widest text-white font-bold uppercase mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="block font-grotesk text-[#888888] hover:text-[#c8f500] transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-grotesk text-xs tracking-widest text-white font-bold uppercase mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+18056214093" className="flex items-center gap-3 text-[#888888] hover:text-[#c8f500] transition-colors font-dm text-sm">
                <Phone className="w-4 h-4 text-[#c8f500] shrink-0" />
                (805) 621-4093
              </a>
              <a href="mailto:afepacificlandscapemanagement@gmail.com" className="flex items-center gap-3 text-[#888888] hover:text-[#c8f500] transition-colors font-dm text-sm">
                <Mail className="w-4 h-4 text-[#c8f500] shrink-0" />
                afepacificlandscapemanagement@gmail.com
              </a>
              <div className="flex items-center gap-3 text-[#888888] font-dm text-sm">
                <Clock className="w-4 h-4 text-[#c8f500] shrink-0" />
                Mon–Fri 7am–5pm
              </div>
              <a
                href="https://www.instagram.com/afepacificlandscape"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#888888] hover:text-[#c8f500] transition-colors font-dm text-sm"
              >
                <Instagram className="w-4 h-4 text-[#c8f500] shrink-0" />
                @afepacificlandscape
              </a>
              <a
                href="https://match.angi.com/review/161626840"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#888888] hover:text-[#c8f500] transition-colors font-dm text-sm"
              >
                <ExternalLink className="w-4 h-4 text-[#c8f500] shrink-0" />
                Leave a Review on Angi →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#111111' }} className="border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center font-dm text-[#888888] text-xs">
            © 2026 AFE Pacific Landscape Management. All Rights Reserved. · Licensed Landscape Contractor · Se Habla Español
          </p>
        </div>
      </div>
    </footer>
  );
}