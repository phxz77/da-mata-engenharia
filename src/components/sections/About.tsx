import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DimensionMark } from "@/components/ui/DimensionMark";
import { photos } from "@/lib/data/images";

export function About() {
  return (
    <section id="sobre" className="bg-paper py-24 sm:py-28 lg:py-40" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-14 pb-8 lg:grid-cols-12 lg:gap-16 lg:pb-10">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="about-heading"
                eyebrow="01 / Quem atende você"
                title="Você fala diretamente com um engenheiro."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <DimensionMark label="MÉTODO" className="mt-8 max-w-sm" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
                <p>
                  A Da Mata Engenharia é conduzida pelo <strong className="font-medium text-navy">Eng. Paulo Cesar</strong>,
                  com atendimento próximo para entender o que está acontecendo na sua obra, reforma
                  ou imóvel antes de indicar qualquer caminho.
                </p>
                <p>
                  O trabalho começa pelo diagnóstico e pela conversa clara sobre escopo, prioridades
                  e limites. Conforme o serviço contratado, o engenheiro orienta decisões, acompanha
                  os momentos necessários da execução e ajuda a buscar uma solução tecnicamente adequada.
                </p>
                <p className="border-l-2 border-gold pl-4 text-navy/80">
                  Atendimento direto em São Paulo. Quando o projeto exige outras especialidades, parceiros
                  são reunidos de acordo com a necessidade, sem prometer uma estrutura que não existe.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="relative aspect-[2/3] overflow-hidden bg-navy">
                <Image
                  src={photos.paulo}
                  alt="Engenheiro Paulo Cesar em uma obra, usando capacete e segurando uma prancheta."
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-paper sm:inset-x-8 sm:bottom-8">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold-soft">Responsabilidade técnica</p>
                  <p className="mt-2 text-2xl font-medium tracking-[-0.03em]">Eng. Paulo Cesar</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
