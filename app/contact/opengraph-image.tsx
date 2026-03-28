import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Contact Ironstone Build Co. — Start Your Project.";
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
        <p style={{ color: "#52525b", fontSize: 16, letterSpacing: "0.25em", textTransform: "uppercase", margin: 0 }}>
          IRONSTONE BUILD CO. · CONTACT
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "#fafafa", fontSize: 130, fontWeight: 900, lineHeight: 0.88, margin: 0, textTransform: "uppercase" }}>
            LET&apos;S
          </h1>
          <h1 style={{ color: "#fafafa", fontSize: 130, fontWeight: 900, lineHeight: 0.88, margin: 0, textTransform: "uppercase" }}>
            TALK.
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "#71717a", fontSize: 20, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
            FREE SITE CONSULTATION · FIXED-PRICE QUOTES
          </p>
          <p style={{ color: "#52525b", fontSize: 20, margin: 0 }}>+1 (512) 400-7800</p>
        </div>
      </div>
    ),
    { ...size }
  );
}
