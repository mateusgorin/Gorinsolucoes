import React, { useState, useEffect } from 'react';
import {
  ContainerScroll,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from '@/components/blocks/animated-gallery';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

// 3 Colunas com 7 cards cada, garantindo preenchimento vertical completo da tela no mobile e desktop
// sem deixar grandes espaços em branco ao rolar.
const IMAGES_1 = [
  projects[0]?.image || "https://cdn.21st.dev/assets/mirror/db/db8e72b6f6e2f325ec74898fdab6a02f3c0ba7962f3cf0b89f0ee3b22aa2a083.jpg",
  projects[1]?.image || "https://cdn.21st.dev/assets/mirror/77/777c9bd220f0c47c9eb699ebbd77fb0c6c9a8d8b0cd77f089bab93a18586d578.jpg",
  projects[2]?.image || "https://cdn.21st.dev/assets/mirror/f9/f992831c368ea7e12c51417be55fda812d1502e9bb6730d94bc6b1e0c6a2ae57.jpg",
  "/images/showcase-feature-1.webp",
  projects[3]?.image || "https://cdn.21st.dev/assets/mirror/4e/4eb85747c8113c6edcbec2671a5aa4e62d0569488ad75652c16dd7598a1196e1.jpg",
  projects[6]?.image || "https://cdn.21st.dev/assets/mirror/db/db8e72b6f6e2f325ec74898fdab6a02f3c0ba7962f3cf0b89f0ee3b22aa2a083.jpg",
  "/images/showcase-feature-2.webp",
];

const IMAGES_2 = [
  projects[3]?.image || "https://cdn.21st.dev/assets/mirror/4e/4eb85747c8113c6edcbec2671a5aa4e62d0569488ad75652c16dd7598a1196e1.jpg",
  projects[4]?.image || "https://cdn.21st.dev/assets/mirror/ab/ab1fd4fd007ecad2ad9a5350341b1013589f05f8f30b8fdd4a35728a800e9fce.jpg",
  projects[5]?.image || "https://cdn.21st.dev/assets/mirror/4d/4de1f4952d0420f95ade25fc723d8042ece00762429cdccb79fd3a29ffe5f33d.jpg",
  "/images/showcase-feature-2.webp",
  projects[0]?.image || "https://cdn.21st.dev/assets/mirror/db/db8e72b6f6e2f325ec74898fdab6a02f3c0ba7962f3cf0b89f0ee3b22aa2a083.jpg",
  projects[7]?.image || "https://cdn.21st.dev/assets/mirror/e8/e81126a3c16766e36ed84d2226b0b11507e86b999d4d07cd7e88c0f04e14c0eb.jpg",
  "/images/showcase-feature-3.webp",
];

const IMAGES_3 = [
  "/images/majestosa.jpg",
  projects[7]?.image || "https://cdn.21st.dev/assets/mirror/e8/e81126a3c16766e36ed84d2226b0b11507e86b999d4d07cd7e88c0f04e14c0eb.jpg",
  projects[8]?.image || "https://cdn.21st.dev/assets/mirror/77/777c9bd220f0c47c9eb699ebbd77fb0c6c9a8d8b0cd77f089bab93a18586d578.jpg",
  "/images/showcase-feature-3.webp",
  projects[1]?.image || "https://cdn.21st.dev/assets/mirror/77/777c9bd220f0c47c9eb699ebbd77fb0c6c9a8d8b0cd77f089bab93a18586d578.jpg",
  projects[5]?.image || "https://cdn.21st.dev/assets/mirror/4d/4de1f4952d0420f95ade25fc723d8042ece00762429cdccb79fd3a29ffe5f33d.jpg",
  "/images/showcase-feature-1.webp",
];

export const FeaturedShowcase: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div id="showcase" className="relative bg-[#FAFAF9]">
      
      {/* Atmospheric Ambient Light Glow */}
      <div
        className="pointer-events-none absolute z-10 h-[50vh] sm:h-[70vh] w-full"
        style={{
          background: "linear-gradient(to right, rgba(0, 212, 255, 0.12), rgba(11, 11, 12, 0.05), rgba(0, 212, 255, 0.15))",
          filter: "blur(84px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Trilha de Rolagem 3D do Efeito Original: calibrada para eliminar espaços mortos no mobile */}
      <ContainerScroll className="relative h-[180vh] md:h-[300vh] lg:h-[340vh]">
        <ContainerSticky className="h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <GalleryContainer 
            rotateRange={isMobile ? [28, 0] : [70, 0]}
            scaleRange={isMobile ? [1.06, 1] : [1.2, 1]}
            className="w-full max-w-7xl mx-auto px-2.5 sm:px-6 pt-2 pb-4 gap-2.5 sm:gap-4"
          >
            
            {/* Coluna 1 */}
            <GalleryCol 
              yRange={isMobile ? ["0%", "-26%"] : ["0%", "-42%"]} 
              inputRange={[0.1, 0.85]} 
              className="-mt-1 gap-2.5 sm:gap-4"
            >
              {IMAGES_1.map((imageUrl, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-video block h-auto max-h-full w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0D0D11] border border-black/10 shadow-md sm:shadow-lg hover:shadow-2xl hover:border-[#00D4FF]/60 transition-all duration-300"
                >
                  <img
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={imageUrl}
                    alt={`Gorin showcase item ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 sm:p-4">
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-white flex items-center gap-1.5 uppercase">
                      <span>VER PROJETO</span>
                      <ArrowUpRight size={14} className="text-[#00D4FF]" />
                    </span>
                  </div>
                  <a href="#projects" className="absolute inset-0 z-20" aria-label="Ver projetos" />
                </div>
              ))}
            </GalleryCol>

            {/* Coluna 2 (Meio): Desloca mais que as laterais ao rolar */}
            <GalleryCol 
              className="-mt-1 sm:-mt-2 gap-2.5 sm:gap-4" 
              yRange={isMobile ? ["6%", "-42%"] : ["8%", "-54%"]} 
              inputRange={[0.1, 0.85]}
            >
              {IMAGES_2.map((imageUrl, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-video block h-auto max-h-full w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0D0D11] border border-black/10 shadow-md sm:shadow-lg hover:shadow-2xl hover:border-[#00D4FF]/60 transition-all duration-300"
                >
                  <img
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={imageUrl}
                    alt={`Gorin showcase item ${index + 8}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 sm:p-4">
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-white flex items-center gap-1.5 uppercase">
                      <span>VER PROJETO</span>
                      <ArrowUpRight size={14} className="text-[#00D4FF]" />
                    </span>
                  </div>
                  <a href="#projects" className="absolute inset-0 z-20" aria-label="Ver projetos" />
                </div>
              ))}
            </GalleryCol>

            {/* Coluna 3 */}
            <GalleryCol 
              yRange={isMobile ? ["0%", "-26%"] : ["0%", "-42%"]} 
              inputRange={[0.1, 0.85]} 
              className="-mt-1 gap-2.5 sm:gap-4"
            >
              {IMAGES_3.map((imageUrl, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-video block h-auto max-h-full w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0D0D11] border border-black/10 shadow-md sm:shadow-lg hover:shadow-2xl hover:border-[#00D4FF]/60 transition-all duration-300"
                >
                  <img
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={imageUrl}
                    alt={`Gorin showcase item ${index + 15}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 sm:p-4">
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-white flex items-center gap-1.5 uppercase">
                      <span>VER PROJETO</span>
                      <ArrowUpRight size={14} className="text-[#00D4FF]" />
                    </span>
                  </div>
                  <a href="#projects" className="absolute inset-0 z-20" aria-label="Ver projetos" />
                </div>
              ))}
            </GalleryCol>

          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>

    </div>
  );
};

export default FeaturedShowcase;
