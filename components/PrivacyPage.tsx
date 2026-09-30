import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = "Política de Privacidade | Gorin Soluções";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#000000] selection:bg-black selection:text-white" style={{ backgroundColor: 'var(--bg-light, #FAFAF9)' }}>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft size={16} />
            </div>
            <span className="font-bold tracking-tighter uppercase text-base">GORIN<span className="text-[#00D4FF]">.</span></span>
          </button>

          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-black/60">
            <button
              onClick={onBack}
              className="px-4 py-2 rounded-full border border-black/15 text-black hover:bg-black hover:text-white transition-all text-xs font-sans font-medium cursor-pointer"
            >
              Voltar ao site
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[720px] mx-auto px-5 sm:px-8 pt-36 pb-28">
        <div className="transition-opacity duration-500 opacity-100">
          <h1 className="font-sans font-medium text-black tracking-[-0.03em] mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
            Política de Privacidade
          </h1>
          <p className="font-mono text-xs text-black/60 mb-8">
            Última atualização: setembro de 2026
          </p>

          <p className="text-base sm:text-[1.0625rem] leading-[1.6] text-black/85 mb-8">
            Esta política explica de forma direta como a <strong>Gorin Soluções</strong> (operada por Mateus Miranda Amaral, em Brasília, DF) trata os seus dados em conformidade com a LGPD (Lei nº 13.709/2018).
          </p>

          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-black mt-8 mb-3">
            1. Dados Coletados e Finalidade
          </h2>
          <p className="text-base sm:text-[1.0625rem] leading-[1.6] text-black/85 mb-4">
            Coletamos apenas as informações que você nos envia voluntariamente:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-[1.0625rem] leading-[1.6] text-black/85 mb-6">
            <li><strong>Contato e Briefing:</strong> Nome, e-mail, telefone, preferências de orçamento e detalhes sobre o projeto enviados via formulários para iniciar atendimento e propostas.</li>
            <li><strong>Comunicações Diretas:</strong> Mensagens trocadas via WhatsApp, e-mail (<a href="mailto:mateusmirandaamaral@gmail.com" className="underline hover:text-black">mateusmirandaamaral@gmail.com</a>) ou redes sociais.</li>
            <li><strong>Dados Técnicos:</strong> Registros automáticos de acesso (IP e navegador) mantidos pelos servidores de hospedagem para segurança e estabilidade.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-black mt-8 mb-3">
            2. Compartilhamento e Serviços de Terceiros
          </h2>
          <p className="text-base sm:text-[1.0625rem] leading-[1.6] text-black/85 mb-6">
            Não vendemos nem alugamos seus dados. Utilizamos apenas serviços essenciais para o funcionamento da operação e atendimento (WhatsApp/Meta para mensagens, FormSubmit para envio de formulários, Gmail para e-mails, Vercel para hospedagem e Cloudinary/Google Fonts para recursos visuais). Alguns destes serviços podem processar dados nos Estados Unidos sob salvaguardas contratuais.
          </p>

          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-black mt-8 mb-3">
            3. Seus Direitos (LGPD)
          </h2>
          <p className="text-base sm:text-[1.0625rem] leading-[1.6] text-black/85 mb-6">
            Você pode solicitar a qualquer momento a confirmação, acesso, correção ou exclusão dos seus dados pessoais. Para exercer seus direitos ou tirar dúvidas, entre em contato diretamente pelo e-mail <a href="mailto:mateusmirandaamaral@gmail.com" className="underline hover:text-black">mateusmirandaamaral@gmail.com</a> ou WhatsApp (61) 98129-0099.
          </p>

          <div className="border-t border-black/10 pt-6 mt-10 text-xs text-black/60 font-mono">
            Gorin Soluções · Brasília, DF · mateusmirandaamaral@gmail.com
          </div>
        </div>
      </main>
    </div>
  );
};
