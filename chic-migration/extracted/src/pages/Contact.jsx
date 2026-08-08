import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SectionLabel from '../components/SectionLabel';

const contactHero = '/images/619d202d4_generated_8cd139e3.jpg';

export default function Contact() {

  return (
    <div style={{ background: '#faf8f5' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ height: '40vh', minHeight: '280px' }}>
        <div className="absolute inset-0">
          <img src={contactHero} alt="Garden roses" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold italic text-white mb-3">
              Get In Touch
            </h1>
            <p className="font-body text-base md:text-lg text-white/80 max-w-lg" style={{ lineHeight: 1.75 }}>
              Serving all of Ventura County. Free estimates. We respond fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Contact</SectionLabel>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-3 mb-8" style={{ color: '#1e1e1e' }}>
                Let's Build Something Beautiful
              </h2>

              <div className="space-y-5 mb-8">
                <a href="tel:8058969695" className="flex items-center gap-4 font-body text-base transition-colors duration-300 hover:opacity-80" style={{ color: '#1e1e1e' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,84,122,0.1)' }}>
                    <Phone className="w-5 h-5" style={{ color: '#c9547a' }} />
                  </div>
                  (805) 896-9695
                </a>
                <a href="mailto:thegardenchic805@gmail.com" className="flex items-center gap-4 font-body text-base transition-colors duration-300 hover:opacity-80" style={{ color: '#1e1e1e' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,84,122,0.1)' }}>
                    <Mail className="w-5 h-5" style={{ color: '#c9547a' }} />
                  </div>
                  thegardenchic805@gmail.com
                </a>
                <div className="flex items-center gap-4 font-body text-base" style={{ color: '#1e1e1e' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,84,122,0.1)' }}>
                    <Clock className="w-5 h-5" style={{ color: '#c9547a' }} />
                  </div>
                  7AM – 7PM Daily
                </div>
                <div className="flex items-center gap-4 font-body text-base" style={{ color: '#1e1e1e' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,84,122,0.1)' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#c9547a' }} />
                  </div>
                  Ventura County, CA
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {['C27 Licensed', 'Bonded', 'Insured', 'Female Owned'].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-1.5 font-body text-xs font-medium rounded-full"
                    style={{ background: 'rgba(201,84,122,0.1)', color: '#c9547a' }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right - Tally Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <iframe
                src="https://tally.so/embed/kdvkNM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Form"
                style={{ borderRadius: '12px', minHeight: '500px' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}