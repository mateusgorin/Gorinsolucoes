import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Instagram, MapPin, Send, ShieldCheck, Clock } from 'lucide-react';
import { siteContent } from '../data/content';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { contact, brand } = siteContent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = contact.formatWhatsAppMessage(formData.name, formData.phone, formData.message);
    const url = `https://wa.me/${brand.whatsappNumberRaw}?text=${encodeURIComponent(messageText)}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
      setIsSubmitting(false);
    }, 200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section 
      id="contato" 
      className="py-24 sm:py-32 md:py-40 bg-[#0B0B0E] text-[#F5F6FA] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-[60] relative shadow-[0_-35px_80px_rgba(0,0,0,0.6)] border-t border-white/10 scroll-mt-20"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span>{contact.tag}</span>
          </div>

          <h2 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.06] tracking-[-0.02em] text-[#F5F6FA] mb-6">
            {contact.homeTitle}
          </h2>

          <p className="font-body text-[#9496A6] text-base sm:text-lg md:text-xl leading-relaxed">
            {contact.subtext}
          </p>
        </div>

        {/* CTA Card (Cards Grandes: radius 3.2rem) */}
        <div className="rounded-[3.2rem] bg-[#121216] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Info & Quick Action */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold">
                  // Atendimento Imediato
                </span>
                
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA] tracking-tight">
                  {brand.name}
                </h3>

                <p className="font-body text-sm sm:text-base text-[#9496A6] leading-relaxed">
                  Especialistas em soluções digitais e criação de sites de alta conversão. Fale conosco para dar o próximo passo na presença da sua empresa.
                </p>

                {/* Primary Direct Button — Solicitar orçamento grátis agora */}
                <div className="pt-2">
                  <a
                    href={brand.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-sm sm:text-base tracking-wide hover:bg-[#3de0ff] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(0,212,255,0.2)] group cursor-pointer"
                  >
                    <MessageCircle size={18} />
                    <span>{contact.whatsappCtaText}</span>
                    <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Direct Info List: WhatsApp, Instagram, Brasília-DF — Atendimento Nacional */}
              <div className="space-y-4 pt-6 border-t border-white/10 font-mono text-xs sm:text-sm text-[#9496A6]">
                <a 
                  href={brand.whatsappDefaultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#00D4FF] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <MessageCircle size={14} />
                  </div>
                  <span className="text-[#F5F6FA] font-medium">{brand.whatsappLabel}</span>
                </a>

                <a 
                  href={brand.instagramUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-[#00D4FF] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Instagram size={14} />
                  </div>
                  <span>Instagram {brand.instagramHandle}</span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <MapPin size={14} />
                  </div>
                  <span>{brand.locationFull}</span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Clock size={14} />
                  </div>
                  <span>Resposta em até 30 minutos em horário comercial</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <ShieldCheck size={14} />
                  </div>
                  <span>100% Satisfação garantida</span>
                </div>
              </div>
            </div>

            {/* Right Column: Proposal Form */}
            <div className="lg:col-span-7 bg-[#17171D] border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-xl">
              <div className="mb-6 space-y-1">
                <span className="font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold">
                  // Mensagem Direta
                </span>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA] tracking-tight">
                  {contact.formTitle}
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#9496A6]">
                  {contact.formDesc}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-[#9496A6] mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome ou empresa"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#F5F6FA] placeholder:text-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-wider text-[#9496A6] mb-2">
                    Seu WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(61) 98129-0099"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#F5F6FA] placeholder:text-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-[#9496A6] mb-2">
                    Detalhes do Projeto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o tipo de site, landing page ou sistema web que você deseja..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#F5F6FA] placeholder:text-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all font-body text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-sm uppercase tracking-wider hover:bg-[#3ce0ff] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Redirecionando...' : contact.whatsappCtaText}</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
