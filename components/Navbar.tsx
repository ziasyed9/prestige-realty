"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 300ms",
        backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--color-stone-dark)" : "none",
        boxShadow: isScrolled ? "0 1px 8px rgba(15,23,42,0.06)" : "none",
      }}
    >
      <nav className="container-site">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>

          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <div style={{
              width: "2rem", height: "2rem",
              backgroundColor: "var(--color-gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontFamily: "var(--font-display)", color: "white", fontWeight: 700, fontSize: "0.875rem" }}>P</span>
            </div>
            <div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.125rem",
                letterSpacing: "0.05em",
                color: isScrolled ? "var(--color-navy)" : "white",
                transition: "color 300ms",
              }}>
                Prestige
              </span>
              <span style={{
                display: "block",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: isScrolled ? "var(--color-navy-muted)" : "rgba(255,255,255,0.7)",
                transition: "color 300ms",
              }}>
                Properties
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  color: isActive(link.href)
                    ? "var(--color-gold)"
                    : isScrolled ? "var(--color-navy)" : "rgba(255,255,255,0.9)",
                  transition: "color 200ms",
                  borderBottom: isActive(link.href) ? "1px solid var(--color-gold)" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="desktop-nav">
            <Link
              href="/#contact"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "0.625rem 1.25rem",
                border: isScrolled ? "1px solid var(--color-navy)" : "1px solid rgba(255,255,255,0.7)",
                color: isScrolled ? "var(--color-navy)" : "white",
                textDecoration: "none",
                transition: "all 200ms",
              }}
            >
              Book a Viewing
            </Link>
          </div>

          {/* HAMBURGER — mobile only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="mobile-menu-btn"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px",
                  height: "2px",
                  backgroundColor: isScrolled ? "var(--color-navy)" : "white",
                  transition: "all 200ms",
                  transform: isMenuOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 1 ? "scaleX(0)"
                    : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            ))}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div style={{
            backgroundColor: "white",
            borderTop: "1px solid var(--color-stone-dark)",
            padding: "1rem 0.5rem",
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: isActive(link.href) ? "var(--color-gold)" : "var(--color-navy)",
                  borderLeft: isActive(link.href) ? "2px solid var(--color-gold)" : "2px solid transparent",
                  marginBottom: "0.25rem",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ padding: "0.5rem 1rem 0" }}>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary" style={{ width: "100%", fontSize: "0.875rem" }}>
                Book a Viewing
              </Link>
            </div>
          </div>
        )}

      </nav>

      {/* Hide/show desktop vs mobile via CSS */}
      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}