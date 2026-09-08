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
            <div className="mt-12 border-y border-line py-10 sm:py-14">
              <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] text-navy sm:text-3xl">
                Cada trabalho começa com escuta, clareza e responsabilidade técnica.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
                A experiência de cada cliente será publicada aqui somente com autorização e contexto reais.
              </p>
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
