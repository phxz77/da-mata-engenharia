"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function TechnicalGrid({ className }: { className?: string }) {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const el = layer.current;
    if (!el) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onScroll = () => {
      const y = window.scrollY * 0.03;
      el.style.setProperty("--grid-shift", `${y}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        ref={layer}
        className="technical-grid absolute -inset-8 opacity-70 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ backgroundPosition: "0 var(--grid-shift, 0px)" }}
      />
    </div>
  );
}
