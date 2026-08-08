import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import GalleryImage from '@/components/gallery/GalleryImage';
import { IMAGES } from '@/lib/images';

const galleryItems = [
  { src: IMAGES.galleryMasonry, label: 'Masonry Project', hoverDesc: 'Custom Retaining Wall' },
  { src: IMAGES.galleryRetaining, label: 'Retaining Wall', hoverDesc: 'Stone Retaining Wall' },
  { src: IMAGES.galleryPaverDriveway, label: 'Paver Driveway', hoverDesc: 'Paver Driveway Install' },
  { src: IMAGES.galleryIrrigation, label: 'Irrigation System', hoverDesc: 'Irrigation Installation' },
  { src: IMAGES.galleryFencing, label: 'Fencing Installation', hoverDesc: 'Custom Wood Fence' },
  { src: IMAGES.galleryHardscapeDetail, label: 'Hardscape Detail', hoverDesc: 'Hardscape Detail Work' },
  { src: IMAGES.galleryFullYard, label: 'Landscape Construction', hoverDesc: 'Full Yard Build' },
  { src: IMAGES.galleryOutdoorLiving, label: 'Outdoor Living Space', hoverDesc: 'Outdoor Living Area' },
  { src: IMAGES.galleryCompleted, label: 'Completed Project', hoverDesc: 'Project Complete' },
];

export default function Gallery() {
  useEffect(() => {
    document.title = 'Project Gallery | Alpine Meadows Landscaping Construction Corp';
  }, []);

  return (
    <>
      <PageHero
        image={IMAGES.galleryHero}
        title="Our Work"
        subtitle="Every project built with care and designed to last."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
      />

      {/* Gallery Grid */}
      <section className="bg-alpine-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, i) => (
              <GalleryImage
                key={i}
                src={item.src}
                label={item.label}
                hoverDesc={item.hoverDesc}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Below Gallery CTA */}
      <section className="bg-alpine-green py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-white mb-3">
            Inspired by What You See?
          </h2>
          <p className="font-inter text-base text-white/80 mb-8">
            Let's build something great together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-alpine-terra text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-terra/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
          >
            Request a Free Quote
          </Link>
          <p className="font-inter text-xs text-white/50 mt-3">
            Free estimates · Licensed · Bonded · Insured
          </p>
        </div>
      </section>
    </>
  );
}