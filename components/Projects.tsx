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
  isFeatured?: boolean;
}

const sites: ProjectData[] = [
  {
    title: "BRINCA MÓVEL",
    category: "SITE INSTITUCIONAL",
    tags: ["REACT", "E-COMMERCE UI", "SEO"],
    link: "https://www.brincamoveloficial.com.br",
    image: "https://i.postimg.cc/DyTbPrhZ/Captura-de-tela-2025-12-26-131258.jpg",
    isFeatured: true
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

const ProjectCard: React.FC<{ project: ProjectData; idx: number }> = ({ project, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.06, duration: 0.5 }}
      className="group relative h-full flex flex-col"
    >
      <div className="border border-black/10 bg-white rounded-[6px] overflow-hidden hover:border-black transition-colors duration-300 h-full flex flex-col shadow-sm">
        
        {/* Media / Visual Box */}
        <div className="relative aspect-video overflow-hidden bg-[#E4E4E7]">
          {project.image && (
            <div className="w-full h-full relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {project.isFeatured && (
            <div className="absolute top-3 left-3 z-10">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase bg-[#0B0B0C] text-white px-2.5 py-1 rounded-[2px] shadow-sm">
                DESTAQUE
              </span>
            </div>
          )}
        </div>
        
        {/* Info Section */}
        <div className="p-6 relative flex flex-col flex-grow justify-between">
          <div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-[#71717A] text-[11px] font-mono uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3 className="text-lg font-archivo font-bold text-[#0B0B0C] tracking-tight uppercase">
                  {project.title}
                </h3>
              </div>
              <Database size={16} className="text-[#A1A1AA] flex-shrink-0 mt-1" />
            </div>
            
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-[10px] font-mono border border-black/10 text-[#52525B] px-2 py-0.5 rounded-[2px] bg-[#FAFAF9]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-black/10">
            {project.link === "internal" ? (
              <span className="flex items-center gap-2 text-xs font-mono text-[#71717A] uppercase">
                <Database size={14} /> SISTEMA INTERNO
              </span>
            ) : project.link !== "#" ? (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-mono text-[#0B0B0C] font-semibold hover:text-[#00D4FF] transition-colors"
              >
                <ExternalLink size={14} /> VISITAR SITE
              </a>
            ) : (
              <span className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] uppercase">
                <ExternalLink size={14} /> EM BREVE
              </span>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAFAF9] border-t border-black/10 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <SectionHeading title="PROJETOS RECENTES" subtitle="03 — PORTFÓLIO" />

        <div className="space-y-16">
          {/* Sites Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-black/10 pb-4">
              <span className="w-2 h-2 bg-[#00D4FF]" />
              <h4 className="font-mono text-xs font-bold text-[#0B0B0C] tracking-[0.2em] uppercase">
                SITES & LANDING PAGES
              </h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sites.map((project, idx) => (
                <ProjectCard key={idx} project={project} idx={idx} />
              ))}
            </div>
          </div>

          {/* Systems Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-black/10 pb-4">
              <span className="w-2 h-2 bg-[#00D4FF]" />
              <h4 className="font-mono text-xs font-bold text-[#0B0B0C] tracking-[0.2em] uppercase">
                SISTEMAS WEB
              </h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systems.map((project, idx) => (
                <ProjectCard key={idx} project={project} idx={idx} />
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
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0B0B0C] uppercase tracking-wider border-b-2 border-[#00D4FF] pb-1 hover:text-[#00D4FF] transition-colors"
          >
            INICIAR MEU PROJETO →
          </a>
        </div>
      </div>
    </section>
  );
};
