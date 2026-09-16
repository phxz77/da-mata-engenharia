import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="faq-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                id="faq-heading"
                eyebrow="FAQ"
                title="Perguntas frequentes"
                description="Respostas institucionais. Detalhes de região, prazos e valores entram aqui somente com informação oficial."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <FaqAccordion />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
