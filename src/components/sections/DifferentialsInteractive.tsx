"use client";

import { useCallback, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { differentials } from "@/lib/data/differentials";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function DifferentialsInteractive() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion();
  const item = differentials[active];

  const select = useCallback((index: number, focusTab = false) => {
    setActive(index);
    if (focusTab) {
      tabRefs.current[index]?.focus();
    }
  }, []);

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select((index + 1) % differentials.length, true);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select((index - 1 + differentials.length) % differentials.length, true);
    }
    if (event.key === "Home") {
      event.preventDefault();
      select(0, true);
    }
    if (event.key === "End") {
      event.preventDefault();
      select(differentials.length - 1, true);
    }
  }

  return (
    <div className="border-t border-white/15 pt-6 sm:pt-7">
      <div
        role="tablist"
        aria-label="Navegação entre critérios de trabalho"
        className="flex flex-wrap gap-2 sm:gap-2.5"
      >
        {differentials.map((entry, index) => {
          const isActive = active === index;

          return (
            <button
              key={entry.number}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`criterion-tab-${index}`}
              aria-selected={isActive}
              aria-controls={`criterion-panel-${index}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(index, true)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={cn(
                "inline-flex h-10 min-w-[2.75rem] items-center justify-center border px-3 text-[11px] tracking-[0.24em] transition-all duration-300 sm:h-11 sm:min-w-[3rem] sm:px-4",
                isActive
                  ? "border-gold/70 bg-gold/10 text-gold-soft"
                  : "border-white/15 text-paper/45 hover:border-gold/35 hover:text-gold-soft",
              )}
            >
              {entry.number}
            </button>
          );
        })}
      </div>

      <div className="relative mt-5 min-h-[9.5rem] sm:min-h-[8.5rem] lg:min-h-[7.75rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={item.number}
            role="tabpanel"
            id={`criterion-panel-${active}`}
            aria-labelledby={`criterion-tab-${active}`}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: reduced ? 0 : 0.35, ease }}
            className="grid gap-3 sm:grid-cols-[4.5rem_1fr] sm:items-start sm:gap-5 lg:grid-cols-[5rem_1fr] lg:gap-6"
          >
            <p className="text-3xl font-light tracking-[-0.06em] text-gold-soft sm:text-4xl">
              {item.number}
            </p>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-paper sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60 sm:mt-2.5">
                {item.description}
              </p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center gap-2" aria-hidden>
        {differentials.map((entry, index) => (
          <span
            key={entry.number}
            className={cn(
              "h-px flex-1 transition-colors duration-300",
              active === index ? "bg-gold/70" : "bg-white/10",
            )}
          />
        ))}
      </div>
    </div>
  );
}
