import { motion } from "framer-motion";

export default function IntroBand() {
  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6"
          style={{ color: "#13233B" }}
        >
          Builder-Grade Plumbing, Done Like It Is Our Own
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-base md:text-lg leading-relaxed"
          style={{ color: "#4C525A" }}
        >
          From custom homes and tract developments to full remodels and repipes, Delta Pacific brings precise, dependable craftsmanship to every project. As a family-owned company, we treat your build like it is our own, accountable from the first rough-in to the final walkthrough.
        </motion.p>
      </div>
    </section>
  );
}