import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';

export default function FooterCTA({
  heading = "Ready to Start Your Project?",
  subheading = "New construction, remodel, or service call — we're ready when you are.",
  primaryLabel = "GET A QUOTE",
  primaryLink = "/contact",
  showCall = true,
}) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="bg-charcoal py-20 md:py-28">
      <div
        className={`max-w-3xl mx-auto px-5 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          {heading}
        </h2>
        <p className="mt-4 text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryLink}
            className="px-8 py-3.5 bg-sand text-charcoal font-semibold text-sm tracking-wide hover:scale-[1.03] hover:shadow-xl transition-all duration-200"
          >
            {primaryLabel}
          </Link>
          {showCall && (
            <a
              href="tel:8054007880"
              className="flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              CALL (805) 400-7880
            </a>
          )}
        </div>
      </div>
    </section>
  );
}