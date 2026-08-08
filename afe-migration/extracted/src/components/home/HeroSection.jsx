import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HERO_IMG = "/images/af6b58fa7_IMG_3926.jpg";

export default function HeroSection() {
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <span
          className={`font-grotesk text-xs tracking-[0.25em] uppercase text-[#c8f500] mb-6 transition-all duration-700 delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          LICENSED LANDSCAPE CONTRACTOR · SLO & SANTA BARBARA COUNTY
        </span>

        <h1
          className={`font-grotesk text-4xl sm:text-5xl md:text-7xl font-black text-white max-w-4xl mb-6 leading-tight uppercase tracking-tight transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          The Central Coast's Premier Landscape Contractor
        </h1>

        <p
          className={`font-dm text-[#e0e0e0] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Premium landscape construction, hardscaping, and maintenance for residential and commercial properties across the Central Coast.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 mb-6 transition-all duration-700 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link to="/contact">
            <Button className="bg-[#c8f500] text-black font-grotesk font-bold text-base px-8 py-6 uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 hover:scale-105 transition-all duration-200">
              Request a Free Quote
            </Button>
          </Link>
          <Link to="/gallery">
            <Button variant="outline" className="border-2 border-[#c8f500] text-[#c8f500] font-grotesk font-bold text-base px-8 py-6 uppercase tracking-wider rounded-none hover:bg-[#c8f500]/10 hover:scale-105 transition-all duration-200 bg-transparent">
              View Our Work
            </Button>
          </Link>
        </div>

        <p
          className={`font-dm text-white/50 text-sm transition-all duration-700 delay-900 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Free Estimates · Licensed · Insured · Se Habla Español
        </p>

        {/* Bounce Arrow */}
        <div className="absolute bottom-10">
          <ChevronDown className="w-8 h-8 text-[#c8f500] animate-bounce-arrow" />
        </div>
      </div>
    </section>
  );
}