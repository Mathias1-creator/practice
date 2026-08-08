import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import ClosingCTA from '../components/ClosingCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}