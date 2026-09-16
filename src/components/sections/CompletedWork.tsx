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
    title: "Diagnóstico técnico e leitura do imóvel",
    description: "Identificação das condições existentes e definição do que precisa ser observado antes da decisão de obra ou reforma.",
    icon: House,
  },
  {
    number: "02",
    title: "Acompanhamento de obra",
    description: "Monitoramento das etapas, rotina de execução e alinhamento com o cliente para evitar retrabalho e imprevistos.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Reformas residenciais e comerciais",
    description: "Organização da intervenção com foco em funcionalidade, acabamento e execução técnica em propriedades diversas.",
    icon: Paintbrush,
  },
  {
    number: "04",
    title: "Estruturas e alvenaria",
    description: "Apoio em soluções de estrutura, ajustes e execução de elementos construtivos que exigem atenção ao projeto.",
    icon: House,
  },
  {
    number: "05",
    title: "Infraestrutura e instalações",
    description: "Planejamento e acompanhamento de sistemas e passagens técnicas para manter a obra integrada e segura.",
    icon: AirVent,
  },
  {
    number: "06",
    title: "Acessibilidade e adequação de uso",
    description: "Intervenções pensadas para melhorar acesso, circulação e uso do ambiente com maior conforto e segurança.",
    icon: Accessibility,
  },
  {
    number: "07",
    title: "Pintura e acabamentos",
    description: "Avaliação e execução de acabamento com atenção à estética, acabamento final e qualidade da entrega.",
    icon: Paintbrush,
  },
  {
    number: "08",
    title: "Apoio a escritórios de arquitetura",
    description: "Atendimento técnico para projetos que exigem clareza na execução, acompanhamento e suporte ao profissional responsável.",
    icon: UsersRound,
  },
  {
    number: "09",
    title: "Vistorias e pareceres",
    description: "Registro objetivo das condições observadas e suporte para decisões com linguagem técnica clara e útil.",
    icon: FileText,
  },
  {
    number: "10",
    title: "Manutenção preventiva",
    description: "Análise de pontos críticos para corrigir falhas, preservar a edificação e reduzir riscos de deterioração.",
    icon: HeartHandshake,
  },
  {
    number: "11",
    title: "Planejamento da execução",
    description: "Organização das etapas para entregar mais previsibilidade, menos improviso e melhor controle do orçamento.",
    icon: UsersRound,
  },
  {
    number: "12",
    title: "Entrega com acompanhamento",
    description: "Encaminhamento final com atenção aos detalhes, comunicação ao cliente e segurança na transição para o uso real.",
    icon: PawPrint,
  },
];

export function CompletedWork() {
  return (
    <section id="projetos" className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="completed-work-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="completed-work-heading"
            eyebrow="Experiência em campo"
            title="Trabalhos realizados"
            description="Experiência prática em diferentes tipos de obras, serviços técnicos, acompanhamento de projetos e atendimento a clientes e parceiros."
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:grid-cols-4">
          {completedWork.map((work, index) => {
            const Icon = work.icon;

            return (
              <Reveal key={work.number} delay={0.05 * index} className="h-full">
                <article className="group flex h-full min-h-52 flex-col bg-white p-6 transition-colors duration-300 hover:bg-navy sm:p-6 lg:min-h-48">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-7 w-7 text-navy transition-colors duration-300 group-hover:text-gold" strokeWidth={1.35} aria-hidden="true" />
                    <span className="text-[11px] tracking-[0.28em] text-gold-dark transition-colors duration-300 group-hover:text-gold-soft">
                      {work.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold leading-tight tracking-[-0.02em] text-navy transition-colors duration-300 group-hover:text-paper sm:mt-10 sm:text-xl lg:max-w-none">
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