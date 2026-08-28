import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

type ProjectTileProps = {
  project: Project;
  className?: string;
  sizes?: string;
};

export function ProjectTile({
  project,
  className,
  sizes = "(max-width: 1024px) 82vw, 60vw",
}: ProjectTileProps) {
  const title = project.title.replace("[INSERIR PROJETO] — ", "");

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className={cn("group relative block overflow-hidden bg-navy", className)}
    >
      <Image
        src={project.cover}
        alt={project.coverAlt}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-active:scale-[1.02]"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-navy/40 transition-colors duration-500 lg:bg-navy/15 lg:group-hover:bg-navy/48 lg:group-active:bg-navy/48" />
      <div className="absolute inset-4 border border-gold/25 transition-colors duration-500 lg:border-transparent lg:group-hover:border-gold/40 lg:group-active:border-gold/40" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-7 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-active:translate-y-0 lg:group-active:opacity-100">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold-soft">
          {project.category}
        </p>
        <span className="mt-3 mb-3 block h-px w-8 origin-left bg-gold transition-transform duration-500 lg:scale-x-50 lg:group-hover:scale-x-100 lg:group-active:scale-x-100" />
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-paper sm:text-xl">
          {title}
        </h3>
        {project.placeholder ? (
          <p className="mt-2 text-[11px] tracking-[0.08em] text-paper/65">
            Imagem ilustrativa
          </p>
        ) : null}
      </div>
    </Link>
  );
}
