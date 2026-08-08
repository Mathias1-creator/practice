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

export default function ServiceAreaSection() {
  return (
    <section style={{ backgroundColor: "#13233B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
            style={{ color: "#1A8781" }}
          >
            WHERE WE WORK
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            Serving Northern California
          </h2>
          <p className="font-body text-base max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            We work throughout the greater Bay Area, the North Bay, and the Sacramento region.
          </p>
        </div>

        {/* County Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4 mb-10">
          {counties.map((county, i) => (
            <motion.div
              key={county}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-lg px-4 py-5 text-center cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid rgba(178, 107, 62, 0.3)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(178, 107, 62, 0.08)";
                e.currentTarget.style.borderColor = "rgba(178, 107, 62, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(178, 107, 62, 0.3)";
              }}
            >
              <span className="font-body font-medium text-sm text-white">{county}</span>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          {"Don\u2019t see your area? Give us a call \u2014 we may still be able to help."}
        </p>
      </div>
    </section>
  );
}