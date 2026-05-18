interface CTAProps {
  link: string;
  text: string;
}

export const CTA = ({ link, text }: CTAProps) => {
  return (
    <a
      href={link}
      className="mt-18 px-5 py-2 border border-[#FC4C02] text-[#FC4C02] rounded"
    >
      {text}
    </a>
  );
};
