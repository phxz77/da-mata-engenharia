import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 pt-28 text-center">
      <p className="text-[11px] uppercase tracking-[0.32em] text-gold-dark">404</p>
      <h1 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.03em] text-navy">
        Esta página não foi encontrada.
      </h1>
      <p className="mt-4 max-w-sm text-sm text-muted">
        Volte ao início para conhecer os serviços da Da Mata Engenharia.
      </p>
      <div className="mt-8">
        <Button href="/">Ir para o início</Button>
      </div>
      <Link href="/#contato" className="mt-4 text-sm text-navy link-underline">
        Falar com a empresa
      </Link>
    </div>
  );
}
