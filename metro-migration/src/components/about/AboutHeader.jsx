import React from "react";

export default function AboutHeader() {
  return (
    <section
      className="w-full pt-32 pb-14 md:pt-36 md:pb-16"
      style={{ backgroundColor: "#1C1F22" }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1
          className="font-heading text-white leading-none mb-4"
          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
        >
          About Metro Plumbing
        </h1>
        <p
          className="font-body font-normal text-lg md:text-xl"
          style={{ color: "#F8F6F2", lineHeight: 1.6 }}
        >
          {"Sacramento\u2019s commercial plumbing specialists for over 25 years."}
        </p>
      </div>
    </section>
  );
}