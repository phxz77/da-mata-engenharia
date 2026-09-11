import {
  Accessibility,
  AirVent,
  FileText,
  Hammer,
  HeartHandshake,
  House,
  Paintbrush,
  PawPrint,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CompletedWorkItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const completedWork: CompletedWorkItem[] = [
  {
    number: "01",
    title: "Sistema de piso aquecido",
    description: "Instalação de sistema de piso aquecido em suíte.",
    icon: House,
  },
  {
    number: "02",
    title: "Infraestrutura para ar-condicionado",
    description: "Execução de furo técnico para passagem de infraestrutura de ar-condicionado.",
    icon: AirVent,
  },
  {
    number: "03",
    title: "Troca de telhado",
    description: "Execução de troca de telhado de escola pública.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Pintura",
    description: "Execução de pintura de escola pública.",
    icon: Paintbrush,
  },
  {
    number: "05",
    title: "Acessibilidade e infraestrutura",
    description: "Execução de rampa de acessibilidade e fosso para elevador em escola pública, EMEF Renato Checchia.",
    icon: Accessibility,
  },
  {
    number: "06",
    title: "Troca de pisos",
    description: "Troca de pisos na despensa da Creche Itaim I.",
    icon: House,
  },
  {
    number: "07",
    title: "Canil para treinamento",
    description: "Execução de canil destinado ao treinamento dos cães da Receita Federal.",
    icon: PawPrint,
  },
  {
    number: "08",
    title: "Reuniões e acompanhamento",
    description: "Realização de reuniões online com clientes e parceiros.",
    icon: UsersRound,
  },
  {
    number: "09",
    title: "Pareceres e laudos técnicos",
    description: "Encaminhamento e elaboração de parecer técnico ou laudo.",
    icon: FileText,
  },
  {
    number: "10",
    title: "Atendimento ao cliente",
    description: "Atendimento e relacionamento com clientes, incluindo retorno positivo e agradecimentos pelo trabalho realizado.",
    icon: HeartHandshake,
  },
];

export function CompletedWork() {
  return (
    <section id="trabalhos-realizados" className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="completed-work-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="completed-work-heading"
            eyebrow="Experiência em campo"
            title="Trabalhos realizados"
            description="Experiência prática em diferentes tipos de obras, serviços técnicos, acompanhamento de projetos e atendimento a clientes e parceiros."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {completedWork.map((work, index) => {
            const Icon = work.icon;

            return (
              <Reveal key={work.number} delay={0.05 * index} className="h-full">
                <article className="group flex h-full min-h-56 flex-col bg-white p-6 transition-colors duration-300 hover:bg-navy sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-7 w-7 text-navy transition-colors duration-300 group-hover:text-gold" strokeWidth={1.35} aria-hidden="true" />
                    <span className="text-[11px] tracking-[0.28em] text-gold-dark transition-colors duration-300 group-hover:text-gold-soft">
                      {work.number}
                    </span>
                  </div>
                  <h3 className="mt-10 max-w-xs text-xl font-semibold leading-tight tracking-[-0.02em] text-navy transition-colors duration-300 group-hover:text-paper">
                    {work.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-paper/70">
                    {work.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}