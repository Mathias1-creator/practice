import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = '/images/738955788_generated_dfe0d494.png';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with slow zoom */}
      <div
        className="absolute inset-0"
        style={{
          animation: 'heroZoom 14s ease-out forwards',
        }}
      >
        <img
          src={HERO_IMAGE}
          alt="Sweeping Sonoma County landscape at golden hour with rolling oak-studded hills (placeholder)"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(20,22,18,0.78), rgba(20,22,18,0.32))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-20 md:pb-28">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 w-full">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-5"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(26px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
              Sonoma, Marin & Mendocino Counties · Since 1998
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-heading font-light text-white leading-[1.05] mb-6 max-w-[900px]"
            style={{
              fontSize: 'clamp(46px, 7vw, 96px)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(26px)',
              transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
            }}
          >
            Turning rugged acreage into park-like estates
          </h1>

          {/* Subtext */}
          <p
            className="font-body text-white/90 text-[16px] md:text-[18px] leading-relaxed max-w-[620px] mb-10"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(26px)',
              transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
            }}
          >
            Year-round stewardship of Sonoma, Marin, and Mendocino Counties' finest properties — from backyards to thousands of acres.
            One trusted operator for fire safety, land repair, vineyards, and everything your property needs
            to look its best.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(26px)',
              transition: 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s',
            }}
          >
            <Link
              to="/contact"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded bg-white text-heading transition-all duration-[350ms] hover:shadow-lg hover:-translate-y-[2px]"
            >
              Request a Quote
            </Link>
            <Link
              to="/services"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded border border-white/50 text-white transition-all duration-[350ms] hover:bg-white/10 hover:-translate-y-[2px]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={24} className="text-white/50" />
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }
      `}</style>
    </section>
  );
}