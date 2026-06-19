import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CalendarCheck, Search } from 'lucide-react';
import useScrollAnimation from '../components/shared/useScrollAnimation';
import FooterCTA from '../components/shared/FooterCTA';

const IMG_TRUCKS = '/images/436dfd649_IMG_39101.jpg';
const IMG_SLO = '/images/60d89a25a_Voshal_logo_white_bg.png';

function WhyCard({ icon: Icon, heading, text, delay }) {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 p-4 rounded-full" style={{ backgroundColor: '#F5F0E8' }}>
        <Icon className="w-7 h-7" style={{ color: '#C4A882' }} />
      </div>
      <h3 className="text-lg font-bold text-charcoal mb-2 tracking-tight">{heading}</h3>
      <p className="text-sm leading-relaxed text-charcoal/60">{text}</p>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    document.title = 'About | Voshal Integrated Plumbing Inc.';
  }, []);

  const [aboutRef, aboutVisible] = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section
        className="flex items-center justify-center pt-20"
        style={{ backgroundColor: '#1C1C1C', minHeight: '200px' }}
      >
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About Us</h1>
          <p className="mt-2 text-base font-medium" style={{ color: '#C4A882' }}>
            Family owned. Community driven. Built on quality.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white">
        <div
          ref={aboutRef}
          className={`max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Left */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight leading-tight">
                About Voshal Integrated Plumbing Inc.
              </h2>
              <div className="mt-3 h-1 w-16 rounded" style={{ backgroundColor: '#C4A882' }} />
            </div>
            <div className="space-y-4 text-charcoal/70 text-sm md:text-base leading-relaxed">
              <p>
                We are proud to be a local family owned and operated plumbing company. We offer quality plumbing services ranging from emergency service calls to new commercial and residential construction. Voshal Integrated Plumbing Inc. is committed to providing honest, reliable, and top quality plumbing services to our Central Coast community.
              </p>
              <p>
                Our most requested services include sewer camera and locating, tankless water heater installation and service, accessory dwelling unit construction, remodels and additions, and custom home construction.
              </p>
              <p className="font-medium text-charcoal/80">
                Licensed — Lic# 1092268 · Serving SLO County · Available 24/7
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['Family Owned & Operated', 'Licensed & Insured'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded"
                  style={{ backgroundColor: '#C4A882', color: '#1C1C1C' }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-3.5 text-sm font-semibold tracking-wide text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#1C1C1C' }}
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <img
              src={IMG_TRUCKS}
              alt="Voshal Integrated Plumbing fleet"
              className="w-full object-cover"
              style={{ borderRadius: '12px', maxHeight: '260px', objectPosition: 'center' }}
            />
            <img
              src={IMG_SLO}
              alt="Voshal Integrated Plumbing logo"
              className="w-full object-contain"
              style={{ borderRadius: '12px', maxHeight: '260px' }}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white flex justify-center py-2">
        <div className="w-24 h-1 rounded" style={{ backgroundColor: '#C4A882' }} />
      </div>

      {/* Why Voshal */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center tracking-tight mb-14">
            Why Choose VIP?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <WhyCard
              icon={Phone}
              heading="We Answer the Phone"
              text="Every call gets picked up. No voicemail black holes, no waiting days for a callback. When you need a plumber, we are here."
              delay={0}
            />
            <WhyCard
              icon={CalendarCheck}
              heading="We Show Up on Time"
              text="If we say we will be there at 8am, we are there at 8am. Your time matters and we respect it every single job."
              delay={100}
            />
            <WhyCard
              icon={Search}
              heading="Detail Obsessed"
              text="From rough-in to finish, every fitting, every joint, every connection is done with precision. We do not cut corners."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="py-10" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="flex flex-wrap items-center justify-center gap-4 text-white text-sm font-semibold tracking-widest uppercase">
          {['Honest', 'Reliable', 'On Time', 'Family Owned'].map((val, i, arr) => (
            <React.Fragment key={val}>
              <span>{val}</span>
              {i < arr.length - 1 && (
                <span style={{ color: '#C4A882' }}>·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        heading="Ready to Work With Us?"
        subheading="New construction, remodel, or service call — we are ready when you are."
        primaryLabel="GET A QUOTE"
        primaryLink="/contact"
        showCall
      />
    </>
  );
}