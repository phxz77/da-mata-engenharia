import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DimensionMark } from "@/components/ui/DimensionMark";
import { ProjectTile } from "@/components/ui/ProjectTile";
import { projects } from "@/lib/data/projects";

export function Projects() {
  const [large, firstSquare, secondSquare, wide] = projects;

  return (
    <section id="projetos" className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="projects-heading">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              id="projects-heading"
              eyebrow="Projetos"
              title="Projetos que mostram nossa engenharia na prática."
              description="Galeria editorial preparada para o portfólio oficial. As fotografias atuais ilustram o universo de obras, reformas e vistorias — e devem ser substituídas pelos registros reais de cada projeto."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/projetos" variant="secondary" className="shrink-0 self-start sm:self-auto">
              Ver todos
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <DimensionMark label="PRANCHA" className="mt-10 max-w-lg" />
        </Reveal>

        <div className="mt-12 hidden gap-5 lg:grid lg:grid-cols-12 lg:grid-rows-2">
          {large ? <ProjectTile project={large} className="col-span-7 row-span-2 min-h-[560px]" /> : null}
          {firstSquare ? <ProjectTile project={firstSquare} className="col-span-5 min-h-[270px]" /> : null}
          {secondSquare ? <ProjectTile project={secondSquare} className="col-span-5 min-h-[270px]" /> : null}
        </div>

        {wide ? (
          <div className="mt-5 hidden lg:block">
            <ProjectTile project={wide} className="min-h-[280px]" />
          </div>
        ) : null}

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 lg:hidden no-scrollbar">
          {projects.map((project) => (
            <ProjectTile
              key={project.slug}
              project={project}
              className="min-h-[320px] w-[min(82vw,420px)] shrink-0"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
