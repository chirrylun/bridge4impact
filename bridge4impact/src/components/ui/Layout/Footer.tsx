"use client"

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-ink)",
        color: "rgba(255,255,255,0.55)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 16,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 4,
            }}
          >
            Bridge4Impact
          </div>
          <div style={{ fontSize: 12 }}>by Günter Schmittberger · Mainz, Germany</div>
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {["Services", "Readiness Check", "Packages", "FAQ", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "")}`}
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.9)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")
              }
            >
              {l}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <a
            href="/impressum"
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
            }}
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
            }}
          >
            Datenschutz
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "24px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
        }}
      >
        © {new Date().getFullYear()} Günter Schmittberger · USt-IdNr.: DE167964328 · All prices net.
        VAT added where legally required.
      </div>
    </footer>
  );
}