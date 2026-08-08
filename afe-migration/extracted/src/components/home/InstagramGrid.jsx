import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTag from '../shared/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const photos = [
  "/images/5d82d1569_IMG_0479.jpg",
  "/images/317dc72bb_IMG_3915.jpg",
  "/images/c0c152a8a_IMG_3908.jpg",
  "/images/8da643e26_IMG_1206.jpg",
  "/images/198eeef2f_IMG_0685.jpg",
  "/images/5c57c840c_IMG_9515.jpg",
];

export default function InstagramGrid() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: '#111111' }} className="py-24 border-y border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionTag>FOLLOW OUR WORK</SectionTag>
          <h2 className="font-grotesk text-3xl md:text-4xl font-black text-white mt-3 mb-3 uppercase tracking-tight">
            See What We've Been Building
          </h2>
          <p className="font-dm text-[#888888] text-base">
            Follow us on Instagram for project updates, transformations, and landscaping inspiration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <a
              key={i}
              href="https://www.instagram.com/afepacificlandscape"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative aspect-square overflow-hidden group transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img src={photo} alt={`AFE Pacific project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#c8f500]/0 group-hover:bg-[#c8f500]/15 border-2 border-transparent group-hover:border-[#c8f500] transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://www.instagram.com/afepacificlandscape" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#c8f500] text-black font-grotesk font-bold px-8 py-6 text-base uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 transition-all duration-200">
              <Instagram className="w-4 h-4 mr-2" />
              Follow Us on Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}