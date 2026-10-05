/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './App.tsx', './components/**/*.{ts,tsx}', './context/**/*.{ts,tsx}', './hooks/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        display: ['Archivo', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        studio: {
          bg: '#FAFAF9',
          ink: '#0B0B0C',
          muted: '#71717A',
          border: 'rgba(11, 11, 12, 0.1)',
          card: '#FFFFFF',
          dark: '#0B0B0C',
        },
        cyan: {
          DEFAULT: '#00D4FF',
          solid: '#00D4FF',
        },
        cyber: {
          black: '#FAFAF9',
          dark: '#FFFFFF',
          slate: '#F4F4F5',
          primary: '#00D4FF',
          secondary: '#0B0B0C',
          accent: '#00D4FF',
          dim: 'rgba(0, 212, 255, 0.08)',
          white: '#0B0B0C',
          gray: '#52525B',
        },
      },
    },
  },
  plugins: [],
};
