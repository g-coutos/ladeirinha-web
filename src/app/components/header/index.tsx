export const Header = () => {
  return (
    <header className="max-w-5xl w-full mx-auto p-4 lg:px-0">
      <nav className="mx-auto flex justify-center md:justify-between items-center">
        <ul className="flex flex-row items-center justify-center gap-2 md:gap-14 font-mono text-sm">
          <li>
            <a href="#como-funciona">Como Funciona</a>
          </li>
          <li>|</li>
          <li>
            <a href="#por-que-usar">Por Que Usar</a>
          </li>
          <li>|</li>
          <li>
            <a href="#precos">Preços</a>
          </li>
        </ul>
        <a
          href="#entrar-na-lista"
          className="hidden md:block p-2 text-xs text-white font-semibold bg-[#FC4C02] rounded"
        >
          Entrar na Lista de Espera
        </a>
      </nav>
    </header>
  );
};
