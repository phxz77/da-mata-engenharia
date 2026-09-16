import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site, defaultWhatsAppMessage } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function CtaBanner() {
  const whatsappHref = site.whatsapp
    ? buildWhatsAppUrl(site.whatsapp, defaultWhatsAppMessage)
    : "/#contato";

  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24" aria-labelledby="cta-heading">
      <div className="pointer-events-none absolute inset-x-10 top-8 hidden h-px bg-gold/40 lg:block" />
      <div className="pointer-events-none absolute inset-y-8 left-10 hidden w-px bg-gold/25 lg:block" />

      <Container className="relative">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-gold-soft">Você não precisa decidir sozinho</p>
          <h2
            id="cta-heading"
            className="mt-5 max-w-[18ch] text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-paper sm:max-w-[20ch] lg:text-[clamp(2rem,2.8vw,2.75rem)]"
          >
            Tem uma obra, reforma ou problema técnico?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75">
            Explique o que está acontecendo. O Eng. Paulo Cesar avalia o contexto e orienta o próximo passo.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contato" variant="light">
              Conversar com um engenheiro
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
