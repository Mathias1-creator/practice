import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SectionLabel from '../components/SectionLabel';

const jennyPhoto = '/images/d73fd77cc_c5750c17-7e4d-46f3-a9e9-25650d20509b-1_all_33932.jpg';

export default function About() {
  return (
    <div style={{ background: '#faf8f5' }}>
      <Navbar />

      {/* Section 1 — Page Hero */}
      <section
        className="flex items-center justify-center text-center px-4"
        style={{ background: '#f2ece6', paddingTop: '140px', paddingBottom: '80px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          <p
            className="font-body text-xs font-semibold uppercase mb-5"
            style={{ color: '#c9547a', letterSpacing: '0.22em' }}
          >
            Our Story
          </p>
          <h1
            className="font-heading italic font-semibold mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#1e1e1e', lineHeight: 1.15 }}
          >
            Where Every Garden Begins.
          </h1>
          <p
            className="font-body"
            style={{ fontSize: '17px', color: '#5a5a5a', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}
          >
            Garden Chic Landscape was built on a lifelong love of gardens — one that was planted long before the business began.
          </p>
        </motion.div>
      </section>

      {/* Section 2 — Jenny's Story */}
      <section className="py-20 md:py-28" style={{ background: '#faf8f5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={jennyPhoto}
                alt="Jenny Bailey with her garden"
                className="w-full"
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                  maxHeight: '600px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                }}
              />
            </motion.div>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <SectionLabel>A Note From Jenny</SectionLabel>
              <h2
                className="font-heading font-semibold mt-3 mb-8"
                style={{ fontSize: '40px', color: '#1e1e1e', lineHeight: 1.15 }}
              >
                My Nan.
              </h2>

              <div className="space-y-5" style={{ fontSize: '16px', color: '#5a5a5a', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
                <p>
                  This is my nan. She was the person who first introduced me to gardening and the reason I fell in love with it. As a child she taught me so much about gardening, and the simple happiness that a beautiful garden can bring.
                </p>
                <p>
                  When she passed away, she left behind far more than memories. She left me with a passion, a purpose, and a lifelong appreciation for gardening. Every landscape I design and every garden I care for carries a small piece of what she taught me.
                </p>
                <p>
                  Thank you, Nan, for planting the seed that grew into Garden Chic Landscape.
                </p>
              </div>

              <p
                className="font-heading italic mt-8"
                style={{ fontSize: '22px', color: '#c9547a' }}
              >
                — Jenny Bailey, Owner &amp; Founder.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — About the Business */}
      <section className="py-20 md:py-28" style={{ background: '#f2ece6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-heading font-semibold mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 44px)', color: '#1e1e1e', lineHeight: 1.2 }}
            >
              About Garden Chic Landscape.
            </h2>
            <p
              className="font-body mx-auto mb-10"
              style={{ fontSize: '16px', color: '#5a5a5a', lineHeight: 1.8, maxWidth: '720px' }}
            >
              Garden Chic Landscape is a female-owned independent landscaping contractor serving Ventura County, CA. With 8 years of hands-on experience, Jenny Bailey brings a personal, boutique approach to every project — from regular maintenance programs to full landscape installations and one-time cleanups. Every garden is treated with the same care and love that started it all.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {['C27 Licensed Contractor', 'Female Owned & Operated', '8 Years Experience'].map((badge) => (
                <span
                  key={badge}
                  className="font-body font-medium"
                  style={{
                    border: '1px solid #c9547a',
                    borderRadius: '20px',
                    padding: '8px 20px',
                    fontSize: '13px',
                    color: '#c9547a',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — CTA Banner */}
      <section className="py-20 md:py-24 text-center" style={{ background: '#c9547a' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2
            className="font-heading italic font-semibold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 44px)', lineHeight: 1.2 }}
          >
            Ready to Transform Your Garden?
          </h2>
          <p
            className="font-body text-white/85 mb-8"
            style={{ fontSize: '17px', lineHeight: 1.75 }}
          >
            Serving Ventura County, CA — Let's create something beautiful together.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#c9547a]"
            style={{
              border: '2px solid white',
              borderRadius: '6px',
              padding: '14px 36px',
              fontSize: '14px',
            }}
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}