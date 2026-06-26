import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceBlock({ id, number, eyebrow, heading, paragraph, checkItems, imgSrc, imgAlt, reverse, bg }) {
  return (
    <section id={id} style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`relative ${reverse ? "lg:col-start-2" : ""} order-first lg:order-none`}
          >
            <div className="rounded-lg overflow-hidden relative">
              <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-auto object-cover"
                style={{ borderRadius: "6px" }}
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-body px-3 py-1 rounded-full">
                (placeholder)
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={reverse ? "lg:col-start-1" : ""}
          >
            <span
              className="font-heading font-extrabold text-4xl md:text-5xl block mb-3"
              style={{ color: "rgba(178,107,62,0.25)" }}
            >
              {number}
            </span>
            <p
              className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
              style={{ color: "#B26B3E" }}
            >
              {eyebrow}
            </p>
            <h2
              className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-5"
              style={{ color: "#13233B" }}
            >
              {heading}
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "#4C525A" }}
            >
              {paragraph}
            </p>

            <p
              className="font-body font-semibold text-sm mb-4"
              style={{ color: "#13233B" }}
            >
              What We Handle
            </p>
            <ul className="space-y-2.5">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#B26B3E" }}
                  />
                  <span
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "#4C525A" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}