import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import WhyMarval from '../components/about/WhyMarval';
import FooterCTA from '../components/layout/FooterCTA';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ABOUT_IMG = '/images/ad43ff5cd_generated_6a93ca44.jpg';

const badges = [
  'Licensed C-27 Contractor',
  '17 Years Experience',
  'Residential & Commercial',
  'Public Works & Federal',
];

export default function About() {
  const { ref, controls } = useScrollAnimation();

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="17 years. Hundreds of projects. One standard — excellence."
      />

      {/* About Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        className="bg-cream py-24 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-2">
              About Marval Landscaping Services
            </h2>
            <div className="w-20 h-1 bg-stone rounded-full mb-8" />
            <div className="space-y-5 text-charcoal/70 text-lg leading-relaxed">
              <p>
                Marval Landscaping Services is a locally owned and operated landscaping and hardscape company serving the Central Coast of California. Founded by Martin Valdez, Marval has been transforming residential and commercial outdoor spaces for over 17 years. We are a fully licensed contractor — Lic# 1087803 C-27 — and we bring that same level of professionalism and accountability to every single project we take on, no matter the size.
              </p>
              <p>
                Martin is a hands-on owner who shows up to every job, oversees every phase of work, and holds his team to the highest standard. Our clients consistently tell us that what sets us apart is our communication, our attention to detail, and our commitment to doing things right the first time. We serve residential homeowners, commercial property owners, public agencies, and federal contractors throughout SLO County.
              </p>
              <p>
                From a simple lawn refresh to a full property transformation, Marval Landscaping Services is the team you can trust to show up, do the work, and leave your space looking exactly how you envisioned it.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mt-8 mb-8">
              {badges.map((badge, i) => (
                <span key={i} className="bg-forest/10 text-forest px-4 py-2 rounded-full text-sm font-medium">
                  {badge}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-full font-semibold hover:bg-forest/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-forest/25"
            >
              GET IN TOUCH
            </Link>
          </div>

          <div>
            <img
              src={ABOUT_IMG}
              alt="Martin Valdez working on a landscaping project"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </motion.section>

      <WhyMarval />

      {/* Values Strip */}
      <section className="bg-forest py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {['Honest', 'Reliable', 'On Time', 'Quality First'].map((value, i) => (
            <React.Fragment key={i}>
              <span className="text-white text-xl md:text-2xl font-playfair font-semibold">{value}</span>
              {i < 3 && <span className="w-2 h-2 rounded-full bg-stone hidden md:block" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      <FooterCTA />
    </>
  );
}