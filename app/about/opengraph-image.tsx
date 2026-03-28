import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "About Ironstone Build Co. — Built on Integrity.";
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
          IRONSTONE BUILD CO. · SINCE 2008
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "#fafafa", fontSize: 130, fontWeight: 900, lineHeight: 0.88, margin: 0, textTransform: "uppercase" }}>
            BUILT ON
          </h1>
          <h1 style={{ color: "#fafafa", fontSize: 130, fontWeight: 900, lineHeight: 0.88, margin: 0, textTransform: "uppercase" }}>
            INTEGRITY.
          </h1>
        </div>
        <p style={{ color: "#71717a", fontSize: 20, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
          200+ PROFESSIONALS · AUSTIN, TEXAS
        </p>
      </div>
    ),
    { ...size }
  );
}
