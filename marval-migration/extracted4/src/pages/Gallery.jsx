import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import FooterCTA from '../components/layout/FooterCTA';
import { Link } from 'react-router-dom';

const galleryImages = [
  { src: '/images/6339c924b_IMG_1686.webp', label: 'Paver Patio & Fire Pit', category: 'Hardscape' },
  { src: '/images/75f168bf3_IMG_0303.webp', label: 'Residential Front Yard', category: 'Landscaping' },
  { src: '/images/acc134dcb_IMG_0461.webp', label: 'Retaining Wall Construction', category: 'Hardscape' },
  { src: '/images/880292ad4_IMG_1654.webp', label: 'Garden Path & Archway', category: 'Landscaping' },
  { src: '/images/b28d74ff3_IMG_1656-2.webp', label: 'Stepping Stone Pathway', category: 'Hardscape' },
  { src: '/images/020fb1b59_IMG_1658.webp', label: 'Backyard Planting Design', category: 'Landscaping' },
  { src: '/images/c4f5f1c6c_IMG_1061-2.webp', label: 'Artificial Turf Installation', category: 'Landscaping' },
  { src: '/images/b3895d277_IMG_1104-1.webp', label: 'Curb Appeal Landscaping', category: 'Landscaping' },
  { src: '/images/e36c76eec_IMG_0479-768x1024-2.webp', label: 'Retaining Wall — Large Scale', category: 'Hardscape' },
  { src: '/images/e6737f9ea_IMG_1122.webp', label: 'Planting & Rose Garden', category: 'Planting' },
  { src: '/images/5f1529e52_IMG_1241-2.webp', label: 'Vertical Planter Wall', category: 'Planting' },
  { src: '/images/5741b143c_IMG_1037-1.webp', label: 'Drought-Tolerant Yard', category: 'Landscaping' },
];

const categories = ['All', 'Landscaping', 'Hardscape', 'Planting'];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filtered = activeFilter === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prev = useCallback(() => {
    setSelectedIndex(i => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const next = useCallback(() => {
    setSelectedIndex(i => (i + 1) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, prev, next]);

  return (
    <>
      <PageHero title="Our Work" subtitle="17 years of transformations across the Central Coast." />

      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 mb-14 max-w-lg mx-auto text-center">
            {[
              { num: '300+', label: 'Projects' },
              { num: '17', label: 'Years' },
              { num: '5★', label: 'Rated' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl py-4 shadow-sm border border-stone/10">
                <p className="text-2xl font-playfair font-bold text-forest">{s.num}</p>
                <p className="text-xs text-charcoal/50 font-medium uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-forest text-white shadow-lg shadow-forest/25'
                    : 'bg-white text-charcoal/60 hover:bg-forest/10 border border-stone/20'
                }`}
              >
                {cat}
                <span className={`ml-2 text-xs rounded-full px-1.5 py-0.5 ${activeFilter === cat ? 'bg-white/20 text-white' : 'bg-stone/20 text-charcoal/50'}`}>
                  {cat === 'All' ? galleryImages.length : galleryImages.filter(i => i.category === cat).length}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block bg-forest/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">{img.category}</span>
                    <p className="text-white font-semibold text-sm">{img.label}</p>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-charcoal" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Yelp CTA */}
      <section className="bg-charcoal py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-3">Want to See More?</h2>
        <p className="text-stone text-lg mb-10">Browse our full project portfolio on Yelp — over 300 real project photos.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.yelp.com/biz/marval-services-grover-beach-7" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-stone text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-stone/80 transition-all hover:scale-105">
            VIEW ALL PHOTOS ON YELP
          </a>
          <a href="https://www.yelp.com/biz/marval-services-grover-beach-7" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-forest text-white px-8 py-4 rounded-full font-semibold hover:bg-forest/90 transition-all hover:scale-105">
            LEAVE US A REVIEW
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">Have a project in mind?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-full font-semibold hover:bg-forest/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-forest/25">
          GET IN TOUCH
        </Link>
      </section>

      <FooterCTA />

      {/* Lightbox with prev/next */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full">
              {selectedIndex + 1} / {filtered.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[selectedIndex].src}
                alt={filtered[selectedIndex].label}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="text-center">
                <span className="inline-block bg-forest/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">{filtered[selectedIndex].category}</span>
                <p className="text-white/80 text-sm">{filtered[selectedIndex].label}</p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-sm md:max-w-xl px-4">
              {filtered.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === selectedIndex ? 'border-forest scale-110' : 'border-transparent opacity-50 hover:opacity-80'}`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}