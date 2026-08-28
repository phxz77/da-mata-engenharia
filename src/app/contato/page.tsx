import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite um orçamento com a Da Mata Engenharia para obras, reformas ou vistorias.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <div className="pt-12">
      <Contact />
    </div>
  );
}
