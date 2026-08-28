import { cn } from "@/lib/utils";

export function IconObras({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-6 w-6", className)} fill="none" aria-hidden>
      <path d="M6 26V8h4v18M14 26V12h4v14M22 26V10h4v16" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4 26h24"
        stroke="#C4A36A"
        strokeWidth="1.4"
        strokeDasharray="24"
        className="[stroke-dashoffset:24] transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[stroke-dashoffset:0] group-active:[stroke-dashoffset:0]"
      />
    </svg>
  );
}

export function IconReformas({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-6 w-6", className)} fill="none" aria-hidden>
      <rect x="5" y="8" width="14" height="16" stroke="currentColor" strokeWidth="1.4" />
      <rect
        x="13"
        y="12"
        width="14"
        height="14"
        stroke="#C4A36A"
        strokeWidth="1.4"
        className="opacity-50 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
      />
    </svg>
  );
}

export function IconVistorias({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-6 w-6", className)} fill="none" aria-hidden>
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="currentColor" strokeWidth="1.2" />
      <circle
        cx="16"
        cy="16"
        r="2.2"
        fill="#C4A36A"
        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
      />
    </svg>
  );
}
