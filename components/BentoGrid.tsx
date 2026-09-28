import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Bot, LifeBuoy, Check, Gauge, Layers, Shield } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section 
      id="diferenciais"
      className="py-24 sm:py-32 md:py-40 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[4rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 relative shadow-[0_-30px_70px_rgba(0,0,0,0.3)] border-t border-black/[0.06] scroll-mt-20"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span>01 // Diferenciais de Engenharia</span>
          </div>

          <h2 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.02em] text-[#0B0B0E] mb-6">
            Construído para quem exige velocidade e padrão estúdio.
          </h2>

          <p className="font-body text-[#555660] text-base sm:text-lg md:text-xl leading-relaxed">
            Eliminamos os vícios das agências tradicionais: reuniões burocráticas, templates inchados e prazos de meses. Aqui você tem IA na aceleração e código limpo na entrega.
          </p>
        </div>

        {/* Bento Grid: 1 Bloco Grande + 3 Menores */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* BLOCO GRANDE (Span 12 cols / Destaque - Radius 3.2rem) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 rounded-[3.2rem] bg-white border border-black/10 p-8 sm:p-12 lg:p-14 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 text-[#0B0B0E] font-mono text-xs font-semibold">
                  <Zap size={14} className="text-[#00D4FF]" />
                  <span>DIFERENCIAL #01 // VELOCIDADE EXPONENCIAL</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B0B0E] tracking-tight leading-tight">
                  Velocidade de Entrega com IA: no ar em 5 a 10 dias.
                </h3>

                <p className="font-body text-[#555660] text-base sm:text-lg leading-relaxed">
                  Enquanto agências convencionais gastam 45 a 90 dias em processos lentos e retrabalho, utilizamos pipelines assistidos por inteligência artificial para estruturação de wireframes, prototipagem acelerada e automação de código. O resultado é um produto no ar pronto para captar clientes em dias.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/10">
                  <div>
                    <div className="font-display font-bold text-2xl text-[#0B0B0E]">
                      5-10 Dias
                    </div>
                    <div className="font-mono text-xs text-[#555660] mt-0.5">
                      Prazo Médio de Deploy
                    </div>
                  </div>

                  <div>
                    <div className="font-display font-bold text-2xl text-[#0B0B0E]">
                      100% Autoral
                    </div>
                    <div className="font-mono text-xs text-[#555660] mt-0.5">
                      Design Exclusivo para Sua Marca
                    </div>
                  </div>

                  <div>
                    <div className="font-display font-bold text-2xl text-[#0B0B0E]">
                      Sem Atrasos
                    </div>
                    <div className="font-mono text-xs text-[#555660] mt-0.5">
                      Cronograma Fechado em Contrato
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Comparative Breakdown Box */}
              <div className="lg:col-span-5 bg-[#0B0B0E] text-[#F5F6FA] rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-xl border border-black/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#9496A6]">
                    Comparativo Real
                  </span>
                  <span className="font-mono text-xs text-[#00D4FF]">
                    GORIN VS MERCADO
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5 opacity-60">
                    <div className="text-[#9496A6] font-semibold">Agência Tradicional</div>
                    <div className="text-white/80">45 a 90 dias úteis de espera</div>
                    <div className="text-white/60 text-xs">Templates pré-fabricados com excesso de plugins</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#00D4FF]/15 border border-[#00D4FF]/40 space-y-2">
                    <div className="flex items-center justify-between text-[#00D4FF] font-semibold">
                      <span>Gorin Soluções com IA</span>
                      <Check size={16} />
                    </div>
                    <div className="text-[#F5F6FA] font-bold text-base">5 a 10 dias úteis</div>
                    <div className="text-[#9496A6] text-xs">Código React puro, carregamento sub-segundo e automações</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* BLOCO MENOR 1: Stack Moderna & Código Limpo (Radius 3.2rem) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-[3.2rem] bg-white border border-black/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[1.6rem] bg-[#0B0B0E] text-[#00D4FF] flex items-center justify-center">
                <Cpu size={22} />
              </div>

              <div className="font-mono text-xs text-[#555660] uppercase tracking-wider font-semibold">
                DIFERENCIAL #02
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B0B0E] tracking-tight">
                Stack Moderna & Zero Bloatware
              </h3>

              <p className="font-body text-[#555660] text-sm sm:text-base leading-relaxed">
                Desenvolvemos com React 19, TypeScript e Tailwind CSS. Nada de WordPress lento ou construtores visuais que quebram com atualizações. Seu site carrega em menos de 1 segundo.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#0B0B0E] font-semibold">
                CORE WEB VITALS 99+
              </span>
              <Gauge size={18} className="text-[#00D4FF]" />
            </div>
          </motion.div>

          {/* BLOCO MENOR 2: Automação Inteligente (Radius 3.2rem) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-[3.2rem] bg-white border border-black/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[1.6rem] bg-[#0B0B0E] text-[#00D4FF] flex items-center justify-center">
                <Bot size={22} />
              </div>

              <div className="font-mono text-xs text-[#555660] uppercase tracking-wider font-semibold">
                DIFERENCIAL #03
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B0B0E] tracking-tight">
                Automação & Integração com IA
              </h3>

              <p className="font-body text-[#555660] text-sm sm:text-base leading-relaxed">
                Conectamos seu site diretamente ao WhatsApp Business API, CRM, planilhas automatizadas e fluxos com inteligência artificial para qualificar leads e agilizar o fechamento de propostas.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#0B0B0E] font-semibold">
                WHATSAPP · APIS · CRM
              </span>
              <Layers size={18} className="text-[#00D4FF]" />
            </div>
          </motion.div>

          {/* BLOCO MENOR 3: Suporte Contínuo & Direto (Radius 3.2rem) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-[3.2rem] bg-white border border-black/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[1.6rem] bg-[#0B0B0E] text-[#00D4FF] flex items-center justify-center">
                <LifeBuoy size={22} />
              </div>

              <div className="font-mono text-xs text-[#555660] uppercase tracking-wider font-semibold">
                DIFERENCIAL #04
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B0B0E] tracking-tight">
                Suporte Contínuo & Sem Intermediários
              </h3>

              <p className="font-body text-[#555660] text-sm sm:text-base leading-relaxed">
                Você lida diretamente com os engenheiros responsáveis pelo seu projeto. Resolução ágil, manutenção preventiva, hospedagem de alto desempenho em edge e suporte direto em Brasília.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#0B0B0E] font-semibold">
                CANAL DIRETO // BSB DF
              </span>
              <Shield size={18} className="text-[#00D4FF]" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
