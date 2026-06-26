import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const SERVICES = [
  {
    num: '01',
    title: 'Drain Cleaning',
    desc: 'Kitchen stoppages, bathroom sink, tub, toilet stoppages, sewer line replacement, cleanout installation and additions.',
    image: '/images/c597b734c_generated_d41a40b7.jpg',
    anchor: 'drain-cleaning',
    size: 'large',
  },
  {
    num: '02',
    title: 'Water Line & Plumbing Repairs',
    desc: 'Waterline install and repair, faucets, toilets, sinks, angle stops, shower enclosures, re-pipes, shower valve replacement.',
    image: '/images/16bc0914a_generated_5a8d9930.jpg',
    anchor: 'water-line-repairs',
    size: 'medium',
  },
  {
    num: '03',
    title: 'Gas Line Services',
    desc: 'Gas line installs, gas line repair, and leak detection.',
    image: '/images/0ecde203f_generated_bdeadd9b.jpg',
    anchor: 'gas-line-services',
    size: 'medium',
  },
  {
    num: '04',
    title: 'Water Heater Installation',
    desc: 'Standard and tankless water heater installs, repairs and replacements.',
    image: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80',
    anchor: 'water-heater-installation',
    size: 'medium',
  },
];

const EMERGENCY = {
  title: 'Available 24/7',
  desc: 'Emergency service available nights, weekends, and holidays. Ray answers every call personally.',
};

export default function BentoServices() {
  return (
    <section className="bg-ray-offwhite py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="font-dm font-semibold text-sm text-ray-red uppercase tracking-widest">
            What We Do
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl text-ray-charcoal tracking-tight mt-3">
            Every Plumbing Job. Done Right.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="font-inter text-base text-ray-gray mt-4 max-w-2xl">
            From drain cleaning to gas lines — Ray handles it all for residential and commercial properties across SLO County.
          </p>
        </ScrollReveal>

        {/* Bento Grid — desktop: 2-col, mobile: 1-col, 2px gaps */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '2px' }}
        >
          {/* LEFT COLUMN: Drain Cleaning (tall, spans 2 rows) */}
          <ScrollReveal delay={100} className="md:row-span-2">
            <BentoCard service={SERVICES[0]} tall />
          </ScrollReveal>

          {/* RIGHT COLUMN TOP: Water Line */}
          <ScrollReveal delay={200}>
            <BentoCard service={SERVICES[1]} />
          </ScrollReveal>

          {/* RIGHT COLUMN MIDDLE: Gas Line */}
          <ScrollReveal delay={300}>
            <BentoCard service={SERVICES[2]} />
          </ScrollReveal>

          {/* BOTTOM LEFT: Water Heater */}
          <ScrollReveal delay={400}>
            <BentoCard service={SERVICES[3]} />
          </ScrollReveal>

          {/* BOTTOM RIGHT: 24/7 Emergency */}
          <ScrollReveal delay={500}>
            <EmergencyCard />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-ray-black text-white font-dm font-semibold px-8 py-3.5 rounded-md hover:scale-103 active:scale-97 transition-transform duration-200"
            >
              See All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function BentoCard({ service, tall = false }) {
  return (
    <div
      id={service.anchor}
      className="relative overflow-hidden group"
      style={{
        borderRadius: '8px',
        scrollMarginTop: '90px',
        minHeight: tall ? '560px' : '260px',
        height: tall ? '100%' : undefined,
      }}
    >
      {/* Background image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
      />

      {/* Gradient overlay — bottom heavy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(0deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.50) 60%, rgba(10,10,10,0.20) 100%)',
        }}
      />

      {/* Hover lift + shadow */}
      <div
        className="absolute inset-0 transition-shadow duration-300"
        style={{ borderRadius: '8px' }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-end h-full"
        style={{ padding: '40px 32px 32px' }}
      >
        {/* Editorial number */}
        <span
          className="font-barlow font-bold block mb-3"
          style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.15em',
          }}
        >
          {service.num}
        </span>

        <h3
          className="font-barlow font-bold text-white uppercase"
          style={{ fontSize: '32px', letterSpacing: '0.02em', lineHeight: 1.1 }}
        >
          {service.title}
        </h3>

        <p
          className="font-dm mt-3"
          style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
          }}
        >
          {service.desc}
        </p>

        <LearnMoreLink anchor={service.anchor} />
      </div>

      {/* Hover shadow effect overlay */}
      <style>{`
        #${service.anchor}:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.4);
          transform: translateY(-4px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        #${service.anchor} {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
}

function EmergencyCard() {
  return (
    <div
      className="relative overflow-hidden flex flex-col"
      style={{
        borderRadius: '8px',
        backgroundColor: '#CC2200',
        minHeight: '260px',
        padding: '40px 32px 32px',
      }}
    >
      <Clock className="w-8 h-8 text-white mb-4 flex-shrink-0" />

      <h3
        className="font-barlow font-bold text-white uppercase"
        style={{ fontSize: '32px', letterSpacing: '0.02em', lineHeight: 1.1 }}
      >
        Available 24/7
      </h3>

      <p
        className="font-dm mt-3 flex-1"
        style={{
          fontSize: '15px',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1.6,
        }}
      >
        Emergency service available nights, weekends, and holidays. Ray answers every call personally.
      </p>

      <div className="mt-6">
        <a
          href="tel:+18058352196"
          className="inline-block font-dm font-semibold px-6 py-3 rounded-md transition-colors duration-200 hover:bg-gray-100"
          style={{ backgroundColor: '#FFFFFF', color: '#CC2200', fontSize: '15px' }}
        >
          Call (805) 835-2196
        </a>
        <p
          className="font-dm mt-3"
          style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}
        >
          Ray answers — every time.
        </p>
      </div>
    </div>
  );
}

function LearnMoreLink({ anchor }) {
  return (
    <a
      href={`/services#${anchor}`}
      className="learn-more-link inline-flex items-center gap-1 font-barlow font-bold uppercase mt-5"
      style={{
        fontSize: '15px',
        letterSpacing: '0.08em',
        color: '#FFFFFF',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = '#CC2200';
        const arrow = e.currentTarget.querySelector('.learn-more-arrow');
        if (arrow) arrow.style.transform = 'translateX(4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = '#FFFFFF';
        const arrow = e.currentTarget.querySelector('.learn-more-arrow');
        if (arrow) arrow.style.transform = 'translateX(0)';
      }}
    >
      Learn More
      <ArrowRight
        className="learn-more-arrow w-4 h-4"
        style={{ transition: 'transform 0.2s ease' }}
      />
    </a>
  );
}