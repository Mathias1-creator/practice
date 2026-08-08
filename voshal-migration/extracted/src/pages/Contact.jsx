import React, { useEffect } from 'react';
import { Phone, Mail, Clock, MapPin, Shield, ExternalLink } from 'lucide-react';
import useScrollAnimation from '../components/shared/useScrollAnimation';
import TrustBar from '../components/shared/TrustBar';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    document.title = 'Contact | Voshal Integrated Plumbing Inc.';
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const contactItems = [
    { icon: Phone, label: '(805) 400-7880', href: 'tel:8054007880' },
    { icon: Mail, label: 'doug@voshalintegratedplumbing.com', href: 'mailto:doug@voshalintegratedplumbing.com' },
    { icon: ExternalLink, label: '@voshal_integrated_plumbing_inc', href: 'https://www.instagram.com/voshal_integrated_plumbing_inc' },
    { icon: Clock, label: 'Available 24/7', href: null },
    { icon: MapPin, label: 'SLO County, CA', href: null },
    { icon: Shield, label: 'License #1092268', href: null },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Doug answers every call personally.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
              Let's Talk
            </h2>
            <p className="mt-4 text-charcoal/60 text-sm md:text-base leading-relaxed">
              Whether you're breaking ground on a new build or need a same-day service call, we're ready. Doug answers every call personally.
            </p>

            <div className="mt-8 space-y-5">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-sand/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-sand" />
                    </div>
                    <span className="text-sm text-charcoal/70 break-all">{item.label}</span>
                  </div>
                );

                return item.href ? (
                  <a key={i} href={item.href} target={item.href.includes('instagram') ? '_blank' : '_self'} rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Right — Tally Form */}
          <div className="bg-white/80 backdrop-blur-xl border border-black/5 shadow-xl overflow-hidden">
            <iframe
              src="https://tally.so/embed/5B8VDM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="600"
              frameBorder="0"
              title="Contact Form"
            />
          </div>
        </div>
      </section>

      <TrustBar
        items={[
          'Licensed',
          'Lic# 1092268',
          'SLO County',
          'Always Answers the Phone',
          'Available 24/7',
        ]}
      />
    </>
  );
}