import { Link } from "react-router-dom";
import Wordmark from "./Wordmark";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const counties = [
  "Contra Costa",
  "Alameda",
  "Santa Clara",
  "Napa",
  "Solano",
  "Sacramento",
  "San Joaquin",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#13233B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Wordmark & tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Wordmark variant="dark" />
            <p
              className="font-body text-sm mt-4 leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Family-owned plumbing for new construction, remodels, and repipes across Northern California.
            </p>
          </div>

          {/* Column 2 - Explore */}
          <div>
            <h4
              className="font-body font-semibold text-sm tracking-wider mb-4"
              style={{ color: "#B26B3E" }}
            >
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4
              className="font-body font-semibold text-sm tracking-wider mb-4"
              style={{ color: "#B26B3E" }}
            >
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:+19252070069"
                  className="font-body text-sm transition-colors duration-200 hover:opacity-80"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  (925) 207-0069
                </a>
              </li>
              <li>
                <a
                  href="mailto:mauricio@deltapacificplumbing.com"
                  className="font-body text-sm transition-colors duration-200 hover:opacity-80 break-all"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  mauricio@deltapacificplumbing.com
                </a>
              </li>
              <li>
                <span
                  className="font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Mon–Sat, 8:00 AM – 4:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Service Area */}
          <div>
            <h4
              className="font-body font-semibold text-sm tracking-wider mb-4"
              style={{ color: "#B26B3E" }}
            >
              Service Area
            </h4>
            <ul className="space-y-2.5">
              {counties.map((county) => (
                <li key={county}>
                  <span
                    className="font-body text-sm"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {county}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="font-body text-xs"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            &copy; 2026 Delta Pacific Plumbing, Inc. &middot; CSLB # 1155219 &middot; Licensed, Bonded and Insured.
          </p>
        </div>
      </div>
    </footer>
  );
}