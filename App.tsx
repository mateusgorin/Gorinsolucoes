import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [path, setPath] = useState(window.location.pathname);

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