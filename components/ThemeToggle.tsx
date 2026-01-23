import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const m = motion as any;

  return (
    <m.button
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[120] p-3 rounded-full shadow-lg transition-all duration-300 group overflow-hidden border border-cyber-primary/30"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(5, 5, 8, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)'
      }}
      aria-label="Alternar Tema"
    >
      <div className="relative w-6 h-6">
        <m.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : 90,
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0.5
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon size={24} className="text-cyber-primary" fill="currentColor" />
        </m.div>
        
        <m.div
          initial={false}
          animate={{
            rotate: theme === 'light' ? 0 : -90,
            opacity: theme === 'light' ? 1 : 0,
            scale: theme === 'light' ? 1 : 0.5
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun size={24} className="text-orange-500" />
        </m.div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_var(--primary)]" />
    </m.button>
  );
};