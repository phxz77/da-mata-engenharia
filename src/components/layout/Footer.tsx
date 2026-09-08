import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/data/navigation";
import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const whatsappHref = site.whatsapp
    ? buildWhatsAppUrl(site.whatsapp, "Olá, gostaria de falar com a Da Mata Engenharia.")
    : "/#contato";

  return (
    <footer className="bg-navy-deep text-paper">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo size="footer" className="brightness-0 invert opacity-90" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
              Atendimento direto para entender problemas, orientar decisões e acompanhar
              obras, reformas e vistorias com responsabilidade técnica.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold-soft">Navegação</p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-paper/75 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold-soft">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/75">
              <li>
                <a
                  href={whatsappHref}
                  className="link-underline hover:text-paper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.phoneDisplay}
                </a>
                <span className="mt-1 block text-xs text-paper/50">{site.contactName}</span>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-paper"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-paper"
                >
                  {site.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Da Mata Engenharia. Todos os direitos reservados.</p>
          <p className="tracking-[0.16em] uppercase">{site.slogan}</p>
        </div>
      </Container>
    </footer>
  );
}
