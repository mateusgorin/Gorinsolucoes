import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { 
  Layout, 
  Search, 
  Zap, 
  MessageSquare, 
  ShieldCheck, 
  Rocket,
  MousePointer2,
  Bot,
  Code2,
  FileCheck
} from 'lucide-react';
import MagneticButton from './MagneticButton';

const mainPillars = [
  {
    title: "VELOCIDADE QUE CONVERTE",
    desc: "Um site lento perde cliente antes mesmo de ele ler a primeira linha. Entregamos sites que carregam instantaneamente e ranqueiam melhor no Google.",
    icon: Zap,
    stat: "99/100"
  },
  {
    title: "DESIGN QUE GUIA O CLIENTE",
    desc: "Cada botão, cor e espaço tem um propósito: levar seu visitante até o contato. Não é só estética — é estratégia visual.",
    icon: Layout,
    stat: "UX/UI"
  },
  {
    title: "SEU SITE TRABALHA POR VOCÊ",
    desc: "Integramos IA para responder clientes, qualificar leads e personalizar conteúdo — mesmo quando você está offline.",
    icon: Bot,
    stat: "FUTURE"
  }
];

const services = [
  {
    icon: Layout,
    title: "Design Único & Responsivo",
    desc: "Interface criada do zero com identidade visual exclusiva e que funciona perfeitamente em celular, tablet e desktop.",
    category: "INCLUSO"
  },
  {
    icon: Zap,
    title: "Carregamento Instantâneo",
    desc: "Seu site carrega em frações de segundo, sem travamentos, mesmo com animações e imagens.",
    category: "VELOZ"
  },
  {
    icon: Search,
    title: "Visibilidade no Google",
    desc: "Otimizado para aparecer nas buscas do Google + integração completa com Google Meu Negócio.",
    category: "RANQUEADO"
  },
  {
    icon: MessageSquare,
    title: "Contato Direto com Clientes",
    desc: "Botão de WhatsApp direto + Instagram conectado para você responder e fechar negócios na hora.",
    category: "RÁPIDO"
  },
  {
    icon: ShieldCheck,
    title: "Confiança e Proteção Total",
    desc: "Avaliações reais em destaque + certificado SSL e proteção total de segurança.",
    category: "SAFE"
  },
  {
    icon: Code2,
    title: "TECNOLOGIA DE PONTA",
    desc: "Desenvolvido com React, TypeScript e Vite — as mesmas tecnologias usadas por grandes empresas. Rápido, estável e fácil de evoluir.",
    category: "FUTURO"
  }
];

const processSteps = [
  { step: "01", title: "BRIEFING", icon: MessageSquare, desc: "Análise profunda do seu negócio e objetivos." },
  { step: "02", title: "PROPOSTA", icon: FileCheck, desc: "Escopo, prazo e investimento definidos com clareza." },
  { step: "03", title: "DESIGN", icon: MousePointer2, desc: "Prototipagem da interface focada em UX/UI." },
  { step: "04", title: "BUILD", icon: Code2, desc: "Codificação limpa com tecnologias de elite." },
  { step: "05", title: "TESTES", icon: ShieldCheck, desc: "Validação completa de performance, SEO e responsividade antes de publicar." },
  { step: "06", title: "ENTREGA & TREINAMENTO", icon: Rocket, desc: "Publicação do projeto + você aprende a gerenciar seu site com autonomia." }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAF9] border-t border-black/10 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <SectionHeading 
          title="SOLUÇÕES COMPLETAS" 
          subtitle="02 — SERVIÇOS & ENTREGÁVEIS" 
        />

        {/* 1. Pilares de Destaque - Editorial 1px hair dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {mainPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white border border-black/10 p-8 rounded-[6px] flex flex-col justify-between hover:border-black/30 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-[4px] bg-[#FAFAF9] border border-black/10 flex items-center justify-center text-[#0B0B0C]">
                    <pillar.icon size={20} />
                  </div>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#00D4FF] text-[#0B0B0C] rounded-[2px]">
                    {pillar.stat}
                  </span>
                </div>
                <h3 className="font-archivo font-black text-xl text-[#0B0B0C] mb-3 uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[#52525B] text-sm leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 font-mono text-[11px] text-[#71717A]">
                0{idx + 1} // PILAR ESTRATÉGICO
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Grade de Serviços Detalhada */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-black/10 pb-4">
            <span className="w-2 h-2 bg-[#00D4FF]" />
            <h3 className="font-mono text-xs text-[#0B0B0C] tracking-[0.2em] uppercase font-bold">
              TUDO QUE SEU SITE JÁ VEM INCLUSO
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-white border border-black/10 p-7 rounded-[6px] flex flex-col justify-between hover:border-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-sm cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <div className="p-2 bg-[#FAFAF9] text-[#0B0B0C] rounded-[4px] border border-black/5">
                      <service.icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] text-[#0B0B0C] font-semibold tracking-wider border border-black/10 px-2 py-0.5 rounded-[2px]">
                      {service.category}
                    </span>
                  </div>
                  
                  <h4 className="font-archivo font-bold text-base text-[#0B0B0C] mb-2.5 tracking-tight">
                    {service.title}
                  </h4>
                  
                  <p className="text-[#52525B] text-xs leading-relaxed font-sans">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Fluxo de Processo (Editorial Step Layout) */}
        <div className="mb-24 bg-white border border-black/10 p-8 sm:p-10 rounded-[6px]">
          <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-8">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#0B0B0C] uppercase font-bold">
              <span className="w-2 h-2 bg-[#00D4FF]" />
              <span>METODOLOGIA DE EXECUÇÃO EM 6 PASSOS</span>
            </div>
            <span className="font-mono text-[10px] text-[#71717A]">CICLO ÁGIL</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.step}
                className="border border-black/10 p-6 rounded-[4px] bg-[#FAFAF9] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono font-bold text-sm bg-[#00D4FF] text-[#0B0B0C] px-2 py-0.5 rounded-[2px]">
                    {step.step}
                  </span>
                  <step.icon size={18} className="text-[#71717A]" />
                </div>
                <h4 className="font-archivo font-bold text-sm uppercase tracking-tight text-[#0B0B0C] mb-2">
                  {step.title}
                </h4>
                <p className="font-sans text-xs text-[#52525B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-14 border border-black/10 bg-white text-center max-w-4xl mx-auto rounded-[6px]"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-black/10 bg-[#FAFAF9] rounded-full">
            <span className="w-2 h-2 bg-[#00D4FF]" />
            <span className="font-mono text-[11px] text-[#0B0B0C] uppercase tracking-wider font-semibold">
              PRÓXIMO PASSO
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-archivo font-black text-[#0B0B0C] mb-4 uppercase tracking-tight">
            PRONTO PARA EVOLUIR SUA PRESENÇA DIGITAL?
          </h3>
          <p className="font-sans text-[#52525B] text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Criamos soluções digitais completas, unindo design, tecnologia e performance para estruturar negócios no ambiente digital com segurança e eficiência.
          </p>
          <div className="flex justify-center">
            <MagneticButton href="#contact">
              SOLICITAR ORÇAMENTO GRÁTIS
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
