import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/shared/ScrollReveal';
import BeforeAfterSlider from '../components/shared/BeforeAfterSlider';

const SLIDERS = [
  { before: '/images/8c3782784_Screenshot2026-05-02at62504AM.jpg', after: '/images/2286765ce_Screenshot2026-05-02at62530AM.jpg', label: 'Side Yard Drainage & Gravel Installation' },
  { before: '/images/567d7ef79_Screenshot2026-05-02at14733PM.jpg', after: '/images/4863f91b0_Screenshot2026-05-02at14748PM.jpg', label: 'Front Yard Lawn Cleanup & Mow' },
  { before: '/images/d53cab9ba_Screenshot2026-05-02at64750AM.jpg', after: '/images/f21480a4a_Screenshot2026-05-02at65845AM.jpg', label: 'Backyard Paver Patio & Sod Installation' },
];

const GALLERY_IMAGES = [
  { src: '/images/ae4194726_Screenshot2026-05-02at64618AM.jpg', caption: 'Retaining Wall Construction', tall: true },
  { src: '/images/ec9714995_Screenshot2026-05-02at64602AM.jpg', caption: 'Drainage Installation', tall: true },
  { src: '/images/814204f9e_Screenshot2026-05-02at64503AM.jpg', caption: 'River Rock & Paver Pathway', tall: false },
  { src: '/images/44d4aca35_Screenshot2026-05-02at64436AM.jpg', caption: 'Landscape Garden Design', tall: false },
  { src: '/images/9a9604e67_Screenshot2026-05-02at64326AM.jpg', caption: 'Paver Patio with Medallions', tall: false },
  { src: '/images/348f1caf7_Screenshot2026-05-02at64201AM.jpg', caption: 'Flagstone Walkway', tall: true },
  { src: '/images/32846f779_Screenshot2026-05-02at14045PM.jpg', caption: 'Stacked Stone Retaining Wall & Steps', tall: true },
  { src: '/images/4c5f4f1aa_Screenshot2026-05-02at14136PM.jpg', caption: 'Paver Side Installation', tall: false },
  { src: '/images/74c15cf3d_Screenshot2026-05-02at14226PM.jpg', caption: 'Block Wall Excavation & Grading', tall: true },
  { src: '/images/7cf0d7ae8_Screenshot2026-05-02at14251PM.jpg', caption: 'Retaining Wall with Erosion Netting', tall: true },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-4">Our Work</h1>
          <p className="text-white/50 text-lg">Every project is built to last and designed to impress.</p>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-obsidian mb-4">Before & After</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-10">
            {SLIDERS.map((slider, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <BeforeAfterSlider beforeImage={slider.before} afterImage={slider.after} label={slider.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-alabaster py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-obsidian">Project Gallery</h2>
            </div>
          </ScrollReveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${img.tall ? 'h-96' : 'h-64'}`}
                  />
                  {/* Green overlay on hover */}
                  <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/15 transition-colors duration-400" />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm">{img.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-3">
              Have a project in mind? Let's talk.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-forest font-bold px-8 py-4 rounded-full hover:scale-103 active:scale-97 transition-transform duration-200 mt-4"
            >
              Get a Free Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}