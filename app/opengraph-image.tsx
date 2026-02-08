import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Kodra Conseil — Facilitation stratégique et formations IA en Abitibi-Témiscamingue";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0B1529",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)",
          }}
        />

        {/* Decorative dots */}
        <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#F97316",
                opacity: 0.6 - i * 0.06,
              }}
            />
          ))}
        </div>

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            KODRA
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#D1D5DB",
            lineHeight: 1.4,
            marginBottom: 40,
            maxWidth: 700,
          }}
        >
          Facilitation stratégique · Formations IA
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 18, color: "#F97316" }}>kodra.ca</div>
            <div style={{ fontSize: 16, color: "#6B7280" }}>
              Abitibi-Témiscamingue, Québec
            </div>
          </div>

          {/* Right side bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Intelligence collective",
              "IA responsable",
              "Résultats concrets",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 16,
                  color: "#D1D5DB",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#F97316",
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
