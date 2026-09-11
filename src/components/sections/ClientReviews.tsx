import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientReviews } from "@/lib/data/client-reviews";

export function ClientReviews() {
  const [featuredReview, ...illustrativeReviews] = clientReviews;

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="client-reviews-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="client-reviews-heading"
            title="AVALIAÇÕES E DEPOIMENTOS"
            description="Alguns retornos de clientes sobre o trabalho realizado, acompanhamento e parceria ao longo dos projetos."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="mt-12 border-y border-line py-10 sm:py-14 lg:max-w-4xl">
            <span className="block h-px w-10 bg-gold/70" />
            <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-navy sm:text-xl">
              “{featuredReview.quote}”
            </p>
            <footer className="mt-8 text-sm text-muted">Feedback recebido de cliente</footer>
          </blockquote>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {illustrativeReviews.map((review, index) => (
            <Reveal key={review.quote} delay={0.08 * index}>
              <blockquote className="h-full bg-paper p-8 sm:p-10">
                <p className="text-[15px] leading-relaxed text-navy">“{review.quote}”</p>
                <footer className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
                  Feedback do cliente
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}