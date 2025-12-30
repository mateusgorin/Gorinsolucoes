import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ExternalLink, Database, PiggyBank, Hammer } from 'lucide-react';

interface ProjectData {
  title: string;
  category: string;
  tags: string[];
  link: string;
  image?: string;
}

const projects: ProjectData[] = [
  {
    title: "BRINCA MÓVEL",
    category: "SITE INSTITUCIONAL",
    tags: ["REACT", "E-COMMERCE UI", "SEO"],
    link: "https://www.brincamoveloficial.com.br",
    image: "https://i.postimg.cc/DyTbPrhZ/Captura-de-tela-2025-12-26-131258.jpg"
  },
  {
    title: "MÃOS DE LEIDE",
    category: "SITE INSTITUCIONAL",
    tags: ["REACT", "DESIGN UI", "SEO"],
    link: "https://www.maosdeleide.com.br",
    image: "https://i.ibb.co/xKpHzBYY/Captura-de-tela-2025-12-16-125349.jpg"
  },
  {
    title: "EM BREVE",
    category: "SISTEMA WEB",
    tags: ["DASHBOARD", "API", "REACT"],
    link: "#",
    // image: undefined - Ativa o modo "Em construção"
  }
];

export const Projects: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-dark scroll-mt-24">
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 w-full h-[1px] bg-cyber-primary/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="PROJETOS RECENTES" subtitle="PORTFÓLIO" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="border border-cyber-primary/20 bg-cyber-black clip-corner overflow-hidden transition-all duration-300 group-hover:border-cyber-primary group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] h-full flex flex-col">
                
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden bg-black flex flex-col items-center justify-center group-hover:bg-zinc-900 transition-colors">
                  
                  {project.image ? (
                    <div className="w-full h-full relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-cyber-black/40 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  ) : (
                    /* Fallback Animation for projects without image */
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
                      
                      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                        <div className="flex items-end justify-center relative">
                          <m.div
                            className="absolute -right-8 -top-2 z-20"
                            animate={{ 
                              rotate: [0, -45, 0],
                              x: [0, -5, 0]
                            }}
                            transition={{ 
                              duration: 0.6, 
                              repeat: Infinity, 
                              repeatType: "loop",
                              ease: "easeInOut" 
                            }}
                            style={{ originX: 0, originY: 1 }}
                          >
                             <Hammer size={28} className="text-cyber-primary" strokeWidth={2} />
                          </m.div>

                          <m.div
                            className="relative z-10"
                            animate={{ 
                              scale: [1, 0.95, 1],
                              y: [0, 2, 0]
                            }}
                            transition={{ 
                              duration: 0.6, 
                              repeat: Infinity, 
                              repeatType: "loop",
                              ease: "easeInOut",
                              delay: 0.3
                            }}
                          >
                            <PiggyBank size={64} className="text-white" strokeWidth={1.5} />
                          </m.div>
                          
                          <m.div
                             className="absolute -top-4 right-0 flex gap-1"
                             animate={{ opacity: [0, 1, 0], y: [0, -10, -15] }}
                             transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                          >
                            <div className="w-1 h-1 bg-cyber-primary rounded-full" />
                            <div className="w-1 h-1 bg-white rounded-full" />
                          </m.div>
                        </div>

                        <div className="border-2 border-white/20 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-sm">
                           <span className="text-white font-mono font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                             <span className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse" />
                             EM DESENVOLVIMENTO
                           </span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Overlay Scanner Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/50 shadow-[0_0_10px_#ffffff] opacity-0 group-hover:opacity-100 group-hover:animate-scan z-20 pointer-events-none" />
                </div>
                
                {/* Info Section */}
                <div className="p-6 relative flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-cyber-secondary text-xs font-mono mb-1">{project.category}</p>
                      <h3 className="text-xl font-bold text-white font-sans tracking-wide">{project.title}</h3>
                    </div>
                    <Database size={16} className="text-cyber-primary/50" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono border border-white/10 text-gray-400 px-2 py-1 uppercase hover:border-cyber-primary hover:text-cyber-primary transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                     {project.link !== "#" ? (
                       <a 
                         href={project.link}
                         target="_blank"
                         rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-sm font-mono text-white hover:text-cyber-primary transition-colors cursor-pointer"
                       >
                         <ExternalLink size={16} /> VISITAR SITE
                       </a>
                     ) : (
                       <span className="flex items-center gap-2 text-sm font-mono text-gray-500 cursor-not-allowed">
                         <ExternalLink size={16} /> EM BREVE
                       </span>
                     )}
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="inline-block text-cyber-primary font-mono text-sm border-b border-cyber-primary/30 pb-1 hover:border-cyber-primary hover:shadow-[0_2px_10px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
          >
            INICIAR MEU PROJETO -{'>'}
          </a>
        </div>
      </div>
    </section>
  );
};