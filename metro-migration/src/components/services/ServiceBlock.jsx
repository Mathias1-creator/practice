import React from "react";

function CheckItem({ text }) {
  return (
    <li className="flex items-start gap-2">
      <span
        className="mt-1 flex-shrink-0 font-body font-medium text-base leading-none"
        style={{ color: "#C0692A" }}
        aria-hidden="true"
      >
        &#10003;
      </span>
      <span
        className="font-body font-normal text-base"
        style={{ color: "#4A5058", lineHeight: 1.6 }}
      >
        {text}
      </span>
    </li>
  );
}

export default function ServiceBlock({
  bgColor,
  imageLeft,
  imageSrc,
  imageAlt,
  title,
  intro,
  items,
}) {
  const contentCol = (
    <div className="flex flex-col justify-center py-10 md:py-0">
      <h2
        className="font-heading leading-none mb-3"
        style={{ color: "#1C1F22", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
      >
        {title}
      </h2>
      <div
        className="mb-5"
        style={{ width: "60px", height: "3px", backgroundColor: "#C0692A" }}
      />
      <p
        className="font-body font-normal text-base md:text-lg mb-6"
        style={{ color: "#4A5058", lineHeight: 1.6 }}
      >
        {intro}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {items.map((item) => (
          <CheckItem key={item} text={item} />
        ))}
      </ul>
    </div>
  );

  const imageCol = (
    <div
      className="overflow-hidden"
      style={{ borderRadius: "2px", minHeight: "340px", maxHeight: "480px" }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
        style={{ minHeight: "340px", maxHeight: "480px" }}
      />
    </div>
  );

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {imageLeft ? (
            <>
              {imageCol}
              {contentCol}
            </>
          ) : (
            <>
              {contentCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}