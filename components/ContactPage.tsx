import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Instagram, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export const ContactPage: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { contact, brand } = siteContent;
  const phoneNumber = brand.whatsappNumberRaw;

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start']
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const el = titleRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const handleNavigateHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome ou nome da empresa.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe um endereço de e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido. Verifique o formato digitado.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, informe um número de WhatsApp ou telefone.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Informe o DDD + número (mínimo 10 dígitos).';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Conte-nos brevemente o que você precisa construir.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const messageText = `*CONTATO OFICIAL // GORIN SOLUÇÕES*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*WhatsApp:* ${formData.phone}\n` +
      `*Demanda:* ${formData.message}\n\n` +
      `_Enviado pela página de Contato da Gorin Soluções_`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(url, '_blank');
    }, 400);
  };

  return (
    <div className="bg-[#0B0B0E] text-[#F5F6FA] min-h-screen">
      
      {/* 1. HEADER (DARK #0B0B0E): Título "Vamos conversar" + Subtexto */}
      <section 
        ref={headerRef}
        className="relative pt-32 sm:pt-40 md:pt-48 pb-28 sm:pb-36 bg-[#0B0B0E] text-[#F5F6FA] overflow-hidden"
      >
        {/* Subtle Ghost Typography */}
        <motion.div
          style={{ y: ghostY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-display font-bold text-[clamp(80px,20vw,300px)] tracking-[-0.04em] text-white/[0.02] uppercase leading-none select-none">
            CONTATO
          </span>
        </motion.div>

        {/* Minimal dot pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#F5F6FA 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          {/* Top Bar Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 text-xs font-mono tracking-widest uppercase">
            <a
              href="/"
              onClick={handleNavigateHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:border-[#00D4FF]/50 transition-all cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#00D4FF]" />
              <span>Voltar ao Início</span>
            </a>

            <div className="flex items-center gap-2 text-[#9496A6]">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span>Brasília - DF // Atendimento em todo o Brasil</span>
            </div>
          </div>

          {/* Category Badge */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span>Canais Oficiais de Atendimento</span>
          </div>

          {/* Título "Vamos conversar" Monumental em General Sans */}
          <div className="max-w-5xl mb-6 sm:mb-8">
            <h1
              ref={titleRef}
              className="font-display font-bold text-[clamp(2.8rem,7vw,8.8rem)] leading-[1.0] tracking-[-0.02em] text-[#F5F6FA]"
            >
              Vamos conversar<span className="text-[#00D4FF]">.</span>
            </h1>
          </div>

          {/* Subtexto */}
          <p className="font-body text-[#9496A6] text-base sm:text-xl md:text-[1.375rem] max-w-3xl leading-relaxed mb-10 sm:mb-12">
            Tem uma demanda de site institucional, landing page ou sistema web com inteligência artificial? Fale diretamente com quem programa. Sem intermediários, com retorno técnico e estimativa clara em até 24 horas.
          </p>

          {/* Fast Response Badges */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            <div className="px-4 py-2 rounded-full bg-[#141418] border border-white/10 text-white/80 flex items-center gap-2">
              <Clock size={14} className="text-[#00D4FF]" />
              <span>Resposta média: ~30 minutos em horário comercial</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#141418] border border-white/10 text-white/80 flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#00D4FF]" />
              <span>Diagnóstico técnico gratuito</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FORMULÁRIO (LIGHT #F5F6FA — TRANSIÇÃO ROUNDED-T 6.4REM) + 3. BLOCO DE CONTATO DIRETO */}
      <section 
        id="formulario"
        className="py-24 sm:py-32 md:py-40 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 relative shadow-[0_-30px_70px_rgba(0,0,0,0.35)] border-t border-black/[0.06]"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Formulário com validação e microanimações de foco */}
            <div className="lg:col-span-7 rounded-[3.2rem] bg-white border border-black/10 p-8 sm:p-12 lg:p-14 shadow-sm space-y-6">
              
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold block">
                  // Envie uma Mensagem
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B0B0E] tracking-tight">
                  Conte-nos sobre o seu projeto
                </h2>
                <p className="font-body text-sm sm:text-base text-[#555660]">
                  Preencha os campos abaixo. Retornamos com análise preliminar e proposta sob medida.
                </p>
              </div>

              {isSuccess && (
                <div className="p-4 rounded-[1.6rem] bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 text-sm font-body">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Mensagem enviada com sucesso!</strong>
                    <span>Redirecionando para o WhatsApp do engenheiro responsável...</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Nome */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-[#555660] font-semibold">
                    Nome Completo ou Empresa *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    placeholder="Ex: Carlos Eduardo / Clínica Alpha"
                    className={`w-full px-4 py-3.5 rounded-[1.2rem] bg-[#F5F6FA] border transition-all duration-300 font-body text-sm text-[#0B0B0E] placeholder:text-[#9496A6] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#00D4FF]/40 focus:border-[#00D4FF] ${
                      errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-black/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-500 font-mono mt-1">
                      <AlertCircle size={13} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* E-mail e Telefone em 2 colunas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* E-mail */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-[#555660] font-semibold">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                      }}
                      placeholder="Ex: carlos@empresa.com.br"
                      className={`w-full px-4 py-3.5 rounded-[1.2rem] bg-[#F5F6FA] border transition-all duration-300 font-body text-sm text-[#0B0B0E] placeholder:text-[#9496A6] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#00D4FF]/40 focus:border-[#00D4FF] ${
                        errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-black/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1.5 text-xs text-rose-500 font-mono mt-1">
                        <AlertCircle size={13} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="block font-mono text-xs uppercase tracking-wider text-[#555660] font-semibold">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                      }}
                      placeholder="Ex: (61) 99999-8888"
                      className={`w-full px-4 py-3.5 rounded-[1.2rem] bg-[#F5F6FA] border transition-all duration-300 font-body text-sm text-[#0B0B0E] placeholder:text-[#9496A6] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#00D4FF]/40 focus:border-[#00D4FF] ${
                        errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-black/10'
                      }`}
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1.5 text-xs text-rose-500 font-mono mt-1">
                        <AlertCircle size={13} />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-wider text-[#555660] font-semibold">
                    Descreva sua Demanda ou Projeto *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                    }}
                    placeholder="Ex: Quero criar um site institucional moderno para captação de clientes B2B com carregamento rápido e integração de WhatsApp..."
                    className={`w-full px-4 py-3.5 rounded-[1.2rem] bg-[#F5F6FA] border transition-all duration-300 font-body text-sm text-[#0B0B0E] placeholder:text-[#9496A6] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#00D4FF]/40 focus:border-[#00D4FF] resize-none ${
                      errors.message ? 'border-rose-400 bg-rose-50/50' : 'border-black/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-500 font-mono mt-1">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-[1.2rem] bg-[#0B0B0E] text-[#F5F6FA] hover:bg-[#00D4FF] hover:text-[#0B0B0E] font-display font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Processando envio...' : 'Enviar Mensagem e Abrir WhatsApp'}</span>
                </button>

              </form>

            </div>

            {/* Right: 3. BLOCO DE CONTATO DIRETO (WhatsApp, E-mail, Redes Sociais, BSB) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="rounded-[3.2rem] bg-white border border-black/10 p-8 sm:p-10 shadow-sm space-y-6">
                
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold block">
                    // Atendimento Direto
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#0B0B0E] tracking-tight">
                    Canais de Contato
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#555660]">
                    Prefere uma conversa imediata? Acione nossos canais prioritários.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-black/10">
                  
                  {/* WhatsApp */}
                  <a
                    href={brand.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-[1.6rem] bg-[#F5F6FA] hover:bg-[#00D4FF]/10 border border-black/5 hover:border-[#00D4FF]/40 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0B0B0E] text-[#00D4FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-[#555660] uppercase block">{contact.whatsappChannelLabel}</span>
                      <span className="font-mono text-sm text-[#0B0B0E] font-semibold">{brand.whatsappFormatted}</span>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto text-[#0B0B0E] group-hover:text-[#00D4FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  {/* E-mail */}
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-4 p-4 rounded-[1.6rem] bg-[#F5F6FA] hover:bg-[#00D4FF]/10 border border-black/5 hover:border-[#00D4FF]/40 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0B0B0E] text-[#00D4FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="font-mono text-[11px] text-[#555660] uppercase block">{contact.emailChannelLabel}</span>
                      <span className="font-mono text-xs sm:text-sm text-[#0B0B0E] font-semibold truncate block">
                        {brand.email}
                      </span>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto text-[#0B0B0E] group-hover:text-[#00D4FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-[1.6rem] bg-[#F5F6FA] hover:bg-[#00D4FF]/10 border border-black/5 hover:border-[#00D4FF]/40 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0B0B0E] text-[#00D4FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-[#555660] uppercase block">{contact.instagramChannelLabel}</span>
                      <span className="font-mono text-sm text-[#0B0B0E] font-semibold">{brand.instagramHandle}</span>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto text-[#0B0B0E] group-hover:text-[#00D4FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  {/* Endereço */}
                  <div className="flex items-center gap-4 p-4 rounded-[1.6rem] bg-[#F5F6FA] border border-black/5">
                    <div className="w-12 h-12 rounded-full bg-[#0B0B0E] text-[#00D4FF] flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-[#555660] uppercase block">{contact.locationChannelLabel}</span>
                      <span className="font-mono text-xs sm:text-sm text-[#0B0B0E] font-medium">{brand.operationalBase}</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Horário de Atendimento Box */}
              <div className="p-6 rounded-[2rem] bg-[#0B0B0E] text-[#F5F6FA] space-y-2 border border-black/10 shadow-lg">
                <span className="font-mono text-xs text-[#00D4FF] uppercase font-semibold">
                  Horário de Operação
                </span>
                <p className="font-display font-bold text-lg text-[#F5F6FA]">
                  Segunda a Sexta: 08h às 19h
                </p>
                <p className="font-body text-xs text-[#9496A6]">
                  Sábados: 09h às 13h · Atendimento a emergências de infraestrutura 24/7.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
