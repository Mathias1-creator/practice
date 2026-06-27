import React, { useEffect } from 'react';
import CTABand from '../components/shared/CTABand';
import { Phone, Mail, MapPin, Clock, Shield, AlertTriangle } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/shared/ScrollReveal';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <PageHero
        title="Get in Touch — We're Available 24/7"
        subtitle="Call, email, or fill out the form. Ray responds fast."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
        image="/images/60ba2fb3b_generated_455dcb40.jpg"
        overlayOpacity={55}
      />

      <section className="bg-ray-offwhite py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Details */}
            <div>
              <ScrollReveal>
                <h2 className="font-barlow font-bold text-2xl sm:text-3xl text-ray-charcoal tracking-tight">
                  Contact Ray Espinoza Plumbing
                </h2>
              </ScrollReveal>

              <div className="space-y-6 mt-8">
                <ScrollReveal delay={100}>
                  <a href="tel:+18058352196" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-ray-red/10 rounded-lg flex items-center justify-center group-hover:bg-ray-red/20 transition-colors">
                      <Phone className="w-5 h-5 text-ray-red" />
                    </div>
                    <div>
                      <p className="font-barlow font-bold text-2xl text-ray-red">(805) 835-2196</p>
                      <p className="font-inter text-xs text-ray-gray">Available 24/7</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                  <a href="mailto:raye@replumbing.org" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-ray-black/5 rounded-lg flex items-center justify-center group-hover:bg-ray-black/10 transition-colors">
                      <Mail className="w-5 h-5 text-ray-charcoal" />
                    </div>
                    <div>
                      <p className="font-inter font-medium text-base text-ray-charcoal">raye@replumbing.org</p>
                      <p className="font-inter text-xs text-ray-gray">Email us anytime</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-ray-black/5 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-ray-charcoal" />
                    </div>
                    <div>
                      <p className="font-inter font-medium text-base text-ray-charcoal">Available 24/7</p>
                      <p className="font-inter text-xs text-ray-gray">Nights, weekends, and holidays</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={250}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-ray-black/5 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-ray-charcoal" />
                    </div>
                    <div>
                      <p className="font-inter font-medium text-base text-ray-charcoal">1220 Corral Creek Ave #1</p>
                      <p className="font-inter text-xs text-ray-gray">Paso Robles, CA 93446</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="flex items-center gap-3 mt-2">
                    <Shield className="w-4 h-4 text-ray-gray" />
                    <p className="font-inter text-sm text-ray-gray">
                      Lic# 1132312 · Licensed · Residential & Commercial
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Emergency Banner */}
              <ScrollReveal delay={350}>
                <div className="bg-ray-red rounded-xl p-6 mt-10">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-white" />
                    <p className="font-dm font-semibold text-white text-sm uppercase tracking-wider">
                      Plumbing Emergency?
                    </p>
                  </div>
                  <p className="font-inter text-white/90 text-sm">
                    Call Now — Available 24/7
                  </p>
                  <a
                    href="tel:+18058352196"
                    className="inline-block mt-3 bg-white text-ray-red font-dm font-semibold px-6 py-2.5 rounded-md hover:scale-103 active:scale-97 transition-transform duration-200"
                  >
                    (805) 835-2196
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Tally Form */}
            <ScrollReveal delay={100}>
              <div className="bg-white/80 backdrop-blur-xl border-2 border-ray-red/20 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  data-tally-src="https://tally.so/embed/kdrxRR?alignLeft=1&hideTitle=0&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Request a Quote"
                  style={{ display: 'block' }}
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}