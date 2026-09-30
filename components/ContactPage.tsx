import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    'Design de sites',
    'Redesign do site',
    'Design de UI/UX',
    'Design de produto',
    'Identidade visual',
    'Desenvolvimento web',
    'Desenvolvimento para dispositivos móveis',
    'Sistema web',
  ];

  const budgetOptions = [
    '600 a 1000',
    '1000 a 2000',
    '2000 a 3000',
    '3000 a 4000',
    '4000 a 5000',
    'Mais de 5 mil',
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    const interestsText = selectedInterests.length > 0 ? selectedInterests.join(', ') : 'Não especificado';
    const budgetText = selectedBudget || 'A definir';
    const text = `*Novo Contato - Gorin Soluções*\n\n` +
      `*Nome:* ${name}\n` +
      `*E-mail:* ${email}\n` +
      `*Interesses:* ${interestsText}\n` +
      `*Orçamento:* ${budgetText}\n` +
      `*Sobre o projeto:* ${projectDetails || 'Sem observações adicionais.'}`;

    const waUrl = `https://wa.me/5561981290099?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(waUrl, '_blank');
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft size={16} />
            </div>
            <span className="font-bold tracking-tighter uppercase text-base">GORIN<span className="text-[#00D4FF]">.</span></span>
          </button>

          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-black/60">
            <span>Contato Direto</span>
            <button
              onClick={onBack}
              className="px-4 py-2 rounded-full border border-black/15 text-black hover:bg-black hover:text-white transition-all text-xs font-sans font-medium"
            >
              Voltar ao Site
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pt-36 pb-28">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center max-w-xl mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-[#EBF7F9] text-[#0E7490] mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 size={42} strokeWidth={2} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black">
              Mensagem enviada!
            </h2>
            <p className="text-black/70 text-lg leading-relaxed mb-8">
              Obrigado, <strong className="text-black font-semibold">{name}</strong>. Recebi seus detalhes e volto a falar com você em até 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={(window as any).__lastContactWhatsApp || 'https://wa.me/5561981290099'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black text-white hover:bg-black/85 font-medium transition-colors"
              >
                <MessageCircle size={18} />
                <span>Conversar agora no WhatsApp</span>
              </a>
              <button
                onClick={onBack}
                className="px-8 py-4 rounded-full border border-black/20 text-black hover:bg-black/5 font-medium transition-colors"
              >
                Voltar à Página Inicial
              </button>
            </div>
          </motion.div>
        ) : (
          <div>
            {/* Monumental Headline */}
            <div className="mb-14 md:mb-16">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-black leading-[1.08]">
                Vamos conversar sobre <br className="hidden sm:inline" /> o seu próximo projeto.
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Interest Pills Section */}
              <div className="space-y-4">
                <label className="block text-base md:text-lg font-medium text-black">
                  Tenho interesse em...
                </label>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {interestOptions.map((item) => {
                    const isSelected = selectedInterests.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleInterest(item)}
                        className={`px-5 py-2.5 rounded-full text-sm md:text-base border transition-all duration-200 ${
                          isSelected
                            ? 'bg-black text-white border-black shadow-sm'
                            : 'bg-transparent text-black border-black/25 hover:border-black'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Text Inputs with Minimal Bottom Border */}
              <div className="space-y-8 pt-4">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full py-4 text-lg md:text-xl text-black placeholder:text-black/45 bg-transparent border-b border-black/20 focus:border-black outline-none transition-colors"
                    />
                    <span className="absolute right-0 top-5 text-red-500 font-bold">*</span>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-mail"
                      className="w-full py-4 text-lg md:text-xl text-black placeholder:text-black/45 bg-transparent border-b border-black/20 focus:border-black outline-none transition-colors"
                    />
                    <span className="absolute right-0 top-5 text-red-500 font-bold">*</span>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder="Conte-nos sobre o seu projeto."
                    className="w-full py-4 text-lg md:text-xl text-black placeholder:text-black/45 bg-transparent border-b border-black/20 focus:border-black outline-none resize-none transition-colors"
                  />
                </div>
              </div>

              {/* Budget Options */}
              <div className="space-y-4 pt-4">
                <label className="block text-base md:text-lg font-medium text-black">
                  Quanto você pretende investir? (R$)
                </label>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {budgetOptions.map((b) => {
                    const isSelected = selectedBudget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(isSelected ? '' : b)}
                        className={`px-5 py-2.5 rounded-full text-sm md:text-base border transition-all duration-200 ${
                          isSelected
                            ? 'bg-black text-white border-black shadow-sm'
                            : 'bg-transparent text-black border-black/25 hover:border-black'
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 rounded-full border border-black text-black hover:bg-black hover:text-white font-medium text-base transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};
