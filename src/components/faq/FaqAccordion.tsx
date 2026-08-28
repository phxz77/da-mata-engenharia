"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqItems } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqItems.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-6 py-5 text-left sm:py-6"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="text-[15px] font-medium leading-snug text-navy sm:text-base">
                  {item.question}
                </span>
                <Plus
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                  strokeWidth={1.5}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-sm leading-relaxed text-muted sm:pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
