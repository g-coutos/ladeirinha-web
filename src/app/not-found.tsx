import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-serif">
        <span className="text-8xl text-center">404</span>
        <br /> Page Not Found
      </h1>
      <Link href="/" className="block mt-5 text-sm text-[#FC4C02] underline">
        Voltar para home
      </Link>
    </div>
  );
}
