import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full py-12 md:py-16"
      style={{
        backgroundColor: "#1C1F22",
        borderTop: "2px solid #C0692A",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Wordmark + tagline */}
          <div>
            <img
              src="/images/a9704d055_metroplumbing-logo-transparent.png"
              alt="Metro Plumbing logo"
              className="mb-3"
              style={{ width: "200px", height: "50px", objectFit: "contain" }}
            />
            <p
              className="font-body font-normal text-sm"
              style={{ color: "#A0A4AA", lineHeight: 1.6 }}
            >
              Commercial plumbing serving Sacramento, Placer, and El Dorado counties
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-heading text-lg text-white mb-3"
            >
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="tel:9168704033"
                className="font-body font-normal text-sm transition-colors duration-200 hover:text-[#C0692A]"
                style={{ color: "#A0A4AA" }}
              >
                (916) 870-4033
              </a>
              <a
                href="mailto:justin@metroplumbingcontractors.com"
                className="font-body font-normal text-sm transition-colors duration-200 hover:text-[#C0692A]"
                style={{ color: "#A0A4AA" }}
              >
                justin@metroplumbingcontractors.com
              </a>
              <span
                className="font-body font-normal text-sm"
                style={{ color: "#A0A4AA" }}
              >
                License No. 1150673
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="font-heading text-lg text-white mb-3"
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="font-body font-normal text-sm transition-colors duration-200 hover:text-[#C0692A]"
                style={{ color: "#A0A4AA" }}
              >
                Home
              </a>
              <a
                href="/services"
                className="font-body font-normal text-sm transition-colors duration-200 hover:text-[#C0692A]"
                style={{ color: "#A0A4AA" }}
              >
                Services
              </a>
              <a
                href="/about"
                className="font-body font-normal text-sm transition-colors duration-200 hover:text-[#C0692A]"
                style={{ color: "#A0A4AA" }}
              >
                About
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center"
          style={{ borderTop: "1px solid #2D3136" }}
        >
          <span
            className="font-body font-normal text-xs"
            style={{ color: "#6B7078" }}
          >
            Metro Plumbing Contractors. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}