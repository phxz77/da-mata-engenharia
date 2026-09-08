import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
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
    openGraph: { title: `${title} | Da Mata Engenharia`, description: project.excerpt },
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

        <div className="mt-10 border-y border-line py-12 sm:py-16">
          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.03em] text-navy sm:text-3xl">
            Esta experiência será publicada com fotos reais e informações confirmadas.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[15px] leading-relaxed text-muted">{project.description}</p>

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
