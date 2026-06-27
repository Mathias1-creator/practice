import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ServicesHero from '../components/services/ServicesHero';
import ServicesIntro from '../components/services/ServicesIntro';
import PillarLandManagement from '../components/services/PillarLandManagement';
import PillarVineyard from '../components/services/PillarVineyard';
import PillarPestControl from '../components/services/PillarPestControl';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesCredentials from '../components/services/ServicesCredentials';
import ServicesCta from '../components/services/ServicesCta';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesIntro />
      <PillarLandManagement />
      <PillarVineyard />
      <PillarPestControl />
      <ServicesProcess />
      <ServicesCredentials />
      <ServicesCta />
      <Footer />
    </div>
  );
}