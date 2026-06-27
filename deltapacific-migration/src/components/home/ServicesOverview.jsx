import { Link } from "react-router-dom";
import { Home, PipetteIcon, Wrench, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "New Construction Plumbing",
    description: "Complete plumbing for custom homes, tract homes, and ADUs, from underground rough-in to finished fixtures, built to code and built to last.",
  },
  {
    icon: PipetteIcon,
    title: "Remodels and Repipes",
    description: "Whole-home repipes and remodel plumbing, removing aging systems and installing new lines and fixtures with a clean finish and minimal disruption.",
  },
  {
    icon: Wrench,
    title: "Service and Repairs",
    description: "Faucet and toilet repair and replacement, new water heater installation, and dependable fixes that keep your home running.",
  },
];

export default function ServicesOverview() {
  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
            style={{ color: "#1A8781" }}
          >
            WHAT WE DO
          </p>
          <h2
            className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl"
            style={{ color: "#13233B" }}
          >
            Our Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-white rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 group"
      style={{
        boxShadow: "0 4px 20px -6px rgba(19, 35, 59, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 40px -15px rgba(19, 35, 59, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 20px -6px rgba(19, 35, 59, 0.08)";
      }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
        style={{ backgroundColor: "rgba(26,135,129,0.1)" }}
      >
        <Icon className="w-6 h-6" style={{ color: "#1A8781" }} />
      </div>
      <h3
        className="font-heading font-bold text-xl mb-3"
        style={{ color: "#13233B" }}
      >
        {service.title}
      </h3>
      <p
        className="font-body text-sm leading-relaxed mb-5"
        style={{ color: "#4C525A" }}
      >
        {service.description}
      </p>
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 font-body font-semibold text-sm transition-all duration-200 group-hover:gap-2.5"
        style={{ color: "#B26B3E" }}
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}