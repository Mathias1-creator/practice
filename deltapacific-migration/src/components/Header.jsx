import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(247, 244, 239, 0.97)" : "#F7F4EF",
          boxShadow: scrolled ? "0 4px 24px -8px rgba(19, 35, 59, 0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Wordmark */}
            <Link to="/" className="flex-shrink-0">
              <Wordmark />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body font-medium text-sm transition-colors duration-200 hover:opacity-70"
                  style={{
                    color: location.pathname === link.path ? "#B26B3E" : "#13233B",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+19252070069"
                className="flex items-center gap-2 font-body font-medium text-sm transition-colors duration-200 hover:opacity-70"
                style={{ color: "#13233B" }}
              >
                <Phone className="w-4 h-4" style={{ color: "#B26B3E" }} />
                (925) 207-0069
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-md font-body font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#B26B3E",
                  boxShadow: "0 2px 8px rgba(178, 107, 62, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#9A5A30";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(178, 107, 62, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#B26B3E";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(178, 107, 62, 0.2)";
                }}
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-md transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: "#13233B" }}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#13233B" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-body font-medium text-xl text-white transition-colors duration-200 hover:opacity-70"
              style={{
                color: location.pathname === link.path ? "#B26B3E" : "#FFFFFF",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col items-center gap-4">
            <a
              href="tel:+19252070069"
              className="flex items-center gap-2 font-body font-medium text-base text-white"
            >
              <Phone className="w-4 h-4" style={{ color: "#B26B3E" }} />
              (925) 207-0069
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md font-body font-semibold text-sm text-white"
              style={{ backgroundColor: "#B26B3E" }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20 md:h-24" />
    </>
  );
}