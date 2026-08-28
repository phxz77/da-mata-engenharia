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
      className="relative overflow-hidden bg-navy py-20 text-paper sm:py-24 lg:py-32"
      aria-labelledby="inspections-heading"
    >
      <div className="technical-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="inspections-heading"
                eyebrow="Vistorias"
                title="Avaliação técnica para decisões mais seguras."
                description="A vistoria é parte da identidade da Da Mata Engenharia. Serve para enxergar a edificação com clareza — e decidir o próximo passo com base no que realmente está ali."
                tone="light"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10">
                <Button href="/#contato" variant="gold">
                  Solicitar vistoria
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <InspectionPlan />
            <div className="relative mt-6 space-y-px">
              <CropMarks className="hidden sm:block" />
              {inspections.map((item, index) => (
                <Reveal key={item.title} delay={0.08 * index}>
                  <article className="border border-white/10 bg-navy-deep/40 p-6 sm:px-7 sm:py-6">
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
