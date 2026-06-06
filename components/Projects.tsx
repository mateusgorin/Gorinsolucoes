import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ExternalLink, Database } from 'lucide-react';

interface ProjectData {
  title: string;
  category: string;
  tags: string[];
  link: string;
  image?: string;
}

const sites: ProjectData[] = [
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
    image: "https://i.postimg.cc/W4jt5qVD/Captura-de-tela-2026-02-24-131001.jpg"
  },
  {
    title: "AMORIM ERGONOMIA",
    category: "SITE INSTITUCIONAL",
    tags: ["REACT", "PERFORMANCE", "UI/UX"],
    link: "https://www.amorimergonomia.com.br",
    image: "https://i.ibb.co/kgFcqbrg/Captura-de-tela-2025-12-18-143656.jpg"
  },
  {
    title: "BRITO OLIVEIRA ASSESSORIA",
    category: "SITE INSTITUCIONAL",
    tags: ["REACT", "DESIGN", "SEO"],
    link: "https://www.britooliveira.com.br/",
    image: "https://i.postimg.cc/XN9JHhq7/Captura-de-tela-2026-01-16-140757.jpg"
  },
  {
    title: "MARMITARIA VENTURA",
    category: "SITE INSTITUCIONAL",
    tags: ["REACT", "DESIGN UI", "SEO"],
    link: "https://www.marmitariaventura.com.br",
    image: "https://res.cloudinary.com/dw5b0vlbz/image/upload/v1780747406/Captura_de_tela_2026-06-06_085821_dey6p8.webp"
  },
  {
    title: "PC GASTRONOMIA",
    category: "SITE INSTITUCIONAL",
    tags: ["REACT", "DESIGN UI", "SEO"],
    link: "https://www.pcgastronomia.com.br",
    image: "https://res.cloudinary.com/dw5b0vlbz/image/upload/v1780747407/Captura_de_tela_2026-06-06_085711_yjxu2j.webp"
  },
  {
    title: "MAJESTOSA ARTE",
    category: "E-COMMERCE",
    tags: ["ARTESANATO", "E-COMMERCE", "REACT"],
    link: "#",
    image: "https://i.postimg.cc/02sGvChM/IMG-20260404-WA0163.jpg"
  }
];

const systems: ProjectData[] = [
  {
    title: "SGB - SISTEMA DE GESTÃO DA BRIGADA",
    category: "SISTEMA WEB",
    tags: ["DASHBOARD", "GESTÃO", "REACT"],
    link: "internal",
    image: "https://i.postimg.cc/cH2HbqRr/file-00000000ee8071f5998ba4aa3d68e224.png"
  },
  {
    title: "LOGÍSTICO - CONTROLE DE ESTOQUE",
    category: "SISTEMA WEB",
    tags: ["LOGÍSTICA", "ESTOQUE", "REACT"],
    link: "internal",
    image: "https://i.postimg.cc/2Sb0snNb/Screenshot-2026-03-23-20-04-53-683-com-android-chrome-edit.jpg"
  }
];

