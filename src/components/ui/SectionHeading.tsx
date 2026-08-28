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
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-[11px] font-medium uppercase tracking-[0.32em]",
            tone === "dark" ? "text-gold-dark" : "text-gold-soft",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-balance text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-3xl lg:text-[2.5rem]",
          tone === "dark" ? "text-navy" : "text-paper",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base",
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
