import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../shared/useScrollAnimation';

const IMG = '/images/663834861_Screenshot2026-04-30at112435AM.png';

export default function AboutSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section style={{ backgroundColor: '#FAFAF8' }} className="py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#1C1C1C' }}>
            About Voshal Integrated Plumbing Inc.
          </h2>
          <div className="mt-3 w-16 h-1" style={{ backgroundColor: '#C4A882' }} />

          <p className="mt-6 text-sm md:text-base leading-relaxed" style={{ color: '#555555' }}>
            We are proud to be a local family owned and operated plumbing company. We offer quality plumbing services ranging from emergency service calls to new commercial and residential construction. Voshal Integrated Plumbing Inc. is committed to providing honest, reliable, and top quality plumbing services to our Central Coast community.
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: '#555555' }}>
            Our most requested services include sewer camera and locating, tankless water heater installation and service, clogged sewer repair, accessory dwelling unit construction, remodels and additions, and custom home construction.
          </p>
          <p className="mt-4 text-xs font-semibold tracking-wide uppercase" style={{ color: '#C4A882' }}>
            Licensed — Lic# 1092268 · Serving SLO County · Available 24/7
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            {['Family Owned & Operated', 'Licensed & Insured'].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 text-xs font-semibold tracking-wide border"
                style={{ color: '#C4A882', borderColor: '#C4A882' }}
              >
                {badge}
              </span>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-block mt-8 px-8 py-3.5 font-semibold text-sm tracking-wide text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: '#1C1C1C' }}
          >
            GET IN TOUCH
          </Link>
        </div>

        {/* Right */}
        <div className="overflow-hidden" style={{ borderRadius: '12px' }}>
          <img
            src={IMG}
            alt="Voshal plumbing project"
            className="w-full object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>
    </section>
  );
}