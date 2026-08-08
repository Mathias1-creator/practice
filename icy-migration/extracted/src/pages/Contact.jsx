import React, { useEffect } from 'react';
import PageHero from '@/components/shared/PageHero';
import { IMAGES } from '@/lib/images';
import { Phone, Mail, Clock, Shield, MapPin } from 'lucide-react';

const TALLY_EMBED_SRC = 'https://tally.so/embed/D4ayqR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

export default function Contact() {
  useEffect(() => {
    document.title = 'Get a Free Quote | Alpine Meadows Landscaping Construction Corp';

    // Load Tally embed script so dynamicHeight works
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <PageHero
        image={IMAGES.contactHero}
        title="Have a Job in Mind? Give Us a Call."
        subtitle="Call, email, or fill out the form — we respond fast."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-alpine-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Column — Contact Info */}
            <div>
              <h2 className="font-fraunces text-3xl font-bold text-alpine-dark mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-10">
                <a href="tel:+16265595946" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-alpine-terra/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-alpine-terra" />
                  </div>
                  <div>
                    <p className="font-outfit text-xs uppercase tracking-wider text-alpine-dark/50">Phone</p>
                    <p className="font-inter text-lg font-semibold text-alpine-terra group-hover:text-alpine-green transition-colors">
                      (626) 559-5946
                    </p>
                  </div>
                </a>

                <a href="mailto:alpinemeadowsland@outlook.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-alpine-terra/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-alpine-terra" />
                  </div>
                  <div>
                    <p className="font-outfit text-xs uppercase tracking-wider text-alpine-dark/50">Email</p>
                    <p className="font-inter text-base text-alpine-dark group-hover:text-alpine-terra transition-colors">
                      alpinemeadowsland@outlook.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-alpine-terra/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-alpine-terra" />
                  </div>
                  <div>
                    <p className="font-outfit text-xs uppercase tracking-wider text-alpine-dark/50">Hours</p>
                    <p className="font-inter text-base text-alpine-dark">Monday–Friday 8:00 AM – 4:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-alpine-terra/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-alpine-terra" />
                  </div>
                  <div>
                    <p className="font-outfit text-xs uppercase tracking-wider text-alpine-dark/50">Location</p>
                    <p className="font-inter text-base text-alpine-dark">La Habra Heights, CA</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-alpine-green/10 rounded-xl px-4 py-3 mb-6">
                <Shield className="w-5 h-5 text-alpine-green" />
                <p className="font-outfit text-xs uppercase tracking-wider text-alpine-green font-semibold">
                  Licensed · Bonded · Insured
                </p>
              </div>

              <p className="font-fraunces text-lg italic text-alpine-dark/70 mb-3">
                "Have a Job in Mind? Give Us a Call."
              </p>
              <p className="font-inter text-xs text-alpine-dark/50">Free estimates · No obligation</p>

              {/* Map */}
              <div className="mt-8 rounded-xl border-2 border-alpine-terra/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26490.58!2d-117.95!3d33.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d3ad18b11ff9%3A0x14d8e2b0f0e7c33a!2sLa%20Habra%20Heights%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alpine Meadows Location"
                />
              </div>
            </div>

            {/* Right Column — Tally Form */}
            <div>
              <h3 className="font-fraunces text-2xl font-bold text-alpine-dark mb-6">Request a Free Quote</h3>
              <div className="bg-white/70 backdrop-blur-[12px] border border-alpine-terra/20 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  data-tally-src={TALLY_EMBED_SRC}
                  loading="lazy"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Request a Free Quote"
                  style={{ minHeight: '600px', display: 'block' }}
                />
              </div>
              <p className="font-inter text-[11px] text-alpine-dark/50 text-center mt-3">
                Free estimates · Licensed · Bonded · Insured · We respond within a few hours.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}