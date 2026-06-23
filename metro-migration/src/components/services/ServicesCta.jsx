import React from "react";

export default function ServicesCta() {
  return (
    <section
      className="w-full py-20 md:py-24"
      style={{ backgroundColor: "#1C1F22" }}
    >
      <div
        className="max-w-4xl mx-auto px-6 text-center"
        style={{ borderTop: "1px solid #2D3136", paddingTop: "4rem" }}
      >
        <h2
          className="font-heading text-white leading-none mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Free Estimates, Up-Front Pricing
        </h2>
        <p
          className="font-body font-normal text-lg mb-8"
          style={{ color: "#F8F6F2", lineHeight: 1.6 }}
        >
          No hidden costs, guaranteed satisfaction — call Justin today
        </p>
        <a
          href="tel:9168704033"
          className="font-heading block mb-4 transition-colors duration-200 hover:text-[#A3561F]"
          style={{
            color: "#C0692A",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1,
          }}
        >
          (916) 870-4033
        </a>
        <a
          href="mailto:justin@metroplumbingcontractors.com"
          className="font-body font-normal text-base md:text-lg transition-colors duration-200 hover:text-white"
          style={{ color: "#F8F6F2" }}
        >
          justin@metroplumbingcontractors.com
        </a>
      </div>
    </section>
  );
}