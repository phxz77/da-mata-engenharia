import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentials } from "@/lib/data/differentials";

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-paper sm:py-28 lg:py-36" aria-labelledby="differentials-heading">
      <div className="technical-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                id="differentials-heading"
                eyebrow="Critérios de trabalho"
                title="O rigor aparece em cada decisão."
                description="Sem promessas genéricas: quatro princípios que orientam a forma como cada demanda é conduzida."
                tone="light"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-white/15">
              {differentials.map((item, index) => (
                <Reveal key={item.number} delay={0.05 * index}>
                  <article className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[100px_1fr_1.4fr] sm:items-center sm:gap-8 sm:py-8">
                    <p className="text-4xl font-light tracking-[-0.06em] text-gold-soft sm:text-5xl">{item.number}</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-paper">{item.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-paper/60">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
