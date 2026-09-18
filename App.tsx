import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { LeadMagnet } from './components/LeadMagnet';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { BriefingPage } from './components/BriefingPage';
import { CustomCursor } from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [path, setPath] = useState(window.location.pathname);

  // Initialize Lenis smooth scroll with GSAP ScrollTrigger ticker integration
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: isMobile ? 1.0 : 1.2,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Provide global access for anchor links
    (window as any).__lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const isBriefingPath = path === '/projetos' || path === '/projetos/';

  return (
    <ThemeProvider>
      <div className="bg-[#FAFAF9] min-h-screen text-[#0B0B0C] font-sans selection:bg-[#00D4FF] selection:text-[#0B0B0C]">
        <CustomCursor />
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[3px] bg-[#00D4FF] z-[9999] origin-left" 
          style={{ scaleX }} 
        />
        <Navbar />
        <main className="relative z-10">
          {isBriefingPath ? (
            <BriefingPage />
          ) : (
            <>
              <Hero />
              <About />
              <Services />
              <LeadMagnet />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          )}
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;