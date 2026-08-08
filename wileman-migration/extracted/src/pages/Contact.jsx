import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import useFadeUp from '../hooks/useFadeUp';

function ContactCard({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 mt-1">
        <Icon size={22} style={{ color: '#3b9fd4' }} />
      </div>
      <div>
        <h3 className="font-body text-base text-white font-medium mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  const heroRef = useFadeUp();
  const contentRef = useFadeUp();

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="fade-up flex items-center justify-center px-6"
        style={{ height: '300px', backgroundColor: '#060d18', marginTop: '-68px', paddingTop: '68px' }}
      >
        <div className="text-center">
          <h1 className="font-heading text-5xl md:text-[80px] text-white uppercase tracking-wide mb-4">
            LET'S TALK
          </h1>
          <p className="font-body text-[17px]" style={{ color: '#94b8d0' }}>
            Call us any time — we respond fast across all of SLO County.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section ref={contentRef} className="fade-up py-20 px-6 md:px-20" style={{ backgroundColor: '#060d18' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left - Contact info cards */}
          <div className="flex flex-col gap-8">
            <ContactCard icon={Phone} title="Call or Text">
              <a href="tel:8055509152" className="font-heading text-2xl md:text-[32px] block mb-1" style={{ color: '#5bc8f5' }}>
                (805) 550-9152
              </a>
              <p className="font-body text-[13px]" style={{ color: '#94b8d0' }}>Available 24/7 for emergencies</p>
            </ContactCard>

            <ContactCard icon={Mail} title="Email Us">
              <a href="mailto:wilemanplumbing@gmail.com" className="font-body text-base" style={{ color: '#5bc8f5' }}>
                wilemanplumbing@gmail.com
              </a>
            </ContactCard>

            <ContactCard icon={MapPin} title="Service Area">
              <p className="font-body text-sm" style={{ color: '#94b8d0' }}>
                Serving Atascadero, Morro Bay, Cayucos, Cambria, Los Osos, Paso Robles, San Luis Obispo and all of SLO County
              </p>
            </ContactCard>

            <ContactCard icon={Clock} title="Hours">
              <p className="font-body text-sm" style={{ color: '#94b8d0' }}>
                24/7 Emergency Service Available
              </p>
            </ContactCard>

            <div
              className="flex items-center gap-3 p-6"
              style={{
                backgroundColor: '#0f1e35',
                border: '1px solid rgba(91,200,245,0.15)',
              }}
            >
              <Shield size={20} style={{ color: '#5bc8f5' }} />
              <span className="font-body text-sm" style={{ color: '#5bc8f5' }}>
                CA License# 1081234 — Licensed, Bonded & Insured
              </span>
            </div>
          </div>

          {/* Right - Bold call CTA */}
          <div
            className="flex flex-col items-center justify-center text-center py-16 px-8"
            style={{
              backgroundColor: '#0f1e35',
              border: '1px solid rgba(91,200,245,0.1)',
            }}
          >
            <p className="font-body uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '3px', color: '#7c3aed' }}>
              CALL ANYTIME — 24/7
            </p>

            <a
              href="tel:8055509152"
              className="font-heading leading-none block mb-8 transition-opacity duration-200 hover:opacity-80"
              style={{ fontSize: 'clamp(52px, 8vw, 80px)', color: '#e53e3e' }}
            >
              (805) 550-9152
            </a>

            <a
              href="tel:8055509152"
              className="inline-block font-heading text-xl text-white uppercase tracking-[2px] transition-opacity duration-300 hover:opacity-90 mb-10"
              style={{
                backgroundColor: '#e53e3e',
                padding: '18px 56px',
                borderRadius: '0px',
              }}
            >
              TAP TO CALL
            </a>

            <p className="font-body text-base mb-2" style={{ color: '#94b8d0' }}>
              or email us at
            </p>
            <a
              href="mailto:wilemanplumbing@gmail.com"
              className="font-body text-base transition-colors duration-200 hover:text-white"
              style={{ color: '#5bc8f5' }}
            >
              wilemanplumbing@gmail.com
            </a>
          </div>

        </div>
      </section>
    </>
  );
}