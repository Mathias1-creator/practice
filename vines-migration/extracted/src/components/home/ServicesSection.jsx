import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const SERVICES = [
  {
    title: 'Land Management',
    desc: 'Year-round stewardship of properties from backyards to thousands of acres, including second homes — fuel reduction, tree work, property repair, grading, and more.',
    image: 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/0f4f7c98e_generated_image.png',
    alt: 'Aerial view of managed Sonoma County estate property with oak woodland (placeholder)',
  },
  {
    title: 'Vineyard & Ranch',
    desc: 'Vineyard management, consulting and removal, plus farming, ranching, and managed sheep grazing.',
    image: 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/f31e8e5d7_generated_image.png',
    alt: 'Vineyard rows on rolling Sonoma County hillside with sheep grazing (placeholder)',
  },
  {
    title: 'Pest & Vegetation Control',
    desc: 'Licensed herbicide and pesticide application, weed and brush abatement, and invasive species removal.',
    image: 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/be53c025c_generated_image.png',
    alt: 'Licensed vegetation and pest control management on California estate (placeholder)',
  },
];

function ServiceCard({ service }) {
  return (
    <Link
      to="/services"
      className="group relative block overflow-hidden rounded-md aspect-[4/3]"
    >
      <img
        src={service.image}
        alt={service.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(20,22,18,0.84) 0%, rgba(20,22,18,0.22) 60%, transparent 100%)',
        }}
      />
      {/* Full-height flex column so content anchors to bottom */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6">
        <h3 className="font-heading font-medium text-white text-[20px] md:text-[22px] leading-tight mb-1.5">
          {service.title}
        </h3>
        <p className="text-white/75 text-[14px] leading-relaxed">
          {service.desc}
        </p>
        <span className="inline-flex items-center gap-1.5 font-body font-medium uppercase text-[11px] tracking-[0.14em] text-brass transition-all duration-300 group-hover:gap-3 mt-3">
          Explore <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-sand">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-16">
            <Eyebrow className="justify-center">What We Do</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[36px] md:text-[50px] leading-[1.1]">
              Complete care, from soil to canopy
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}