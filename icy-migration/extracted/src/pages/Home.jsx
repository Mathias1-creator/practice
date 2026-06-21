import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ServiceChips from '@/components/home/ServiceChips';
import BentoGrid from '@/components/home/BentoGrid';
import ProcessSection from '@/components/home/ProcessSection';
import StatsSection from '@/components/home/StatsSection';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import ClosingCTA from '@/components/home/ClosingCTA';

export default function Home() {
  useEffect(() => {
    document.title = 'Alpine Meadows Landscaping Construction Corp | Licensed Contractor — La Habra Heights, CA';
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceChips />
      <BentoGrid />
      <ProcessSection />
      <StatsSection />
      <ProjectShowcase />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <ClosingCTA />
    </>
  );
}