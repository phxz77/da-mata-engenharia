import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

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
          eyebrow="Experiências reais"
          title="Um arquivo visual baseado no trabalho que pode ser comprovado."
          description="As fotografias reais do Eng. Paulo Cesar e dos trabalhos autorizados serão organizadas aqui quando forem adicionadas ao projeto."
        />

        <div className="mt-14 border-y border-line py-14 sm:py-20">
          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.03em] text-navy sm:text-4xl">
            Fotos reais primeiro. Design depois.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
            A galeria não será preenchida com imagens genéricas ou projetos fictícios.
          </p>
        </div>

        <div className="mt-14">
          <Button href="/#contato">Solicitar orçamento</Button>
        </div>
      </Container>
    </div>
  );
}
