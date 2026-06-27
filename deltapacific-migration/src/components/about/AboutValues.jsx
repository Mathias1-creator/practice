import { motion } from "framer-motion";
import { Heart, Users, ShieldCheck, Clock } from "lucide-react";

const values = [
  {
    Icon: Heart,
    title: "Family-Owned",
    description:
      "We are family-owned and operated, and we treat your home and project with the same care we would want for our own.",
  },
  {
    Icon: Users,
    title: "Self-Performing Crew",
    description:
      "We do the work ourselves, with no subcontractors, so quality and accountability stay in our hands from start to finish.",
  },
  {
    Icon: ShieldCheck,
    title: "Code-Perfect Quality",
    description:
      "We build to code and to last, coordinating inspections and standing behind the work we deliver.",
  },
  {
    Icon: Clock,
    title: "Reliable and On Time",
    description:
      "We show up when we say we will, hit project milestones, and keep your build moving on schedule.",
  },
];

export default function AboutValues() {
  return (
    <section style={{ backgroundColor: "#EBEFF3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <p
            className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
            style={{ color: "#1A8781" }}
          >
            WHAT WE STAND FOR
          </p>
          <h2
            className="font-heading font-bold text-2xl sm:text-3xl"
            style={{ color: "#13233B" }}
          >
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {values.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-lg p-7"
              style={{ boxShadow: "0 4px 20px -6px rgba(19,35,59,0.1)" }}
            >
              <Icon
                className="w-7 h-7 mb-5"
                style={{ color: "#1A8781" }}
                strokeWidth={1.5}
              />
              <h3
                className="font-heading font-bold text-lg mb-3"
                style={{ color: "#13233B" }}
              >
                {title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "#4C525A" }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}