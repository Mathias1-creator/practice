import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import useMagneticButton from '../../hooks/useMagneticButton';

export default function HeroSection() {
  const [show, setShow] = useState(false);
  const magneticQuoteRef = useMagneticButton({ strength: 0.25, radius: 80 });
  const magneticCallRef = useMagneticButton({ strength: 0.25, radius: 80 });

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/799ee46e4_generated_2902d3c9.png"
          alt="Ray Espinoza Plumbing - Professional plumber on job site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ray-black/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        {/* Badge */}
        <div
          className={`transition-all duration-700 ease-out ${
            show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block font-dm font-semibold text-xs sm:text-sm text-ray-red uppercase tracking-widest bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-ray-red/30">
            Available 24/7 · SLO County · Lic# 1132312
          </span>
        </div>

        {/* Headline — split word reveal */}
        <h1 className="font-barlow font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-none mt-6 max-w-4xl">
          <HeroWordReveal show={show} baseDelay={150}>
            SLO County's Trusted Plumber —
          </HeroWordReveal>
          <span className="text-ray-red block mt-1">
            <HeroWordReveal show={show} baseDelay={550} inline>
              Available 24/7
            </HeroWordReveal>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`font-inter text-base sm:text-lg text-white/80 mt-6 max-w-2xl leading-relaxed transition-all duration-700 ease-out ${
            show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          Residential and commercial plumbing service. Drain cleaning, water lines, gas lines, water heaters, and more. Honest pricing. Clean work. Always available.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 ease-out ${
            show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '850ms' }}
        >
          <Link
            ref={magneticQuoteRef}
            to="/contact"
            className="inline-flex items-center justify-center bg-ray-red text-white font-dm font-semibold text-base px-8 py-4 rounded-md shadow-lg shadow-ray-red/20 transition-colors duration-200"
          >
            Request a Free Quote
          </Link>
          <a
            ref={magneticCallRef}
            href="tel:+18058352196"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-dm font-semibold text-base px-8 py-4 rounded-md hover:bg-white hover:text-ray-black transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            Call (805) 835-2196
          </a>
        </div>

        {/* Micro-copy */}
        <p
          className={`font-inter text-sm text-white/50 mt-6 transition-all duration-700 ease-out ${
            show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          Licensed · Honest · Clean · 24/7 Available
        </p>
      </div>

      {/* Bouncing arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow">
        <ChevronDown className="w-8 h-8 text-ray-red" />
      </div>
    </section>
  );
}

/** Internal component: splits text into masked word spans */
function HeroWordReveal({ children, show, baseDelay = 0, inline = false }) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    document.fonts.ready.then(() => setReady(true));
  }, []);

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ').filter(Boolean);

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: inline ? 'inline-block' : 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            marginRight: '0.3em',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: ready && show && !reducedMotion ? 'translateY(0)' : reducedMotion ? 'translateY(0)' : 'translateY(110%)',
              opacity: (ready && show) || reducedMotion ? 1 : 0,
              transition: reducedMotion
                ? 'opacity 0.6s ease'
                : `transform 0.8s cubic-bezier(0.65, 0, 0.35, 1) ${baseDelay + i * 80}ms, opacity 0.01s ${baseDelay + i * 80}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </>
  );
}