import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DifferentialsInteractive } from "@/components/sections/DifferentialsInteractive";

export function Differentials() {
  return (
    <section
      className="relative overflow-hidden bg-navy py-16 text-paper sm:py-16 lg:py-20"
      aria-labelledby="differentials-heading"
    >
      <div className="technical-grid pointer-events-none absolute inset-0 opacity-[0.12]" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-12">
          <div className="lg:col-span-4 xl:col-span-5">
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

          <div className="min-w-0 lg:col-span-8 xl:col-span-7">
            <Reveal delay={0.08}>
              <DifferentialsInteractive />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
