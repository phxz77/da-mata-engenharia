import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="servicos" className="relative bg-white py-20 sm:py-24 lg:py-32" aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Como podemos ajudar"
            title="Um caminho técnico para o problema que você está vivendo."
            description="Conte o que precisa ser avaliado, planejado ou acompanhado. O primeiro passo é entender o contexto e definir o escopo adequado."
          />
        </Reveal>
        <div className="relative mt-14 border-t border-navy/15">
          <div>
            {services.map((service, index) => {
              return (
                <Reveal key={service.id} delay={0.08 * index}>
                  <Link href={service.href} className="group relative grid grid-cols-[54px_1fr_auto] items-center gap-4 border-b border-navy/15 py-7 transition-colors hover:bg-navy hover:text-paper sm:grid-cols-[80px_1fr_1fr_auto] sm:gap-7 sm:py-8">
                    <span className="text-[12px] tracking-[0.28em] text-gold-dark">{service.number}</span>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-navy transition-colors group-hover:text-paper sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="col-start-2 col-span-2 max-w-sm text-sm leading-relaxed text-muted transition-colors group-hover:text-paper/70 sm:col-auto sm:col-span-1">
                      {service.description}
                    </p>
                    <ArrowUpRight className="h-5 w-5 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
