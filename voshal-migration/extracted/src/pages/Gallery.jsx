import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import FooterCTA from '../components/shared/FooterCTA';

const GALLERY_IMAGES = [
  {
    src: '/images/825d08484_Screenshot2026-04-30at112518AM.jpg',
    alt: '',
  },
  {
    src: '/images/6e6da92b0_Screenshot2026-04-30at113526AM.jpg',
    alt: '',
  },
  {
    src: '/images/5bd3e1193_Screenshot2026-04-30at12734PM.jpg',
    alt: '',
  },
  {
    src: '/images/23a31bf47_Screenshot2026-04-30at12721PM.jpg',
    alt: '',
  },
  {
    src: '/images/5824e0c3c_Screenshot2026-04-30at12708PM.jpg',
    alt: '',
  },
  {
    src: '/images/beb93cfa3_Screenshot2026-04-30at12645PM.jpg',
    alt: '',
  },
  {
    src: '/images/69882d78a_Screenshot2026-04-30at12542PM.jpg',
    alt: '',
  },
  {
    src: '/images/adb237bfa_Screenshot2026-04-30at102014AM.jpg',
    alt: '',
  },
  {
    src: '/images/be1aabeca_Screenshot2026-04-30at101956AM.jpg',
    alt: '',
  },

  {
    src: '/images/94bb8abb8_Screenshot2026-04-30at13841PM.jpg',
    alt: '',
  },
  {
    src: '/images/8c520c706_IMG_2497.jpg',
    alt: '',
    scale: 0.85,
  },
  {
    src: '/images/d1f0b134d_IMG_6901.jpg',
    alt: '',
    scale: 0.85,
  },
  {
    src: '/images/cc7077de9_21B1EBB2-7A0E-4A4E-9A9A-33F95CB0F00B.jpg',
    alt: '',
  },
  {
    src: '/images/06863dbbd_IMG_75833.jpg',
    alt: '',
  },
  {
    src: '/images/608eb6c76_IMG_6812.jpg',
    alt: '',
  },
  {
    src: '/images/1aa449e86_IMG_24743.jpg',
    alt: '',
  },
  {
    src: '/images/1259e5e89_IMG_2334.jpg',
    alt: '',
  },
  {
    src: '/images/72eda0f6a_IMG_2321.jpg',
    alt: '',
  },
  {
    src: '/images/34cf75825_Screenshot2026-05-09at100236PM.jpg',
    alt: '',
  },
  {
    src: '/images/a48865bce_773f1a0cd_IMG_0505.jpg',
    alt: 'Tankless water heater installation',
  },
];

function GalleryItem({ src, alt, onClick, delay, scale }) {
  return (
    <div
      onClick={onClick}
      className="overflow-hidden cursor-pointer group relative"
      style={{ borderRadius: '8px', animationDelay: `${delay}ms` }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ display: 'block', transform: scale ? `scale(${scale})` : undefined }}
      />

    </div>
  );
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  useEffect(() => {
    document.title = 'Gallery | Voshal Integrated Plumbing Inc.';
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIdx]);

  return (
    <>
      {/* Hero — short */}
      <section className="bg-charcoal flex items-center justify-center" style={{ height: '200px', paddingTop: '80px' }}>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Work</h1>
          <p className="mt-2 text-white/60 text-base">Every project completed with precision and pride.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div
            className="grid grid-cols-3"
            style={{ gap: '8px' }}
          >
            {GALLERY_IMAGES.map((img, i) => (
              <GalleryItem
                key={i}
                src={img.src}
                alt={img.alt}
                onClick={() => setLightboxIdx(i)}
                delay={i * 80}
                scale={img.scale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{ backgroundColor: 'rgba(28,28,28,0.95)' }}
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={GALLERY_IMAGES[lightboxIdx].src}
            alt={GALLERY_IMAGES[lightboxIdx].alt}
            className="max-w-full max-h-[85vh] object-contain"
            style={{ borderRadius: '8px' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <FooterCTA
        heading="Have a project in mind? Let's talk."
        subheading="New construction, remodel, or service call — we're ready when you are."
        primaryLabel="GET IN TOUCH"
        primaryLink="/contact"
        showCall={false}
      />
    </>
  );
}