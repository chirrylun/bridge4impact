"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Readiness Check", href: "#readiness" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.95)" : "#ffffff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: "var(--color-brand)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12h16M12 4l8 8-8 8"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  lineHeight: 1.1,
                }}
              >
                Bridge4Impact
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "var(--color-ink-3)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                by Günter Schmittberger
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 13.5,
                fontWeight: 500,
                color: "var(--color-ink-3)",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: 6,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-brand)";
                (e.target as HTMLElement).style.background =
                  "var(--color-brand-muted)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-ink-3)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              marginLeft: 8,
              fontSize: 13.5,
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              background: "var(--color-brand)",
              padding: "8px 18px",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background =
                "var(--color-brand-dark)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background =
                "var(--color-brand)";
            }}
          >
            Book intro call
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-ink)",
            display: "none",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            background: "#fff",
            padding: "12px 24px 20px",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--color-ink-2)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: 12,
              textAlign: "center",
              background: "var(--color-brand)",
              color: "#fff",
              padding: "12px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book intro call
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}