export const Projects: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-dark transition-colors duration-300 scroll-mt-24">
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 w-full h-[1px] bg-cyber-primary/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="PROJETOS RECENTES" subtitle="PORTFÓLIO" />

        <div className="space-y-20">
          {/* Sites Section */}
          <div>
            <h4 className="text-cyber-primary font-mono text-sm tracking-[0.2em] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyber-primary/30" />
              SITES & LANDING PAGES
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sites.map((project, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                  className="group relative perspective-1000 transform-gpu"
                >
                  {/* Card Container */}
                  <div className="border border-cyber-primary/20 bg-cyber-black clip-corner overflow-hidden transition-all duration-300 group-hover:border-cyber-primary group-hover:shadow-[0_20px_40px_-10px_rgba(0,240,255,0.3)] h-full flex flex-col">
                    
                    {/* Image Section */}
                    <div className="relative aspect-video overflow-hidden bg-black flex flex-col items-center justify-center group-hover:bg-zinc-900 transition-colors">
                      
                      {project.image && (
                        <div className="w-full h-full relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-cyber-black/40 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                      )}

                      {/* Overlay Scanner Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-white/50 shadow-[0_0_10px_#ffffff] opacity-0 group-hover:opacity-100 group-hover:animate-scan z-20 pointer-events-none" />
                    </div>
                    
                    {/* Info Section */}
                    <div className="p-6 relative flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-cyber-secondary text-xs font-mono mb-1">{project.category}</p>
                          <h3 className="text-xl font-bold text-cyber-white font-sans tracking-wide">{project.title}</h3>
                        </div>
                        <Database size={16} className="text-cyber-primary/50" />
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono border border-cyber-white/10 text-cyber-gray px-2 py-1 uppercase hover:border-cyber-primary hover:text-cyber-primary transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-cyber-white/5 mt-auto">
                         {project.link === "internal" ? (
                           <span className="flex items-center gap-2 text-sm font-mono text-cyber-primary/60">
                             <Database size={16} /> SISTEMA INTERNO
                           </span>
                         ) : project.link !== "#" ? (
                           <a 
                             href={project.link}
                             target="_blank"
                             rel="noopener noreferrer" 
                             className="flex items-center gap-2 text-sm font-mono text-cyber-white hover:text-cyber-primary transition-colors cursor-pointer"
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
          </div>

          {/* Systems Section */}
          <div>
            <h4 className="text-cyber-primary font-mono text-sm tracking-[0.2em] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyber-primary/30" />
              SISTEMAS WEB
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {systems.map((project, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                  className="group relative perspective-1000 transform-gpu"
                >
                  {/* Card Container */}
                  <div className="border border-cyber-primary/20 bg-cyber-black clip-corner overflow-hidden transition-all duration-300 group-hover:border-cyber-primary group-hover:shadow-[0_20px_40px_-10px_rgba(0,240,255,0.3)] h-full flex flex-col">
                    
                    {/* Image Section */}
                    <div className="relative aspect-video overflow-hidden bg-black flex flex-col items-center justify-center group-hover:bg-zinc-900 transition-colors">
                      
                      {project.image && (
                        <div className="w-full h-full relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-cyber-black/40 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                      )}

                      {/* Overlay Scanner Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-white/50 shadow-[0_0_10px_#ffffff] opacity-0 group-hover:opacity-100 group-hover:animate-scan z-20 pointer-events-none" />
                    </div>
                    
                    {/* Info Section */}
                    <div className="p-6 relative flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-cyber-secondary text-xs font-mono mb-1">{project.category}</p>
                          <h3 className="text-xl font-bold text-cyber-white font-sans tracking-wide">{project.title}</h3>
                        </div>
                        <Database size={16} className="text-cyber-primary/50" />
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono border border-cyber-white/10 text-cyber-gray px-2 py-1 uppercase hover:border-cyber-primary hover:text-cyber-primary transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-cyber-white/5 mt-auto">
                         {project.link === "internal" ? (
                           <span className="flex items-center gap-2 text-sm font-mono text-cyber-primary/60">
                             <Database size={16} /> SISTEMA INTERNO
                           </span>
                         ) : project.link !== "#" ? (
                           <a 
                             href={project.link}
                             target="_blank"
                             rel="noopener noreferrer" 
                             className="flex items-center gap-2 text-sm font-mono text-cyber-white hover:text-cyber-primary transition-colors cursor-pointer"
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
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/projetos" 
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/projetos');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            className="inline-block text-cyber-primary font-mono text-sm border-b border-cyber-primary/30 pb-1 hover:border-cyber-primary hover:shadow-[0_2px_10px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
          >
            INICIAR MEU PROJETO -{'>'}
          </a>
        </div>
      </div>
    </section>
  );
};