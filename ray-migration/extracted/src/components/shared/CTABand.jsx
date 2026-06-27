import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import useMagneticButton from '../../hooks/useMagneticButton';

export default function CTABand() {
  const magneticCallRef = useMagneticButton({ strength: 0.25, radius: 80 });
  const magneticQuoteRef = useMagneticButton({ strength: 0.25, radius: 80 });

  return (
    <section style={{ backgroundColor: '#CC2200' }} className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2
            className="font-barlow font-bold text-white tracking-tight"
            style={{ fontSize: '42px', lineHeight: 1.1 }}
          >
            Plumbing Problem? Ray Answers 24/7.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="font-dm text-white mt-4" style={{ fontSize: '16px', opacity: 0.9 }}>
            Licensed. Honest. Available nights, weekends, and holidays.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              ref={magneticCallRef}
              href="tel:+18058352196"
              className="font-dm font-semibold px-8 py-3.5 rounded-md transition-colors duration-200 w-full sm:w-auto text-center"
              style={{ backgroundColor: '#FFFFFF', color: '#CC2200', display: 'inline-block' }}
            >
              Call (805) 835-2196
            </a>
            <Link
              ref={magneticQuoteRef}
              to="/contact"
              className="font-dm font-semibold px-8 py-3.5 rounded-md transition-colors duration-200 hover:bg-white/10 w-full sm:w-auto text-center"
              style={{ border: '2px solid #FFFFFF', color: '#FFFFFF', display: 'inline-block' }}
            >
              Request a Free Quote
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="font-dm text-white mt-5" style={{ fontSize: '13px', opacity: 0.65 }}>
            Lic# 1132312 · Serving SLO County & Surrounding Areas
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}