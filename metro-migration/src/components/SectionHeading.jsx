import React from "react";

export default function SectionHeading({ text, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2
        className="font-heading leading-none mb-4"
        style={{
          color: light ? "#FFFFFF" : "#1C1F22",
          fontSize: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        {text}
      </h2>
      <div
        className="mx-auto"
        style={{
          width: "60px",
          height: "3px",
          backgroundColor: "#C0692A",
        }}
      />
    </div>
  );
}