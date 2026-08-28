import sharp from "sharp";
import { mkdir, readdir, writeFile } from "node:fs/promises";

const source = "public/images";
const dest = "public/photos";
await mkdir(dest, { recursive: true });

for (const name of await readdir(source)) {
  if (!name.endsWith(".jpg")) continue;
  const buffer = await sharp(`${source}/${name}`).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  await writeFile(`${dest}/${name}`, buffer);
  console.log("jpeg", name, buffer.length);
}
