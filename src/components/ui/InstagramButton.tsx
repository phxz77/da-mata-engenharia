"use client";

import Image from "next/image";
import { site } from "@/lib/site";

export function InstagramButton() {
  const href = site.instagram || "/#contato";

  return (
    <>
      <a
        href={href}
        className="fixed bottom-20 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded border border-gold/40 bg-white text-navy shadow-[0_12px_30px_-16px_rgba(14,39,68,0.08)] transition-transform duration-300 hover:-translate-y-0.5 lg:flex"
        aria-label="Ver Instagram"
        target={site.instagram ? "_blank" : undefined}
        rel={site.instagram ? "noopener noreferrer" : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8.5zm3.5-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#c4a36a" />
        </svg>
      </a>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <a
          href={href}
          className="pointer-events-auto flex h-12 items-center justify-center gap-2 bg-white text-[12px] font-medium uppercase tracking-[0.16em] text-navy shadow-[0_-8px_24px_-16px_rgba(14,39,68,0.06)]"
          target={site.instagram ? "_blank" : undefined}
          rel={site.instagram ? "noopener noreferrer" : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-gold">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8.5zm3.5-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#c4a36a" />
          </svg>
          Ver Instagram
        </a>
      </div>
    </>
  );
}
