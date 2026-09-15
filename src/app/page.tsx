import { About } from "@/components/sections/About";
import { Authority } from "@/components/sections/Authority";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Differentials } from "@/components/sections/Differentials";
import { Faq } from "@/components/sections/Faq";
import { Inspections } from "@/components/sections/Inspections";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Hero } from "@/components/hero/Hero";
import { RealGallery } from "@/components/sections/RealGallery";
import { CompletedWork } from "@/components/sections/CompletedWork";
import { ClientReviews } from "@/components/sections/ClientReviews";
import { Partners } from "@/components/sections/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Authority />
      <About />
      <Services />
      <Process />
      <CompletedWork />
      <BeforeAfter />
      <RealGallery />
      <Inspections />
      <Differentials />
      <ClientReviews />
      <InstagramFeed />
      <Faq />
      <CtaBanner />
      <Partners />
      <Contact />
    </>
  );
}
