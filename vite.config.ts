import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'gsap', 'lucide-react'],
  },
  build: {
    outDir: 'dist',
    modulePreload: {
      resolveDependencies: (_filename, deps) => {
        return deps.filter(dep => !dep.includes('motion-features') && !dep.includes('vendor-gsap') && !dep.includes('vendor-lenis'));
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/gsap/')) {
            return 'vendor-gsap';
          }
          if (id.includes('node_modules/lenis/')) {
            return 'vendor-lenis';
          }
          if (id.includes('lib/motion-features')) {
            return 'motion-features';
          }
        },
      },
    },
  },
});