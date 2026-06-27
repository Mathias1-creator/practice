import { useState } from "react";
import { motion } from "framer-motion";

const counties = [
  "Contra Costa",
  "Alameda",
  "Santa Clara",
  "Napa",
  "Solano",
  "Sacramento",
  "San Joaquin",
];

function CountyTile({ name, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="rounded-lg px-4 py-5 text-center font-body font-medium text-sm border-2 transition-all duration-200 cursor-default"
      style={{
        backgroundColor: hovered ? "#B26B3E" : "transparent",
        borderColor: "#B26B3E",
        color: "#FFFFFF",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 24px -6px rgba(178,107,62,0.35)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name}
    </motion.div>
  );
}

export default function AboutServiceArea() {
  return (
    <section style={{ backgroundColor: "#13233B" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <p
          className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
          style={{ color: "#1A8781" }}
        >
          WHERE WE WORK
        </p>
        <h2
          className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-white"
        >
          Serving Northern California
        </h2>
        <p
          className="font-body text-base max-w-2xl mx-auto mb-12"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          We proudly serve homeowners, builders, and general contractors throughout the greater Bay Area, the North Bay, and the Sacramento region.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
          {counties.map((county, i) => (
            <CountyTile key={county} name={county} index={i} />
          ))}
        </div>

        <p
          className="font-body text-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Do not see your area? Give us a call, we may still be able to help.
        </p>
      </div>
    </section>
  );
}