import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHY_US_IMG = "/images/servicerepairs_real.jpg";

const trustItems = [
  "Self-Performed Work",
  "Code-Perfect Installs",
  "On-Time, Clean Job Sites",
];

export default function WhyUsSection() {
  return (
    <section style={{ backgroundColor: "#EBEFF3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={WHY_US_IMG}
                alt="Tankless water heater installation by Delta Pacific Plumbing"
                className="w-full h-auto object-cover"
                style={{ borderRadius: "6px" }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p
              className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
              style={{ color: "#B26B3E" }}
            >
              THE DELTA PACIFIC DIFFERENCE
            </p>
            <h2
              className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6"
              style={{ color: "#13233B" }}
            >
              Built on Family, Backed by Craftsmanship
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "#4C525A" }}
            >
              Delta Pacific Plumbing is family-owned and operated, and we self-perform every phase of the work, with no subcontractors and no shortcuts. That means one accountable team from rough-in to final walkthrough, and plumbing that is done right the first time. Builders, general contractors, and homeowners across Northern California trust us because we show up, we communicate, and we deliver work we are proud to put our name on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#1A8781" }} />
                  <span className="font-body font-medium text-sm" style={{ color: "#13233B" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}