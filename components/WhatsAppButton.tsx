import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5561981290099";
  const message = "Olá! Gostaria de falar com um especialista sobre meu projeto.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-md text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        Falar com Especialista
      </span>
    </a>
  );
};
