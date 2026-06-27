import { motion } from "framer-motion";

const LOGO_IMG = `${import.meta.env.BASE_URL}images/logo.png`;

export default function AboutStory() {
  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className="w-full rounded-xl flex items-center justify-center bg-white"
              style={{
                boxShadow: "0 12px 40px -10px rgba(19,35,59,0.18)",
                aspectRatio: "4/3",
              }}
            >
              <img
                src={LOGO_IMG}
                alt="Delta Pacific Plumbing"
                className="w-3/4 max-w-md object-contain"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p
              className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
              style={{ color: "#1A8781" }}
            >
              OUR STORY
            </p>
            <h2
              className="font-heading font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: "#13233B" }}
            >
              Built on Family and Hard Work
            </h2>
            <div className="space-y-5">
              <p className="font-body text-base leading-relaxed" style={{ color: "#4C525A" }}>
                Delta Pacific Plumbing was built on a simple idea: treat every project like it belongs to family. As a family-owned and operated company, we bring pride, accountability, and craftsmanship to every home we work on across Northern California.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "#4C525A" }}>
                We specialize in new construction and remodel plumbing, from custom homes, tract homes, and ADUs to whole-home repipes and everyday repairs. Because we self-perform our work, the people who start your project are the same people who finish it, with no subcontractors and no shortcuts.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "#4C525A" }}>
                From the first underground rough-in to the final walkthrough, we focus on doing the job right the first time, communicating clearly, and leaving every job site clean. It is the kind of work we are proud to put our family name on.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}