import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Da Mata Engenharia | Obras, Reformas e Vistorias";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F6F4EF",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 80px",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          height={500}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 520,
            marginLeft: 48,
          }}
        >
          <div
            style={{
              width: 48,
              height: 1,
              background: "#C4A36A",
              marginBottom: 24,
            }}
          />
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.25,
              color: "#0E2744",
              fontWeight: 600,
            }}
          >
            Obras, reformas e vistorias com método.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
