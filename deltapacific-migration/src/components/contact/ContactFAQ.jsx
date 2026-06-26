import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Contra Costa, Alameda, Santa Clara, Napa, Solano, Sacramento, and San Joaquin Counties. If you are nearby but not listed, give us a call, we may still be able to help.",
  },
  {
    question: "Do you work with builders and general contractors?",
    answer:
      "Yes. New construction plumbing for custom homes, tract homes, and ADUs is a core part of our business, and we are comfortable working from plans, hitting milestones, and coordinating inspections.",
  },
  {
    question: "Do you handle small repairs or only big projects?",
    answer:
      "Both. Alongside full builds and repipes, we repair and replace faucets, toilets, water heaters, and fixtures.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Delta Pacific Plumbing is a licensed California contractor, fully bonded and insured. License # (placeholder).",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "#D1D5DB" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className="font-body font-semibold text-sm sm:text-base"
          style={{ color: "#13233B" }}
        >
          {question}
        </span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-200"
          style={{
            color: "#B26B3E",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-body text-sm leading-relaxed pb-5"
              style={{ color: "#4C525A" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactFAQ() {
  return (
    <section style={{ backgroundColor: "#EBEFF3" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <p
            className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
            style={{ color: "#B26B3E" }}
          >
            GOOD TO KNOW
          </p>
          <h2
            className="font-heading font-bold text-2xl sm:text-3xl"
            style={{ color: "#13233B" }}
          >
            Common Questions
          </h2>
        </div>

        <div
          className="bg-white rounded-xl px-6 sm:px-8"
          style={{ boxShadow: "0 4px 20px -6px rgba(19,35,59,0.1)" }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}