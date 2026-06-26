import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';
import useScrollAnimation from '../shared/useScrollAnimation';

const PREVIEW_IMAGES = [
  {
    src: '/images/6b0b839c2_Screenshot2026-05-09at100236PM.jpg',
    alt: 'Luxury bathroom with patterned tile wall, freestanding tub, and gold fixtures',
  },
  {
    src: '/images/30e450a38_Screenshot2026-04-30at101956AM.jpg',
    alt: 'White subway tile shower with matte black fixtures',
  },
  {
    src: '/images/b19dfee6b_Screenshot2026-04-30at102040AM.jpg',
    alt: 'Rain head shower detail with wood-look tile wall',
  },
];

function GalleryImage({ src, alt, delay }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`overflow-hidden group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  );
}

export default function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading title="Our Work" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-black/5">
          {PREVIEW_IMAGES.map((img, i) => (
            <GalleryImage key={i} {...img} delay={i * 100} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-block px-8 py-3.5 bg-charcoal text-white font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            SEE FULL GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
}