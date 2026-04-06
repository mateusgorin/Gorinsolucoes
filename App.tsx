import React from 'react';
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
  return (
    <ThemeProvider>
      <div className="bg-cyber-black min-h-screen text-cyber-gray font-sans selection:bg-cyber-primary selection:text-black transition-colors duration-300">
        <div className="scanlines" />
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