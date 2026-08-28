import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-32" aria-labelledby="faq-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
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
