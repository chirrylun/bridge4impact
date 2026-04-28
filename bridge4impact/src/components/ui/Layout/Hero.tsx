import { ArrowRight, CheckCircle2 } from "lucide-react";

const differentiators = [
  "Better investor fit instead of broad generic mass outreach.",
  "Early readiness checks before expensive fundraising mistakes.",
  "Cross-border perspective and partner access where useful.",
  "Selective, practical collaboration from preparation to active support.",
];

const stats = [
  { value: "80%+", label: "Strong basis for first serious fundraising discussion" },
  { value: "65–79%", label: "Good basis for targeted readiness improvement" },
  { value: "Hands-on", label: "Practical support for startups, funds, and ecosystem partners" },
];

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)",
        color: "#fff",
        padding: "80px 24px 72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background circles */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 20,
            padding: "5px 14px",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#7de8d8",
              display: "inline-block",
            }}
          />
          Investment readiness first. Outreach second.
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="hero-grid"
        >
          {/* Left: Headline + CTA */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: 24,
                color: "#fff",
              }}
            >
              Bridging strong impact ventures with the{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#7de8d8",
                }}
              >
                right capital.
              </em>
            </h1>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.82)",
                marginBottom: 16,
                maxWidth: 480,
              }}
            >
              Bridge4Impact helps impact startups and venture funds become more
              investment ready, reach better-fit investors, and run smarter
              fundraising processes.
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 36,
                maxWidth: 460,
              }}
            >
              Investors are highly selective. My work often starts before
              fundraising itself — sharpening the story, revealing weaknesses
              early, and focusing effort where conversion is highest.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="#readiness"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  color: "var(--color-brand-dark)",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
              >
                Start the pre-check
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                Book an intro call
              </a>
            </div>
          </div>

          {/* Right: Differentiators card */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* What makes the difference card */}
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 16,
                padding: "24px 28px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 12,
                }}
              >
                What makes the difference
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 20,
                  lineHeight: 1.3,
                }}
              >
                Fundraising with more focus and less wasted effort
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {differentiators.map((d, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: 10,
                      padding: "12px 14px",
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.85)",
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{
                        color: "#7de8d8",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    padding: "16px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 800,
                      marginBottom: 6,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}