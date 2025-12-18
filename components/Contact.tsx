import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Instagram, MapPin, Radio } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Número para contato atualizado
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
  const mapPoints = [
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
    <section id="contact" className="py-24 bg-cyber-black relative scroll-mt-24">
       {/* Circuit Pattern Background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1016_1px,transparent_1px),linear-gradient(to_bottom,#0f1016_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="ENTRE EM CONTATO" subtitle="SOLICITE UM ORÇAMENTO" />

        <div className="max-w-5xl mx-auto border border-cyber-primary/30 bg-cyber-dark/80 backdrop-blur-md clip-corner p-1">
          <div className="p-8 lg:p-12 border border-cyber-primary/10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 flex flex-col">
                <div>
                  <h3 className="text-2xl font-mono font-bold text-white mb-2 flex items-center gap-3">
                    <Radio className="text-cyber-accent animate-pulse" />
                    GORIN SOLUÇÕES
                  </h3>
                  <p className="text-gray-400 font-sans">
                    Transformamos ideias em negócios digitais. Entre em contato para discutir seu projeto ou tirar dúvidas.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <a href="https://www.instagram.com/mateusgorin?igsh=a3Rnc2p0ZzE4ZWFz" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyber-slate border border-cyber-primary/20 flex items-center justify-center group-hover:bg-cyber-primary group-hover:text-black transition-all clip-corner-sm">
                      <Instagram size={20} />
                    </div>
                    <span className="font-mono text-gray-400 group-hover:text-cyber-primary transition-colors">@mateusgorin</span>
                  </a>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyber-slate border border-cyber-primary/20 flex items-center justify-center">
                      <MapPin size={20} className="text-cyber-secondary" />
                    </div>
                    <span className="font-mono text-gray-400">Brasília, DF - Atendimento Nacional</span>
                  </div>
                </div>

                {/* Mapa do Brasil Estilizado */}
                <div className="mt-auto pt-6 relative w-full h-48 sm:h-64 opacity-90">
                   <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,240,255,0.2)] overflow-visible">
                      {/* Grid sutil de fundo apenas na área do mapa */}
                      <defs>
                        <pattern id="grid-map" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <path d="M 35 5 L 90 25 L 50 95 L 5 35 Z" fill="url(#grid-map)" opacity="0.5" />

                      {/* Conexões (linhas) para efeito de rede */}
                      <g stroke="rgba(0, 240, 255, 0.1)" strokeWidth="0.2">
                        {mapPoints.map((p, i) => {
                          if (i < mapPoints.length - 1) {
                             // Conecta pontos próximos para efeito visual
                             const next = mapPoints[i+1];
                             if (Math.abs(p.x - next.x) < 30 && Math.abs(p.y - next.y) < 30) {
                               return <line key={`l-${i}`} x1={p.x} y1={p.y} x2={next.x} y2={next.y} />;
                             }
                          }
                          return null;
                        })}
                        {/* Linhas explícitas para o DF */}
                        {mapPoints.map((p) => {
                           if(p.id !== 'DF') return <line key={`ldf-${p.x}`} x1={55} y1={53} x2={p.x} y2={p.y} stroke="rgba(112, 0, 255, 0.1)" />;
                           return null;
                        })}
                      </g>

                      {/* Pontos dos Estados */}
                      {mapPoints.map((p, i) => (
                         <g key={i}>
                           {p.id === 'DF' ? (
                             <>
                               {/* Efeito Pulsante para o DF */}
                               <circle cx={p.x} cy={p.y} r="8" className="fill-cyber-secondary/20 animate-ping origin-center" />
                               <circle cx={p.x} cy={p.y} r="3" className="fill-cyber-secondary drop-shadow-[0_0_8px_rgba(112,0,255,1)]" />
                               <circle cx={p.x} cy={p.y} r="1" className="fill-white" />
                             </>
                           ) : (
                             <circle
                               cx={p.x}
                               cy={p.y}
                               r="1.5"
                               className="fill-cyber-primary/80 transition-all duration-500 hover:r-2 hover:fill-white"
                             />
                           )}
                         </g>
                      ))}
                   </svg>
                   <div className="absolute bottom-0 right-0 text-[10px] font-mono text-cyber-primary/30">
                     BRA_NET_COVERAGE_100%
                   </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-cyber-primary/5 clip-corner transform translate-x-4 translate-y-4" />
                <form onSubmit={handleSubmit} className="relative bg-cyber-black border border-cyber-primary/20 p-6 space-y-4 clip-corner">
                  <div>
                    <label className="block text-xs font-mono text-cyber-primary mb-1">SEU NOME</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark border border-gray-800 focus:border-cyber-primary p-3 text-white outline-none transition-colors font-mono text-sm" 
                      placeholder="Como podemos te chamar?" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-cyber-primary mb-1">SEU E-MAIL</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark border border-gray-800 focus:border-cyber-primary p-3 text-white outline-none transition-colors font-mono text-sm" 
                      placeholder="seuemail@empresa.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-cyber-primary mb-1">DETALHES DO PROJETO</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark border border-gray-800 focus:border-cyber-primary p-3 text-white outline-none transition-colors font-mono text-sm" 
                      placeholder="Descreva o que você precisa..."
                    ></textarea>
                  </div>
                  <Button type="submit" fullWidth variant="whatsapp" className="mt-2" icon>
                    ENVIAR MENSAGEM
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};