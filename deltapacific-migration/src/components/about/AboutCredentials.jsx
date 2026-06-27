import { BadgeCheck, Shield, Calendar } from "lucide-react";

const credentials = [
  {
    Icon: BadgeCheck,
    label: "Licensed Contractor",
    line: "California CSLB License # 1155219",
  },
  {
    Icon: Shield,
    label: "Bonded and Insured",
    line: "Fully bonded and insured for your protection.",
  },
  {
    Icon: Calendar,
    label: "Experienced",
    line: "1 year serving Northern California families and builders.",
  },
];

export default function AboutCredentials() {
  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2
          className="font-heading font-bold text-2xl sm:text-3xl mb-12"
          style={{ color: "#13233B" }}
        >
          Licensed, Bonded, and Insured
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {credentials.map(({ Icon, label, line }, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Icon
                className="w-8 h-8"
                style={{ color: "#1A8781" }}
                strokeWidth={1.5}
              />
              <h3
                className="font-heading font-bold text-base"
                style={{ color: "#13233B" }}
              >
                {label}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "#4C525A" }}
              >
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}