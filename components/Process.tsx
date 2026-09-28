import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle, FileText, Layout, Code2, Rocket } from 'lucide-react';

interface ProcessStep {
  number: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  deliverables: string[];
  timing: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    tag: "IMERSÃO & ARQUITETURA",
    title: "Briefing Estratégico",
    desc: "Mapeamento rigoroso do seu modelo de negócio, persona do cliente ideal, diferenciais competitivos e definição da meta de conversão (vendas, orçamentos ou geração de leads B2B).",
    icon: FileText,
    deliverables: [
      "Alinhamento de proposta de valor e público",
      "Arquitetura de informação e fluxo de páginas",
      "Definição de cronograma fechado de entrega"
    ],
    timing: "Dia 1"
  },
  {
    number: "02",
    tag: "DIREÇÃO DE ARTE ACELERADA",
    title: "Prototipagem com IA & Design System",
    desc: "Exploração visual veloz com inteligência artificial para criar caminhos criativos e consolidação em um Design System autoral. Tipografia 'General Sans', hierarquia intencional e zero templates prontos.",
    icon: Layout,
    deliverables: [
      "Protótipo interativo em alta fidelidade",
      "Design tokens, cores e escala tipográfica exclusivos",
      "Validação estética antes da codificação final"
    ],
    timing: "Dias 2 a 3"
  },
  {
    number: "03",
    tag: "ENGENHARIA SOB MEDIDA",
    title: "Validação & Código Limpo",
    desc: "Desenvolvimento com React 19, TypeScript e Tailwind. Código semântico, arquitetura sem plugins lentos, transições táteis e otimização implacável para score 99+ no Google Lighthouse.",
    icon: Code2,
    deliverables: [
      "Stack moderna com React e TypeScript",
      "Carregamento sub-segundo (Core Web Vitals 99+)",
      "Responsividade perfeita em celular e desktop"
    ],
    timing: "Dias 4 a 6"
  },
  {
    number: "04",
    tag: "ENTREGA & OPERAÇÃO",
    title: "Deploy & Automações no Ar",
    desc: "Lançamento em infraestrutura global edge (Vercel/Cloudflare) com SSL automático. Conexão direta com WhatsApp Business API, formulários inteligentes e SEO técnico para o Google.",
    icon: Rocket,
    deliverables: [
      "Publicação em edge com domínio próprio e SSL",
      "Integrações de WhatsApp e formulários ativas",
      "Indexação no Google e entrega chave na mão"
    ],
    timing: "Dias 7 a 10"
  }
];

export const Process: React.FC = () => {
  return (
    <section 
      id="processo" 
      className="py-24 sm:py-32 md:py-40 bg-[#0B0B0E] text-[#F5F6FA] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-40 relative shadow-[0_-30px_70px_rgba(0,0,0,0.45)] border-t border-white/10 scroll-mt-20"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Layout Grid with STICKY HEADER on the left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: STICKY Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 lg:self-start">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>02 // Método de Trabalho</span>
            </div>

            <h2 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.08] tracking-[-0.02em] text-[#F5F6FA]">
              Do briefing ao ar em 4 etapas estruturadas.
            </h2>

            <p className="font-body text-[#9496A6] text-base sm:text-lg leading-relaxed">
              Aliamos a velocidade da inteligência artificial no início ao rigor de código puro na execução. Você acompanha cada etapa com transparência e sem burocracia.
            </p>

            <div className="p-6 rounded-[2rem] bg-[#141418] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold">
                  Prazo Total Estimado
                </span>
                <span className="font-mono text-xs text-white/60">
                  BSB DF
                </span>
              </div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA]">
                5 a 10 dias úteis
              </div>
              <p className="font-body text-xs text-[#9496A6] leading-relaxed">
                Entrega acelerada sem perda de qualidade, validada passo a passo diretamente com quem desenvolve.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 font-display font-semibold text-xs uppercase tracking-wider text-[#00D4FF] hover:text-white transition-colors group"
              >
                <span>Solicitar proposta para o seu projeto</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Steps revealed on scroll */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[3.2rem] bg-[#121216] border border-white/10 p-8 sm:p-10 md:p-12 hover:border-white/25 transition-all duration-300 relative overflow-hidden group shadow-xl"
                >
                  {/* Step Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#00D4FF] font-semibold tracking-wider uppercase">
                          <Icon size={14} />
                          <span>// {step.tag}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 font-mono text-[11px]">
                          {step.timing}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA] tracking-tight pt-1">
                        {step.title}
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-[1.6rem] bg-white/[0.04] border border-white/10 text-[#00D4FF] flex items-center justify-center font-display font-bold text-lg group-hover:bg-[#00D4FF] group-hover:text-[#0B0B0E] transition-colors duration-300 shrink-0">
                      {step.number}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-[#9496A6] text-base sm:text-lg leading-relaxed mb-8">
                    {step.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                      Entregáveis da Etapa:
                    </span>
                    <ul className="space-y-2">
                      {step.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[#F5F6FA]/90">
                          <CheckCircle size={15} className="text-[#00D4FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
