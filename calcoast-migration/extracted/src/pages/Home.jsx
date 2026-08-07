import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServicesBento from '../components/home/ServicesBento';
import BeforeAfterSection from '../components/home/BeforeAfterSection';
import Testimonials from '../components/home/Testimonials';
import ClosingCTA from '../components/home/ClosingCTA';
import StatBreak from '../components/home/StatBreak';
import InstagramSection from '../components/home/InstagramSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesBento />
      <StatBreak />
      <InstagramSection />
      <BeforeAfterSection />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}