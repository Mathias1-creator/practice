import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Heart } from 'lucide-react';
import ProcessSection from '../components/shared/ProcessSection';
import SectionTag from '../components/shared/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HERO_IMG = "/images/2437c1fae_66051145364__CBB2C8CD-58FC-438E-837D-FA6419EF9108.jpg";
const ABOUT_IMG = "/images/46902f602_IMG_3406.jpg";

const highlights = ['Free Estimates', 'Warranties Offered', 'Se Habla Español', 'Licensed & Insured'];

const qualities = [
  { icon: Award, title: 'Quality Craftsmanship', desc: 'Every project is completed with attention to detail and services customized to your individual needs. We do it right the first time.' },
  { icon: Shield, title: 'Licensed & Professional', desc: 'As a licensed landscape contractor we hold ourselves to professional standards on every job — residential and commercial. Warranties offered.' },
  { icon: Heart, title: 'Honest & Communicative', desc: "We value honesty and integrity in all aspects of our business. Clear communication from first contact to final walkthrough — no surprises." },
];

const sbCities = ['Santa Barbara', 'Goleta', 'Carpinteria', 'Lompoc', 'Santa Maria', 'Solvang', 'Buellton'];
const sloCities = ['San Luis Obispo', 'Paso Robles', 'Atascadero', 'Arroyo Grande', 'Pismo Beach', 'Grover Beach', 'Morro Bay'];

export default function About() {
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [qualRef, qualVisible] = useScrollAnimation();
  const [areaRef, areaVisible] = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-grotesk text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Built on Experience. Rooted in the Central Coast.
          </h1>
          <p className="font-dm text-[#e0e0e0] text-lg">Licensed landscape contractor with 10+ years of craftsmanship.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section ref={aboutRef} style={{ backgroundColor: '#0d0d0d' }} className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <SectionTag>ABOUT US</SectionTag>
              <h2 className="font-grotesk text-3xl md:text-4xl font-black text-white mt-3 mb-6 uppercase tracking-tight">
                About AFE Pacific Landscape Management
              </h2>
              <p className="font-dm text-[#e0e0e0] text-base leading-relaxed">
                AFE Pacific Landscape Management is a locally owned and operated company that values honesty and integrity in all aspects of our business. Our dedicated team of professionals have over eight years of hands-on experience, to provide innovative ideas and suggestions tailored to your projects. Our services are customized to your individual needs, paying close attention to the details of each project that we are involved with. Please feel free to contact us today!
              </p>
            </div>
            <div className="overflow-hidden">
              <img src={ABOUT_IMG} alt="AFE Pacific team at work" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section style={{ backgroundColor: '#c8f500' }} className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {highlights.map((h, i) => (
              <span key={i} className="font-grotesk text-sm tracking-widest uppercase text-black font-bold">{h}</span>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* What Sets Us Apart */}
      <section ref={qualRef} style={{ backgroundColor: '#111111' }} className="py-24 border-y border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`text-center mb-14 transition-all duration-700 ${qualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionTag>WHY AFE PACIFIC</SectionTag>
            <h2 className="font-grotesk text-3xl md:text-4xl font-black text-white mt-3 uppercase tracking-tight">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualities.map((q, i) => (
              <div
                key={i}
                className={`bg-[#1a1a1a] border border-[#2a2a2a] p-8 hover:border-[#c8f500]/50 hover:-translate-y-1 transition-all duration-300 ${qualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <q.icon className="w-8 h-8 text-[#c8f500] mb-4" />
                <h3 className="font-grotesk text-lg font-black text-white mb-3 uppercase tracking-tight">{q.title}</h3>
                <p className="font-dm text-[#888888] text-sm leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section ref={areaRef} style={{ backgroundColor: '#0d0d0d' }} className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`text-center mb-14 transition-all duration-700 ${areaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-grotesk text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Proudly Serving Two Counties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-grotesk text-lg font-black text-[#c8f500] mb-4 uppercase tracking-widest">Santa Barbara County</h3>
              <div className="flex flex-wrap gap-2">
                {sbCities.map((city) => (
                  <span key={city} className="font-dm text-sm px-4 py-2 border border-[#2a2a2a] text-[#888888] hover:border-[#c8f500] hover:text-[#c8f500] transition-all duration-200 cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-grotesk text-lg font-black text-[#c8f500] mb-4 uppercase tracking-widest">San Luis Obispo County</h3>
              <div className="flex flex-wrap gap-2">
                {sloCities.map((city) => (
                  <span key={city} className="font-dm text-sm px-4 py-2 border border-[#2a2a2a] text-[#888888] hover:border-[#c8f500] hover:text-[#c8f500] transition-all duration-200 cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="font-dm text-[#888888] text-sm text-center mt-8">
            Not sure if we cover your area? Give us a call — Se Habla Español.
          </p>
        </div>
      </section>
    </>
  );
}