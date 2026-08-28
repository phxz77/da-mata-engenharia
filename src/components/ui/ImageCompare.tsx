"use client";

import { useCallback, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { CropMarks } from "@/components/ui/CropMarks";
import { cn } from "@/lib/utils";

type ImageCompareProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

export function ImageCompare({
  before,
  after,
  beforeAlt,
  afterAlt,
  className,
}: ImageCompareProps) {
  const [value, setValue] = useState(46);
  const [hint, setHint] = useState(true);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const next = ((clientX - left) / width) * 100;
    setValue(Math.min(94, Math.max(6, next)));
    setHint(false);
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setFromClientX(event.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={frame}
      className={cn(
        "relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-paper",
        className,
      )}
      role="slider"
      tabIndex={0}
      aria-label="Comparar estrutura e entrega"
      aria-valuemin={6}
      aria-valuemax={94}
      aria-valuenow={Math.round(value)}
      aria-valuetext={`${Math.round(value)}% estrutura, ${Math.round(100 - value)}% entrega`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={(event) => {
        const step = event.shiftKey ? 8 : 3;
        if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
          event.preventDefault();
          setValue((current) => Math.max(6, current - step));
          setHint(false);
        }
        if (event.key === "ArrowRight" || event.key === "ArrowUp") {
          event.preventDefault();
          setValue((current) => Math.min(94, current + step));
          setHint(false);
        }
        if (event.key === "Home") {
          event.preventDefault();
          setValue(6);
          setHint(false);
        }
        if (event.key === "End") {
          event.preventDefault();
          setValue(94);
          setHint(false);
        }
      }}
    >
      <Image
        src={after}
        alt={afterAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 1100px"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 1100px"
          draggable={false}
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-y-0 z-10"
        style={{ left: `${value}%` }}
      >
        <span className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 border border-gold bg-navy" />
        <span className="absolute inset-y-2.5 left-1/2 w-px -translate-x-1/2 bg-gold" />
        <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 border border-gold bg-navy" />
        {[18, 34, 66, 82].map((top) => (
          <span
            key={top}
            className="absolute left-1/2 h-px w-2 -translate-x-1/2 bg-gold/80"
            style={{ top: `${top}%` }}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-navy/15 bg-gold text-navy shadow-[0_10px_24px_-14px_rgba(14,39,68,0.7)]">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <path d="M8 6 3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      </div>

      <CropMarks className="z-10 inset-3" />

      <span className="pointer-events-none absolute left-4 top-4 z-10 bg-navy px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-paper">
        Antes
      </span>
      <span className="pointer-events-none absolute right-4 top-4 z-10 bg-gold px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-navy-deep">
        Depois
      </span>

      <span
        className={cn(
          "pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 bg-navy/88 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-paper transition-opacity duration-500",
          hint ? "opacity-100" : "opacity-0",
        )}
      >
        Arraste para comparar
      </span>
    </div>
  );
}
