"use client";

import { CircularGallery } from "@/components/ui/circular-gallery";
import { galleryItems } from "@/lib/data/gallery";

export function RealGallery() {
  return (
    <section id="experiencias" className="overflow-hidden bg-navy py-16 text-paper sm:py-20 lg:py-24" aria-label="Galeria de experiências">
      <div className="mt-0">
        <CircularGallery items={galleryItems} />
      </div>
    </section>
  );
}