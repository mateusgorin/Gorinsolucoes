import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

interface ProjectData {
  title: string;
  category: string;
  tags?: string[];
  link: string;
  image?: string;
  isFeatured?: boolean;
}

const sites: ProjectData[] = [
  {
    title: "BRINCA MÓVEL",
    category: "SITE INSTITUCIONAL",
    link: "https://www.brincamoveloficial.com.br",
    image: "https://i.postimg.cc/DyTbPrhZ/Captura-de-tela-2025-12-26-131258.jpg",
    isFeatured: true
  },
  {
    title: "MÃOS DE LEIDE",
    category: "SITE INSTITUCIONAL",
    link: "https://www.maosdeleide.com.br",
    image: "https://i.postimg.cc/W4jt5qVD/Captura-de-tela-2026-02-24-131001.jpg"
  },
  {
    title: "AMORIM ERGONOMIA",
    category: "SITE INSTITUCIONAL",
    link: "https://www.amorimergonomia.com.br",
    image: "https://i.ibb.co/kgFcqbrg/Captura-de-tela-2025-12-18-143656.jpg"
  },
  {
    title: "BRITO OLIVEIRA ASSESSORIA",
    category: "SITE INSTITUCIONAL",
    link: "https://www.britooliveira.com.br/",
    image: "https://i.postimg.cc/XN9JHhq7/Captura-de-tela-2026-01-16-140757.jpg"
  },
  {
    title: "MARMITARIA VENTURA",
    category: "SITE INSTITUCIONAL",
    link: "https://www.marmitariaventura.com.br",
    image: "https://res.cloudinary.com/dw5b0vlbz/image/upload/v1780747406/Captura_de_tela_2026-06-06_085821_dey6p8.webp"
  },
  {
    title: "PC GASTRONOMIA",
    category: "SITE INSTITUCIONAL",
    link: "https://www.pcgastronomia.com.br",
    image: "https://res.cloudinary.com/dw5b0vlbz/image/upload/v1780747407/Captura_de_tela_2026-06-06_085711_yjxu2j.webp"
  },
  {
    title: "MAJESTOSA ARTE",
    category: "E-COMMERCE",
    link: "#",
    image: "https://i.postimg.cc/02sGvChM/IMG-20260404-WA0163.jpg"
  }
];

const systems: ProjectData[] = [
  {
    title: "SGB - SISTEMA DE GESTÃO DA BRIGADA",
    category: "SISTEMA WEB",
    link: "internal",
    image: "https://i.postimg.cc/cH2HbqRr/file-00000000ee8071f5998ba4aa3d68e224.png"
  },
  {
    title: "LOGÍSTICO - CONTROLE DE ESTOQUE",
    category: "SISTEMA WEB",
    link: "internal",
    image: "https://i.postimg.cc/2Sb0snNb/Screenshot-2026-03-23-20-04-53-683-com-android-chrome-edit.jpg"
  }
];

const ProjectBlock: React.FC<{ project: ProjectData }> = ({ project }) => {
  const isExternalLink = project.link !== "internal" && project.link !== "#";

  const Content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group w-full block cursor-pointer"
    >
      {/* Cover Image Container with 60vh minimum desktop height and overflow-hidden for 1.03 scale */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] md:min-h-[60vh] md:h-[65vh] rounded-[8px] overflow-hidden bg-[#E4E4E7] border border-black/10 shadow-sm">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
        )}

        {/* Featured Badge strictly on the first project */}
        {project.isFeatured && (
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
            <span className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase bg-[#0B0B0C] text-white px-3.5 py-1.5 rounded-[3px] shadow-md border border-white/10">
              DESTAQUE
            </span>
          </div>
        )}
      </div>

      {/* Project Typography & Metadata below the image */}
      <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Overline Category */}
          <p className="text-[#71717A] text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-2 md:mb-3 font-bold">
            {project.category}
          </p>

          {/* Project Title with Archivo 800+ font, hover underline and arrow */}
          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-archivo font-black text-[#0B0B0C] tracking-tight uppercase flex items-center flex-wrap gap-2 md:gap-4 transition-colors">
            <span className="group-hover:underline decoration-[#00D4FF] decoration-2 md:decoration-4 underline-offset-8 transition-all">
              {project.title}
            </span>
            <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 text-[#00D4FF] opacity-75 group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-300 flex-shrink-0" />
          </h3>
        </div>

        {/* Link / Status indicator */}
        <div className="flex items-center gap-2 font-mono text-xs md:text-sm uppercase text-[#71717A] flex-shrink-0 pt-2 md:pt-0">
          {project.link === "internal" ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-black/5 text-[#71717A] border border-black/10">
              SISTEMA INTERNO
            </span>
          ) : isExternalLink ? (
            <span className="inline-flex items-center gap-1.5 text-[#0B0B0C] font-bold group-hover:text-[#00D4FF] transition-colors">
              VISITAR SITE
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-black/5 text-[#A1A1AA] border border-black/10">
              EM BREVE
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (isExternalLink) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
      >
        {Content}
      </a>
    );
  }

  return (
    <div className="block focus:outline-none">
      {Content}
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAFAF9] border-t border-black/10 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <SectionHeading title="PROJETOS RECENTES" subtitle="03 — PORTFÓLIO" />

        <div className="space-y-24 md:space-y-36">
          {/* Sites Section */}
          <div>
            <div className="flex items-center gap-3 mb-12 md:mb-16 border-b border-black/10 pb-4">
              <span className="w-2 h-2 bg-[#00D4FF]" />
              <h4 className="font-mono text-xs font-bold text-[#0B0B0C] tracking-[0.2em] uppercase">
                SITES & LANDING PAGES
              </h4>
            </div>

            <div className="space-y-24 md:space-y-36">
              {sites.map((project) => (
                <ProjectBlock key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Systems Section */}
          <div>
            <div className="flex items-center gap-3 mb-12 md:mb-16 border-b border-black/10 pb-4">
              <span className="w-2 h-2 bg-[#00D4FF]" />
              <h4 className="font-mono text-xs font-bold text-[#0B0B0C] tracking-[0.2em] uppercase">
                SISTEMAS WEB
              </h4>
            </div>

            <div className="space-y-24 md:space-y-36">
              {systems.map((project) => (
                <ProjectBlock key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 text-center">
          <a
            href="/projetos"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/projetos');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-mono font-bold text-[#0B0B0C] uppercase tracking-wider border-b-2 border-[#00D4FF] pb-1 hover:text-[#00D4FF] hover:scale-[1.025] active:scale-[0.98] transition-all cursor-pointer"
          >
            INICIAR MEU PROJETO →
          </a>
        </div>
      </div>
    </section>
  );
};
