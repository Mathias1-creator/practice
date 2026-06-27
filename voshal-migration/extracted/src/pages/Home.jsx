import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/shared/TrustBar';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyVoshal from '../components/home/WhyVoshal';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import FooterCTA from '../components/shared/FooterCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyVoshal />
      <GalleryPreview />
      <Testimonials />
      <FooterCTA />
    </>
  );
}