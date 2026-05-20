import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Ladeirinha",
  description:
    "Política de Privacidade do Ladeirinha: como coletamos, usamos e protegemos seus dados ao integrar com o Strava.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  const filePath = path.join(
    process.cwd(),
    "public/documents/privacy-policies.md",
  );
  const markdown = readFileSync(filePath, "utf-8");
  const html = marked(markdown) as string;

  return (
    <main className="max-w-3xl w-full mx-auto px-6 md:px-0 py-16">
      <Link
        href="/"
        className="text-sm underline text-[#FC4C02] mb-8 inline-block"
      >
        Voltar para a home
      </Link>
      <article
        className="prose prose-sm max-w-none"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: rendering trusted internal markdown file
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
