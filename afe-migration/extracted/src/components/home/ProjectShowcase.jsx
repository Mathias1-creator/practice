import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTag from '../shared/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  { img: "/images/317dc72bb_IMG_3915.jpg", type: "Hardscape Installation", location: "Central Coast, CA" },
  { img: "/images/c0c152a8a_IMG_3908.jpg", type: "Paver Patio & Fire Pit", location: "Santa Barbara County" },
  { img: "/images/2437c1fae_66051145364__CBB2C8CD-58FC-438E-837D-FA6419EF9108.jpg", type: "Retaining Wall", location: "SLO County" },
  { img: "/images/46902f602_IMG_3406.jpg", type: "Landscape Design", location: "Central Coast, CA" },
  { img: "/images/8da643e26_IMG_1206.jpg", type: "Turf Installation", location: "Santa Barbara County" },
  { img: "/images/198eeef2f_IMG_0685.jpg", type: "Front Yard Transformation", location: "SLO County" },
];

export default function ProjectShowcase() {
  const scrollRef = useRef(null);
  const [ref, isVisible] = useScrollAnimation();

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} style={{ backgroundColor: '#0d0d0d' }} className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex justify-between items-end mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <SectionTag>OUR WORK</SectionTag>
            <h2 className="font-grotesk text-3xl md:text-5xl font-black text-white mt-3 mb-3 uppercase tracking-tight">
              Projects Built to Impress
            </h2>
            <p className="font-dm text-[#888888] text-base">
              Swipe through a selection of our recent work.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#c8f500] hover:bg-[#c8f500]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#c8f500] hover:bg-[#c8f500]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[320px] md:w-[360px] overflow-hidden group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.type}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#c8f500]/0 group-hover:bg-[#c8f500]/10 transition-colors duration-300" />
              </div>
              <div className="bg-[#1a1a1a] border-t-2 border-[#2a2a2a] group-hover:border-[#c8f500] transition-colors duration-300 p-5">
                <h3 className="font-grotesk text-base font-bold text-white uppercase tracking-tight">{p.type}</h3>
                <p className="font-dm text-[#888888] text-sm">{p.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button className="bg-[#c8f500] text-black font-grotesk font-bold px-8 py-6 text-base uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 hover:scale-105 transition-all duration-200">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}