import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const galleryItems = [
  { img: "/images/5d82d1569_IMG_0479.jpg", caption: "Landscape Construction" },
  { img: "/images/317dc72bb_IMG_3915.jpg", caption: "Hardscape Installation" },
  { img: "/images/c0c152a8a_IMG_3908.jpg", caption: "Paver Patio" },
  { img: "/images/2437c1fae_66051145364__CBB2C8CD-58FC-438E-837D-FA6419EF9108.jpg", caption: "Retaining Wall" },
  { img: "/images/46902f602_IMG_3406.jpg", caption: "Sod Installation" },
  { img: "/images/8da643e26_IMG_1206.jpg", caption: "Irrigation System" },
  { img: "/images/198eeef2f_IMG_0685.jpg", caption: "Landscape Lighting" },
  { img: "/images/5c57c840c_IMG_9515.jpg", caption: "Commercial Maintenance" },
  { img: "/images/af6b58fa7_IMG_3926.jpg", caption: "Outdoor Renovation" },
  { img: "/images/b2e395d20_IMG_3927.jpg", caption: "Front Yard Transformation" },
  { img: "/images/5bf870b0a_IMG_1258.JPG", caption: "Pool & Outdoor Kitchen" },
  { img: "/images/4bd1d6872_IMG_1257.jpg", caption: "Pool with Star Tile Waterfall Wall" },
  { img: "/images/be2bdf2e6_IMG_1259.jpg", caption: "Freeform Pool & Spa" },
  { img: "/images/5e52ac6e3_IMG_1072.jpg", caption: "Pool with Retaining Wall & Slide" },
  { img: "/images/4ea916ff9_IMG_1073.jpg", caption: "Freeform Pool with Spa Waterfall" },
  { img: "/images/8edaffab7_IMG_3907.jpg", caption: "Pool Under Construction" },
  { img: "/images/1044edc51_IMG_3919.jpg", caption: "Curved Outdoor Kitchen & Bar" },
  { img: "/images/f9e9b7fd4_IMG_3922.jpg", caption: "Paver Driveway" },
  { img: "/images/2a9a9b86c_IMG_3921.jpg", caption: "Cobblestone Paver Driveway" },
  { img: "/images/7a001a7c2_IMG_3931.jpg", caption: "Modern Pergola & Outdoor Kitchen" },
  { img: "/images/e13a7b423_IMG_3930.jpg", caption: "Outdoor Fireplace & Patio" },
  { img: "/images/941d2422c_IMG_0525.jpg", caption: "Backyard Lawn & Landscape" },
  { img: "/images/3f375b388_IMG_0076.jpg", caption: "Stone Bench & Wall Fountain" },
  { img: "/images/729cf9792_IMG_0077.jpg", caption: "Side Yard Planting & Retaining Wall" },
  { img: "/images/37fb2818c_IMG_9514.jpg", caption: "Side Yard Artificial Turf" },
  { img: "/images/fce27f67d_IMG_3916.jpg", caption: "Round Fire Pit with Seating Walls" },
];

const instaPhotos = [
  "/images/5d82d1569_IMG_0479.jpg",
  "/images/c0c152a8a_IMG_3908.jpg",
  "/images/8da643e26_IMG_1206.jpg",
  "/images/46902f602_IMG_3406.jpg",
  "/images/af6b58fa7_IMG_3926.jpg",
  "/images/b2e395d20_IMG_3927.jpg",
];

export default function Gallery() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-grotesk text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Our Work</h1>
          <p className="font-dm text-[#888888] text-lg">Every project is built with care and designed to impress.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} style={{ backgroundColor: '#0d0d0d' }} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`break-inside-avoid overflow-hidden group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#c8f500]/0 group-hover:bg-[#c8f500]/15 border-2 border-transparent group-hover:border-[#c8f500] transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-grotesk text-sm font-bold text-white uppercase tracking-wider">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Strip */}
      <section style={{ backgroundColor: '#111111' }} className="py-16 border-y border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-grotesk text-lg font-black text-white text-center mb-8 uppercase tracking-tight">
            More on Instagram <span className="text-[#c8f500]">@afepacificlandscape</span>
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {instaPhotos.map((photo, i) => (
              <a
                key={i}
                href="https://www.instagram.com/afepacificlandscape"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden group relative"
              >
                <img src={photo} alt={`Instagram post ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#c8f500]/0 group-hover:bg-[#c8f500]/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://www.instagram.com/afepacificlandscape" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#c8f500] text-black font-grotesk font-bold px-6 py-3 uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 transition-all">
                <Instagram className="w-4 h-4 mr-2" />
                Follow on Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-grotesk text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            Inspired by what you see? Let's build something great.
          </h2>
          <Link to="/contact">
            <Button className="bg-[#c8f500] text-black font-grotesk font-bold px-8 py-6 text-base uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 transition-all duration-200 mt-4">
              Request a Free Quote
            </Button>
          </Link>
          <p className="font-dm text-[#888888] text-sm mt-4">Free estimates · Licensed · Insured · Se Habla Español</p>
        </div>
      </section>
    </>
  );
}