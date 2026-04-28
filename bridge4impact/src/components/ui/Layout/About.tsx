"use client"
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Investment-readiness-first approach",
  "AI-enhanced research and workflow",
  "Qualified investor targeting instead of broad mass outreach",
  "Cross-border perspective and partner access",
  "Focus on impact, venture, climate, and mission-driven capital",
  "Independent, practical, and selective collaboration style",
];

const memberships = [
  { name: "Bundesinitiative Impact Investing", role: "Mitgliedschaft" },
  { name: "Top Tier Impact", role: "Ambassador for the Frankfurt Area" },
  { name: "Catalyst Now", role: "Mitglied" },
];

const partnerships = [
  { name: "capitalism & the social good group", contact: "Diane Kaldany" },
  { name: "Transnational Business Solutions", contact: "Sumantra Sen" },
  { name: "Umergence", contact: "Will Hogan" },
  { name: "Bonomics", contact: "René Bonomi" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "96px 24px",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Intro block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            marginBottom: 64,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div>
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
              About
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 800,
                color: "var(--color-ink)",
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Independent fundraising support with an ecosystem mindset
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-ink-3)", marginBottom: 14 }}>
              Bridge4Impact by Günter Schmittberger is built around a simple
              idea: better fundraising happens when preparation, investor fit,
              and execution work together.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-ink-3)", marginBottom: 14 }}>
              Instead of pushing every company into outreach too early, the
              goal is to strengthen quality first — then focus on the investors
              most likely to care.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-ink-3)" }}>
              The advisory style is independent, practical, and collaborative,
              with a focus on impact-oriented startups, venture funds, and
              mission-driven capital.
            </p>
          </div>

          <div
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: 16,
              padding: "28px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-ink-4)",
                marginBottom: 16,
              }}
            >
              What this means in practice
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--color-ink)",
                marginBottom: 20,
                lineHeight: 1.3,
              }}
            >
              Focused quality, better investor fit, and selective collaboration
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {principles.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    fontSize: 13,
                    color: "var(--color-ink-2)",
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2
                    size={15}
                    color="var(--color-brand)"
                    style={{ flexShrink: 0, marginTop: 1 }}
                  />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Memberships + Partnerships */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
          className="about-grid"
        >
          {/* Memberships */}
          <div
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: 16,
              padding: "28px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-brand)",
                marginBottom: 10,
              }}
            >
              Memberships
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 700,
                color: "var(--color-ink)",
                marginBottom: 10,
              }}
            >
              Memberships and ambassador roles
            </h3>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.65,
                color: "var(--color-ink-3)",
                marginBottom: 20,
              }}
            >
              These roles underline long-term ecosystem engagement and help
              explain where Bridge4Impact is active within the impact investing
              and venture landscape.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {memberships.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                    fontSize: 14,
                    color: "var(--color-ink-2)",
                  }}
                >
                  <CheckCircle2
                    size={15}
                    color="var(--color-brand)"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <span>
                    <strong>{m.name}</strong> — {m.role}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                marginTop: 20,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--color-brand)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-brand-subtle)",
                paddingBottom: 2,
              }}
            >
              View memberships
            </a>
          </div>

          {/* Partnerships */}
          <div
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: 16,
              padding: "28px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-brand)",
                marginBottom: 10,
              }}
            >
              Selected Partnerships
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 700,
                color: "var(--color-ink)",
                marginBottom: 10,
              }}
            >
              Selected partnerships and collaboration network
            </h3>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.65,
                color: "var(--color-ink-3)",
                marginBottom: 20,
              }}
            >
              These selected partnerships extend sector perspective,
              cross-border reach, and execution support across different
              fundraising situations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {partnerships.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                    fontSize: 14,
                    color: "var(--color-ink-2)",
                  }}
                >
                  <CheckCircle2
                    size={15}
                    color="var(--color-brand)"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <span>
                    <strong>{p.name}</strong> — {p.contact}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                marginTop: 20,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--color-brand)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-brand-subtle)",
                paddingBottom: 2,
              }}
            >
              View selected partnerships
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}