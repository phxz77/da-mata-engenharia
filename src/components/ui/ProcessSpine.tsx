"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const nodes = ["SERVIÇO", "PROJETO", "EXECUÇÃO"] as const;
const ease = [0.22, 1, 0.36, 1] as const;

export function ProcessSpine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const show = reduced || inView;

  return (
    <div ref={ref} className={cn("max-w-xl", className)} aria-hidden>
      <div className="flex flex-col sm:hidden">
        {nodes.map((label, index) => (
          <div key={label} className="flex flex-col items-start">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark">
              {label}
            </span>
            {index < nodes.length - 1 ? (
              <motion.span
                className="ml-[22px] my-1 h-8 w-px origin-top bg-gold/70"
                initial={{ scaleY: reduced ? 1 : 0 }}
                animate={{ scaleY: show ? 1 : 0 }}
                transition={{ duration: 0.45, delay: 0.12 * index, ease }}
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="hidden items-center sm:flex">
        {nodes.map((label, index) => (
          <div key={label} className="flex min-w-0 flex-1 items-center last:flex-none">
            <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark">
              {label}
            </span>
            {index < nodes.length - 1 ? (
              <motion.span
                className="mx-3 h-px flex-1 origin-left bg-gold/70"
                initial={{ scaleX: reduced ? 1 : 0 }}
                animate={{ scaleX: show ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.18 * index, ease }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
