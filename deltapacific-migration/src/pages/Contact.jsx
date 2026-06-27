import ContactHero from "../components/contact/ContactHero";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCallBand from "../components/contact/ContactCallBand";
import { Phone, Mail, Clock, MapPin, BadgeCheck } from "lucide-react";

export default function Contact() {
  return (
    <>
      <ContactHero />

      {/* Premium contact section */}
      <section style={{ backgroundColor: "#F7F4EF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

          {/* Header */}
          <div className="text-center mb-16">
            <p
              className="font-body font-semibold text-xs tracking-[0.18em] mb-3"
              style={{ color: "#B26B3E" }}
            >
              GET IN TOUCH
            </p>
            <h2
              className="font-heading font-bold text-3xl sm:text-4xl"
              style={{ color: "#13233B" }}
            >
              Let's Talk About Your Project
            </h2>
            <p
              className="font-body text-base mt-4 max-w-xl mx-auto leading-relaxed"
              style={{ color: "#4C525A" }}
            >
              We're available Monday through Saturday and respond quickly. Builders and general contractors — call us directly to discuss schedules, plans, and bids.
            </p>
          </div>

          {/* Contact cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <a
              href="tel:+19252070069"
              className="group flex flex-col items-center text-center gap-4 bg-white rounded-xl p-8 transition-shadow duration-200 hover:shadow-lg"
              style={{ boxShadow: "0 4px 20px -6px rgba(19,35,59,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(178,107,62,0.1)" }}
              >
                <Phone className="w-5 h-5" style={{ color: "#B26B3E" }} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-body font-semibold text-sm mb-1" style={{ color: "#13233B" }}>
                  Call or Text
                </p>
                <p
                  className="font-heading font-bold text-lg group-hover:underline"
                  style={{ color: "#B26B3E" }}
                >
                  (925) 207-0069
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:mauricio@deltapacificplumbing.com"
              className="group flex flex-col items-center text-center gap-4 bg-white rounded-xl p-8 transition-shadow duration-200 hover:shadow-lg"
              style={{ boxShadow: "0 4px 20px -6px rgba(19,35,59,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(178,107,62,0.1)" }}
              >
                <Mail className="w-5 h-5" style={{ color: "#B26B3E" }} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-body font-semibold text-sm mb-1" style={{ color: "#13233B" }}>
                  Email
                </p>
                <p
                  className="font-body text-xs sm:text-sm group-hover:underline"
                  style={{ color: "#B26B3E", wordBreak: "break-word" }}
                >
                  mauricio@deltapacificplumbing.com
                </p>
              </div>
            </a>

            {/* Hours */}
            <div
              className="flex flex-col items-center text-center gap-4 bg-white rounded-xl p-8"
              style={{ boxShadow: "0 4px 20px -6px rgba(19,35,59,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(178,107,62,0.1)" }}
              >
                <Clock className="w-5 h-5" style={{ color: "#B26B3E" }} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-body font-semibold text-sm mb-1" style={{ color: "#13233B" }}>
                  Hours
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4C525A" }}>
                  Monday – Saturday<br />8:00 AM – 4:00 PM
                </p>
              </div>
            </div>

            {/* License */}
            <div
              className="flex flex-col items-center text-center gap-4 bg-white rounded-xl p-8"
              style={{ boxShadow: "0 4px 20px -6px rgba(19,35,59,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(178,107,62,0.1)" }}
              >
                <BadgeCheck className="w-5 h-5" style={{ color: "#B26B3E" }} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-body font-semibold text-sm mb-1" style={{ color: "#13233B" }}>
                  Licensed & Insured
                </p>
                <p className="font-body text-sm" style={{ color: "#4C525A" }}>
                  CSLB # 1155219<br />Bonded and Insured
                </p>
              </div>
            </div>
          </div>

          {/* Service area strip */}
          <div
            className="rounded-xl px-8 py-10 text-center"
            style={{ backgroundColor: "#13233B" }}
          >
            <MapPin className="w-6 h-6 mx-auto mb-4" style={{ color: "#B26B3E" }} strokeWidth={1.75} />
            <h3
              className="font-heading font-bold text-xl sm:text-2xl text-white mb-3"
            >
              Serving 7 Counties Across Northern California
            </h3>
            <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Contra Costa · Alameda · Santa Clara · Napa · Solano · Sacramento · San Joaquin
            </p>
          </div>

        </div>
      </section>

      <ContactFAQ />
      <ContactCallBand />
    </>
  );
}
