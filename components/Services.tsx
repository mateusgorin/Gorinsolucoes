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
  Code2,
  FileCheck
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 perspective-1000">
            {services.map((service, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative bg-cyber-slate/20 border border-cyber-primary/10 p-6 clip-corner-sm hover:border-cyber-primary/60 transition-all duration-300 h-full flex flex-col transform-gpu"
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

        {/* 3. Fluxo de Processo (Marquee) */}
        <div className="py-10 bg-cyber-dark/40 backdrop-blur-sm clip-corner relative overflow-hidden group/marquee">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-cyber-primary/20 z-20">PROCESS_TRACKER_V2</div>
          
          {/* Fading edges for better look */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-cyber-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-cyber-black to-transparent z-10 pointer-events-none" />

          <div className="relative overflow-hidden pt-8 pb-4">
            <m.div 
              className="flex w-fit items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 25, 
                ease: "linear", 
                repeat: Infinity 
              }}
              style={{ display: 'flex' }}
            >
              {[1, 2].map((iteration) => (
                <React.Fragment key={iteration}>
                  {processSteps.map((step, idx) => (
                    <div 
                      key={`${iteration}-${idx}`}
                      className="flex-shrink-0 px-3 sm:px-6 w-[240px] sm:w-[300px] md:w-[340px]"
                    >
                      <div className="relative flex flex-col items-center text-center group h-full min-h-[220px] justify-start p-6 bg-cyber-slate/10 border border-cyber-primary/5 hover:border-cyber-primary/30 transition-all duration-500 clip-corner-sm">
                        <div className="mb-6 relative">
                          {/* Icon Container */}
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyber-black border-2 border-cyber-secondary/30 rounded-full flex items-center justify-center group-hover:border-cyber-primary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-500 z-10 relative">
                            <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-secondary group-hover:text-cyber-primary transition-colors" />
                          </div>
                          
                          {/* Number badge */}
                          <div className="absolute -top-1 -right-1 bg-cyber-primary text-black font-mono text-[10px] font-bold px-2 py-0.5 leading-none z-20 shadow-lg">
                            {step.step}
                          </div>
                          
                          {/* Decorative spinning ring on hover */}
                          <m.div 
                            className="absolute -inset-2 border border-cyber-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        
                        <h4 className="font-mono font-bold text-cyber-white mb-2 tracking-widest uppercase text-xs sm:text-sm md:text-base group-hover:text-cyber-primary transition-colors">
                          {step.title}
                        </h4>
                        
                        <p className="text-cyber-gray text-[10px] sm:text-xs md:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity max-w-[220px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Separator between iterations */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center px-12 sm:px-20 opacity-30">
                    <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-cyber-primary to-transparent" />
                    <span className="font-mono text-[10px] text-cyber-primary tracking-[0.3em] uppercase mt-4 whitespace-nowrap">REINICIANDO CICLO</span>
                    <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-cyber-primary to-transparent mt-4" />
                  </div>
                </React.Fragment>
              ))}
            </m.div>
          </div>
        </div>

        {/* CTA Section */}
        <m.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-10 border border-cyber-primary/30 bg-cyber-primary/5 text-center max-w-4xl mx-auto clip-corner relative group overflow-hidden"
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