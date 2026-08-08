import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import CredibilityStrip from '../components/home/CredibilityStrip';
import ApproachSection from '../components/home/ApproachSection';
import ServicesSection from '../components/home/ServicesSection';
import FireFeatureSection from '../components/home/FireFeatureSection';
import DifferenceSection from '../components/home/DifferenceSection';
import StatsSection from '../components/home/StatsSection';
import RealtorsSection from '../components/home/RealtorsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CredibilityStrip />
      <ApproachSection />
      <ServicesSection />
      <FireFeatureSection />
      <DifferenceSection />
      <StatsSection />
      <RealtorsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}