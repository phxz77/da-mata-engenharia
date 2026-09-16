"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { clientReviews } from "@/lib/data/client-reviews";

const CAROUSEL_GAP = 16;

function getCarouselStep(el: HTMLElement) {
  const card = el.querySelector<HTMLElement>("[data-review-card]");
  return card ? card.offsetWidth + CAROUSEL_GAP : el.offsetWidth;
}

export function SocialProof() {
  const [featured, ...others] = clientReviews;
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onScroll = () => {
      const step = getCarouselStep(el);
      const i = Math.round(el.scrollLeft / step);
      setIndex(Math.max(0, Math.min(others.length - 1, i)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [others.length]);

  function scrollBy(dir: number) {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: getCarouselStep(el) * dir, behavior: "smooth" });
  }

  function scrollToIndex(i: number) {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollTo({ left: getCarouselStep(el) * i, behavior: "smooth" });
  }

  return (
    <section
      className="overflow-x-hidden bg-paper py-16 sm:py-20 lg:py-24"
      aria-labelledby="social-proof-heading"
    >
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

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-x-10">
          <div className="min-w-0 lg:col-span-5">
            <Reveal>
              <blockquote className="border border-line bg-white p-6 sm:p-8 lg:sticky lg:top-[calc(var(--header-height)+1.5rem)] lg:h-full">
                <span className="block h-px w-10 bg-gold/70" />
                <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-navy sm:text-lg lg:text-[1.05rem] lg:leading-[1.65]">
                  “{featured.quote}”
                </p>
                <footer className="mt-6 text-sm text-muted">— Cliente Da Mata Engenharia</footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="relative min-w-0 overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm uppercase tracking-[0.22em] text-gold-dark">
                  Outras experiências
                </h3>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    aria-label="Anterior"
                    onClick={() => scrollBy(-1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-white text-navy transition-colors hover:bg-paper-2"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Próximo"
                    onClick={() => scrollBy(1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-white text-navy transition-colors hover:bg-paper-2"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                ref={carouselRef}
                className="no-scrollbar mt-4 flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {others.map((review, i) => (
                  <article
                    key={i}
                    data-review-card
                    className="w-full shrink-0 snap-start rounded border border-line bg-white p-5 sm:w-[calc(50%-0.5rem)] sm:p-6"
                  >
                    <p className="text-[15px] leading-relaxed text-navy">“{review.quote}”</p>
                    <footer className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
                      Feedback do cliente
                    </footer>
                  </article>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2">
                {others.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`h-2 w-6 rounded-full transition-colors ${i === index ? "bg-navy" : "bg-line"}`}
                  />
                ))}
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-gold-soft">
                      Também no Instagram
                    </p>
                    <p className="mt-2 text-sm text-navy">
                      @ddo_engpc — Acompanhe bastidores, obras e resultados.
                    </p>
                  </div>
                  <Button href={site.instagram} variant="secondary" external className="shrink-0">
                    Ver Instagram →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
