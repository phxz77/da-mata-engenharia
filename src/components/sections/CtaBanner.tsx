import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { photos } from "@/lib/data/images";
import { site, defaultWhatsAppMessage } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function CtaBanner() {
  const whatsappHref = site.whatsapp
    ? buildWhatsAppUrl(site.whatsapp, defaultWhatsAppMessage)
    : "/#contato";

  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24 lg:py-28" aria-labelledby="cta-heading">
      <Image
        src={photos.cta}
        alt="Edifício contemporâneo em vidro e volume em balanço"
        fill
        className="object-cover object-center opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="pointer-events-none absolute inset-x-10 top-8 hidden h-px bg-gold/40 lg:block" />
      <div className="pointer-events-none absolute inset-y-8 left-10 hidden w-px bg-gold/25 lg:block" />

      <Container className="relative">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-gold-soft">Próximo passo</p>
          <h2
            id="cta-heading"
            className="mt-5 max-w-[16ch] text-balance text-3xl font-semibold tracking-[-0.03em] text-paper sm:text-4xl lg:text-5xl"
          >
            Tem um projeto em mente?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75">
            Vamos conversar sobre a melhor solução para sua obra, reforma ou vistoria.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contato" variant="light">
              Solicitar orçamento
            </Button>
            <Button
              href={whatsappHref}
              variant="outlineLight"
              external={Boolean(site.whatsapp)}
            >
              Falar pelo WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
