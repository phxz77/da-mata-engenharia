"use client";

"use client";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { clientReviews } from "@/lib/data/client-reviews";

export function SocialProof() {
  const [featured, ...others] = clientReviews;
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const w = el.offsetWidth;
      const scroll = el.scrollLeft;
      const i = Math.round(scroll / (w * 0.7));
      setIndex(Math.max(0, Math.min(others.length - 1, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [others.length]);

  function scrollBy(dir: number) {
    const el = carouselRef.current;
    if (!el) return;
    const amount = Math.round(el.offsetWidth * 0.7) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28" aria-labelledby="social-proof-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="social-proof-heading"
            eyebrow="Avaliações"
            title="AVALIAÇÕES E EXPERIÊNCIAS"
            description="Quem acompanha nosso trabalho também faz parte dele. Relatos de clientes e registros das obras e acompanhamentos realizados."
            tone="dark"
          />
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <blockquote className="border border-line bg-white p-8 sm:p-10 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
                <span className="block h-px w-10 bg-gold/70" />
                <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-navy sm:text-xl">“{featured.quote}”</p>
                <footer className="mt-8 text-sm text-muted">— Cliente Da Mata Engenharia</footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-sm uppercase tracking-[0.22em] text-gold-soft">Outras experiências</h3>
                <div className="flex items-center gap-3">
                  <button
                    aria-label="Anterior"
                    onClick={() => scrollBy(-1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-white/30 text-paper hover:bg-white/10"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    aria-label="Próximo"
                    onClick={() => scrollBy(1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-white/30 text-paper hover:bg-white/10"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                ref={carouselRef}
                className="mt-4 flex touch-pan-x gap-6 overflow-x-auto pb-6 pr-4 scroll-smooth snap-x snap-mandatory"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {others.map((review, i) => (
                  <article
                    key={i}
                    className="min-w-[60%] max-w-[60%] snap-center rounded border border-line bg-white p-6 sm:p-8"
                  >
                    <p className="text-[15px] leading-relaxed text-navy">“{review.quote}”</p>
                    <footer className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">Feedback do cliente</footer>
                  </article>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2">
                {others.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const el = carouselRef.current;
                      if (!el) return;
                      const w = el.offsetWidth;
                      el.scrollTo({ left: Math.round(w * 0.7) * i, behavior: "smooth" });
                    }}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`h-2 w-6 rounded-full ${i === index ? "bg-navy" : "bg-line"}`}
                  />
                ))}
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-gold-soft">Também no Instagram</p>
                    <p className="mt-2 text-sm text-navy">@ddo_engpc — Acompanhe bastidores, obras e resultados.</p>
                  </div>
                  <div>
                    <Button href={site.instagram} variant="secondary" external>
                      Ver Instagram →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
