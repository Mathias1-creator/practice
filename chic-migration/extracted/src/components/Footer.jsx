import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#1e1e1e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <span
              className="font-heading italic font-semibold block mb-4"
              style={{ fontSize: '1.6rem', color: '#ffffff', letterSpacing: '-0.01em' }}
            >
              Garden Chic <span style={{ color: '#c9547a' }}>Landscaping</span>
            </span>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#9a9a9a', lineHeight: '1.75' }}>
              Premium landscape maintenance and installation services for residential and commercial properties throughout Ventura County. Female-owned. C27 Licensed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#c9547a', letterSpacing: '0.22em' }}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'Monthly Maintenance', to: '/services#monthly' },
                { label: 'Landscape Installations', to: '/services#installations' },
                { label: 'One-Time Clean Ups', to: '/services#cleanups' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm transition-colors duration-300 hover:text-white"
                  style={{ color: '#9a9a9a' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#c9547a', letterSpacing: '0.22em' }}>
              Contact Info
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:8058969695" className="flex items-center gap-3 font-body text-sm" style={{ color: '#9a9a9a' }}>
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#c9547a' }} />
                (805) 896-9695
              </a>
              <a href="mailto:thegardenchic805@gmail.com" className="flex items-center gap-3 font-body text-sm" style={{ color: '#9a9a9a' }}>
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#c9547a' }} />
                thegardenchic805@gmail.com
              </a>
              <div className="flex items-center gap-3 font-body text-sm" style={{ color: '#9a9a9a' }}>
                <Clock className="w-4 h-4 flex-shrink-0" style={{ color: '#c9547a' }} />
                7AM – 7PM Daily
              </div>
              <div className="flex items-center gap-3 font-body text-sm" style={{ color: '#9a9a9a' }}>
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: '#c9547a' }} />
                Ventura County, CA
              </div>
            </div>
          </div>
        </div>

        {/* Badge Row */}
        <div className="mt-12 pt-8 flex flex-wrap justify-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {['Female Owned', 'C27 Licensed', 'Bonded', 'Insured'].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 font-body text-xs font-medium rounded-full"
              style={{ background: 'rgba(201,84,122,0.15)', color: '#c9547a' }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="font-body text-xs" style={{ color: '#9a9a9a' }}>
            © {new Date().getFullYear()} Garden Chic Landscaping. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}