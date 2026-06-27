import React from 'react';
import { Mail, Clock, Instagram, ExternalLink, Shield, MapPin } from 'lucide-react';
import FAQAccordion from '../components/shared/FAQAccordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="pt-32 pb-20 border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-grotesk text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Let's Build Something Beautiful
          </h1>
          <p className="font-dm text-[#888888] text-lg">
            Call, email, or fill out the form — we respond fast. Se Habla Español.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section ref={ref} style={{ backgroundColor: '#0d0d0d' }} className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Left - Contact Details */}
            <div className="space-y-8">
              <div>
                <a href="tel:+18056214093" className="font-grotesk text-3xl md:text-4xl font-black text-[#c8f500] hover:text-[#c8f500]/80 transition-colors uppercase tracking-tight">
                  (805) 621-4093
                </a>
              </div>

              <div className="space-y-5">
                <a href="mailto:afepacificlandscapemanagement@gmail.com" className="flex items-center gap-3 font-dm text-[#e0e0e0] hover:text-[#c8f500] transition-colors">
                  <Mail className="w-5 h-5 text-[#c8f500] shrink-0" />
                  afepacificlandscapemanagement@gmail.com
                </a>
                <div className="flex items-center gap-3 font-dm text-[#e0e0e0]">
                  <Clock className="w-5 h-5 text-[#c8f500] shrink-0" />
                  Monday–Friday 7:00 AM – 5:00 PM
                </div>
                <a href="https://www.instagram.com/afepacificlandscape" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-dm text-[#e0e0e0] hover:text-[#c8f500] transition-colors">
                  <Instagram className="w-5 h-5 text-[#c8f500] shrink-0" />
                  @afepacificlandscape
                </a>
              </div>

              <div className="flex items-center gap-3 font-grotesk text-sm text-[#888888]">
                <Shield className="w-5 h-5 text-[#c8f500]" />
                Licensed Landscape Contractor
              </div>

              <p className="font-dm text-[#888888] text-sm">Free Estimates · Warranties · Se Habla Español</p>

              <a
                href="https://match.angi.com/review/161626840"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-grotesk text-sm text-[#c8f500] hover:text-[#c8f500]/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Leave us a review on Angi
              </a>

              {/* Service Area */}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#c8f500] shrink-0" />
                <p className="font-dm text-[#e0e0e0] text-base font-medium">
                  Proudly Serving Santa Barbara County & San Luis Obispo County
                </p>
              </div>
            </div>

            {/* Right - Tally Form */}
            <div style={{ backgroundColor: '#1a1a1a' }} className="border border-[#2a2a2a] overflow-hidden">
              <iframe
                src="https://tally.so/embed/VLDQjJ?alignLeft=1&hideTitle=0&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Get Your Free Quote"
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion />

      {/* Service Area Band */}
      <section style={{ backgroundColor: '#111111' }} className="py-6 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-grotesk text-sm text-[#888888] uppercase tracking-widest">
            Serving Santa Barbara County and San Luis Obispo County — Residential & Commercial · Se Habla Español
          </p>
        </div>
      </section>
    </>
  );
}