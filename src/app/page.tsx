import Image from "next/image";
import { CTA } from "./components/cta";
import { WaitlistForm } from "./components/waitlist-form";

const HOW_IT_WORKS = [
  {
    id: 1,
    text: "Conecte sua conta no Strava: é bem rápido, tipo um pace de <b>2:50/km</b>",
    image: "/assets/images/link.png",
  },
  {
    id: 2,
    text: "Registre uma atividade: Run, Trail Run, Bike, Mountain Bike... ",
    image: "/assets/images/woman-running.png",
  },
  {
    id: 3,
    text: "Adicionamos sua elevação anual <b>automaticamente</b>",
    image: "/assets/images/mountain.png",
  },
];

const MOTIVES = [
  {
    id: 1,
    text: "Elevação acumulada do ano atualizada a cada atividade, sem abrir nenhum app",
  },
  {
    id: 2,
    text: "Corridas e pedais contados separadamente — cada modalidade com seu próprio histórico",
  },
  {
    id: 3,
    text: "O número aparece direto na descrição da atividade, onde você já está",
  },
  {
    id: 4,
    text: "Quem tem meta de desnível anual consegue acompanhar o progresso em tempo real",
  },
  {
    id: 5,
    text: "Dá pra ver se o ritmo de subida está no caminho certo sem montar planilha nenhuma",
  },
  {
    id: 6,
    text: "Funciona como um checkpoint automático a cada treino",
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl w-full mx-auto px-6 md:px-0">
      <section className="flex flex-col items-center pt-20">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/assets/images/mountain.png"
            alt="Logo do Ladeirinha"
            width={50}
            height={38}
          />
          <h1 className="text-2xl font-serif">ladeirinha</h1>
        </div>
        <h2 className="max-w-75 mt-20 font-serif text-4xl text-center">
          Seu <i>desnível</i> do ano direto no Strava
        </h2>
        <div className="mt-18 border border-gray-200 rounded-xl p-4 pb-8 rotate-[-10deg] hover:rotate-0 hover:shadow-lg transition-transform">
          <span className="block mb-3 text-xl font-semibold">
            Trail Run Matinal
          </span>
          <span className="text-xs md:text-sm text-gray-500">
            <Image
              src="/assets/images/mountain.png"
              alt="Emoji de montanha"
              width={20}
              height={20}
              className="mx-2 inline-block"
            />
            {new Date().getFullYear()} = 5,335 m |
            <Image
              src="/assets/images/point_right.png"
              alt="Emoji de mão apontando para a direita"
              width={20}
              height={20}
              className="mx-2 inline-block"
            />
            ladeirinha.com.br
          </span>
        </div>
        <CTA link="#entrar-na-lista" text="Entrar na Lista de Espera" />
      </section>

      <section id="como-funciona" className="my-60 scroll-m-5">
        <div className="relative">
          {/** biome-ignore lint/performance/noImgElement: need mobile first approach */}
          <img
            className="w-12.5 md:w-25 h-12.5 md:h-25 absolute left-[5%] md:left-[10%] top-[50%] -translate-y-1/2 -rotate-45"
            src="/assets/images/man-running.png"
            alt="Ilustração de como funciona o LadeirinhA"
          />
          <h2 className="font-serif text-4xl text-center">Como Funciona?</h2>
          <p className="mt-6 text-center">Relaxa, é super simples:</p>
          {/** biome-ignore lint/performance/noImgElement: need mobile first approach */}
          <img
            className="w-12.5 md:w-25 h-12.5 md:h-25 absolute right-[5%] md:right-[10%] top-[50%] -translate-y-1/2 rotate-45"
            src="/assets/images/woman-biking.png"
            alt="Ilustração de como funciona o LadeirinhA"
          />
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 mt-30">
          {HOW_IT_WORKS.map((item, index) => (
            <div
              key={item.id}
              className="w-75 min-w-75 p-5 border border-gray-200 rounded-xl"
            >
              <div className="flex justify-between items-start">
                <span className="text-4xl text-gray-500">0{index + 1}</span>
                <Image
                  src={item.image}
                  alt={`Imagem do passo ${index + 1} de como funciona o LadeirinhA`}
                  width={25}
                  height={25}
                />
              </div>
              <p
                className="mt-4 text-sm"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: necessary to render HTML content
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="por-que-usar"
        className="mb-60 flex flex-col items-center scroll-m-5"
      >
        <Image
          src="/assets/images/trophy.png"
          alt="Logo do LadeirinhA"
          width={60}
          height={60}
          className="block mx-auto"
        />
        <h2 className="mt-5 font-serif text-4xl">Por Que Usar?</h2>
        <ol className="max-w-100 mt-6">
          {MOTIVES.map((item, index) => (
            <li
              key={item.id}
              className={`flex gap-4 ${index % 2 === 0 ? "bg-[#F9F9F9]" : ""} p-2`}
            >
              <span className="text-2xl text-[#FC4C02]">0{item.id}</span>
              <p className="text-sm">{item.text}</p>
            </li>
          ))}
        </ol>

        <div
          className="max-w-3xl w-full h-61.25 mt-15 border border-b-3 border-[#FC4C02] rounded-xl bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/assets/images/background.jpg')" }}
        >
          <h3 className="font-serif text-center text-white md:text-xl mt-6">
            para quem trata o desnível como um troféu.
          </h3>
        </div>
      </section>

      {/* <section
        id="precos"
        className="mb-60 flex flex-col items-center scroll-m-5"
      >
        <Image
          src="/assets/gifs/pricing.gif"
          alt="Logo do LadeirinhA"
          width={60}
          height={60}
          className="block mx-auto"
        />
        <h2 className="mt-5 font-serif text-4xl">Preços</h2>
        <p className="mt-6 text-center max-w-75">
          O Ladeirinha é gratuito para usar, sem planos pagos ou anúncios. A
          ideia é manter a simplicidade e acessibilidade para todos os atletas
          que querem acompanhar seu desnível anual sem complicações.
        </p>
      </section> */}

      <section
        id="entrar-na-lista"
        className="mb-30 flex flex-col items-center scroll-m-5"
      >
        <WaitlistForm />
      </section>
    </main>
  );
}
