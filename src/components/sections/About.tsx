import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CropMarks } from "@/components/ui/CropMarks";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DimensionMark } from "@/components/ui/DimensionMark";
import { photos } from "@/lib/data/images";

export function About() {
  return (
    <section id="sobre" className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-14 pb-8 lg:grid-cols-12 lg:gap-16 lg:pb-10">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="about-heading"
                eyebrow="Sobre"
                title="Engenharia pensada para entregar segurança e resultado."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <DimensionMark label="MÉTODO" className="mt-8 max-w-sm" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
                <p>
                  A Da Mata Engenharia atua em <strong className="font-medium text-navy">obras</strong>,{" "}
                  <strong className="font-medium text-navy">reformas</strong> e{" "}
                  <strong className="font-medium text-navy">vistorias</strong> — três frentes que
                  pedem método, presença técnica e responsabilidade com o que está sendo construído
                  ou avaliado.
                </p>
                <p>
                  O posicionamento é institucional e direto: planejar antes de executar, comunicar
                  com clareza e tratar cada etapa com o mesmo rigor. O objetivo é entregar um
                  trabalho organizado, seguro e à altura de quem exige competência antes mesmo do
                  primeiro encontro no canteiro.
                </p>
                <p className="border-l-2 border-gold pl-4 text-navy/80">
                  Atuação a partir de São Paulo, com atendimento do Eng. Paulo Cesar.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative pb-10 lg:col-span-7">
            <Reveal>
              <div className="relative aspect-[4/5] w-full max-w-[520px] sm:aspect-[5/6] lg:ml-auto lg:max-w-none">
                <Image
                  src={photos.about}
                  alt="Edifícios contemporâneos em aço e vidro, fotografados em contrapongência"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <CropMarks className="inset-3" />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="absolute -bottom-6 left-0 w-[46%] max-w-[240px] sm:-bottom-8 lg:left-0">
              <div className="relative aspect-[4/3] border border-paper bg-navy p-1 shadow-[0_18px_40px_-24px_rgba(14,39,68,0.55)]">
                <Image
                  src={photos.aboutDetail}
                  alt="Detalhe de canteiro: armação, forma e equipe em execução"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
