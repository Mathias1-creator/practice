import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { IMAGES } from '@/lib/images';

const services = [
  {
    title: 'Masonry & Hardscaping',
    desc: 'Retaining walls, paver driveways, stonework, and custom hardscape installations built for durability and lasting curb appeal.',
    image: IMAGES.masonryService,
    tint: 'bg-alpine-green/35',
    span: 'md:col-span-2',
    link: '/services#masonry-hardscaping',
  },
  {
    title: 'Irrigation Planning & Installation',
    desc: 'Custom irrigation system design and installation to keep your landscape healthy and water-efficient year-round.',
    image: IMAGES.irrigationService,
    tint: 'bg-alpine-slate/35',
    span: '',
    link: '/services#irrigation-installation',
  },
  {
    title: 'Fencing Planning & Installation',
    desc: 'Custom fencing solutions for privacy, security, and curb appeal — designed and installed to your exact specifications.',
    image: IMAGES.fencingService,
    tint: 'bg-alpine-charcoal/35',
    span: '',
    link: '/services#fencing-installation',
  },
  {
    title: 'Lawn & Landscaping',
    desc: 'Complete lawn care and landscaping services to keep your property looking its best year-round.',
    image: '/images/3760cb6ad_remi-muller-LlHgaeBwYVE-unsplash.jpg',
    tint: 'bg-alpine-green/35',
    span: '',
    link: '/services#lawn-landscaping',
  },
];

export default function BentoGrid() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="bg-alpine-offwhite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-outfit text-xs uppercase tracking-[0.2em] text-alpine-green mb-3">What We Do</p>
          <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-bold text-alpine-dark mb-4">
            Everything Your Outdoor Space Needs
          </h2>
          <p className="font-inter text-base text-alpine-dark/70 max-w-2xl mx-auto">
            From stone masonry to smart irrigation and custom fencing — Alpine Meadows handles it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`relative overflow-hidden rounded-[20px] min-h-[280px] group cursor-pointer transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(196,98,45,0.2)] ${service.span} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: '500ms' }}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
              <div className={`absolute inset-0 ${service.tint}`} />
              <div className="absolute inset-0 bg-black/25" />
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <h3 className="font-fraunces text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="font-inter text-sm text-white/85 mb-4 max-w-lg">{service.desc}</p>
                <Link to={service.link} className="font-outfit text-sm text-alpine-terra hover:text-white transition-colors inline-flex items-center gap-1">
                  Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}

          {/* Accent Cards */}
          <div
            className={`bg-alpine-terra rounded-[20px] p-7 flex items-center justify-center transition-all duration-500 hover:-translate-y-1.5 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="font-outfit text-lg font-bold text-white text-center">
              Licensed · Bonded · Insured
            </p>
          </div>
          <div
            className={`bg-alpine-green rounded-[20px] p-7 flex items-center justify-center transition-all duration-500 hover:-translate-y-1.5 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="font-fraunces text-lg italic text-white text-center">
              "Quality Over Quantity — Every Time."
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-block bg-alpine-green text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-green/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}