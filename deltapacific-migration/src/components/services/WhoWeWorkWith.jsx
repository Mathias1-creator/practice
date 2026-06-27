import { HardHat, Home, KeyRound } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  {
    icon: HardHat,
    title: "Builders and General Contractors",
    description:
      "Reliable, schedule-driven plumbing for production and custom builders who need a crew that shows up, hits milestones, and passes inspection.",
  },
  {
    icon: Home,
    title: "Custom Home and ADU Owners",
    description:
      "Thoughtful plumbing design and installation for one-of-a-kind homes and accessory dwelling units, built to your plans and to code.",
  },
  {
    icon: KeyRound,
    title: "Homeowners",
    description:
      "Remodels, repipes, and everyday repairs handled cleanly and respectfully, treating your home like it is our own.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="text-center mb-14">
          <p
            className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
            style={{ color: "#B26B3E" }}
          >
            OUR CLIENTS
          </p>
          <h2
            className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl"
            style={{ color: "#13233B" }}
          >
            Who We Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-lg p-8"
                style={{ boxShadow: "0 4px 20px -6px rgba(19,35,59,0.08)" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(26,135,129,0.1)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#1A8781" }} />
                </div>
                <h3
                  className="font-heading font-bold text-lg mb-3"
                  style={{ color: "#13233B" }}
                >
                  {client.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "#4C525A" }}
                >
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}