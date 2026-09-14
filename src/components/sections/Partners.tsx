import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Partners() {
  return (
    <section className="bg-paper py-16 sm:py-20" aria-label="Parceiros">
      <Container>
        <div className="relative overflow-hidden rounded-[1.25rem] border border-navy/10 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="flex min-h-[180px] items-center justify-center overflow-hidden sm:min-h-[220px] lg:min-h-[260px]">
            <Image
              src="/photos/logos.jpeg"
              alt="Logotipos dos parceiros da Da Mata Engenharia"
              width={1280}
              height={853}
              className="h-auto max-h-[260px] w-full object-contain sm:max-h-[320px] lg:max-h-[360px]"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}