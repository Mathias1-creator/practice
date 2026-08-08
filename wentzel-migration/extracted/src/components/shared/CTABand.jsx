import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABand({
  headline = "Ready to Fix, Upgrade, or Transform Your Yard?",
  subtext = "Get a free estimate from a licensed, certified irrigation and turf specialist.",
  buttonText = "Request a Free Quote",
  buttonLink = "/get-a-quote",
  buttonColor = "bg-[#2E7D32] hover:bg-[#1B5E20]"
}) {
  return (
    <section className="bg-[#1A1A1A] py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/5 to-[#1565C0]/5" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
            {headline}
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            {subtext}
          </p>
          <Link
            to={buttonLink}
            className={`inline-flex items-center gap-2 ${buttonColor} text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg`}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}