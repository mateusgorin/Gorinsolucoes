import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { MagneticCta } from './MagneticCta';

interface NotFoundPageProps {
  onHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onHome }) => {
  useEffect(() => {
    document.title = "Página não encontrada | Gorin Soluções";

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Header */}
      <header className="px-6 h-20 flex items-center justify-between border-b border-black/5">
        <button
          onClick={onHome}
          className="group flex items-center gap-2.5 text-sm font-semibold text-black hover:text-[#00D4FF] transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
            <ArrowLeft size={16} />
          </div>
          <span className="font-bold tracking-tighter uppercase text-base">GORIN<span className="text-[#00D4FF]">.</span></span>
        </button>

        <span className="text-xs font-mono uppercase tracking-widest text-black/50">
          Erro 404
        </span>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <span className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4 block">
          404 // NÃO ENCONTRADO
        </span>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-black mb-6">
          Página não encontrada
        </h1>
        <p className="text-black/70 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
          O link que você tentou acessar não existe ou pode ter sido movido. Toque no botão abaixo para retornar à página inicial.
        </p>

        <MagneticCta
          onClick={onHome}
          variant="fill"
          className="!px-8 !py-4 font-medium text-base cursor-pointer"
        >
          Voltar para a página inicial
        </MagneticCta>
      </main>

      {/* Footer minimal */}
      <footer className="px-6 py-6 text-center border-t border-black/5 text-xs text-black/40 font-mono">
        © 2026 Gorin Soluções
      </footer>
    </div>
  );
};
