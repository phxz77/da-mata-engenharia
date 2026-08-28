import { cn } from "@/lib/utils";

export function CropMarks({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-gold/70" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-gold/70" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold/70" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold/70" />
    </span>
  );
}
