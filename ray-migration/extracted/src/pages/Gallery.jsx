import React from 'react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import GallerySlot01 from '../components/gallery/GallerySlot01';
import GallerySlot02 from '../components/gallery/GallerySlot02';
import GallerySlot03 from '../components/gallery/GallerySlot03';
import GallerySlot04 from '../components/gallery/GallerySlot04';
import GallerySlot05 from '../components/gallery/GallerySlot05';
import GallerySlot06 from '../components/gallery/GallerySlot06';
import GallerySlot07 from '../components/gallery/GallerySlot07';
import GallerySlot08 from '../components/gallery/GallerySlot08';
import GallerySlot09 from '../components/gallery/GallerySlot09';
import GallerySlot10 from '../components/gallery/GallerySlot10';
import GallerySlot11 from '../components/gallery/GallerySlot11';
import GallerySlot12 from '../components/gallery/GallerySlot12';
import GallerySlot13 from '../components/gallery/GallerySlot13';
import GallerySlot14 from '../components/gallery/GallerySlot14';
import WaterSlot01 from '../components/gallery/WaterSlot01';
import WaterSlot02 from '../components/gallery/WaterSlot02';
import WaterSlot03 from '../components/gallery/WaterSlot03';
import WaterSlot04 from '../components/gallery/WaterSlot04';
import WaterSlot05 from '../components/gallery/WaterSlot05';
import WaterSlot06 from '../components/gallery/WaterSlot06';
import WaterSlot07 from '../components/gallery/WaterSlot07';
import WaterSlot08 from '../components/gallery/WaterSlot08';
import WaterSlot09 from '../components/gallery/WaterSlot09';
import WaterSlot10 from '../components/gallery/WaterSlot10';
import WaterSlot11 from '../components/gallery/WaterSlot11';
import WaterSlot12 from '../components/gallery/WaterSlot12';
import GasSlot01 from '../components/gallery/GasSlot01';
import GasSlot02 from '../components/gallery/GasSlot02';
import GasSlot03 from '../components/gallery/GasSlot03';
import GasSlot04 from '../components/gallery/GasSlot04';
import GasSlot05 from '../components/gallery/GasSlot05';
import GasSlot06 from '../components/gallery/GasSlot06';
import GasSlot07 from '../components/gallery/GasSlot07';
import GasSlot08 from '../components/gallery/GasSlot08';


export default function Gallery() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Clean, professional plumbing work across San Luis Obispo County."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Gallery' },
        ]}
        image="https://media.base44.com/images/public/6a174d91ad108cbaff5bbd34/60ba2fb3b_generated_455dcb40.png"
        overlayOpacity={55}
      />

      <section className="bg-ray-offwhite py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-dm font-semibold text-sm text-ray-red uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl text-ray-charcoal tracking-tight mt-3 mb-10">
            Sewer and Septic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <GallerySlot01 />
            <GallerySlot02 />
            <GallerySlot03 />
            <GallerySlot04 />
            <GallerySlot05 />
            <GallerySlot06 />
            <GallerySlot07 />
            <GallerySlot08 />
            <GallerySlot09 />
            <GallerySlot10 />
            <GallerySlot11 />
            <GallerySlot12 />
            <GallerySlot13 />
            <GallerySlot14 />
          </div>
        </div>
      </section>

      <section className="bg-ray-offwhite py-16 sm:py-24" style={{ borderTop: '1px solid #E5E5E5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-dm font-semibold text-sm text-ray-red uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl text-ray-charcoal tracking-tight mt-3 mb-10">
            Gas Repair and New Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <GasSlot01 />
            <GasSlot02 />
            <GasSlot03 />
            <GasSlot04 />
            <GasSlot05 />
            <GasSlot06 />
            <GasSlot07 />
            <GasSlot08 />
          </div>
        </div>
      </section>

      <section className="bg-ray-offwhite py-16 sm:py-24" style={{ borderTop: '1px solid #E5E5E5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-dm font-semibold text-sm text-ray-red uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl text-ray-charcoal tracking-tight mt-3 mb-10">
            Water
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <div className="break-inside-avoid"><WaterSlot01 /></div>
            <div className="break-inside-avoid"><WaterSlot02 /></div>
            <div className="break-inside-avoid"><WaterSlot03 /></div>
            <div className="break-inside-avoid"><WaterSlot04 /></div>
            <div className="break-inside-avoid"><WaterSlot05 /></div>
            <div className="break-inside-avoid"><WaterSlot06 /></div>
            <div className="break-inside-avoid"><WaterSlot07 /></div>
            <div className="break-inside-avoid"><WaterSlot08 /></div>
            <div className="break-inside-avoid"><WaterSlot09 /></div>
            <div className="break-inside-avoid"><WaterSlot10 /></div>
            <div className="break-inside-avoid"><WaterSlot11 /></div>
            <div className="break-inside-avoid"><WaterSlot12 /></div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}