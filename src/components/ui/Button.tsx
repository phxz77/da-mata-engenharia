import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-navy text-paper hover:bg-navy-soft hover:-translate-y-px",
  secondary:
    "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-paper",
  ghost:
    "text-navy hover:text-navy-soft",
  light:
    "bg-paper text-navy hover:bg-white hover:-translate-y-px",
  outlineLight:
    "border border-paper/35 bg-transparent text-paper hover:border-gold hover:text-gold",
  gold:
    "border border-gold/70 bg-transparent text-gold hover:bg-gold hover:text-navy-deep",
};

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
  external?: boolean;
  disabled?: boolean;
  withArrow?: boolean;
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  type = "button",
  onClick,
  ariaLabel,
  external,
  disabled,
  withArrow = true,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.14em] uppercase transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
          strokeWidth={1.6}
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
