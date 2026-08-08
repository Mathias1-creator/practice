import { Phone } from "lucide-react";

export default function ContactCallBand() {
  return (
    <section style={{ backgroundColor: "#13233B" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2
          className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3"
        >
          Prefer to Just Call?
        </h2>
        <p
          className="font-body text-base mb-8"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          We are happy to talk through your project on the phone.
        </p>
        <a
          href="tel:+19252070069"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-body font-semibold text-sm border-2 transition-all duration-200"
          style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.5)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#FFFFFF";
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <Phone className="w-4 h-4" />
          Call (925) 207-0069
        </a>
      </div>
    </section>
  );
}