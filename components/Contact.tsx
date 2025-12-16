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

  return (
    <section id="contact" className="py-24 bg-cyber-black relative scroll-mt-24">
       {/* Circuit Pattern Background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1016_1px,transparent_1px),linear-gradient(to_bottom,#0f1016_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="SOLICITE_SEU_ORÇAMENTO" subtitle="FALE_CONOSCO" />

        <div className="max-w-5xl mx-auto border border-cyber-primary/30 bg-cyber-dark/80 backdrop-blur-md clip-corner p-1">
          <div className="p-8 lg:p-12 border border-cyber-primary/10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-mono font-bold text-white mb-2 flex items-center gap-3">
                    <Radio className="text-cyber-accent animate-pulse" />
                    GORIN_SOLUÇÕES
                  </h3>
                  <p className="text-gray-400 font-sans">
                    Vamos transformar sua ideia em realidade. Preencha o formulário ou entre em contato direto pelo WhatsApp para um orçamento sem compromisso.
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
                    <span className="font-mono text-gray-400">Brasília, DF - Atendimento Global</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-cyber-primary/5 clip-corner transform translate-x-4 translate-y-4" />
                <form onSubmit={handleSubmit} className="relative bg-cyber-black border border-cyber-primary/20 p-6 space-y-4 clip-corner">
                  <div>
                    <label className="block text-xs font-mono text-cyber-primary mb-1">SEU_NOME</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark border border-gray-800 focus:border-cyber-primary p-3 text-white outline-none transition-colors font-mono text-sm" 
                      placeholder="Digite seu nome completo" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-cyber-primary mb-1">SEU_EMAIL</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark border border-gray-800 focus:border-cyber-primary p-3 text-white outline-none transition-colors font-mono text-sm" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-cyber-primary mb-1">COMO_PODEMOS_AJUDAR?</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark border border-gray-800 focus:border-cyber-primary p-3 text-white outline-none transition-colors font-mono text-sm" 
                      placeholder="Descreva seu projeto ou necessidade..."
                    ></textarea>
                  </div>
                  <Button type="submit" fullWidth variant="whatsapp" className="mt-2" icon>
                    ENVIAR_SOLICITAÇÃO
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