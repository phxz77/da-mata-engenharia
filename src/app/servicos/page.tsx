import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Inspections } from "@/components/sections/Inspections";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Process } from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Obras, reformas e vistorias com a Da Mata Engenharia. Planejamento, precisão técnica e acompanhamento em cada etapa.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  return (
    <div className="pt-12">
      <Services />
      <Process />
      <Inspections />
      <CtaBanner />
    </div>
  );
}
