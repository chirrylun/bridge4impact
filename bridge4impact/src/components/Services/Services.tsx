"use client"
import { Search, Target, Handshake, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Investment Readiness Review",
    desc: "AI-supported review of deck, positioning, data room, and fundraising story before serious investor outreach begins.",
  },
  {
    icon: Target,
    title: "Investor Targeting & Shortlists",
    desc: "Curated investor research by sector, geography, stage, ticket size, and strategic fit.",
  },
  {
    icon: Handshake,
    title: "Fundraising Support",
    desc: "Hands-on support for outreach, follow-up, messaging, and investor communication.",
  },
  {
    icon: TrendingUp,
    title: "LP Raising for Venture Funds",
    desc: "Positioning and targeted outreach support for specialist and impact-oriented venture funds.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "96px 24px",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-brand)",
              marginBottom: 12,
            }}
          >
            Services
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "var(--color-ink)",
              marginBottom: 14,
            }}
          >
            What Bridge4Impact can do for you
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--color-ink-3)",
              lineHeight: 1.65,
              maxWidth: 520,
            }}
          >
            A practical mix of fundraising preparation, investor targeting, and
            hands-on support — adapted to what is actually needed at your stage.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
          }}
          className="services-grid"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 40px rgba(13,122,107,0.1)";
                  el.style.borderColor = "var(--color-brand-subtle)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "var(--color-border)";
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
                    marginBottom: 18,
                  }}
                >
                  <Icon size={20} color="var(--color-brand)" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    marginBottom: 10,
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "var(--color-ink-3)",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}