import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';
import { projectsData } from '../data/projects';
import { siteContent } from '../data/content';
import { ImageReveal } from './ImageReveal';

export const Projects: React.FC = () => {
  // Use a lista de data/projects.ts diretamente, sem alterar títulos ou descrições
  const displayProjects = projectsData.slice(0, 6);
  const { projectsHeader, brand } = siteContent;

  return (
    <section 
      id="cases" 
      className="py-24 sm:py-32 md:py-40 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-50 relative shadow-[0_-30px_70px_rgba(0,0,0,0.3)] border-t border-black/[0.08] scroll-mt-20"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 border-b border-black/10 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>{projectsHeader.tag}</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5.2vw,4.5rem)] leading-[1.08] text-[#0B0B0E] tracking-[-0.02em]">
              {projectsHeader.title}
            </h2>
            <p className="font-body text-[#555660] text-base sm:text-lg mt-3">
              {projectsHeader.subtext}
            </p>
          </div>

          <div className="font-mono text-xs text-[#555660] self-start md:self-end uppercase">
            <span className="text-[#0B0B0E] font-semibold">{projectsHeader.counter}</span> · {brand.locationFull}
          </div>
        </div>

        {/* Grid de Projetos usando data/projects.ts (Cards Grandes: radius 3.2rem) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <a
                href={`/projetos?case=${project.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', `/projetos?case=${project.slug}`);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex flex-col h-full rounded-[3.2rem] bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-black/25 transition-all duration-500 cursor-pointer"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#18181D]">
                  <ImageReveal
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0B0B0E]/80 backdrop-blur-md text-white font-mono text-[10px] tracking-wider uppercase border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* External Link Action Pill */}
                  <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-white text-[#0B0B0E] flex items-center justify-center shadow-lg group-hover:bg-[#00D4FF] group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-[#555660] font-semibold">
                      {project.category}
                    </p>
                    <h3 className="font-display font-bold text-2xl text-[#0B0B0E] tracking-tight group-hover:text-[#00D4FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#555660] leading-relaxed pt-1">
                      {project.desc}
                    </p>
                  </div>

                  {/* Metrics and Stack */}
                  <div className="pt-4 border-t border-black/10 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#0B0B0E] font-semibold">
                      <Zap size={13} className="text-[#00D4FF]" />
                      <span>{project.metrics}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-0.5 rounded-full bg-[#F5F6FA] border border-black/[0.08] text-[11px] font-mono text-[#555660]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-[3.2rem] bg-[#0B0B0E] text-[#F5F6FA] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-black/10">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA]">
              {projectsHeader.bannerTitle}
            </h4>
            <p className="font-body text-sm text-[#9496A6]">
              {projectsHeader.bannerDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/projetos"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/projetos');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#3ce0ff] transition-colors cursor-pointer shadow-sm"
            >
              <span>{projectsHeader.bannerCta}</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
