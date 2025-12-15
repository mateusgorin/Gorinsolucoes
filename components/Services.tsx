import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Layout, Smartphone, Search, Gauge, Globe } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "WEB_DESIGN",
    desc: "Interfaces exclusivas focadas em identidade visual de alta tecnologia.",
    cols: "md:col-span-2"
  },
  {
    icon: Smartphone,
    title: "RESPONSIVIDADE",
    desc: "Adaptação fluida para todos os dispositivos e resoluções.",
    cols: "md:col-span-1"
  },
  {
    icon: Search,
    title: "OTIMIZAÇÃO_SEO",
    desc: "Protocolos avançados para indexação e visibilidade máxima.",
    cols: "md:col-span-2"
  },
  {
    icon: Gauge,
    title: "PERFORMANCE",
    desc: "Velocidade de processamento extrema para retenção de usuários.",
    cols: "md:col-span-1"
  },
  {
    icon: Globe,
    title: "LANDING_PAGES",
    desc: "Páginas de conversão tática para objetivos específicos.",
    cols: "md:col-span-3"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-cyber-black relative scroll-mt-24">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="MÓDULOS_DO_SISTEMA" subtitle="CAPACIDADES" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-cyber-slate/50 border border-cyber-primary/20 p-8 clip-corner hover:border-cyber-primary/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all group ${service.cols}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary group-hover:bg-cyber-primary group-hover:text-black transition-colors">
                  <service.icon size={24} />
                </div>
                <div className="text-cyber-secondary/50 font-mono text-xs">MOD_0{idx + 1}</div>
              </div>
              
              <h3 className="text-xl font-mono font-bold text-white mb-3 tracking-wide group-hover:text-cyber-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm font-sans leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};