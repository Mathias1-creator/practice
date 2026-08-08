import React from "react";
import SectionHeading from "../SectionHeading";

export default function TalkToJustin() {
  return (
    <section className="w-full py-20 md:py-28" style={{ backgroundColor: "#1C1F22" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading text="Talk to Justin" light />
        <p
          className="font-body font-normal text-lg mb-8"
          style={{ color: "#F8F6F2", lineHeight: 1.6 }}
        >
          Questions, estimates, or your next project — reach Justin directly
        </p>
        <a
          href="tel:9168704033"
          className="font-heading block mb-5 transition-colors duration-200 hover:text-[#A3561F]"
          style={{
            color: "#C0692A",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            lineHeight: 1,
          }}
        >
          (916) 870-4033
        </a>
        <a
          href="mailto:justin@metroplumbingcontractors.com"
          className="font-body font-normal text-base md:text-lg block mb-6 transition-colors duration-200 hover:text-white"
          style={{ color: "#F8F6F2" }}
        >
          justin@metroplumbingcontractors.com
        </a>
        <p
          className="font-body font-normal text-base"
          style={{ color: "#F8F6F2", lineHeight: 1.6 }}
        >
          Serving Sacramento, Placer, and El Dorado counties &mdash; Free Estimates
        </p>
      </div>
    </section>
  );
}