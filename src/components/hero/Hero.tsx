"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CropMarks } from "@/components/ui/CropMarks";
import { TechnicalGrid } from "@/components/ui/TechnicalGrid";
import { photos } from "@/lib/data/images";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-paper pt-[100px]"
      aria-labelledby="hero-heading"
    >
      <TechnicalGrid className="z-0" />
      <div className="relative z-10 grid min-h-[calc(100svh-100px)] lg:grid-cols-12">
        <div className="relative order-2 flex items-center py-12 lg:order-1 lg:col-span-5 lg:py-0">
          <Container className="relative z-10">
            <motion.p
              className="text-[11px] font-medium uppercase tracking-[0.34em] text-gold-dark"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease }}
            >
              {site.eyebrow}
            </motion.p>

            <motion.span
              aria-hidden
              className="mt-5 block h-px w-12 bg-gold"
              initial={reduced ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.48, ease }}
              style={{ transformOrigin: "left" }}
            />

            <motion.h1
              id="hero-heading"
              className="mt-6 max-w-[18ch] text-balance text-[2rem] font-semibold leading-[1.15] tracking-[-0.03em] text-navy sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem]"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55, ease }}
            >
              Engenharia que entrega obra com método e precisão.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-md text-[15px] leading-relaxed text-muted sm:text-base"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease }}
            >
              Obras, reformas e vistorias com planejamento, precisão técnica e
              compromisso em cada etapa.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease }}
            >
              <Button href="/#contato">Solicitar orçamento</Button>
              <Button href="/#servicos" variant="secondary">
                Conhecer nossos serviços
              </Button>
            </motion.div>
          </Container>
        </div>

        <motion.div
          className="relative order-1 min-h-[42vh] lg:order-2 lg:col-span-7 lg:min-h-full"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <Image
            src={photos.hero}
            alt="Canteiro de obras visto de cima, com armação, eletrodutos e equipe técnica no pavimento"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-navy/10 lg:to-navy/25" />

          <motion.div
            className="absolute inset-5 sm:inset-8"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95, ease }}
          >
            <CropMarks />
            <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.22em] text-paper">
              {site.slogan}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
