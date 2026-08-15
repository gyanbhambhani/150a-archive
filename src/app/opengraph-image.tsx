import { ImageResponse } from "next/og";
import { HERO } from "@/content/copy";
import { SITE_TITLE } from "@/lib/site";

export const alt = HERO;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#EAEEE8",
          color: "#16213D",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.04em",
            fontFamily: "Georgia, serif",
          }}
        >
          {SITE_TITLE}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 56,
            lineHeight: 1.15,
            fontFamily: "Georgia, serif",
            maxWidth: 980,
          }}
        >
          {HERO}
        </div>
      </div>
    ),
    { ...size },
  );
}
