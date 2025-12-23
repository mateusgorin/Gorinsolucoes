
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { 
  Layout, 
  Smartphone, 
  Search, 
  Zap, 
  MessageSquare, 
  Instagram, 
  Globe, 
  Star, 
  ShieldCheck, 
  PenTool,
  BarChart3,
  Code2,
  Layers,
  Rocket,
  MousePointer2,
  Bot
} from 'lucide-react';

const mainPillars = [
  {
    title: "ALTA PERFORMANCE",
    desc: "Sites que carregam em milissegundos. Velocidade é o fator principal para converter visitantes em clientes e ranquear no Google.",
    icon: Zap,
    stat: "99/100"
  },
  {
    title: "DESIGN ESTRATÉGICO",
    desc: "Não apenas bonito, mas funcional. Criamos interfaces intuitivas que guiam o olhar do usuário diretamente para a conversão.",
    icon: Layout,
    stat: "UX/UI"
  },
  {
    title: "INTELIGÊNCIA ARTIFICIAL",
    desc: "Integramos modelos avançados de IA para automação, chatbots inteligentes e personalização dinâmica de conteúdo.",
    icon: Bot,
    stat: "FUTURE"
  }
];

const services = [
  {
    icon: Layout,
    title: "DESIGN EXCLUSIVO",
    desc: "Interfaces únicas criadas do zero, sem templates prontos, focadas na identidade da sua marca.",
    category: "UI/UX"
  },
  {
    icon: Smartphone,
    title: "100% RESPONSIVO",
    desc: "Experiência perfeita em smartphones, tablets e desktops com adaptação fluida.",
    category: "MOBILE"
  },
  {
    icon: BarChart3,
    title: "SEO COMPLETO",
    desc: "Otimização on-page e técnica para garantir que seu site apareça nas primeiras páginas.",
    category: "RANKING"
  },
  {
    icon: Zap,
    title: "OTIMIZAÇÃO DE CACHE",
    desc: "Uso de tecnologias de ponta para compressão de imagens e carregamento instantâneo.",
    category: "SPEED"
  },
  {
    icon: MessageSquare,
    title: "WHATSAPP INTEGRADO",
    desc: "Botões flutuantes e fluxos de atendimento direto para converter leads em tempo real.",
    category: "VENDAS"
  },
  {
    icon: Instagram,
    title: "FEED SOCIAL",
    desc: "Integração direta com Instagram para aumentar autoridade e converter visitantes em seguidores.",
    category: "SOCIAL"
  },
  {
    icon: Globe,
    title: "CONEXÃO GOOGLE",
    desc: "Configuração completa de Google Meu Negócio, Analytics e Search Console no seu projeto.",
    category: "TOOLS"
  },
  {
    icon: Star,
    title: "REVIEWS & TRUST",
    desc: "Exibição de avaliações reais para gerar confiança e autoridade imediata no mercado.",
    category: "TRUST"
  },
  {
    icon: Bot,
    title: "IA GENERATIVA",
    desc: "Implementação de IA para auxílio em vendas, suporte e personalização de conteúdo.",
    category: "FUTURE"
  },
  {
    icon: ShieldCheck,
    title: "SEGURANÇA SSL",
    desc: "Proteção contra malwares e criptografia de dados com certificados de segurança inclusos.",
    category: "SAFETY"
  },
  {
    icon: PenTool,
    title: "COPY PERSUASIVO",
    desc: "Textos focados em vendas escritos para prender a atenção e converter o seu público.",
    category: "CONTENT"
  },
  {
    icon: Search,
    title: "CÓDIGO LIMPO",
    desc: "Desenvolvimento sem 'lixo digital', facilitando a leitura do Google e a manutenção futura.",
    category: "TECH"
  }
];

const processSteps = [
  { step: "01", title: "BRIEFING", icon: MessageSquare, desc: "Análise profunda do seu negócio e objetivos." },
  { step: "02", title: "DESIGN", icon: MousePointer2, desc: "Prototipagem da interface focada em UX/UI." },
  { step: "03", title: "BUILD", icon: Code2, desc: "Codificação limpa com tecnologias de elite." },
  { step: "04", title: "LAUNCH", icon: Rocket, desc: "Otimização final e publicação do seu projeto." }
];

const techStack = [
  "REACT", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION", "GEMINI AI", "NODE.JS", "VITE", "SEO PRO", "GOOGLE CLOUD"
];

export const Services: React.FC = () => {
  const m = motion as any;

  return (
    <section id="services" className="py-24 bg-cyber-black relative scroll-mt-24">
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
              <h3 className="text-xl font-mono font-bold text-white mb-4 tracking-tighter">{pillar.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{pillar.desc}</p>
            </m.div>
          ))}
        </div>

        {/* 2. Grade de Serviços Detalhada */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <Layers className="text-cyber-secondary" />
            <h3 className="font-mono text-white tracking-widest uppercase border-b border-cyber-secondary/30 pb-2">
              RECURSOS_TECNOLÓGICOS_INCLUSOS
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
                
                <h4 className="text-base font-mono font-bold text-white mb-3 tracking-wide group-hover:text-cyber-primary transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-300 text-sm font-sans leading-relaxed opacity-90 group-hover:opacity-100">
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
                <h4 className="font-mono font-bold text-white mb-2 tracking-widest">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-snug">{step.desc}</p>
              </m.div>
            ))}
          </div>
        </div>

        {/* 4. Tech Stack Ticker */}
        <div className="mt-16 overflow-hidden py-4 border-b border-cyber-primary/10 relative">
          <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite]">
             {[...techStack, ...techStack].map((tech, i) => (
               <span key={i} className="mx-8 font-mono text-xs text-cyber-primary/40 hover:text-cyber-primary transition-colors cursor-default">
                 {tech}
               </span>
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
          <h3 className="text-3xl font-mono font-bold text-white mb-4 relative z-10 uppercase tracking-tighter">PRONTO PARA EVOLUIR SUA PRESENÇA DIGITAL?</h3>
          <p className="font-sans text-gray-300 text-lg mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Criamos soluções digitais completas, unindo design, tecnologia e performance para estruturar negócios no ambiente digital com segurança e eficiência.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-10 py-4 bg-cyber-primary text-black font-mono font-bold uppercase tracking-widest clip-corner hover:bg-white hover:scale-105 transition-all relative z-10"
          >
            SOLICITAR CONSULTORIA <Zap size={18} />
          </a>
        </m.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
