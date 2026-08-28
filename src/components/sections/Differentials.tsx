import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentials } from "@/lib/data/differentials";

export function Differentials() {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="differentials-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="differentials-heading"
            eyebrow="Diferenciais"
            title="Por que escolher a Da Mata Engenharia?"
            description="Critérios de trabalho que podem ser sustentados no dia a dia — sem números, selos ou prêmios que ainda não foram informados."
          />
        </Reveal>

        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item.number} delay={0.05 * index}>
              <article className="relative h-full bg-paper p-7 sm:p-8">
                <span aria-hidden className="mb-5 block h-3 w-3 border-l border-t border-gold/55" />
                <p className="text-[11px] tracking-[0.28em] text-gold-dark">{item.number}</p>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
