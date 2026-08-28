import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Da Mata Engenharia | Obras, Reformas e Vistorias",
    template: "%s | Da Mata Engenharia",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Da Mata Engenharia",
    "obras",
    "reformas",
    "vistorias",
    "engenharia civil",
    "acompanhamento de obra",
    "São Paulo",
    "Eng. Paulo Cesar",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Da Mata Engenharia | Obras, Reformas e Vistorias",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Mata Engenharia | Obras, Reformas e Vistorias",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  slogan: site.slogan,
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/logo.png`,
  areaServed: {
    "@type": "City",
    name: "São Paulo",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Oliveira Freire",
    addressLocality: "São Paulo",
    addressCountry: "BR",
    postalCode: "08080-000",
  },
  telephone: site.phoneDisplay,
  email: site.email,
  serviceType: ["Obras", "Reformas", "Vistorias"],
  sameAs: [site.instagram],
  employee: {
    "@type": "Person",
    name: "Paulo Cesar",
    jobTitle: "Engenheiro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} bg-paper font-sans text-ink antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          Ir para o conteúdo
        </a>
        <Header />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
