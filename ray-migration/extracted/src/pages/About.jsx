import React, { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/shared/ScrollReveal';
import ServiceAreaMap from '../components/about/ServiceAreaMap';
import CTABand from '../components/shared/CTABand';
import AboutHeroReveal from '../components/about/AboutHeroReveal';

const HIGHLIGHTS = [
  'Available 24/7',
  '5.0 Stars · 18 Reviews',
  'Lic# 1132312',
  'Residential & Commercial',
];

const CITIES = [
  'Arroyo Grande', 'Grover Beach', 'Pismo Beach', 'Shell Beach',
  'San Luis Obispo', 'Santa Margarita', 'Atascadero', 'Templeton',
  'Paso Robles', 'Creston',
];

export default function About() {
  return (
    <>
      <PageHero
        subtitle="Licensed plumber serving San Luis Obispo County — available 24/7."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
        image="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80"
        overlayOpacity={55}
        kenBurns={true}
        customTitle={<AboutHeroReveal />}
      />

      {/* Who We Are */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <h2 className="font-barlow font-bold text-3xl sm:text-4xl text-ray-charcoal tracking-tight">
                  About Ray Espinoza Plumbing
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="font-inter text-base text-ray-gray mt-6 leading-relaxed">
                  Ray Espinoza Plumbing is a licensed residential and commercial plumbing company serving San Luis Obispo County. Ray built his business on four things: honest communication, clean work, fair pricing, and always being available when his customers need him.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="font-inter text-base text-ray-gray mt-4 leading-relaxed">
                  With a 5.0 star rating across 18 Google reviews, Ray has become one of the most trusted plumbers on the Central Coast. Whether it is a simple drain cleaning or a complex re-pipe, Ray shows up on time, communicates clearly, does the job right, and leaves the space clean. Available 24 hours a day, 7 days a week — because plumbing emergencies don't wait.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={150}>
              <div className="rounded-xl overflow-hidden">
                {/* CLIENT PHOTO SLOT — Ray Espinoza portrait or job site */}
                <img
                  src="/images/6ede7482d_image0.jpg"
                  alt="Ray Espinoza and family"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-ray-red py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-y-3">
            {HIGHLIGHTS.map((h, i) => (
              <ScrollReveal key={i} delay={i * 100} className="flex items-center">
                {i > 0 && <div className="hidden sm:block w-px h-5 bg-white/30 mx-5" />}
                <span className="font-dm font-semibold text-sm text-white uppercase tracking-wider px-3 sm:px-0">
                  {h}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Ray Apart */}
      <section style={{ backgroundColor: '#0A0A0A', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <ScrollReveal>
            <h2
              className="font-barlow font-bold text-white"
              style={{ fontSize: '52px', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              What Sets Ray Apart
            </h2>
            {/* Red underline accent */}
            <div style={{ width: '80px', height: '3px', backgroundColor: '#CC2200', marginTop: '14px' }} />
            <p
              className="font-dm"
              style={{ color: '#999999', fontSize: '14px', marginTop: '16px', lineHeight: 1.6 }}
            >
              Built on 18 five-star reviews and over a decade of trusted service across SLO County.
            </p>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {/* Card 1 */}
            <ScrollReveal delay={0}>
              <DarkFeaturePanel
                number="01"
                title="Always Available"
                body="Ray answers at 2am. Ray answers on Christmas. 24/7 availability isn't a marketing line here — it's how he's operated for over a decade."
                badge="24/7 · NIGHTS · WEEKENDS · HOLIDAYS"
              />
            </ScrollReveal>
            {/* Card 2 */}
            <ScrollReveal delay={120}>
              <DarkFeaturePanel
                number="02"
                title="Honest & Clean"
                body="Transparent pricing before the work starts. Clean job site every time. Ray tells you what it costs, what it takes, and when it's done."
                badge="TRANSPARENT PRICING · NO SURPRISES"
              />
            </ScrollReveal>
            {/* Card 3 */}
            <ScrollReveal delay={240}>
              <DarkFeaturePanel
                number="03"
                title="Trusted & Licensed"
                body="Lic# 1132312. 5.0 stars across 18 real Google reviews. One of SLO County's most trusted plumbers — and the reviews prove it."
                badge="LIC# 1132312 · 5.0 STARS · 18 REVIEWS"
              />
            </ScrollReveal>
          </div>

          {/* Bottom CTA */}
          <ScrollReveal delay={360}>
            <p
              className="font-dm text-center mt-14"
              style={{ color: '#666666', fontSize: '14px' }}
            >
              Available now — including nights, weekends, and holidays.{' '}
              <a
                href="tel:+18058352196"
                className="font-dm font-semibold"
                style={{ color: '#CC2200', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                onMouseLeave={e => e.target.style.textDecoration = 'none'}
              >
                Call (805) 835-2196
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-barlow font-bold text-3xl sm:text-4xl text-ray-charcoal tracking-tight text-center">
              Serving All of SLO County
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {CITIES.map((city, i) => (
              <ScrollReveal key={city} delay={i * 60}>
                <CityBadge city={city} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <p className="font-inter text-sm text-ray-gray text-center mt-8">
              Not sure if we cover your area? Give us a call — we're available 24/7.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServiceAreaMap />
      <CTABand />
    </>
  );
}

function DarkFeaturePanel({ number, title, body, badge }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#141414',
        borderLeft: '3px solid #CC2200',
        padding: '40px',
        borderRadius: '4px',
        boxShadow: hovered ? '0 0 24px rgba(204,34,0,0.15)' : 'none',
        transition: 'box-shadow 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Number */}
      <span
        className="font-barlow font-bold"
        style={{ color: '#CC2200', fontSize: '64px', lineHeight: 1, display: 'block' }}
      >
        {number}
      </span>
      {/* Title */}
      <h3
        className="font-barlow font-bold"
        style={{
          color: '#FFFFFF',
          fontSize: '24px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginTop: '12px',
        }}
      >
        {title}
      </h3>
      {/* Body */}
      <p
        className="font-dm"
        style={{
          color: '#AAAAAA',
          fontSize: '15px',
          lineHeight: 1.7,
          marginTop: '14px',
          flexGrow: 1,
        }}
      >
        {body}
      </p>
      {/* Badge */}
      <div style={{ marginTop: '28px' }}>
        <span
          className="font-dm font-medium"
          style={{
            backgroundColor: '#CC2200',
            color: '#FFFFFF',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '6px 12px',
            borderRadius: '999px',
            display: 'inline-block',
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}

function CityBadge({ city }) {
  return (
    <span className="inline-block font-dm font-medium text-sm text-ray-charcoal border-2 border-ray-black/15 px-5 py-2.5 rounded-full hover:bg-ray-red hover:border-ray-red hover:text-white cursor-default transition-all duration-300">
      {city}
    </span>
  );
}