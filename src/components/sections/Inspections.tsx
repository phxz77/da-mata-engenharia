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
      className="relative overflow-hidden bg-navy py-10 text-paper sm:py-12 lg:py-14"
      aria-labelledby="inspections-heading"
    >
      <div className="technical-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

      <Container className="relative w-full max-w-[min(100%-2.5rem,93.75rem)] px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-7 sm:gap-8 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:items-stretch lg:gap-x-6 xl:gap-x-8">
          <div className="flex min-w-0 flex-col">
            <Reveal className="[&_h2]:text-[clamp(1.5rem,2.2vw,1.875rem)] [&_h2]:leading-[1.15] [&_p]:text-sm [&_p]:leading-relaxed">
              <SectionHeading
                id="inspections-heading"
                eyebrow="Vistorias"
                title="Avaliação técnica para decisões mais seguras."
                description="A vistoria é parte da identidade da Da Mata Engenharia. Serve para enxergar a edificação com clareza — e decidir o próximo passo com base no que realmente está ali."
                tone="light"
                className="max-w-none"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-5 sm:mt-6">
                <Button href="/#contato" variant="gold" className="px-5 py-2.5 text-[12px]">
                  Solicitar vistoria
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-5 sm:mt-6 lg:mt-7">
              <InspectionPlan className="mx-auto w-[min(100%,20rem)] max-w-none sm:w-[92%] lg:w-[90%]" />
            </Reveal>
          </div>

          <div className="min-w-0 w-full lg:flex lg:h-full lg:flex-col">
            <Reveal delay={0.06} className="flex h-full w-full min-h-0 flex-1 flex-col">
              <div className="relative flex h-full w-full min-h-[18rem] flex-1 flex-col divide-y divide-white/10 border border-white/10 bg-navy-deep/20 sm:min-h-[20rem] lg:min-h-[23rem] xl:min-h-[25rem]">
                <CropMarks className="hidden sm:block" />
                {inspections.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid w-full flex-1 grid-cols-[3rem_1px_minmax(0,1fr)] items-start gap-x-3.5 p-5 sm:grid-cols-[3.75rem_1px_minmax(0,1fr)] sm:gap-x-4 sm:p-6 lg:grid-cols-[72px_1px_minmax(0,1fr)] lg:gap-x-5 lg:p-6 lg:px-7 xl:px-8"
                  >
                    <p className="text-2xl font-light tracking-[-0.06em] text-gold-soft sm:text-3xl lg:text-4xl lg:leading-none xl:text-[2.5rem]">
                      0{index + 1}
                    </p>
                    <span aria-hidden className="min-h-full w-px self-stretch bg-white/15" />
                    <div className="min-w-0 w-full max-w-none">
                      <h3 className="text-base font-semibold tracking-[-0.02em] sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 w-full max-w-none text-sm leading-relaxed text-paper/70 sm:mt-2">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
