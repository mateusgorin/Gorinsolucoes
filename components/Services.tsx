import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Layout, Smartphone, Search, Gauge, Globe } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "CRIAÇÃO_DE_SITES",
    desc: "Sites institucionais e profissionais com design exclusivo que fortalecem sua marca.",
    cols: "md:col-span-2"
  },
  {
    icon: Smartphone,
    title: "SITES_RESPONSIVOS",
    desc: "Layouts que funcionam perfeitamente em celulares, tablets e desktops.",
    cols: "md:col-span-1"
  },
  {
    icon: Search,
    title: "OTIMIZAÇÃO_SEO",
    desc: "Estratégias para colocar seu site na primeira página do Google e atrair clientes.",
    cols: "md:col-span-2"
  },
  {
    icon: Gauge,
    title: "SITES_RÁPIDOS",
    desc: "Performance extrema para garantir que seu cliente não abandone a página.",
    cols: "md:col-span-1"
  },
  {
    icon: Globe,
    title: "LANDING_PAGES",
    desc: "Páginas de alta conversão focadas em vendas e captura de leads.",
    cols: "md:col-span-3"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-cyber-black relative scroll-mt-24">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="NOSSAS_SOLUÇÕES" subtitle="SERVIÇOS" />

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
                <div className="text-cyber-secondary/50 font-mono text-xs">SRV_0{idx + 1}</div>
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