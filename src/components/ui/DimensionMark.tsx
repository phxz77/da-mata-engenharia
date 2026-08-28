"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type DimensionMarkProps = {
  label: string;
  className?: string;
};

export function DimensionMark({ label, className }: DimensionMarkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const active = reduced || inView;

  return (
    <div ref={ref} className={cn("flex items-center gap-3", className)} aria-hidden>
      <span className="h-2 w-px bg-gold" />
      <motion.span
        className="h-px flex-1 origin-left bg-gold/70"
        initial={{ scaleX: reduced ? 1 : 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark"
        initial={{ opacity: reduced ? 1 : 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        {label}
      </motion.span>
      <motion.span
        className="h-px flex-1 origin-right bg-gold/70"
        initial={{ scaleX: reduced ? 1 : 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="h-2 w-px bg-gold" />
    </div>
  );
}
