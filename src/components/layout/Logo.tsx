import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "header" | "footer" | "menu";
};

const sizes = {
  header: {
    width: 348,
    height: 347,
    className: "h-16 w-auto sm:h-[76px]",
  },
  footer: {
    width: 348,
    height: 347,
    className: "h-36 w-auto sm:h-44",
  },
  menu: {
    width: 348,
    height: 347,
    className: "h-24 w-auto",
  },
} as const;

export function Logo({ className, size = "header" }: LogoProps) {
  const config = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="Da Mata Engenharia — Obras, Reformas e Vistorias"
      width={config.width}
      height={config.height}
      className={cn("object-contain object-left", config.className, className)}
      priority={size === "header"}
    />
  );
}
