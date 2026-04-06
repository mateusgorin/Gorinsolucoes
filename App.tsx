import React from 'react';
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

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="bg-cyber-black min-h-screen text-cyber-gray font-sans selection:bg-cyber-primary selection:text-black transition-colors duration-300">
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-cyber-primary z-[9999] origin-left shadow-[0_0_10px_var(--primary)]" 
          style={{ scaleX }} 
        />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <LeadMagnet />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;