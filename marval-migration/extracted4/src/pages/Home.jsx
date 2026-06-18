import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import StatsStrip from '../components/home/StatsStrip';
import BentoServices from '../components/home/BentoServices';
import CostEstimator from '../components/home/CostEstimator';
import QuoteForm from '../components/home/QuoteForm';
import Testimonials from '../components/home/Testimonials';
import ServiceArea from '../components/home/ServiceArea';
import FooterCTA from '../components/layout/FooterCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsStrip />
      <BentoServices />
      <CostEstimator />
      <QuoteForm />
      <Testimonials />
      <ServiceArea />
      <FooterCTA />
    </>
  );
}