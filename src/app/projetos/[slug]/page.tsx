import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CropMarks } from "@/components/ui/CropMarks";
import { getProject, projects } from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projeto" };

  const title = project.title.replace("[INSERIR PROJETO] — ", "");
  return {
    title,
    description: project.excerpt,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${title} | Da Mata Engenharia`,
      description: project.excerpt,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const title = project.title.replace("[INSERIR PROJETO] — ", "");

  return (
    <article className="bg-paper pt-28 pb-20 sm:pt-32 lg:pb-28">
      <Container>
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold-dark">{project.category}</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {project.location ? (
          <p className="mt-3 text-sm text-muted">{project.location}</p>
        ) : null}

        <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-navy">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1320px) 100vw, 1320px"
          />
          <CropMarks className="inset-4" />
        </div>
        {project.placeholder ? (
          <p className="mt-3 text-xs text-muted">Imagem ilustrativa — substituir por fotografia oficial do projeto.</p>
        ) : null}

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[15px] leading-relaxed text-muted">{project.description}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.gallery.slice(1).map((image) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Image
                    src={image}
                    alt={`Galeria — ${title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-line bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold-dark">Serviços</p>
              <ul className="mt-4 space-y-2 text-sm text-navy">
                {project.services.map((item) => (
                  <li key={item} className="border-b border-line py-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/#contato" className="w-full">
                  Solicitar orçamento
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
