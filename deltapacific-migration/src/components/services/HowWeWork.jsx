import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation and Quote",
    description: "We talk through your project, review plans, and provide a clear, detailed quote.",
  },
  {
    number: "02",
    title: "Planning and Permits",
    description: "We coordinate scheduling, materials, and inspections so the work goes smoothly.",
  },
  {
    number: "03",
    title: "Expert Installation",
    description: "Our self-performing crew completes the work to code, on schedule, and clean.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description: "We walk the finished work with you and stand behind every job we do.",
  },
];

export default function HowWeWork() {
  return (
    <section style={{ backgroundColor: "#13233B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
            style={{ color: "#B26B3E" }}
          >
            OUR PROCESS
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center px-6 py-8"
            >
              {/* Connector line between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[2.75rem] left-1/2 w-full h-px"
                  style={{
                    background: "linear-gradient(to right, rgba(178,107,62,0.5) 50%, rgba(178,107,62,0.15) 100%)",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Number circle */}
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                style={{
                  border: "2px solid rgba(178,107,62,0.5)",
                  backgroundColor: "rgba(178,107,62,0.08)",
                }}
              >
                <span
                  className="font-heading font-extrabold text-lg"
                  style={{ color: "#B26B3E" }}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading font-bold text-base text-white mb-2">
                {step.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}