import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:8056022230"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-forest rounded-full flex items-center justify-center shadow-xl shadow-forest/30 hover:scale-110 hover:shadow-2xl hover:shadow-forest/40 transition-all"
      aria-label="Call Marval Landscaping"
    >
      <Phone className="w-6 h-6 text-white" />
    </motion.a>
  );
}