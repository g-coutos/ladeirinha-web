import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "./components/footer";

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
  title: "Ladeirinha - Elevação automática no Strava",
  description:
    "Ladeirinha é um app que adiciona a elevação acumulada do ano na descrição das atividades do Strava, para quem trata o desnível como um troféu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
