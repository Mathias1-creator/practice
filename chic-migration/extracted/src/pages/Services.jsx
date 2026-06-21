import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import ServicesHero from '../components/services/ServicesHero';
import ServiceBlock from '../components/services/ServiceBlock';
import AdditionalServices from '../components/services/AdditionalServices';

const maintenanceImg = '/images/21682f952_generated_72cb00a3.png';
const installationsImg = '/images/c628358d8_generated_871453d1.png';
const cleanupsImg = '/images/9e5857660_generated_1f9f3a68.png';

const serviceData = [
  {
    id: 'monthly',
    label: 'SERVICE 01',
    title: 'Monthly Maintenance',
    description: 'Biweekly, weekly, or monthly services — we keep your garden looking polished and healthy year-round with reliable, detail-driven care.',
    image: maintenanceImg,
    reviewer: { name: 'Sarah M.', quote: 'Our yard has never looked better. Jenny is incredibly reliable.' },
    reversed: false,
  },
  {
    id: 'installations',
    label: 'SERVICE 02',
    title: 'Landscape Installations',
    description: 'From design to execution — we bring your outdoor vision to life with thoughtful planting, irrigation, and hardscape installations tailored to your property.',
    image: installationsImg,
    reviewer: { name: 'David K.', quote: 'The installation exceeded our expectations. Truly professional.' },
    reversed: true,
  },
  {
    id: 'cleanups',
    label: 'SERVICE 03',
    title: 'One-Time Clean Ups',
    description: "Need a fresh start? Our one-time cleanup services transform overgrown or neglected outdoor spaces into clean, intentional gardens ready for whatever comes next.",
    image: cleanupsImg,
    reviewer: { name: 'Rebecca T.', quote: "We didn't know where to start. Jenny had a plan within days." },
    reversed: false,
  },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    }
  }, [location.hash]);

  return (
    <div style={{ background: '#faf8f5' }}>
      <Navbar />
      <ServicesHero />

      {serviceData.map((service) => (
        <ServiceBlock key={service.id} {...service} />
      ))}

      <AdditionalServices />

      {/* Bottom CTA */}
      <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #c9547a, #a03a60)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="font-body text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto" style={{ lineHeight: 1.75 }}>
            Free estimates. C27 Licensed & Insured. Serving all of Ventura County.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            style={{ border: '2px solid white', borderRadius: '6px' }}
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}