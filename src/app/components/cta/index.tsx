"use client";
import { track } from "@vercel/analytics";

interface CTAProps {
  link: string;
  text: string;
  className?: string;
}

export const CTA = ({ link, text, className }: CTAProps) => {
  return (
    <a
      href={link}
      className={`block px-5 py-2 border border-[#FC4C02] text-[#FC4C02] rounded text-center ${className ? ` ${className}` : ""}`}
      onClick={() => track("cta_click", { link })}
    >
      {text}
    </a>
  );
};
