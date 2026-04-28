"use client"
import { Calendar, Mail, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Calendar,
    label: "Book an intro call",
    value: "calendly.com/g-schmittberger",
    href: "https://calendly.com/g-schmittberger",
  },
  {
    icon: Mail,
    label: "Contact by email",
    value: "guenter@bridge4impact.com",
    href: "mailto:guenter@bridge4impact.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+49 175 298 5215",
    href: "tel:+491752985215",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "96px 24px",
        background: "var(--color-surface-2)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div
            style={{
              background: "var(--color-brand-muted)",
              border: "1px solid var(--color-brand-subtle)",
              borderRadius: 20,
              padding: "48px 44px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-brand)",
                marginBottom: 14,
              }}
            >
              Get in touch
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 800,
                color: "var(--color-brand-dark)",
                marginBottom: 18,
                lineHeight: 1.15,
              }}
            >
              Ready to explore whether we are a fit?
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--color-ink-3)",
                marginBottom: 24,
              }}
            >
              Complete the two readiness checks first and send both reports to
              guenter@bridge4impact.com. After that, we can discuss your current
              fundraising status, your materials, and the type of investors you
              actually want to reach.
            </p>
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: 10,
                padding: "16px 18px",
                fontSize: 14,
                lineHeight: 1.65,
                color: "var(--color-ink-3)",
                fontStyle: "italic",
              }}
            >
              "Early conversations are usually the most valuable ones — before
              time, effort, and reputation have been spent on the wrong approach."
            </div>
          </div>

          {/* Right: contact methods */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {contactMethods.map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: "#fff",
                    border: "1px solid var(--color-border)",
                    borderRadius: 14,
                    padding: "20px 24px",
                    textDecoration: "none",
                    transition: "border-color 0.15s, transform 0.15s, box-shadow 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--color-brand)";
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 8px 24px rgba(13,122,107,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--color-border)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--color-brand-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="var(--color-brand)" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--color-ink-4)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: 3,
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--color-brand)",
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}