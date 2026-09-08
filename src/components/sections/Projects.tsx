import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DimensionMark } from "@/components/ui/DimensionMark";

export function Projects() {
  return (
    <section id="projetos" className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="projects-heading">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              id="projects-heading"
              eyebrow="Referências de atuação"
              title="Cada caso começa pelo que precisa ser resolvido."
              description="As imagens desta seção são referências visuais de situações de obra e engenharia. Os trabalhos autorais e seus detalhes entram aqui somente com fotos e informações confirmadas."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/projetos" variant="secondary" className="shrink-0 self-start sm:self-auto">
              Ver detalhes
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <DimensionMark label="PRANCHA" className="mt-10 max-w-lg" />
        </Reveal>

        <div className="mt-12 border-y border-line py-12 sm:py-16">
          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] text-navy sm:text-3xl">
            O arquivo visual será construído com fotos reais do engenheiro e dos trabalhos autorizados.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
            Nenhum projeto ou resultado é apresentado aqui sem contexto e confirmação.
          </p>
        </div>
      </Container>
    </section>
  );
}
