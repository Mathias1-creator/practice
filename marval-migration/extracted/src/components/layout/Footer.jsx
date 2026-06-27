import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t-2 border-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/7585689fd_Marvallandscaping_logo.png"
                alt="Marval Landscaping Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-white font-playfair font-bold text-xl">Marval Landscaping</span>
            </div>
            <div className="space-y-2 text-stone/80 text-sm">
              <p>Marval Landscaping Services</p>
              <p>Lic# 1087803 C-27</p>
              <p>Arroyo Grande, CA</p>
              <p>Serving SLO County</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-stone/80 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-4">
              <a href="tel:8056022230" className="flex items-center gap-3 text-stone/80 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-stone shrink-0" />
                (805) 602-2230
              </a>
              <a href="mailto:marval.landsmain@gmail.com" className="flex items-center gap-3 text-stone/80 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-stone shrink-0" />
                marval.landsmain@gmail.com
              </a>
              <div className="flex items-center gap-3 text-stone/80 text-sm">
                <Clock className="w-4 h-4 text-stone shrink-0" />
                Mon–Fri 8:00 AM – 3:30 PM
              </div>
              <a
                href="https://www.yelp.com/biz/marval-services-grover-beach-7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-1 mt-2 group w-fit"
              >
                <svg className="w-7 h-7 text-stone group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.365-2.447-3.827l-.633-1.032c-.195-.324-.136-.765.138-1.055.271-.29.668-.39 1.008-.253l1.144.44c3.509 1.355 3.712 1.462 3.861 1.581.236.193.354.493.808-.611zm-8.08-5.56c-.04-.42-.354-.773-.785-.857l-1.22-.233C7.44 11.044 7.21 11 7.042 11c-.358.001-.672.177-.868.484-.214.332-.236.77-.057 1.132.081.167 2.341 4.02 2.542 4.292.215.287.565.436.913.383.349-.054.641-.284.744-.607.029-.089 1.16-3.582 1.16-3.582.1-.305.04-.549.055-.436zm2.498 8.167l.116-1.207c.382-3.988.407-4.229.39-4.479-.022-.325-.202-.614-.486-.769-.286-.155-.634-.148-.908.014l-1.063.63c-3.253 1.922-3.443 2.05-3.576 2.197-.204.228-.268.546-.165.842.082.24.275.452.516.557.164.071 3.74 1.516 3.74 1.516.308.124.63.1.888-.094.265-.198.403-.535.548-1.207zM12.74 10.84c.234-.349.23-.813-.013-1.147L12.07 8.77C10.01 5.846 9.847 5.641 9.68 5.512c-.22-.17-.514-.22-.79-.131-.278.086-.497.305-.57.578-.051.189-.04 4.653-.04 4.653-.001.355.183.676.477.845.293.169.655.166.944-.008l1.13-.703c.332-.21.697-.6.91-.906zm4.893-6.698c-.868-.609-3.936-.787-4.884-.284-.32.169-.501.468-.477.78.014.193.094.406 1.977 2.98l.626.856c.199.27.547.419.892.377.348-.042.641-.264.757-.58l.42-1.152c1.281-3.52 1.321-3.742 1.3-3.935-.033-.282-.224-.527-.611-.042z"/>
                </svg>
                <span className="text-xs text-stone/50 group-hover:text-stone transition-colors">Find us on Yelp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-stone/50 text-sm">
          © 2025 Marval Landscaping Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}