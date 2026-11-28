import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Favicon: Luna's face, cropped from public/avatars/luna.png (1024x1024).
// Crop region in the source: (225, 10) size 580 -> scaled to 512.
export default async function Icon() {
  const data = await fs.readFile(
    path.join(process.cwd(), "public/avatars/luna.png"),
  );
  const src = `data:image/png;base64,${data.toString("base64")}`;
  const scale = 512 / 580;
  const imgSize = Math.round(1024 * scale);
  const left = Math.round(-225 * scale);
  const top = Math.round(-10 * scale);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        <img
          src={src}
          width={imgSize}
          height={imgSize}
          style={{ position: "absolute", left, top }}
        />
      </div>
    ),
    { ...size },
  );
}
