import { mkdir } from "node:fs/promises";
import sharp from "sharp";

function scene({
  width,
  height,
  title,
  kind,
}) {
  const grid = `
    <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#0E2744" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#g)"/>
  `;

  const drawings = {
    elevation: `
      <g fill="none" stroke="#0E2744" stroke-width="1.4">
        <rect x="${width * 0.22}" y="${height * 0.22}" width="${width * 0.56}" height="${height * 0.58}"/>
        <line x1="${width * 0.22}" y1="${height * 0.38}" x2="${width * 0.78}" y2="${height * 0.38}"/>
        <line x1="${width * 0.22}" y1="${height * 0.54}" x2="${width * 0.78}" y2="${height * 0.54}"/>
        <line x1="${width * 0.4}" y1="${height * 0.22}" x2="${width * 0.4}" y2="${height * 0.8}"/>
        <line x1="${width * 0.6}" y1="${height * 0.22}" x2="${width * 0.6}" y2="${height * 0.8}"/>
        <rect x="${width * 0.45}" y="${height * 0.62}" width="${width * 0.1}" height="${height * 0.18}" fill="#C4A36A" fill-opacity="0.35" stroke="#C4A36A"/>
      </g>
    `,
    structure: `
      <g fill="none" stroke="#0E2744" stroke-width="1.5">
        ${[0.18, 0.34, 0.5, 0.66, 0.82]
          .map((x) => `<line x1="${width * x}" y1="${height * 0.18}" x2="${width * x}" y2="${height * 0.82}"/>`)
          .join("")}
        ${[0.28, 0.44, 0.6, 0.76]
          .map((y) => `<line x1="${width * 0.16}" y1="${height * y}" x2="${width * 0.84}" y2="${height * y}"/>`)
          .join("")}
        <circle cx="${width * 0.34}" cy="${height * 0.44}" r="5" fill="#C4A36A" stroke="none"/>
        <circle cx="${width * 0.66}" cy="${height * 0.6}" r="5" fill="#C4A36A" stroke="none"/>
      </g>
    `,
    interior: `
      <g fill="none" stroke="#0E2744" stroke-width="1.3">
        <path d="M${width * 0.12} ${height * 0.78} L${width * 0.38} ${height * 0.42} L${width * 0.88} ${height * 0.42} L${width * 0.62} ${height * 0.78} Z"/>
        <path d="M${width * 0.38} ${height * 0.42} L${width * 0.38} ${height * 0.18} L${width * 0.88} ${height * 0.18} L${width * 0.88} ${height * 0.42}"/>
        <line x1="${width * 0.5}" y1="${height * 0.42}" x2="${width * 0.5}" y2="${height * 0.78}"/>
        <rect x="${width * 0.56}" y="${height * 0.52}" width="${width * 0.16}" height="${height * 0.12}" fill="#C4A36A" fill-opacity="0.28" stroke="#C4A36A"/>
      </g>
    `,
    plan: `
      <g fill="none" stroke="#0E2744" stroke-width="1.4">
        <rect x="${width * 0.18}" y="${height * 0.2}" width="${width * 0.64}" height="${height * 0.6}"/>
        <line x1="${width * 0.18}" y1="${height * 0.5}" x2="${width * 0.82}" y2="${height * 0.5}"/>
        <line x1="${width * 0.5}" y1="${height * 0.2}" x2="${width * 0.5}" y2="${height * 0.8}"/>
        <rect x="${width * 0.22}" y="${height * 0.24}" width="${width * 0.24}" height="${height * 0.22}"/>
        <rect x="${width * 0.54}" y="${height * 0.54}" width="${width * 0.24}" height="${height * 0.22}"/>
        <circle cx="${width * 0.5}" cy="${height * 0.5}" r="6" fill="#C4A36A" stroke="none"/>
      </g>
    `,
    site: `
      <g fill="none" stroke="#0E2744" stroke-width="1.3">
        <rect x="${width * 0.14}" y="${height * 0.55}" width="${width * 0.72}" height="${height * 0.22}"/>
        <polygon points="${width * 0.2},${height * 0.55} ${width * 0.32},${height * 0.28} ${width * 0.44},${height * 0.55}"/>
        <polygon points="${width * 0.48},${height * 0.55} ${width * 0.62},${height * 0.22} ${width * 0.76},${height * 0.55}"/>
        <line x1="${width * 0.14}" y1="${height * 0.78}" x2="${width * 0.86}" y2="${height * 0.78}" stroke="#C4A36A"/>
      </g>
    `,
    section: `
      <g fill="none" stroke="#0E2744" stroke-width="1.4">
        <path d="M${width * 0.16} ${height * 0.72} H${width * 0.84} V${height * 0.28} H${width * 0.58} V${height * 0.48} H${width * 0.16} Z"/>
        <line x1="${width * 0.16}" y1="${height * 0.48}" x2="${width * 0.58}" y2="${height * 0.48}"/>
        <rect x="${width * 0.22}" y="${height * 0.52}" width="${width * 0.12}" height="${height * 0.2}" fill="#0E2744" fill-opacity="0.08"/>
        <rect x="${width * 0.64}" y="${height * 0.34}" width="${width * 0.12}" height="${height * 0.14}" fill="#C4A36A" fill-opacity="0.35" stroke="#C4A36A"/>
      </g>
    `,
  };

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="#EFECE4"/>
      ${grid}
      <rect x="24" y="24" width="${width - 48}" height="${height - 48}" fill="none" stroke="#C4A36A" stroke-opacity="0.45"/>
      ${drawings[kind]}
      <text x="40" y="${height - 36}" fill="#0E2744" fill-opacity="0.45" font-family="Georgia, serif" font-size="18" letter-spacing="4">${title}</text>
    </svg>
  `;
}

const files = [
  { name: "hero.jpg", width: 2000, height: 1400, title: "ESTRUTURA", kind: "structure" },
  { name: "about.jpg", width: 1400, height: 1800, title: "ELEVAÇÃO", kind: "elevation" },
  { name: "about-detail.jpg", width: 1000, height: 750, title: "DETALHE", kind: "section" },
  { name: "obras.jpg", width: 1400, height: 900, title: "OBRAS", kind: "site" },
  { name: "reformas.jpg", width: 1400, height: 900, title: "REFORMAS", kind: "interior" },
  { name: "vistorias.jpg", width: 1400, height: 900, title: "VISTORIA", kind: "plan" },
  { name: "cta.jpg", width: 1800, height: 1000, title: "PROJETO", kind: "elevation" },
  { name: "projeto-1.jpg", width: 1600, height: 2000, title: "RESIDENCIAL", kind: "elevation" },
  { name: "projeto-2.jpg", width: 1400, height: 1050, title: "REFORMA", kind: "interior" },
  { name: "projeto-3.jpg", width: 1400, height: 1050, title: "VISTORIA", kind: "plan" },
  { name: "projeto-4.jpg", width: 1800, height: 900, title: "ACOMPANHAMENTO", kind: "site" },
  { name: "projeto-2b.jpg", width: 1400, height: 1050, title: "INTERIOR", kind: "section" },
  { name: "before.jpg", width: 1600, height: 1000, title: "ANTES", kind: "structure" },
  { name: "after.jpg", width: 1600, height: 1000, title: "DEPOIS", kind: "interior" },
];

await mkdir("public/images", { recursive: true });

for (const file of files) {
  const svg = scene(file);
  await sharp(Buffer.from(svg)).jpeg({ quality: 84 }).toFile(`public/images/${file.name}`);
  console.log("wrote", file.name);
}
