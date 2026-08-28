import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32" aria-labelledby="testimonials-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Depoimentos"
            title="A palavra de quem já construiu conosco."
            description="Somente relatos reais e autorizados serão publicados nesta área."
          />
        </Reveal>

        {testimonials.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
              {[0, 1, 2].map((slot) => (
                <div key={slot} className="min-h-[220px] bg-white p-8">
                  <span className="block h-px w-10 bg-gold/70" />
                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    [INSERIR DEPOIMENTO] Espaço reservado para um relato autorizado de cliente.
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.author} delay={0.08 * index}>
                <blockquote className="h-full bg-white p-8">
                  <span className="block h-px w-10 bg-gold/70" />
                  <p className="mt-6 text-[15px] leading-relaxed text-navy">“{item.quote}”</p>
                  <footer className="mt-8 text-sm text-muted">
                    <cite className="not-italic font-medium text-navy">{item.author}</cite>
                    {item.role ? <span className="block mt-1">{item.role}</span> : null}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
