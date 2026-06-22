import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

function NextdoorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 14V10c0-2.21 1.79-4 4-4s4 1.79 4 4v4" />
      <path d="M10 14v-3c0-1.1.9-2 2-2s2 .9 2 2v3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1 — Logo */}
          <div>
            <Link to="/" className="inline-flex flex-col leading-none mb-5">
              <span className="font-heading text-[22px] text-white">AF VINES</span>
              <span className="font-body font-medium text-[9px] uppercase tracking-[0.32em] text-brass">
                Land Management
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed text-white/60 max-w-[300px]">
              Premium land management serving Sonoma, Marin, and Mendocino Counties. CSLB C-27 #1152556 · Pest Control #46723.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-body font-medium uppercase text-[12px] tracking-[0.18em] text-brass mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'For Realtors', to: '/for-realtors' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[14px] text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-body font-medium uppercase text-[12px] tracking-[0.18em] text-brass mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-[14px] text-white/60">
              <li>
                Phone{' '}
                <a href="tel:+17075924750" className="hover:text-white transition-colors">
                  (707) 592-4750
                </a>
              </li>
              <li>
                Email{' '}
                <a href="mailto:afvinesllc@gmail.com" className="hover:text-white transition-colors">
                  afvinesllc@gmail.com
                </a>
              </li>
              <li>Hours Monday – Friday</li>
              <li>Serving Sonoma, Marin &amp; Mendocino Counties</li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/p/AF-VINES-61571471319487/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass/60 hover:text-brass transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://nextdoor.com/pages/af-vines-llc-sebastopol-ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass/60 hover:text-brass transition-colors duration-300"
                aria-label="Nextdoor"
              >
                <NextdoorIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-5 text-center text-[13px] text-white/40">
          © 2026 AF Vines, LLC · Sonoma County, CA · All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}