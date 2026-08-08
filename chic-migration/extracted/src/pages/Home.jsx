import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServicesPreview from '../components/home/ServicesPreview';
import BeforeAfterStatic from '../components/home/BeforeAfterStatic';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div style={{ background: '#faf8f5' }}>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <BeforeAfterStatic />
      <ServicesPreview />
      <ProcessSection />
      <CTASection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}