"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { buildMailto, buildWhatsAppUrl, cn } from "@/lib/utils";

const serviceOptions = [
  "Obras",
  "Reformas",
  "Vistorias",
  "Ainda não sei / outro",
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const fieldClass = cn(
    "mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors duration-200",
    "placeholder:text-muted/70 focus:border-navy",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      service: String(data.get("service") || "").trim(),
      city: String(data.get("city") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.phone || !payload.message) {
      setStatus("error");
      setError("Preencha nome, telefone e mensagem para enviar a solicitação.");
      return;
    }

    try {
      await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // O envio visual segue pelos canais oficiais configurados.
    }

    const composed = [
      "Solicitação de orçamento — Da Mata Engenharia",
      `Nome: ${payload.name}`,
      `Telefone: ${payload.phone}`,
      payload.email ? `E-mail: ${payload.email}` : null,
      payload.service ? `Serviço: ${payload.service}` : null,
      payload.city ? `Cidade: ${payload.city}` : null,
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n");

    if (site.whatsapp) {
      window.open(buildWhatsAppUrl(site.whatsapp, composed), "_blank", "noopener,noreferrer");
    } else if (site.email) {
      window.location.href = buildMailto(
        site.email,
        "Solicitação de orçamento — Da Mata Engenharia",
        composed,
      );
    }

    setStatus("sent");
    form.reset();
  }

  const helper = useMemo(() => {
    if (!site.whatsapp && !site.email) {
      return "Canais oficiais ainda não configurados. [INSERIR TELEFONE] ou [INSERIR E-MAIL] para ativar o envio.";
    }
    if (site.whatsapp && site.email) {
      return `Ao enviar, a mensagem é direcionada ao WhatsApp. Você também pode escrever para ${site.email}.`;
    }
    if (site.whatsapp) {
      return "Ao enviar, a mensagem é organizada e direcionada ao WhatsApp da empresa.";
    }
    return "Ao enviar, a mensagem é organizada em um e-mail para a empresa.";
  }, []);

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[12px] uppercase tracking-[0.16em] text-navy">
          Nome
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-[12px] uppercase tracking-[0.16em] text-navy">
          Telefone
          <input name="phone" required autoComplete="tel" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[12px] uppercase tracking-[0.16em] text-navy">
          E-mail
          <input name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>
        <label className="block text-[12px] uppercase tracking-[0.16em] text-navy">
          Tipo de serviço
          <select name="service" className={cn(fieldClass, "h-[46px]")} defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-[12px] uppercase tracking-[0.16em] text-navy">
        Cidade
        <input name="city" autoComplete="address-level2" className={fieldClass} />
      </label>

      <label className="block text-[12px] uppercase tracking-[0.16em] text-navy">
        Mensagem
        <textarea name="message" required rows={5} className={cn(fieldClass, "resize-y")} />
      </label>

      <p className="text-xs leading-relaxed text-muted">{helper}</p>

      {error ? <p className="text-sm text-red-800">{error}</p> : null}
      {status === "sent" ? (
        <p className="text-sm text-navy">Solicitação preparada. Obrigado pelo contato.</p>
      ) : null}

      <div>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar solicitação"}
        </Button>
      </div>
    </form>
  );
}
