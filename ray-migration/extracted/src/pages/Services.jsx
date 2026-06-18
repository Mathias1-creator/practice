import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ServiceChips from '../components/home/ServiceChips';
import ServiceDetail from '../components/services/ServiceDetail';
import CTABand from '../components/shared/CTABand';
import ScrollReveal from '../components/shared/ScrollReveal';

const SERVICES = [
  {
    anchor: 'drain-cleaning',
    title: 'Drain Cleaning',
    image: '/images/c597b734c_generated_d41a40b7.png',
    copy: 'Clogged drains are one of the most common plumbing problems — and one of the most disruptive. Ray Espinoza Plumbing provides professional drain cleaning services for kitchen sinks, bathroom sinks, tubs, and toilets throughout San Luis Obispo County. We also handle sewer line replacement, cleanout installation, and cleanout additions for residential and commercial properties. Whether it is a slow drain or a complete stoppage, Ray responds fast and gets it cleared right.',
    reviewer: { initials: 'E.G.', quote: 'quick to respond' },
  },
  {
    anchor: 'water-line-repairs',
    title: 'Water Line & Plumbing Repairs',
    image: '/images/16bc0914a_generated_5a8d9930.png',
    copy: 'From waterline installs and repairs to faucets, toilets, sinks, angle stops, shower enclosures, re-pipes, and shower valve replacements — Ray Espinoza Plumbing handles the full range of residential and commercial plumbing repair and installation work across SLO County. Every repair is done cleanly and professionally with honest communication from start to finish. Ray shows up on time, does the work right, and leaves the job site clean.',
    reviewer: { initials: 'T.A.', quote: 'top notch quality' },
  },
  {
    anchor: 'gas-line-services',
    title: 'Gas Line Services',
    image: '/images/0ecde203f_generated_bdeadd9b.png',
    copy: "Gas line work requires precision, experience, and the right licensing. Ray Espinoza Plumbing provides gas line installation, gas line repair, and leak detection for residential and commercial properties throughout San Luis Obispo County. If you suspect a gas leak or need a new gas line installed, don't wait — call Ray. Available 24 hours a day, 7 days a week for gas line emergencies.",
    reviewer: { initials: 'G.C.', quote: 'work and communication top notch' },
  },
  {
    anchor: 'water-heater-installation',
    title: 'Water Heater Installation',
    image: '/images/9619e9f95_generated_6996dee3.png',
    copy: 'No hot water is never convenient. Ray Espinoza Plumbing provides fast, professional water heater installation for both standard tank water heaters and tankless water heater systems. Whether your existing water heater has failed or you are upgrading to a more energy-efficient tankless system, Ray responds quickly and gets it done right. Same-day service available when you need it most.',
    reviewer: { initials: 'T.F.', quote: 'worked quickly & efficiently' },
  },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [location.hash]);

  return (
    <>
      <div className="relative">
        <PageHero
          title="Our Services"
          subtitle="Residential and commercial plumbing for San Luis Obispo County — available 24/7."
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Services' },
          ]}
          image="/images/60ba2fb3b_generated_455dcb40.png"
          overlayOpacity={55}
        />

        {/* Frosted Glass Certification Card */}
        <ScrollReveal>
          <div className="absolute bottom-8 right-8 hidden lg:block z-20">
            <div className="bg-white/15 backdrop-blur-xl border border-ray-red/30 rounded-xl px-6 py-5">
              <p className="font-dm font-semibold text-sm text-white uppercase tracking-wider">
                Lic# 1132312
              </p>
              <p className="font-inter text-sm text-white/80 mt-1">Ray Espinoza Plumbing</p>
              <p className="font-inter text-xs text-white/60 mt-1">Licensed · Residential & Commercial</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ServiceChips />

      {SERVICES.map((service, i) => (
        <ServiceDetail key={service.anchor} service={service} reverse={i % 2 !== 0} />
      ))}

      <CTABand />
    </>
  );
}