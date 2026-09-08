"use client";

import Image from "next/image";
import { HTMLAttributes, forwardRef } from "react";
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
            <article key={item.id} className="gallery-mobile-card relative h-[390px] w-[min(78vw,290px)] shrink-0 snap-center overflow-hidden bg-navy">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                style={{ objectPosition: item.position }}
                sizes="290px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-paper">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold-soft">{item.title}</p>
                <p className="mt-2 text-sm text-paper/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-desktop-stage mx-auto hidden w-full max-w-[1320px] overflow-x-auto px-10 pb-5">
          <div className="flex min-w-max gap-6">
            {items.map((item) => (
                <article
                  key={item.id}
                  className="relative h-[420px] w-[290px] shrink-0 overflow-hidden border border-white/15 bg-navy shadow-2xl"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: item.position }}
                    sizes="290px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 text-paper">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold-soft">{item.title}</p>
                    <p className="mt-2 text-sm text-paper/75">{item.description}</p>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

CircularGallery.displayName = "CircularGallery";
