import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Instagram, MapPin, Radio, MessageCircle, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const phoneNumber = "5561981290099"; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*NOVO PEDIDO DE ORÇAMENTO*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Projeto:* ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof typeof prev]: value
    }));
  };

  // Coordenadas aproximadas para formar o mapa do Brasil (0-100 grid)
  const mapPoints: { x: number; y: number; id?: string }[] = [
    { x: 35, y: 5 },  // RR
    { x: 50, y: 10 }, // AP
    { x: 20, y: 20 }, // AM (Manaus)
    { x: 50, y: 25 }, // PA
    { x: 65, y: 20 }, // MA
    { x: 80, y: 20 }, // CE
    { x: 90, y: 25 }, // RN
    { x: 90, y: 30 }, // PE/PB
    { x: 80, y: 35 }, // AL/SE
    { x: 5, y: 35 },  // AC
    { x: 25, y: 40 }, // RO
    { x: 55, y: 40 }, // TO
    { x: 75, y: 45 }, // BA
    { x: 40, y: 50 }, // MT
    { x: 52, y: 55 }, // GO
    { x: 55, y: 53, id: 'DF' }, // DF - BRASÍLIA
    { x: 65, y: 60 }, // MG
    { x: 75, y: 65 }, // ES
    { x: 40, y: 65 }, // MS
    { x: 70, y: 72 }, // RJ
    { x: 60, y: 75 }, // SP
    { x: 55, y: 82 }, // PR
    { x: 55, y: 88 }, // SC
    { x: 50, y: 95 }, // RS
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0B0B0C] text-[#FAFAF9] relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <SectionHeading 
          title="ENTRE EM CONTATO" 
          subtitle="05 — CONTATO & BRIEFING" 
          inverted={true}
        />

        <div className="border border-white/10 bg-[#121214] rounded-[6px] p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Info Side */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">
                  <Radio size={16} className="animate-pulse" />
                  <span>DISPONÍVEL AGORA</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-archivo font-black text-[#FAFAF9] tracking-tight uppercase">
                  GORIN SOLUÇÕES
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-sans">
                  Transformamos ideias em negócios digitais. Entre em contato para discutir seu projeto ou tirar dúvidas.
                </p>
              </div>
              
              <div className="space-y-4 border-t border-b border-white/10 py-6">
                <a 
                  href="https://www.instagram.com/mateusgorin?igsh=a3Rnc2p0ZzE4ZWFz" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3.5 group text-[#D4D4D8] hover:text-[#00D4FF] transition-colors"
                >
                  <div className="w-10 h-10 rounded-[4px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00D4FF] transition-colors">
                    <Instagram size={18} />
                  </div>
                  <span className="font-mono text-xs sm:text-sm">@mateusgorin</span>
                </a>
                
                <div className="flex items-center gap-3.5 text-[#D4D4D8]">
                  <div className="w-10 h-10 rounded-[4px] bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin size={18} className="text-[#00D4FF]" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm">Brasília, DF - Atendimento Nacional</span>
                </div>

                <div className="flex items-center gap-3.5 text-[#D4D4D8]">
                  <div className="w-10 h-10 rounded-[4px] bg-white/5 border border-white/10 flex items-center justify-center">
                    <MessageCircle size={18} className="text-[#00D4FF]" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm">WhatsApp: (61) 98129-0099</span>
                </div>
              </div>

              {/* Mapa do Brasil Estilizado */}
              <div className="pt-2 relative w-full h-44 sm:h-52 opacity-80">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  {/* Conexões */}
                  <g stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.4">
                    {mapPoints.map((p, i) => {
                      if (i < mapPoints.length - 1) {
                        const next = mapPoints[i+1];
                        if (Math.abs(p.x - next.x) < 30 && Math.abs(p.y - next.y) < 30) {
                          return <line key={`l-${i}`} x1={p.x} y1={p.y} x2={next.x} y2={next.y} />;
                        }
                      }
                      return null;
                    })}
                    {mapPoints.map((p, i) => {
                      if(p.id !== 'DF') return <line key={`ldf-${i}-${p.x}-${p.y}`} x1={55} y1={53} x2={p.x} y2={p.y} stroke="rgba(0, 212, 255, 0.2)" />;
                      return null;
                    })}
                  </g>

                  {/* Pontos dos Estados */}
                  {mapPoints.map((p, i) => (
                    <g key={i}>
                      {p.id === 'DF' ? (
                        <>
                          <circle cx={p.x} cy={p.y} r="5" className="fill-[#00D4FF]/30" />
                          <circle cx={p.x} cy={p.y} r="2.5" className="fill-[#00D4FF]" />
                          <circle cx={p.x} cy={p.y} r="1" className="fill-white" />
                        </>
                      ) : (
                        <>
                          <circle cx={p.x} cy={p.y} r="1.5" className="fill-white/60" />
                        </>
                      )}
                    </g>
                  ))}
                </svg>
                <div className="absolute bottom-0 right-0 text-[10px] font-mono text-white/40">
                  COBERTURA NACIONAL
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-[#18181B] border border-white/10 rounded-[6px] p-6 sm:p-8 space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    SEU NOME
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121214] border border-white/15 focus:border-[#00D4FF] p-3.5 text-[#FAFAF9] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-white/30" 
                    placeholder="Como podemos te chamar?" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    SEU E-MAIL
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121214] border border-white/15 focus:border-[#00D4FF] p-3.5 text-[#FAFAF9] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-white/30" 
                    placeholder="seuemail@empresa.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    DETALHES DO PROJETO
                  </label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121214] border border-white/15 focus:border-[#00D4FF] p-3.5 text-[#FAFAF9] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-white/30 resize-none" 
                    placeholder="Descreva o que você precisa para o seu negócio..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 px-6 bg-[#00D4FF] text-[#0B0B0C] font-archivo font-black uppercase text-sm tracking-wider rounded-[4px] hover:bg-[#00D4FF]/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-[1px]"
                >
                  <span>SOLICITAR ORÇAMENTO GRÁTIS AGORA</span>
                  <Send size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
