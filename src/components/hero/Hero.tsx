"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { photos } from "@/lib/data/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[700px] h-[100svh] items-end overflow-hidden bg-navy"
      aria-labelledby="hero-heading"
    >
      <Image
        src={photos.hero}
        alt="Execução de estrutura de concreto em uma obra acompanhada por equipe técnica"
        fill
        priority
        className="hero-image object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,18,0.95)_0%,rgba(7,17,28,0.72)_42%,rgba(7,17,28,0.16)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/15" />
      <div className="relative z-10 w-full pb-8 pt-24 sm:pb-10 sm:pt-28 lg:pb-12 lg:pt-32">
        <Container>
          <div className="max-w-3xl">
            <motion.span
              aria-hidden
              className="block h-px w-14 bg-gold"
              initial={reduced ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.48, ease }}
              style={{ transformOrigin: "left" }}
            />

            <motion.h1
              id="hero-heading"
              className="mt-4 max-w-[11ch] text-balance text-[clamp(2.75rem,10vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-paper sm:mt-5 sm:text-[clamp(3.5rem,8vw,4.5rem)] lg:text-[clamp(3rem,4.2vw,4.5rem)]"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55, ease }}
            >
              Engenharia próxima para resolver o que sua obra precisa.
            </motion.h1>

            <motion.p
              className="mt-4 max-w-lg text-[15px] leading-relaxed text-paper/75 sm:mt-5 sm:text-base"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease }}
            >
              Avaliação técnica, orientação e acompanhamento para obras, reformas e problemas construtivos.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease }}
            >
              <Button href="/#contato">Falar com um engenheiro</Button>
              <Button href="/#servicos" variant="outlineLight">
                Conhecer serviços
              </Button>
            </motion.div>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-3 border-t border-white/25 pt-4 text-paper sm:mt-12 sm:pt-5">
            {[
              ["01", "Diagnóstico"],
              ["02", "Acompanhamento"],
              ["03", "Responsabilidade"],
            ].map(([number, label]) => (
              <div key={number} className="border-r border-white/15 last:border-0">
                <p className="text-[11px] tracking-[0.24em] text-gold-soft">{number}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-paper/75 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
