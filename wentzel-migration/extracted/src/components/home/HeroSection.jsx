import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {heroImage ? (
          <img
            src={heroImage}
            alt="Lush green lawn with irrigation system"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center">
            <div className="border-2 border-dashed border-white/30 rounded-xl px-8 py-6 text-center max-w-md">
              <p className="text-white/50 text-sm font-body">
                [INSERT HERO PHOTO HERE — Andrew's new homepage photo — upload to replace this]
              </p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-[#2E7D32]" />
            <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
              LICENSED · BONDED · INSURED · CSLB #1103954
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Irrigation, Drainage & Lawn Care{' '}
            <span className="text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>Done Right</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
            Serving San Luis Obispo County for 25+ years. Design, installation, repair, and maintenance you can count on.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+18056744333"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Call (805) 674-4333
            </a>
          </div>

          <p className="text-white/40 text-sm tracking-wider">
            Irrigation · Drainage · Lawn Care · Sports Fields · Trusted Since 2001
          </p>
        </motion.div>
      </div>
    </section>
  );
}