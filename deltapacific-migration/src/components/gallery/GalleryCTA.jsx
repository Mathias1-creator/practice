import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function GalleryCTA() {
  return (
    <section style={{ backgroundColor: "#13233B" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
        <h2
          className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4"
        >
          Want Work Like This on Your Project?
        </h2>
        <p
          className="font-body text-base md:text-lg mb-8"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Tell us about your build, remodel, or repair and we will get back to you with a quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-body font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#B26B3E",
              boxShadow: "0 2px 8px rgba(178,107,62,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#9A5A30";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(178,107,62,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#B26B3E";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(178,107,62,0.3)";
            }}
          >
            Request a Quote
          </Link>
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
      </div>
    </section>
  );
}