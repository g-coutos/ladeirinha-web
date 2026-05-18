import Link from "next/link";

export const Footer = () => {
  return (
    <>
      {/** biome-ignore lint/performance/noImgElement: need mobile first approach */}
      <img src="/assets/elements/wave.svg" alt="Wave" />
      <footer className="w-full py-8 px-6 text-xs md:text-sm bg-[#F5F5F5] text-[#FC4C02]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between text-center md:text-left">
          <div className="underline">
            <Link
              href="/politica-de-privacidade"
              className="block md:inline mb-2 md:mb-0 md:mr-4"
            >
              Política de Privacidade
            </Link>
            <span className="block md:inline">contato@ladeirinha.com.br</span>
          </div>

          <div>
            <span className="block md:inline">
              Ladeirinha © {new Date().getFullYear()} não é afiliado ao{" "}
              <b>Strava</b>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
