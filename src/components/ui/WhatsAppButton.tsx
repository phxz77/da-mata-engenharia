"use client";

import { MessageCircle } from "lucide-react";
import { site, defaultWhatsAppMessage } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  const href = site.whatsapp
    ? buildWhatsAppUrl(site.whatsapp, defaultWhatsAppMessage)
    : "/#contato";

  return (
    <>
      <a
        href={href}
        className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center border border-gold/40 bg-navy text-gold shadow-[0_12px_30px_-16px_rgba(14,39,68,0.8)] transition-transform duration-300 hover:-translate-y-0.5 lg:flex"
        aria-label="Falar pelo WhatsApp"
        target={site.whatsapp ? "_blank" : undefined}
        rel={site.whatsapp ? "noopener noreferrer" : undefined}
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
      </a>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <a
          href={href}
          className="pointer-events-auto flex h-12 items-center justify-center gap-2 bg-navy text-[12px] font-medium uppercase tracking-[0.16em] text-paper shadow-[0_-8px_24px_-16px_rgba(14,39,68,0.6)]"
          target={site.whatsapp ? "_blank" : undefined}
          rel={site.whatsapp ? "noopener noreferrer" : undefined}
        >
          <MessageCircle className="h-4 w-4 text-gold" strokeWidth={1.6} />
          Falar com a Da Mata Engenharia
        </a>
      </div>
    </>
  );
}
