"use client";

import Image from "next/image";
import { HTMLAttributes, forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  position?: string;
};

type CircularGalleryProps = HTMLAttributes<HTMLDivElement> & {
  items: GalleryItem[];
};

export const CircularGallery = forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, ...props }, ref) => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setSelectedItem(null);
        }
      };

      if (selectedItem) {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [selectedItem]);

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Arquivo visual da Da Mata Engenharia"
        className={cn("relative w-full", className)}
        {...props}
      >
        <div className="gallery-mobile-track flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="gallery-mobile-card group relative h-[390px] w-[min(78vw,290px)] shrink-0 snap-center overflow-hidden bg-navy text-left"
              aria-label={`Abrir imagem: ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: item.position }}
                sizes="290px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-paper">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold-soft">{item.title}</p>
                <p className="mt-2 text-sm text-paper/75">{item.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="gallery-desktop-stage mx-auto hidden w-full max-w-[1320px] overflow-x-auto px-10 pb-5">
          <div className="flex min-w-max gap-6">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group relative h-[420px] w-[290px] shrink-0 overflow-hidden border border-white/15 bg-navy text-left shadow-2xl"
                aria-label={`Abrir imagem: ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.position }}
                  sizes="290px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-paper">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gold-soft">{item.title}</p>
                  <p className="mt-2 text-sm text-paper/75">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050b13]/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <div className="relative flex h-[86vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#090f17] shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xl text-paper transition hover:bg-black/60"
                aria-label="Fechar imagem em tela cheia"
              >
                ×
              </button>

              <div className="relative h-full w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                  style={{ objectPosition: selectedItem.position ?? "center" }}
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050b13] via-[#050b13]/70 to-transparent px-5 pb-5 pt-14 text-paper sm:px-8">
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">{selectedItem.title}</p>
                <p className="mt-2 max-w-3xl text-sm text-paper/80 sm:text-base">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
);

CircularGallery.displayName = "CircularGallery";
