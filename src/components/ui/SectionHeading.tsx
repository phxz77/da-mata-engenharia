import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl xl:max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-[11px] font-medium uppercase tracking-[0.32em] sm:mb-4",
            tone === "dark" ? "text-gold-dark" : "text-gold-soft",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-balance text-[clamp(1.625rem,3.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[clamp(1.75rem,3vw,2.125rem)] lg:text-[clamp(1.875rem,2.2vw,2.25rem)]",
          tone === "dark" ? "text-navy" : "text-paper",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[15px] leading-relaxed sm:mt-5 sm:text-base xl:max-w-3xl",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-muted" : "text-paper/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
