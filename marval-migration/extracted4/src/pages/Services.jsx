import React from 'react';
import PageHero from '../components/shared/PageHero';
import ServiceBlock from '../components/services/ServiceBlock';
import FooterCTA from '../components/layout/FooterCTA';

const LANDSCAPING_IMG = '/images/ce585ed21_generated_image.png';
const HARDSCAPE_IMG = '/images/8d488b923_generated_image.png';
const IRRIGATION_IMG = '/images/13ce9e503_generated_image.png';
const TREE_IMG = '/images/524ae406b_IMG_7931.jpeg';

const servicesData = [
  {
    id: 'landscaping',
    title: 'Landscaping',
    body: 'Marval Landscaping Services delivers complete residential and commercial landscaping solutions throughout SLO County. From initial design consultations through final installation, we manage every aspect of your outdoor transformation. Our services include full yard design and installation, sod and turf installation, grading and drainage, planting and seasonal color, drought-tolerant landscaping, and ongoing maintenance programs. With 17 years of experience working in the Central Coast climate, we know which plants thrive, which materials last, and how to build landscapes that stay beautiful year after year. Whether you are starting from scratch or refreshing an existing space, Marval brings the expertise and professionalism to get it done right.',
    image: '/images/5f555dbc5_IMG_3666.jpg',
    imageAlt: 'John Deere skid steer grading and excavation',
    ctaText: 'Get a Free Quote',
    bgClass: 'bg-white',
  },
  {
    id: 'hardscape',
    title: 'Hardscape',
    body: 'From custom paver patios to sweeping driveways and structural retaining walls, Marval Landscaping Services handles the complete hardscape scope for residential and commercial projects throughout SLO County. We work with a wide range of materials including concrete pavers, natural stone, flagstone, and block to create outdoor spaces that are as durable as they are beautiful. Every hardscape project is planned carefully, built to grade, and finished with precision. We coordinate directly with homeowners and contractors to keep projects on schedule, on budget, and built to last. If you can dream it, we can build it.',
    image: '/images/62fe19a45_IMG_6628.jpg',
    imageAlt: 'Custom paver driveway and retaining wall',
    ctaText: 'Get a Free Quote',
    reversed: true,
    bgClass: 'bg-cream',
  },
  {
    id: 'irrigation',
    title: 'Irrigation',
    body: 'A well-designed irrigation system is the foundation of a healthy, low-maintenance landscape. Marval Landscaping Services installs, repairs, and troubleshoots irrigation systems for residential and commercial properties throughout the Central Coast. We design systems that deliver the right amount of water to every zone efficiently, reducing waste and keeping your landscape healthy year-round. Our irrigation services include new system installation, drip and spray system design, controller programming, leak detection and repair, system audits, and seasonal adjustments. Whether you need a brand new system or your existing one needs attention, Marval has you covered.',
    image: IRRIGATION_IMG,
    imageAlt: 'Professional irrigation system sprinklers',
    ctaText: 'Call (805) 602-2230',
    ctaType: 'phone',
    bgClass: 'bg-white',
  },
  {
    id: 'planting',
    title: 'Planting & Tree Services',
    body: 'From selecting the right plants for your soil and climate to removing dangerous trees safely, Marval Landscaping Services provides complete planting and tree care throughout SLO County. We specialize in drought-tolerant planting designs that thrive in the Central Coast climate with minimal water. Our tree services include trimming, shaping, and removal for both residential and commercial properties. We also handle large-scale planting installations for new construction, renovations, and commercial landscapes. Every plant we install is chosen for the specific conditions of your site to ensure long-term success.',
    image: TREE_IMG,
    imageAlt: 'Professional tree trimming and planting',
    ctaText: 'Get a Free Quote',
    bgClass: 'bg-cream',
    reversed: true,
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Residential · Commercial · Public Works · Federal Contracting"
      />
      {servicesData.map((service, i) => (
        <div key={i} id={service.id}>
          <ServiceBlock {...service} />
        </div>
      ))}
      <FooterCTA />
    </>
  );
}