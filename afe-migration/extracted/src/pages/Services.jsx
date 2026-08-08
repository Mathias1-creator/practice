import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Hammer, Droplets, Leaf } from 'lucide-react';
import ServiceChips from '../components/home/ServiceChips';
import FAQAccordion from '../components/shared/FAQAccordion';
import SectionTag from '../components/shared/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HERO_IMG = "/images/af6b58fa7_IMG_3926.jpg";

const services = [
  {
    id: 'landscape-construction',
    icon: Hammer,
    title: 'Landscape Construction',
    img: "/images/b2e395d20_IMG_3927.jpg",
    copy: "AFE Pacific Landscape Management specializes in complete landscape construction services designed to transform outdoor spaces with quality craftsmanship and lasting beauty. From initial concept through final installation, we bring your vision to life with precision and professionalism. Our landscape construction services include custom hardscaping, patios, pathways, retaining walls, sod and turf installation, irrigation systems, landscape lighting, and complete outdoor renovations for both residential and commercial properties. Every project receives close attention to detail and services customized to your individual needs."
  },
  {
    id: 'hardscaping',
    icon: Droplets,
    title: 'Hardscaping',
    img: "/images/317dc72bb_IMG_3915.jpg",
    copy: "Custom hardscaping is the foundation of any great outdoor space. AFE Pacific designs and builds patios, walkways, driveways, retaining walls, and outdoor living areas that combine beauty with structural integrity. We use premium materials and proven installation techniques to create hardscape elements that complement your property and hold up to the Central Coast climate for years to come. Whether you are looking for a simple stone pathway or a complete outdoor living transformation, we deliver the same level of craftsmanship on every project."
  },
  {
    id: 'maintenance',
    icon: Leaf,
    title: 'Landscape Maintenance',
    img: "/images/5d82d1569_IMG_0479.jpg",
    copy: "Protecting your landscape investment requires consistent, professional maintenance. AFE Pacific Landscape Management provides tailored maintenance services for residential and commercial properties throughout Santa Barbara and San Luis Obispo County. Our maintenance programs include routine lawn care, edging, trimming, irrigation system maintenance, weed control, and seasonal cleanups — delivered with reliable scheduling and exceptional attention to detail. We keep your property looking its best year-round."
  }
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <p className="font-grotesk text-sm text-[#888888] mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-[#c8f500] transition-colors">Home</Link> &gt; Services
          </p>
          <h1 className="font-grotesk text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Our Services</h1>
          <p className="font-dm text-[#e0e0e0] text-lg max-w-xl mx-auto">
            Premium landscape construction, hardscaping, and maintenance for the Central Coast.
          </p>
        </div>
      </section>

      <ServiceChips />

      {/* Overview Cards */}
      <section style={{ backgroundColor: '#111111' }} className="py-16 border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 hover:border-[#c8f500] hover:-translate-y-1 transition-all duration-300 group"
              >
                <s.icon className="w-8 h-8 text-[#c8f500] mb-3" />
                <h3 className="font-grotesk text-lg font-black text-white uppercase tracking-tight group-hover:text-[#c8f500] transition-colors">{s.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((s, i) => (
        <ServiceDetail key={s.id} service={s} reversed={i % 2 === 1} altBg={i % 2 === 1} />
      ))}

      <FAQAccordion />

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#111111' }} className="py-16 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-grotesk text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">Have a project in mind? Let's talk.</h2>
          <a href="tel:+18056214093" className="font-grotesk text-xl font-bold text-[#c8f500] hover:text-[#c8f500]/80 transition-colors block mb-6">
            (805) 621-4093
          </a>
          <Link to="/contact">
            <Button className="bg-[#c8f500] text-black font-grotesk font-bold px-8 py-6 text-base uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 transition-all duration-200">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceDetail({ service, reversed, altBg }) {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      id={service.id}
      ref={ref}
      style={{ backgroundColor: altBg ? '#111111' : '#0d0d0d' }}
      className="py-24 scroll-mt-24 border-b border-[#2a2a2a]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${reversed ? 'lg:order-2' : ''} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <service.icon className="w-10 h-10 text-[#c8f500] mb-4" />
            <h2 className="font-grotesk text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">{service.title}</h2>
            <p className="font-dm text-[#e0e0e0] text-base leading-relaxed mb-8">{service.copy}</p>
            <Link to="/contact">
              <Button className="bg-[#c8f500] text-black font-grotesk font-bold px-8 py-6 uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 hover:scale-105 transition-all duration-200">
                Request a Quote for This Service
              </Button>
            </Link>
            <p className="font-dm text-[#888888] text-sm mt-4">Free estimates · Warranties offered · No obligation</p>
          </div>
          <div className={`${reversed ? 'lg:order-1' : ''} transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="overflow-hidden">
              <img src={service.img} alt={service.title} className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}