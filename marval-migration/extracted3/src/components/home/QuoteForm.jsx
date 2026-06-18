import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const trustPoints = [
  'Free on-site estimates',
  'No hidden fees',
  'Licensed and insured',
];

export default function QuoteForm() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="bg-forest py-24 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
          Get Your Free Quote
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Tell us about your project and we will be in touch within 24 hours.
        </p>
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          {trustPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-stone shrink-0" />
              <span className="text-white/90">{point}</span>
            </div>
          ))}
        </div>
        <Link
          to="/quote"
          className="inline-flex items-center gap-3 bg-white text-forest px-10 py-4 rounded-full font-bold text-lg hover:bg-stone hover:text-white transition-all hover:scale-105 hover:shadow-2xl"
        >
          REQUEST A FREE QUOTE <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.section>
  );
}