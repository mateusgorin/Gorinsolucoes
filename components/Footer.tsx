import React from 'react';
import { ArrowUpRight, MessageCircle, Instagram, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 sm:py-20 bg-[#0B0B0E] text-[#F5F6FA] border-t border-white/10 relative z-50">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Editorial Manifesto */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center font-display font-bold text-2xl sm:text-3xl tracking-[-0.03em] select-none">
              <span>GORIN</span>
              <span className="text-[#00D4FF] ml-0.5">.</span>
            </div>
            <p className="font-body text-[#9496A6] text-sm sm:text-base max-w-md leading-relaxed">
              Agência de desenvolvimento web com inteligência artificial, automação e entrega rápida. Sediados em Brasília-DF com atendimento a clientes de alta exigência em todo o país.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#00D4FF]">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>CÓDIGO PURO · VELOCIDADE SUB-SEGUNDO · SEM MOCK</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-sans text-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-[#00D4FF] mb-2 font-semibold">
              // Navegação
            </p>
            <ul className="space-y-2.5 font-body">
              <li>
                <a 
                  href="/servicos" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/servicos') {
                      window.history.pushState({}, '', '/servicos');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[#9496A6] hover:text-[#00D4FF] transition-colors"
                >
                  01. Catálogo de Serviços
                </a>
              </li>
              <li>
                <a 
                  href="/projetos" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/projetos') {
                      window.history.pushState({}, '', '/projetos');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[#9496A6] hover:text-[#00D4FF] transition-colors"
                >
                  02. Portfólio de Projetos
                </a>
              </li>
              <li>
                <a 
                  href="/sobre" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/sobre') {
                      window.history.pushState({}, '', '/sobre');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[#9496A6] hover:text-[#00D4FF] transition-colors"
                >
                  03. Sobre a Gorin
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/blog') {
                      window.history.pushState({}, '', '/blog');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[#9496A6] hover:text-[#00D4FF] transition-colors"
                >
                  04. Blog & Artigos
                </a>
              </li>
              <li>
                <a 
                  href="/contato" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/contato') {
                      window.history.pushState({}, '', '/contato');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[#9496A6] hover:text-[#00D4FF] transition-colors"
                >
                  05. Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3 space-y-3 font-sans text-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-[#00D4FF] mb-2 font-semibold">
              // Contato Direto
            </p>
            <div className="space-y-2 text-[#9496A6] font-body">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[#00D4FF]" />
                <span>Brasília, Distrito Federal</span>
              </p>
              <a 
                href="https://wa.me/5561981290099" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F5F6FA] hover:text-[#00D4FF] transition-colors font-mono text-xs font-semibold pt-1"
              >
                <MessageCircle size={14} className="text-[#00D4FF]" />
                <span>(61) 98129-0099</span>
                <ArrowUpRight size={13} />
              </a>
              <a 
                href="https://www.instagram.com/mateusgorin?igsh=a3Rnc2p0ZzE4ZWFz" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-[#9496A6] hover:text-[#F5F6FA] transition-colors text-xs font-mono pt-1"
              >
                <Instagram size={14} className="text-[#00D4FF]" />
                <span>@mateusgorin</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9496A6]">
          <p>© 2026 Gorin Soluções. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            <span>GENERAL SANS + MANROPE</span>
            <span>·</span>
            <span className="text-[#00D4FF]">CORE WEB VITALS 99+</span>
            <span>·</span>
            <span>BRASÍLIA - DF</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
