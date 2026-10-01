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
  },
  server: {
    // Allow only the exact Vercel Sandbox preview hostname used by this project.
    // Keep this explicit instead of enabling arbitrary hosts in production.
    allowedHosts: ['.vercel.run'],
  },
  preview: {
    allowedHosts: ['.vercel.run'],
  },
  build: {
    outDir: 'dist',
  }
});
