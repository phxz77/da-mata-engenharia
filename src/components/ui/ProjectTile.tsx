import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

type ProjectTileProps = {
  project: Project;
  className?: string;
};

export function ProjectTile({
  project,
  className,
}: ProjectTileProps) {
  const title = project.title;

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className={cn("group relative block overflow-hidden bg-navy", className)}
    >
      <div className="absolute inset-0 flex flex-col justify-end bg-navy p-5 transition-colors duration-500 group-hover:bg-navy-soft sm:p-7">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold-soft">
          {project.category}
        </p>
        <span className="mt-3 mb-3 block h-px w-8 origin-left bg-gold transition-transform duration-500 lg:scale-x-50 lg:group-hover:scale-x-100 lg:group-active:scale-x-100" />
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-paper sm:text-xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}
