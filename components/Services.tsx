import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { 
  Layout, 
  Search, 
  Zap, 
  MessageSquare, 
  ShieldCheck, 
  Layers,
  Rocket,
  MousePointer2,
  Bot,
  Code2
} from 'lucide-react';

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
    icon: Bot,
    title: "Inteligência Artificial Avançada",
    desc: "Chatbot com IA + textos persuasivos que vendem + tecnologia moderna (React, TypeScript, Gemini).",
    category: "FUTURO"
  }
];

const processSteps = [
  { step: "01", title: "BRIEFING", icon: MessageSquare, desc: "Análise profunda do seu negócio e objetivos." },
  { step: "02", title: "DESIGN", icon: MousePointer2, desc: "Prototipagem da interface focada em UX/UI." },
  { step: "03", title: "BUILD", icon: Code2, desc: "Codificação limpa com tecnologias de elite." },
  { step: "04", title: "LAUNCH", icon: Rocket, desc: "Otimização final e publicação do seu projeto." }
];

export const Services: React.FC = () => {
  const m = motion as any;

  return (
    <section id="services" className="pt-24 pb-12 bg-cyber-black relative scroll-mt-24 transition-colors duration-300">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="SOLUÇÕES COMPLETAS" 
          subtitle="O QUE ENTREGAMOS" 
        />

        {/* 1. Pilares de Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {mainPillars.map((pillar, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cyber-slate/50 border-l-4 border-cyber-primary p-8 clip-corner shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:bg-cyber-primary/10 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <pillar.icon className="w-12 h-12 text-cyber-primary group-hover:scale-110 transition-transform" />
                <span className="font-mono text-cyber-secondary font-bold text-lg">{pillar.stat}</span>
              </div>
              <h3 className="text-xl font-mono font-bold text-cyber-white mb-4 tracking-tighter">{pillar.title}</h3>
              <p className="text-cyber-gray text-base leading-relaxed">{pillar.desc}</p>
            </m.div>
          ))}
        </div>

        {/* 2. Grade de Serviços Detalhada */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <Layers className="text-cyber-secondary" />
            <h3 className="font-mono text-cyber-white tracking-widest uppercase border-b border-cyber-secondary/30 pb-2">
              Tudo que seu site já vem incluso
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-cyber-slate/20 border border-cyber-primary/10 p-6 clip-corner-sm hover:border-cyber-primary/60 transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex justify-between items-center mb-5">
                  <div className="p-2.5 bg-cyber-primary/10 text-cyber-primary group-hover:bg-cyber-primary group-hover:text-black transition-all">
                    <service.icon size={24} />
                  </div>
                  <span className="font-mono text-[10px] text-cyber-primary tracking-widest border border-cyber-primary/40 px-2.5 py-1 bg-cyber-primary/5">
                    {service.category}
                  </span>
                </div>
                
                <h4 className="text-base font-mono font-bold text-cyber-white mb-3 tracking-wide group-hover:text-cyber-primary transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-cyber-gray text-sm font-sans leading-relaxed opacity-90 group-hover:opacity-100">
                  {service.desc}
                </p>
                
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyber-primary/20 group-hover:border-cyber-primary transition-colors" />
              </m.div>
            ))}
          </div>
        </div>

        {/* 3. Fluxo de Processo */}
        <div className="py-20 border-y border-cyber-primary/10 bg-cyber-dark/40 backdrop-blur-sm px-8 clip-corner relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-cyber-primary/20">PROCESS_TRACKER_V2</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, idx) => (
              <m.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-cyber-black border-2 border-cyber-secondary/30 rounded-full flex items-center justify-center group-hover:border-cyber-primary transition-colors z-10 relative">
                    <step.icon className="w-8 h-8 text-cyber-secondary group-hover:text-cyber-primary transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-cyber-primary text-black font-mono text-xs font-bold px-1.5 py-0.5">
                    {step.step}
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-cyber-secondary/30 to-transparent -translate-y-1/2 z-0" />
                  )}
                </div>
                <h4 className="font-mono font-bold text-cyber-white mb-2 tracking-widest">{step.title}</h4>
                <p className="text-cyber-gray text-sm leading-snug">{step.desc}</p>
              </m.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <m.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-10 border border-cyber-primary/30 bg-cyber-primary/5 text-center max-w-4xl mx-auto clip-corner relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-cyber-grid bg-[size:20px_20px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <h3 className="text-3xl font-mono font-bold text-cyber-white mb-4 relative z-10 uppercase tracking-tighter">PRONTO PARA EVOLUIR SUA PRESENÇA DIGITAL?</h3>
          <p className="font-sans text-cyber-gray text-lg mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Criamos soluções digitais completas, unindo design, tecnologia e performance para estruturar negócios no ambiente digital com segurança e eficiência.
          </p>
          <Button 
            href="#contact" 
            variant="primary"
            className="px-10 py-4 relative z-10"
          >
            SOLICITAR ORÇAMENTO GRÁTIS <Zap size={18} className="ml-2" />
          </Button>
        </m.div>
      </div>
    </section>
  );
};