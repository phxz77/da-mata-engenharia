import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Contact() {
  const whatsappHref = buildWhatsAppUrl(
    site.whatsapp,
    "Olá, gostaria de falar com a Da Mata Engenharia.",
  );

  const rows = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: site.phoneDisplay,
      detail: site.contactName,
      href: whatsappHref,
      external: true,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: site.instagramHandle,
      href: site.instagram,
      external: true,
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: site.address,
      href: site.mapsUrl,
      external: true,
    },
  ];

  return (
    <section id="contato" className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="contact-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="contact-heading"
                eyebrow="Contato"
                title="Vamos conversar sobre seu projeto."
                description="Envie os dados principais. Retornamos com o encaminhamento para obra, reforma ou vistoria."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-5">
                {rows.map((row) => (
                  <li key={row.label} className="flex gap-4">
                    <row.icon className="mt-0.5 h-4 w-4 text-gold-dark" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">{row.label}</p>
                      <a
                        href={row.href}
                        className="mt-1 inline-block text-sm text-navy link-underline"
                        target={row.external ? "_blank" : undefined}
                        rel={row.external ? "noopener noreferrer" : undefined}
                      >
                        {row.value}
                      </a>
                      {"detail" in row && row.detail ? (
                        <p className="mt-1 text-xs text-muted">{row.detail}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-line bg-white p-6 sm:p-8 lg:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
