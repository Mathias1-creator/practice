import React from "react";

const PARAGRAPHS = [
  "Metro Plumbing is the Sacramento area\u2019s premiere commercial plumbing specialist, providing the highest quality and most dependable service available. For over 25 years we have worked successfully with builders, designers, and general contractors across Sacramento, Placer, and El Dorado counties.",
  "We are a family-run and operated business totally dedicated to your satisfaction. We pride ourselves on superior work, specializing in commercial plumbing systems, and we work as a team to get the job done right, in a timely manner.",
  "Every job starts with an up-front price and no hidden costs, and ends with work we guarantee you will be satisfied with, no matter how simple or difficult the job.",
];

export default function AboutStory() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div
            className="overflow-hidden"
            style={{ borderRadius: "2px", minHeight: "360px", maxHeight: "500px" }}
          >
            <img
              src="/images/93fd21412_generated_image.png"
              alt="Professional plumbing team collaborating on a commercial job site with copper and steel pipes visible in a large building interior"
              className="w-full h-full object-cover"
              style={{ minHeight: "360px", maxHeight: "500px" }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2
              className="font-heading leading-none mb-4"
              style={{ color: "#1C1F22", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              {"Sacramento\u2019s Commercial Plumbing Specialists"}
            </h2>
            <div
              className="mb-6"
              style={{ width: "60px", height: "3px", backgroundColor: "#C0692A" }}
            />
            <div className="flex flex-col gap-5">
              {PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="font-body font-normal text-base md:text-lg"
                  style={{ color: "#4A5058", lineHeight: 1.6 }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}