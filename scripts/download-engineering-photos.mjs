import { mkdir, writeFile, stat } from "node:fs/promises";

const files = [
  {
    name: "hero.jpg",
    urls: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=82",
      "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=2000",
    ],
  },
  {
    name: "about.jpg",
    urls: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82",
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1400",
    ],
  },
  {
    name: "about-detail.jpg",
    urls: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=82",
      "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    name: "obras.jpg",
    urls: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    name: "reformas.jpg",
    urls: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    name: "vistorias.jpg",
    urls: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/8961061/pexels-photo-8961061.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    name: "cta.jpg",
    urls: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=82",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1800",
    ],
  },
  {
    name: "projeto-1.jpg",
    urls: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    name: "projeto-2.jpg",
    urls: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    name: "projeto-2b.jpg",
    urls: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    name: "projeto-3.jpg",
    urls: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    name: "projeto-4.jpg",
    urls: [
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1800&q=82",
      "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1800",
    ],
  },
  {
    name: "before.jpg",
    urls: [
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    name: "after.jpg",
    urls: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=82",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

const headers = {
  "User-Agent": "DaMataEngenhariaSite/1.0 (institutional website image fetch)",
  Accept: "image/jpeg,image/jpg,image/webp,image/*",
};

async function download(url) {
  const response = await fetch(url, { headers, redirect: "follow" });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const type = response.headers.get("content-type") || "";
  if (!type.includes("image") && !type.includes("octet-stream")) {
    throw new Error(`not an image: ${type} ${url}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 20_000) throw new Error(`too small (${buffer.length}) ${url}`);
  return buffer;
}

await mkdir("public/images", { recursive: true });

for (const file of files) {
  let lastError;
  let saved = false;
  for (const url of file.urls) {
    try {
      const buffer = await download(url);
      await writeFile(`public/images/${file.name}`, buffer);
      const info = await stat(`public/images/${file.name}`);
      console.log(`ok ${file.name} ${(info.size / 1024).toFixed(0)}kb`);
      saved = true;
      break;
    } catch (error) {
      lastError = error;
      console.warn(`fail ${file.name} via ${url}: ${error.message}`);
    }
  }
  if (!saved) {
    throw lastError ?? new Error(`could not download ${file.name}`);
  }
}
