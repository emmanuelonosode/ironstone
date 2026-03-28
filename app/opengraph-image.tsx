import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ironstone Build Co. — We Build Things.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top — eyebrow */}
        <p
          style={{
            color: "#52525b",
            fontSize: 16,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          EST. 2008 · AUSTIN, TEXAS
        </p>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <h1
            style={{
              color: "#fafafa",
              fontSize: 140,
              fontWeight: 900,
              lineHeight: 0.88,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            IRONSTONE
          </h1>
          <h2
            style={{
              color: "#fafafa",
              fontSize: 140,
              fontWeight: 900,
              lineHeight: 0.88,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            BUILD CO.
          </h2>
        </div>

        {/* Bottom — tagline + url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              color: "#71717a",
              fontSize: 20,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            BUILDING TOMORROW, TODAY.
          </p>
          <p
            style={{
              color: "#3f3f46",
              fontSize: 16,
              letterSpacing: "0.1em",
              margin: 0,
            }}
          >
            ironstone.bookone.dev
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
