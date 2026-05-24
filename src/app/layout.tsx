import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "./components/footer";
import { PostHogProvider } from "./components/posthog-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ladeirinha.com.br"),
  title: "Ladeirinha - Elevação automática no Strava",
  description:
    "Ladeirinha é um app que adiciona a elevação acumulada do ano na descrição das atividades do Strava, para quem trata o desnível como um troféu.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ladeirinha - Elevação automática no Strava",
    description:
      "Ladeirinha é um app que adiciona a elevação acumulada do ano na descrição das atividades do Strava, para quem trata o desnível como um troféu.",
    url: "https://ladeirinha.com.br",
    siteName: "Ladeirinha",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ladeirinha - Elevação automática no Strava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ladeirinha - Elevação automática no Strava",
    description:
      "Ladeirinha é um app que adiciona a elevação acumulada do ano na descrição das atividades do Strava, para quem trata o desnível como um troféu.",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ladeirinha",
  url: "https://ladeirinha.com.br",
  logo: "https://ladeirinha.com.br/assets/images/mountain.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <PostHogProvider>
          {children}
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
