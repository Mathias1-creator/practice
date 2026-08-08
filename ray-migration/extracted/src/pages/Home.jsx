import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServiceChips from '../components/home/ServiceChips';
import EmergencyBanner from '../components/home/EmergencyBanner';
import BentoServices from '../components/home/BentoServices';
import WhyChooseRay from '../components/home/WhyChooseRay';
import StatsSection from '../components/home/StatsSection';
import MarqueeStrip from '../components/home/MarqueeStrip';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import CTABand from '../components/shared/CTABand';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServiceChips />
      <EmergencyBanner />
      <BentoServices />
      <WhyChooseRay />
      <StatsSection />
      <MarqueeStrip />
      <TestimonialsCarousel />
      <CTABand />
    </>
  );
}