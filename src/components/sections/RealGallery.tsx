"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CircularGallery } from "@/components/ui/circular-gallery";
import { galleryItems } from "@/lib/data/gallery";

export function RealGallery() {
  return (
    <section id="experiencias" className="overflow-hidden bg-navy py-24 text-paper sm:py-28 lg:py-36" aria-labelledby="gallery-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="gallery-heading"
            eyebrow="Arquivo de obra"
            title="O trabalho real está aqui."
            description="Registros do acervo da Da Mata Engenharia: presença, execução e espaços acompanhados de perto."
            tone="light"
          />
        </Reveal>
      </Container>
      <div className="mt-12 sm:mt-16">
        <CircularGallery items={galleryItems} />
      </div>
    </section>
  );
}