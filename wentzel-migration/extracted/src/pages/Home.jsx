import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PhotoStrip from '../components/home/PhotoStrip';
import Testimonials from '../components/home/Testimonials';
import ServiceArea from '../components/home/ServiceArea';
import CTABand from '../components/shared/CTABand';

const HERO_IMAGE = '/images/91b0f5b2e_generated_image.jpg';

const GALLERY_IMAGES = [
  { url: '/images/2487d5d2b_IMG_8878.jpg', label: 'Backyard Sprinklers Running' },
  { url: '/images/bb4948d56_20190404_192539.jpg', label: 'Excavation & Drainage Work' },
  { url: '/images/217326d7f_20200521_195453.jpg', label: 'Lush Green Backyard Lawn' },
  { url: '/images/7f082dbb7_2024-02-081.webp', label: 'Sports Field Irrigation' },
];

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <PhotoStrip images={GALLERY_IMAGES} />
      <ServiceArea />
      <CTABand />
    </div>
  );
}