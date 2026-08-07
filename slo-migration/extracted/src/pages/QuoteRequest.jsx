import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function QuoteRequest() {
  return (
    <>
      <PageHero
        headline="Get Your Free Quote"
        subheadline="Fast response. No obligation. Same-day service available."
      />

      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Column — Sticky Contact Info */}
            <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-28">
              <h2 className="text-xl font-black uppercase tracking-tight mb-8" style={{ color: '#111111' }}>
                Reach Us Directly
              </h2>

              <div className="space-y-6">
                <a href="tel:8058008931" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}>
                    <Phone className="w-4 h-4" style={{ color: '#CC0000' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Primary</p>
                    <p className="text-2xl font-black leading-none group-hover:underline" style={{ color: '#CC0000' }}>
                      (805) 800-8931
                    </p>
                  </div>
                </a>

                <a href="tel:8057092760" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}>
                    <Phone className="w-4 h-4" style={{ color: '#CC0000' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Secondary</p>
                    <p className="text-lg font-bold text-gray-700 group-hover:underline">(805) 709-2760</p>
                  </div>
                </a>

                <a href="mailto:RexSpringer1968@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}>
                    <Mail className="w-4 h-4" style={{ color: '#CC0000' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-gray-700 group-hover:underline break-all">
                      RexSpringer1968@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}>
                    <Clock className="w-4 h-4" style={{ color: '#CC0000' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Hours</p>
                    <p className="text-sm font-medium text-gray-700">Open 24 Hours, 7 Days a Week</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-xs mt-8">We do not pump RVs.</p>

              <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Our Location</p>
              <iframe
                src="https://www.google.com/maps?q=858+Primrose+Ln,+Arroyo+Grande,+CA+93420&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                title="SLO Septic Pumping LLC Location"
              ></iframe>
              </div>
            </div>

            {/* Right Column — Tally Form */}
            <div className="flex-1 w-full">
              <iframe
                src="https://tally.so/embed/Pd2dO5"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="SLO Septic Pumping LLC — Quote Request"
                className="rounded-sm"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}