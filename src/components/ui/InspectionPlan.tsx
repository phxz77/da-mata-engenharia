"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const points = [
  { cx: 96, cy: 84, label: "P01" },
  { cx: 208, cy: 84, label: "P02" },
  { cx: 96, cy: 156, label: "P03" },
  { cx: 208, cy: 156, label: "P04" },
  { cx: 160, cy: 120, label: "P05" },
] as const;

export function InspectionPlan() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const show = reduced || inView;

  return (
    <div ref={ref} className="relative mx-auto aspect-[4/3] w-full max-w-md" aria-hidden>
      <svg viewBox="0 0 320 240" className="h-full w-full">
        <motion.rect
          x="24"
          y="24"
          width="272"
          height="192"
          fill="none"
          stroke="rgba(212,184,138,0.35)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M48 40 H272 M48 40 v4 M272 40 v4"
          fill="none"
          stroke="rgba(196,163,106,0.55)"
          strokeWidth="1"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={{ pathLength: show ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        />
        <motion.path
          d="M48 48 H272 V192 H48 Z M160 48 V192 M48 120 H272"
          fill="none"
          stroke="rgba(246,244,239,0.28)"
          strokeWidth="1"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={{ pathLength: show ? 1 : 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
        />
        <motion.rect
          x="48"
          y="48"
          width="112"
          height="72"
          fill="rgba(196,163,106,0.08)"
          stroke="rgba(196,163,106,0.4)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.45, delay: 0.45 }}
        />
        {points.map((point, index) => (
          <g key={point.label}>
            <motion.circle
              cx={point.cx}
              cy={point.cy}
              r="7"
              fill="none"
              stroke="rgba(196,163,106,0.45)"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6 }}
              transition={{ duration: 0.35, delay: 0.6 + index * 0.08 }}
            />
            <motion.circle
              cx={point.cx}
              cy={point.cy}
              r="2.4"
              fill="#C4A36A"
              initial={{ opacity: 0 }}
              animate={{ opacity: show ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.68 + index * 0.08 }}
            />
            <motion.text
              x={point.cx + 10}
              y={point.cy - 8}
              fill="rgba(212,184,138,0.85)"
              fontSize="7"
              letterSpacing="1.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: show ? 1 : 0 }}
              transition={{ delay: 0.78 + index * 0.08 }}
            >
              {point.label}
            </motion.text>
          </g>
        ))}
        <motion.text
          x="48"
          y="220"
          fill="rgba(212,184,138,0.8)"
          fontSize="9"
          letterSpacing="2.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ delay: 1.05 }}
        >
          PONTOS DE INSPEÇÃO
        </motion.text>
        <motion.text
          x="248"
          y="36"
          fill="rgba(212,184,138,0.65)"
          fontSize="7"
          letterSpacing="1.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ delay: 0.4 }}
        >
          EIXO A
        </motion.text>
      </svg>
    </div>
  );
}
