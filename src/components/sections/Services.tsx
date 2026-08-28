import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CropMarks } from "@/components/ui/CropMarks";
import { ProcessSpine } from "@/components/ui/ProcessSpine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconObras, IconReformas, IconVistorias } from "@/components/ui/EngineeringIcons";
import { services } from "@/lib/data/services";

const icons = {
  obras: IconObras,
  reformas: IconReformas,
  vistorias: IconVistorias,
};

const labels = ["EXECUÇÃO", "INTERVENÇÃO", "PRECISÃO"];

export function Services() {
  return (
    <section id="servicos" className="relative bg-white py-20 sm:py-24 lg:py-32" aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Serviços"
            title="Soluções em engenharia para cada etapa do seu projeto."
            description="Três frentes de atuação, com o mesmo critério técnico: organizar o trabalho, executar com segurança e deixar o processo inteligível para o cliente."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ProcessSpine className="mt-10" />
        </Reveal>

        <div className="relative mt-14">
          <div className="grid gap-px bg-line md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[service.id as keyof typeof icons] ?? IconObras;
              return (
                <Reveal key={service.id} delay={0.08 * index}>
                  <article className="group relative flex h-full flex-col bg-white p-7 sm:p-9">
                    <div className="flex items-start justify-between">
                      <span className="text-[12px] tracking-[0.28em] text-gold-dark">
                        {service.number}
                      </span>
                      <Icon className="text-navy" />
                    </div>

                    <h3 className="mt-10 text-2xl font-semibold tracking-[-0.02em] text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <div className="relative mt-8 aspect-[16/10] overflow-hidden bg-navy">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-active:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-navy/10" />
                      <CropMarks className="inset-2" />
                    </div>

                    <p className="mt-4 text-[10px] tracking-[0.28em] text-gold-dark">
                      {labels[index]}
                    </p>

                    <Link
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-navy"
                    >
                      <span className="link-underline">Solicitar este serviço</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.6}
                      />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
