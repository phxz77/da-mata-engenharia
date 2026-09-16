"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data/process";
import { cn } from "@/lib/utils";

export function Process() {
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 70%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.4 });

  return (
    <section id="processo" className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="Processo"
            title="Do planejamento à entrega."
            description="Um percurso claro, do primeiro contato até a conclusão do serviço contratado."
          />
        </Reveal>

        <div ref={track} className="relative mt-16">
          <div className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-line lg:left-0 lg:right-0 lg:top-[18px] lg:h-px lg:w-full" />
          <motion.div
            aria-hidden
            className="absolute left-[11px] top-2 hidden origin-left bg-gold lg:left-0 lg:right-0 lg:top-[18px] lg:block lg:h-px lg:w-full"
            style={{ scaleX: reduced ? 1 : progress }}
          />
          <motion.div
            aria-hidden
            className="absolute left-[11px] top-2 w-px origin-top bg-gold lg:hidden"
            style={{ scaleY: reduced ? 1 : progress, height: "calc(100% - 1rem)" }}
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                total={processSteps.length}
                progress={progress}
                reduced={Boolean(reduced)}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function ProcessStep({
  step,
  index,
  total,
  progress,
  reduced,
}: {
  step: (typeof processSteps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const [scrolled, setScrolled] = useState(reduced || index === 0);
  const threshold = index / Math.max(total - 1, 1);

  useMotionValueEvent(progress, "change", (value) => {
    if (reduced) return;
    setScrolled(value >= threshold - 0.04);
  });

  const active = reduced || scrolled;

  return (
    <li className="relative pl-10 lg:pl-0 lg:pt-8">
      <span
        className={cn(
          "absolute left-[7px] top-1.5 h-[9px] w-[9px] rounded-full border bg-white transition-colors duration-500 lg:left-0 lg:top-[14px]",
          active ? "border-gold bg-gold" : "border-line",
        )}
      />
      <p
        className={cn(
          "text-[11px] tracking-[0.28em] transition-colors duration-500",
          active ? "text-gold-dark" : "text-muted",
        )}
      >
        {step.number}
      </p>
      <h3
        className={cn(
          "mt-3 text-lg font-semibold tracking-[-0.02em] text-navy transition-opacity duration-500",
          active ? "opacity-100" : "opacity-45",
        )}
      >
        {step.title}
      </h3>
      <p
        className={cn(
          "mt-3 text-sm leading-relaxed text-muted transition-opacity duration-700",
          active ? "opacity-100" : "opacity-50",
        )}
      >
        {step.description}
      </p>
    </li>
  );
}
