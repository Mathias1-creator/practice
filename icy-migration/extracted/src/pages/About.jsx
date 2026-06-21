import React, { useEffect } from 'react';
import PageHero from '@/components/shared/PageHero';
import ProcessSection from '@/components/home/ProcessSection';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { IMAGES } from '@/lib/images';
import { Shield, Award, Hammer } from 'lucide-react';

const setsApart = [
  {
    icon: Award,
    title: 'Quality Over Quantity',
    desc: 'We take on fewer projects so we can give each one our full attention. No shortcuts. No rushing. Just clean, precise work from start to finish.',
  },
  {
    icon: Shield,
    title: 'Licensed · Bonded · Insured',
    desc: 'Alpine Meadows is fully licensed, bonded, and insured on every project. You are protected and we stand behind every job we complete.',
  },
  {
    icon: Hammer,
    title: 'Full Service Outdoor Construction',
    desc: 'Masonry, irrigation, fencing — one contractor, one standard of quality. Alpine Meadows handles your entire outdoor construction project.',
  },
];

const cities = [
  { name: 'La Habra Heights', primary: true },
  { name: 'Fullerton' },
  { name: 'Brea' },
  { name: 'La Mirada' },
  { name: 'Friendly Hills' },
  { name: 'Whittier' },
];

function WhoWeAre() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <section ref={ref} className="bg-alpine-offwhite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-alpine-dark mb-6">About Alpine Meadows</h2>
            <p className="font-inter text-base text-alpine-dark/75 leading-relaxed">
              Alpine Meadows Landscaping Construction Corp was founded by Jacob P. Shubin with one guiding principle — quality over quantity. Based in La Habra Heights, California, Alpine Meadows provides premium landscaping and construction services for residential and commercial properties across Southern California. We specialize in masonry and hardscaping, irrigation system design and installation, and custom fencing — bringing the same level of craftsmanship and attention to detail to every project regardless of size. We are a licensed, bonded, and insured contractor. We take on fewer projects so we can do each one better. Have a job in mind? Give us a call.
            </p>
          </div>
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative overflow-hidden rounded-2xl">
              <img src={IMAGES.aboutTeam} alt="Alpine Meadows team on job site" className="w-full h-80 lg:h-96 object-cover" />
              <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <span className="font-outfit text-[10px] uppercase tracking-wider text-white/80">
                  CLIENT PHOTO SLOT — Jacob or team on job site
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatSetsUsApart() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <section ref={ref} className="bg-alpine-offwhite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {setsApart.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-alpine-terra/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-alpine-terra" />
                </div>
                <h3 className="font-fraunces text-xl font-bold text-alpine-dark mb-3">{item.title}</h3>
                <p className="font-inter text-sm text-alpine-dark/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-alpine-dark mb-3">Serving Southern California</h2>
          <p className="font-inter text-base text-alpine-dark/70">Based in La Habra Heights — serving the surrounding communities.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {cities.map((city, i) => (
            <span
              key={i}
              className={`font-outfit text-sm px-5 py-2.5 rounded-full border-2 transition-all duration-200 cursor-default ${
                city.primary
                  ? 'bg-alpine-green text-white border-alpine-green'
                  : 'border-alpine-green/30 text-alpine-dark hover:bg-alpine-green hover:text-white hover:border-alpine-green'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {city.name}
            </span>
          ))}
        </div>

        <p className="font-inter text-sm text-alpine-dark/60 text-center">
          Not sure if we cover your area? Give us a call.
        </p>

        {/* Google Maps Embed */}
        <div className="mt-12">
          <h3 className="font-outfit text-lg font-semibold text-alpine-dark text-center mb-6">Our Service Area</h3>
          <div className="rounded-xl border-2 border-alpine-terra/20 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106024.65392694946!2d-118.07!3d33.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d3ad18b11ff9%3A0x14d8e2b0f0e7c33a!2sLa%20Habra%20Heights%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpine Meadows Service Area"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Alpine Meadows Landscaping Construction Corp';
  }, []);

  return (
    <>
      <PageHero
        image={IMAGES.aboutHero}
        title="Built on Quality. Rooted in the Community."
        subtitle="Licensed, bonded, and insured landscaping and construction contractor serving Southern California."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />
      <WhoWeAre />
      <ProcessSection />
      <WhatSetsUsApart />
      <ServiceArea />
    </>
  );
}