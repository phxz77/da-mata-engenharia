"use client";

import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { site } from "@/lib/site";

export function InstagramButton() {
  const href = site.instagram || "/#contato";

  return (
    <>
      <a
        href={href}
        className="fixed bottom-20 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_12px_30px_-12px_rgba(238,42,123,0.55)] transition-transform duration-300 hover:-translate-y-0.5 lg:flex"
        aria-label="Ver Instagram"
        target={site.instagram ? "_blank" : undefined}
        rel={site.instagram ? "noopener noreferrer" : undefined}
      >
        <InstagramIcon className="h-6 w-6" />
      </a>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <a
          href={href}
          className="pointer-events-auto flex h-12 items-center justify-center gap-2 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-[12px] font-medium uppercase tracking-[0.16em] text-white shadow-[0_-8px_24px_-16px_rgba(238,42,123,0.45)]"
          target={site.instagram ? "_blank" : undefined}
          rel={site.instagram ? "noopener noreferrer" : undefined}
        >
          <InstagramIcon className="h-4 w-4" />
          Ver Instagram
        </a>
      </div>
    </>
  );
}
