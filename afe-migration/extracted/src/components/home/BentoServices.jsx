import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Hammer, Droplets, Leaf, Gift } from 'lucide-react';
import SectionTag from '../shared/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CONSTRUCTION_IMG = "/images/b2e395d20_IMG_3927.jpg";
const HARDSCAPING_IMG = "/images/2d0320c6b_IMG_1258.JPG";
const MAINTENANCE_IMG = "/images/ab92e4c56_IMG_0525.jpg";
const CARD_OVERLAY = "linear-gradient(0deg, rgba(15,26,20,0.92) 0%, rgba(15,26,20,0.55) 60%, rgba(15,26,20,0.2) 100%)";

export default function BentoServices() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: '#0d0d0d' }} className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionTag>WHAT WE DO</SectionTag>
          <h2 className="font-grotesk text-3xl md:text-5xl font-black text-white mt-3 mb-4 uppercase tracking-tight">
            Everything Your Landscape Needs
          </h2>
          <p className="font-dm text-[#888888] text-lg max-w-xl mx-auto">
            From concept to completion — construction, hardscaping, and ongoing maintenance under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large - Landscape Construction */}
          <div
            className={`md:col-span-2 md:row-span-2 overflow-hidden relative group cursor-pointer hover:-translate-y-1 transition-all duration-300 min-h-[320px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${CONSTRUCTION_IMG})` }} />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <Hammer className="w-8 h-8 text-[#c8f500] mb-4" />
              <h3 className="font-grotesk text-2xl font-black text-white mb-3 uppercase tracking-tight">Landscape Construction</h3>
              <p className="font-dm text-white/80 text-sm leading-relaxed mb-4">
                Custom landscape construction including hardscaping, patios, pathways, retaining walls, sod, irrigation, and complete outdoor renovations.
              </p>
              <Link to="/services#landscape-construction" className="font-grotesk font-bold text-[#c8f500] text-sm hover:text-[#c8f500]/80 transition-colors uppercase tracking-wider">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Medium - Hardscaping */}
          <div
            className={`md:col-span-2 overflow-hidden relative group cursor-pointer hover:-translate-y-1 transition-all duration-600 min-h-[200px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-[600ms] ease-in-out"
              style={{ backgroundImage: `url(${HARDSCAPING_IMG})` }}
            />
            <div className="absolute inset-0 transition-all duration-[600ms]" style={{ background: CARD_OVERLAY }} />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <Droplets className="w-8 h-8 text-[#c8f500] mb-4" />
              <h3 className="font-grotesk text-xl font-black text-white mb-3 uppercase tracking-tight">Hardscaping</h3>
              <p className="font-dm text-white/80 text-sm leading-relaxed mb-4">
                Custom patios, walkways, retaining walls, and outdoor living spaces.
              </p>
              <Link to="/services#hardscaping" className="font-grotesk font-bold text-[#c8f500] text-sm hover:text-[#c8f500]/80 transition-colors uppercase tracking-wider">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Medium - Maintenance */}
          <div
            className={`overflow-hidden relative group cursor-pointer hover:-translate-y-1 transition-all duration-600 min-h-[200px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-[600ms] ease-in-out"
              style={{ backgroundImage: `url(${MAINTENANCE_IMG})` }}
            />
            <div className="absolute inset-0 transition-all duration-[600ms]" style={{ background: CARD_OVERLAY }} />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <Leaf className="w-8 h-8 text-[#c8f500] mb-4" />
              <h3 className="font-grotesk text-xl font-black text-white mb-3 uppercase tracking-tight">Maintenance</h3>
              <p className="font-dm text-white/80 text-sm leading-relaxed mb-4">
                Lawn care, edging, trimming, irrigation maintenance, weed control, seasonal cleanups.
              </p>
              <Link to="/services#maintenance" className="font-grotesk font-bold text-[#c8f500] text-sm hover:text-[#c8f500]/80 transition-colors uppercase tracking-wider">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Small accent - Free Estimates */}
          <div
            className={`bg-[#c8f500] p-6 flex flex-col justify-center cursor-pointer hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '550ms' }}
          >
            <Gift className="w-6 h-6 text-black mb-2" />
            <h4 className="font-grotesk text-base font-black text-black uppercase tracking-tight">Free Estimates & Warranties</h4>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-[#c8f500] text-black font-grotesk font-bold px-8 py-6 text-base uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 hover:scale-105 transition-all duration-200">
              See All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}