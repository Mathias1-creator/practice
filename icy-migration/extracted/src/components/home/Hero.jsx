import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.heroBackground})`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      {/* Dark Overlay 45% */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <p
            className={`font-outfit text-xs sm:text-sm tracking-[0.2em] uppercase text-alpine-terra mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Licensed · Bonded · Insured · La Habra Heights, CA
          </p>

          {/* Headline */}
          <h1
            className={`font-fraunces text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-150 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Built Right. Built to Last.
          </h1>

          {/* Subheadline */}
          <p
            className={`font-inter text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Premium masonry, irrigation, and fencing for residential and commercial properties across La Habra Heights and Southern California.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 transition-all duration-700 delay-[450ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              to="/contact"
              className="bg-alpine-terra text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-terra/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto text-center"
            >
              Request a Free Quote
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto text-center"
            >
              View Our Work
            </Link>
          </div>

          {/* Micro-copy */}
          <p
            className={`font-inter text-xs text-white/50 transition-all duration-700 delay-[600ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Licensed · Bonded · Insured · Quality Over Quantity
          </p>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-alpine-terra animate-bounce-slow" />
      </div>
    </section>
  );
}