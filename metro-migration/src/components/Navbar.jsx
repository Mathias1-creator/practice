import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: "#1C1F22",
        borderBottom: "2px solid #C0692A",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Wordmark */}
        <a href="/" aria-label="Metro Plumbing home">
          <img
            src="/images/a9704d055_metroplumbing-logo-transparent.png"
            alt="Metro Plumbing logo"
            style={{ width: "240px", height: "60px", objectFit: "contain", mixBlendMode: "screen" }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body font-medium text-white text-sm transition-colors duration-200 hover:text-[#C0692A]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:9168704033"
            className="font-heading text-xl tracking-wide transition-colors duration-200 hover:text-[#A3561F]"
            style={{ color: "#C0692A" }}
          >
            (916) 870-4033
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2" style={{ backgroundColor: "#1C1F22" }}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body font-medium text-white text-base transition-colors duration-200 hover:text-[#C0692A]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9168704033"
              className="font-heading text-xl tracking-wide"
              style={{ color: "#C0692A" }}
            >
              (916) 870-4033
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}