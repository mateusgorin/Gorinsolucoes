export const WHATSAPP_NUMBER = '5561981290099';
export const WHATSAPP_DISPLAY = '(61) 98129-0099';
export const EMAIL = 'mateusmirandaamaral@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/mateusgorin';
export const INSTAGRAM_HANDLE = '@mateusgorin';

export const whatsappLink = (message?: string): string => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
