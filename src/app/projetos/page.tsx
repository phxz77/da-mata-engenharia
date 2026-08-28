import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectTile } from "@/components/ui/ProjectTile";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Portfólio da Da Mata Engenharia em obras, reformas e vistorias. Galeria editorial para os projetos oficiais da empresa.",
  alternates: { canonical: "/projetos" },
};

export default function ProjectsPage() {
  return (
    <div className="bg-paper pt-28 pb-20 sm:pt-32 lg:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos que mostram nossa engenharia na prática."
          description="As fichas abaixo são a estrutura do acervo. Substitua nomes, textos e fotografias pelos projetos reais autorizados pela empresa."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2">
          {projects.map((project, index) => (
            <ProjectTile
              key={project.slug}
              project={project}
              className={
                index % 3 === 0
                  ? "mb-5 break-inside-avoid aspect-[4/5]"
                  : "mb-5 break-inside-avoid aspect-[4/3]"
              }
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ))}
        </div>

        <div className="mt-14">
          <Button href="/#contato">Solicitar orçamento</Button>
        </div>
      </Container>
    </div>
  );
}
