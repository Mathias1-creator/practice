import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServiceChips from '../components/home/ServiceChips';
import StatsSection from '../components/home/StatsSection';
import BentoServices from '../components/home/BentoServices';
import ProcessSection from '../components/shared/ProcessSection';
import ProjectShowcase from '../components/home/ProjectShowcase';
import WhyChoose from '../components/home/WhyChoose';
import InstagramGrid from '../components/home/InstagramGrid';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import CTASection from '../components/shared/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServiceChips />
      <StatsSection />
      <BentoServices />
      <ProcessSection />
      <ProjectShowcase />
      <WhyChoose />
      <InstagramGrid />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}