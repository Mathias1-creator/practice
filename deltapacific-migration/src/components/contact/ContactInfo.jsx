import { Phone, Mail, Clock, MapPin } from "lucide-react";

const cards = [
  {
    Icon: Phone,
    label: "Call or Text",
    content: (
      <a
        href="tel:+19252070069"
        className="font-body text-sm transition-colors duration-150 hover:underline"
        style={{ color: "#B26B3E" }}
      >
        (925) 207-0069
      </a>
    ),
  },
  {
    Icon: Mail,
    label: "Email",
    content: (
      <a
        href="mailto:mauricio@deltapacificplumbing.com"
        className="font-body text-sm break-all transition-colors duration-150 hover:underline"
        style={{ color: "#B26B3E" }}
      >
        mauricio@deltapacificplumbing.com
      </a>
    ),
  },
  {
    Icon: Clock,
    label: "Hours",
    content: (
      <span className="font-body text-sm" style={{ color: "#4C525A" }}>
        Monday – Saturday, 8:00 AM – 4:00 PM
      </span>
    ),
  },
  {
    Icon: MapPin,
    label: "Service Area",
    content: (
      <span className="font-body text-sm leading-relaxed" style={{ color: "#4C525A" }}>
        Contra Costa, Alameda, Santa Clara, Napa, Solano, Sacramento, and San Joaquin Counties
      </span>
    ),
  },
];

export default function ContactInfo() {
  return (
    <div>
      <p
        className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
        style={{ color: "#B26B3E" }}
      >
        GET IN TOUCH
      </p>
      <h2
        className="font-heading font-bold text-2xl sm:text-3xl mb-8"
        style={{ color: "#13233B" }}
      >
        Reach Us Directly
      </h2>

      <div className="space-y-4 mb-8">
        {cards.map(({ Icon, label, content }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-white rounded-lg p-5"
            style={{ boxShadow: "0 4px 16px -6px rgba(19,35,59,0.1)" }}
          >
            <Icon
              className="w-5 h-5 mt-0.5 shrink-0"
              style={{ color: "#B26B3E" }}
              strokeWidth={1.75}
            />
            <div>
              <p
                className="font-body font-semibold text-sm mb-1"
                style={{ color: "#13233B" }}
              >
                {label}
              </p>
              {content}
            </div>
          </div>
        ))}
      </div>

      <p className="font-body text-sm leading-relaxed" style={{ color: "#4C525A" }}>
        Builders and general contractors: call us directly to talk schedules, plans, and bids.
      </p>
    </div>
  );
}