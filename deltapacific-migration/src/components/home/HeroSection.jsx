import { Link } from "react-router-dom";
import { Phone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "/images/0af246fb9_generated_3393a007.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Modern home interior under construction"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(19, 35, 59, 0.92) 0%, rgba(19, 35, 59, 0.75) 40%, rgba(19, 35, 59, 0.3) 70%, rgba(19, 35, 59, 0.1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body font-semibold text-xs tracking-[0.15em] mb-5"
            style={{ color: "#B26B3E" }}
          >
            FAMILY-OWNED &middot; NORTHERN CALIFORNIA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.1] tracking-tight mb-6"
          >
            Plumbing Built Right, From the Ground Up
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Delta Pacific Plumbing is a family-owned contractor delivering precise, code-perfect plumbing for new construction, remodels, and repipes across Northern California, built to last and done right the first time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-body font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#B26B3E",
                boxShadow: "0 2px 8px rgba(178, 107, 62, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#9A5A30";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(178, 107, 62, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#B26B3E";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(178, 107, 62, 0.3)";
              }}
            >
              Request a Quote
            </Link>
            <a
              href="tel:+19252070069"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-body font-semibold text-sm text-white border-2 border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/70"
            >
              <Phone className="w-4 h-4" />
              Call (925) 207-0069
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}