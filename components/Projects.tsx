import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import { projects, Project } from '../data/projects';

const sites = projects.filter((p) => p.category !== "SISTEMA WEB");
const systems = projects.filter((p) => p.category === "SISTEMA WEB");

const ProjectBlock: React.FC<{ project: Project }> = ({ project }) => {
  const isExternalLink = project.link !== "internal" && project.link !== "#";
  const cursorLabel = isExternalLink ? "VISITAR" : project.link === "internal" ? "SISTEMA" : "CASE";
  const [isLoaded, setIsLoaded] = useState(false);

  const Content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group w-full block cursor-pointer"
      data-cursor-text={cursorLabel}
    >
      {/* Cover Image Container - Cuberto rounded corners and aspect ratio for 2 columns */}
      <div 
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-[#18181B] border border-white/10 shadow-lg group-hover:border-[#00D4FF]/40 transition-all duration-300"
        data-cursor-text={cursorLabel}
      >
        {/* Subtle skeleton shimmer before load */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#222226] animate-pulse" />
        )}

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Featured Badge strictly on the first project */}
        {project.isFeatured && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-[#0B0B0C]/85 backdrop-blur-md text-[#00D4FF] px-3 py-1 rounded-full shadow-lg border border-[#00D4FF]/30">
              DESTAQUE
            </span>
          </div>
        )}
      </div>

      {/* Project Typography & Metadata below the image (Cuberto style) */}
      <div className="mt-4 sm:mt-5 flex flex-col justify-between gap-1.5">
        <div className="flex items-center justify-between gap-2">
          {/* Overline Category */}
          <p className="text-[#00D4FF] text-xs font-mono uppercase tracking-[0.2em] font-bold">
            {project.category}
          </p>

          {/* Link / Status indicator */}
          <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-white/50">
            {project.link === "internal" ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10 text-[10px]">
                SISTEMA INTERNO
              </span>
            ) : isExternalLink ? (
              <span className="inline-flex items-center gap-1 text-white/70 font-semibold group-hover:text-[#00D4FF] transition-colors text-[11px] sm:text-xs">
                VISITAR SITE
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10 text-[10px]">
                EM BREVE
              </span>
            )}
          </div>
        </div>

        {/* Project Title with Archivo 800+ font, hover effect */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-archivo font-black text-[#FAFAF9] tracking-tight uppercase flex items-center justify-between gap-3 group-hover:text-[#00D4FF] transition-colors">
          <span className="group-hover:underline decoration-[#00D4FF] decoration-2 underline-offset-4 transition-all">
            {project.title}
          </span>
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4FF] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
        </h3>
      </div>
    </motion.div>
  );

  if (isExternalLink) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-text={cursorLabel}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
      >
        {Content}
      </a>
    );
  }

  return (
    <div className="block focus:outline-none" data-cursor-text={cursorLabel}>
      {Content}
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-24 md:py-32 bg-[#0B0B0C] text-[#FAFAF9] relative z-20 scroll-mt-24 rounded-t-[48px] md:rounded-t-[64px] -mt-12 md:-mt-16 rounded-b-[48px] md:rounded-b-[64px] -mb-12 md:-mb-16 shadow-[0_0_50px_rgba(0,0,0,0.35)] border-y border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <SectionHeading 
          title="PROJETOS RECENTES" 
          subtitle="03 — PORTFÓLIO" 
          inverted={true}
        />

        <div className="space-y-16 md:space-y-24">
          {/* Sites Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 md:mb-12 border-b border-white/10 pb-4">
              <span className="w-2 h-2 bg-[#00D4FF]" />
              <h4 className="font-mono text-xs font-bold text-white/80 tracking-[0.2em] uppercase">
                SITES & LANDING PAGES
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {sites.map((project) => (
                <ProjectBlock key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Systems Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 md:mb-12 border-b border-white/10 pb-4">
              <span className="w-2 h-2 bg-[#00D4FF]" />
              <h4 className="font-mono text-xs font-bold text-white/80 tracking-[0.2em] uppercase">
                SISTEMAS WEB
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {systems.map((project) => (
                <ProjectBlock key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 text-center">
          <a
            href="/projetos"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/projetos');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-mono font-bold text-[#FAFAF9] uppercase tracking-wider border-b-2 border-[#00D4FF] pb-1 hover:text-[#00D4FF] hover:scale-[1.025] active:scale-[0.98] transition-all cursor-pointer"
          >
            INICIAR MEU PROJETO →
          </a>
        </div>
      </div>
    </section>
  );
};
