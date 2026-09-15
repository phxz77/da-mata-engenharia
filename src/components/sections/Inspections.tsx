import { Container } from "@/components/ui/Container";
import { CropMarks } from "@/components/ui/CropMarks";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { InspectionPlan } from "@/components/ui/InspectionPlan";
import { inspections } from "@/lib/data/inspections";

export function Inspections() {
  return (
    <section
      id="vistorias"
      className="relative overflow-hidden bg-navy py-16 text-paper sm:py-20 lg:py-24"
      aria-labelledby="inspections-heading"
    >
      <div className="technical-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

      <Container className="relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          <div className="lg:col-span-5 lg:pt-5">
            <Reveal>
              <SectionHeading
                id="inspections-heading"
                eyebrow="Vistorias"
                title="Avaliação técnica para decisões mais seguras."
                description="A vistoria é parte da identidade da Da Mata Engenharia. Serve para enxergar a edificação com clareza — e decidir o próximo passo com base no que realmente está ali."
                tone="light"
                className="max-w-none"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 sm:mt-9">
                <Button href="/#contato" variant="gold">
                  Solicitar vistoria
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <InspectionPlan />
            <div className="relative mt-3 space-y-px sm:mt-4">
              <CropMarks className="hidden sm:block" />
              {inspections.map((item, index) => (
                <Reveal key={item.title} delay={0.08 * index}>
                  <article className="border border-white/10 bg-navy-deep/40 p-5 sm:px-6 sm:py-5">
                    <p className="text-[10px] tracking-[0.28em] text-gold-soft">0{index + 1}</p>
                    <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/70">{item.description}</p>
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
