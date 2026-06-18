import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const reviews = [
  {
    name: 'Chad Hunt',
    source: 'Google',
    text: 'This company is absolutely amazing! Extremely professional and efficient. My front yard was cluttered with debris and my backyard was full of weeds. They walked it Thursday, were here Saturday, and got everything done in one day including a late request for bark. I came home to a beautiful front and back yard. True professionals.',
  },
  {
    name: 'Shirley Povondra',
    source: 'Google',
    text: "Very good experience. They installed artificial grass in front of my home — all done in one day, no mess left behind, looks great. Owner Martin is very hands on with great follow-up. As a former business owner I have high standards and they met them all.",
  },
  {
    name: 'Claudine Lingo',
    source: 'Google',
    text: 'Mr. Valdez has done a number of projects for us as well as weekly maintenance since 2012. He is licensed, very dependable, honest, and great to work with. He listens to our ideas and uses his knowledge of the soil in the area.',
  },
  {
    name: 'Eric Krause',
    source: 'Google',
    text: "Martin is an energetic, service-oriented landscape and hardscape provider with excellent technical knowledge combined with a craftsman's skills. His team is hardworking, courteous, and careful.",
  },
  {
    name: 'Donnie Shippey',
    source: 'Google',
    text: 'Upfront pricing with no hidden fees. Friendly workers, easy to work with. I had a full day of yard work and was very pleased with the quality. I have no doubt the routine maintenance we contracted will be the same.',
  },
  {
    name: 'LA Cullen',
    source: 'Google',
    text: 'Marval landscaping provides wonderful service. I use them for weekly maintenance as well as updating existing landscaping. Being new to the area I relied on them to plant the appropriate landscape for our climate.',
  },
  {
    name: 'Violet Valdez',
    source: 'Google',
    text: 'Marval Landscaping is the best in the Central Coast! Martin listens and gives amazing suggestions and helped my home become the home of my dreams!',
  },
  {
    name: 'Christiane Kaalund',
    source: 'Google',
    text: 'We are very happy with Marval\'s services. Martin is very professional and knowledgeable from plants to irrigation and maintenance, and he is quick to respond. We highly recommend him.',
  },
];

export default function Testimonials() {
  const { ref, controls } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((p) => (p + 1) % reviews.length);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="bg-cream py-24 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-forest"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6 italic">
                "{reviews[current].text}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-charcoal">{reviews[current].name}</p>
                <span className="text-xs text-charcoal/40 uppercase tracking-wide">{reviews[current].source}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full bg-white shadow hover:bg-forest hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-forest w-6' : 'bg-stone/40'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full bg-white shadow hover:bg-forest hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.google.com/search?q=marval+landscaping+services&oq=m&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg7MhAIAhAuGMcBGLEDGNEDGIAEMgYIAxBFGDkyDggEEEUYJxg7GIAEGIoFMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEHNTU4ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x80ec5f23435b99a5:0x4153e6a0af8227ce,3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-stone/80 transition-all hover:scale-105"
          >
            Leave Us a Google Review
          </a>
          <a
            href="https://www.google.com/search?q=marval+landscaping+services&oq=m&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg7MhAIAhAuGMcBGLEDGNEDGIAEMgYIAxBFGDkyDggEEEUYJxg7GIAEGIoFMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEHNTU4ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8&zx=1777850624973#lrd=0x80ec5f23435b99a5:0x4153e6a0af8227ce,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-stone/80 transition-all hover:scale-105"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </motion.section>
  );
}