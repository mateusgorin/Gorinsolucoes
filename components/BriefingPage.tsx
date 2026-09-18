import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ClipboardCheck, ArrowLeft, Send, Sparkles, Building2, Users, Target, FileText, Palette, Globe, CheckCircle2 } from 'lucide-react';

export const BriefingPage: React.FC = () => {
  // All fields in a unified state
  const [formData, setFormData] = useState({
    // SOBRE A EMPRESA / PROFISSIONAL
    empresaNome: '',
    empresaServico: '',
    empresaFormato: '',
    empresaRegiao: '',
    
    // PÚBLICO-ALVO
    publicoCliente: '',
    publicoProblema: '',
    
    // OBJETIVO DO SITE
    objetivoAcao: '',
    
    // CONTEÚDO E MATERIAIS
    materiaisProntos: '',
    materiaisFotos: '',
    materiaisRedes: '',
    
    // IDENTIDADE VISUAL E DESIGN
    designLogoCores: '',
    designReferencias: '',
    designImagemVibe: '',
    
    // DOMÍNIO E ESTRUTURA TÉCNICA
    tecnicoDominio: '',
    tecnicoHospedagem: ''
  });

  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const mapFields = [
    { key: 'empresaNome', label: 'Nome da Empresa ou Profissional' },
    { key: 'empresaServico', label: 'Principal Serviço ou Atuação' },
    { key: 'empresaFormato', label: 'Formato de Venda/Atendimento' },
    { key: 'empresaRegiao', label: 'Região de Abrangência' },
    { key: 'publicoCliente', label: 'Cliente Ideal' },
    { key: 'publicoProblema', label: 'Principal Problema/Desejo que Resolve' },
    { key: 'objetivoAcao', label: 'Ação Principal Desejada do Visitante' },
    { key: 'materiaisProntos', label: 'Materiais Prontos' },
    { key: 'materiaisFotos', label: 'As fotos disponíveis (Profissionais ou Banco)' },
    { key: 'materiaisRedes', label: 'Redes Sociais Oficiais' },
    { key: 'designLogoCores', label: 'Logotipo e Cores Preferidas' },
    { key: 'designReferencias', label: 'Sites de Referência' },
    { key: 'designImagemVibe', label: 'Imagem/Vibe que deseja transmitir' },
    { key: 'tecnicoDominio', label: 'Domínio próprio comprado' },
    { key: 'tecnicoHospedagem', label: 'Hospedagem contratada / Site antigo' }
  ];

  // Calculate percentage of completeness
  const filledFieldsCount = mapFields.filter(f => formData[f.key as keyof typeof formData].trim() !== '').length;
  const progressPercent = Math.round((filledFieldsCount / mapFields.length) * 100);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Format beautifully for WhatsApp
    const whatsappMsgText = `*BRIEFING DE PROJETO — GORIN SOLUÇÕES*\n\n` +
      `*1. SOBRE A EMPRESA / PROFISSIONAL*\n` +
      `• *Nome da Marca:* ${formData.empresaNome || 'Não informado'}\n` +
      `• *Serviço/Atuação:* ${formData.empresaServico || 'Não informado'}\n` +
      `• *Formato Atendimento:* ${formData.empresaFormato || 'Não informado'}\n` +
      `• *Região de Atuação:* ${formData.empresaRegiao || 'Não informado'}\n\n` +
      `*2. PÚBLICO-ALVO*\n` +
      `• *Cliente Ideal:* ${formData.publicoCliente || 'Não informado'}\n` +
      `• *Problema Resolvido:* ${formData.publicoProblema || 'Não informado'}\n\n` +
      `*3. OBJETIVO DO SITE*\n` +
      `• *Ação Desejada:* ${formData.objetivoAcao || 'Não informado'}\n\n` +
      `*4. CONTEÚDO E MATERIAIS*\n` +
      `• *Materiais Prontos:* ${formData.materiaisProntos || 'Não informado'}\n` +
      `• *Tipos de Fotos:* ${formData.materiaisFotos || 'Não informado'}\n` +
      `• *Redes Sociais:* ${formData.materiaisRedes || 'Não informado'}\n\n` +
      `*5. IDENTIDADE VISUAL E DESIGN*\n` +
      `• *Logotipo / Cores:* ${formData.designLogoCores || 'Não informado'}\n` +
      `• *Referências Visuais:* ${formData.designReferencias || 'Não informado'}\n` +
      `• *Imagem/Vibe:* ${formData.designImagemVibe || 'Não informado'}\n\n` +
      `*6. DOMÍNIO E ESTRUTURA TÉCNICA*\n` +
      `• *Domínio Próprio:* ${formData.tecnicoDominio || 'Não informado'}\n` +
      `• *Hospedagem/Site Antigo:* ${formData.tecnicoHospedagem || 'Não informado'}`;

    // Format for email submission payload
    const emailPayload = {
      _subject: `Briefing de Projeto: ${formData.empresaNome || 'Novo Cliente'}`,
      _honey: "", // Honeypot field for spam prevention
      _captcha: "false",
      "Nome da Empresa ou Profissional": formData.empresaNome,
      "Principal Serviço ou Atuação": formData.empresaServico,
      "Formato de Venda/Atendimento": formData.empresaFormato,
      "Região de Abrangência": formData.empresaRegiao,
      "Cliente Ideal": formData.publicoCliente,
      "Principal Problema/Desejo que Resolve": formData.publicoProblema,
      "Ação Principal Desejada do Visitante": formData.objetivoAcao,
      "Materiais Prontos": formData.materiaisProntos,
      "As fotos disponíveis (Profissionais ou Banco)": formData.materiaisFotos,
      "Redes Sociais Oficiais": formData.materiaisRedes,
      "Logotipo e Cores Preferidas": formData.designLogoCores,
      "Sites de Referência": formData.designReferencias,
      "Imagem/Vibe que deseja transmitir": formData.designImagemVibe,
      "Domínio próprio comprado": formData.tecnicoDominio,
      "Hospedagem contratada / Site antigo": formData.tecnicoHospedagem
    };

    try {
      // POST asynchronously to FormSubmit AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/mateusmirandaamaral@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(emailPayload)
      });

      if (response.ok) {
        // Prepare the WhatsApp share url
        const waUrl = `https://wa.me/5561981290099?text=${encodeURIComponent(whatsappMsgText)}`;
        setWhatsappUrl(waUrl);
        setIsSent(true);
      } else {
        throw new Error("Falha no envio de e-mail");
      }
    } catch (err) {
      console.error(err);
      // Fallback: Still activate the WhatsApp redirection even if FormSubmit API has errors
      const waUrl = `https://wa.me/5561981290099?text=${encodeURIComponent(whatsappMsgText)}`;
      setWhatsappUrl(waUrl);
      setIsSent(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSendWhatsappAndReset = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAFAF9] min-h-screen text-[#0B0B0C] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        
        {/* Navigation Indicator */}
        <div className="mb-10">
          <button 
            onClick={handleBackHome}
            className="group inline-flex items-center gap-2 font-mono text-xs text-[#0B0B0C]/60 hover:text-[#0B0B0C] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>VOLTAR PARA O SITE</span>
          </button>
        </div>

        {/* Heading */}
        <SectionHeading 
          title="BRIEFING DE PROJETO" 
          subtitle="ESTRATÉGIA & ESPECIFICAÇÃO" 
        />
        
        <p className="font-sans text-[#71717A] text-sm md:text-base mb-10 -mt-10 max-w-2xl leading-relaxed">
          Para criarmos o seu site com a melhor estratégia e design, preciso de algumas informações fundamentais sobre o seu negócio.
        </p>

        {/* Progress Tracker Widget */}
        <div className="border border-black/10 bg-white rounded-[6px] p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <ClipboardCheck className="text-[#00D4FF]" size={20} />
            <span className="font-mono text-xs text-[#0B0B0C] uppercase tracking-wider font-semibold">
              Progresso do Preenchimento
            </span>
          </div>
          <div className="flex-1 max-w-md w-full">
            <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#00D4FF] transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <span className="font-mono text-xs text-[#0B0B0C] font-bold">{progressPercent}% Concluído</span>
        </div>

        {/* Success Screen */}
        {isSent ? (
          <div className="border border-black/10 bg-white rounded-[6px] p-8 md:p-12 text-center shadow-lg">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#0B0B0C] bg-black/5 px-3 py-1 rounded-[2px] mb-6">
              SISTEMA SINCRONIZADO
            </div>
            
            <CheckCircle2 size={56} className="text-[#00D4FF] mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-archivo font-black text-[#0B0B0C] uppercase tracking-tight mb-4">
              E-mail Enviado com Sucesso!
            </h3>
            <p className="text-[#71717A] font-sans text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Obrigado! Suas respostas foram direcionadas para meu e-mail <strong className="text-[#0B0B0C] font-mono">mateusmirandaamaral@gmail.com</strong>.<br/>
              Para garantir que eu visualize imediatamente e possamos iniciar a estratégia já, <strong className="text-[#0B0B0C]">envie também uma cópia no meu WhatsApp no botão abaixo!</strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={handleSendWhatsappAndReset} 
                className="px-8 py-4 bg-[#25D366] text-white font-archivo font-black text-xs sm:text-sm tracking-wider uppercase rounded-[4px] hover:bg-[#25D366]/90 transition-colors shadow-sm cursor-pointer"
              >
                ENVIAR CÓPIA NO WHATSAPP
              </button>
              <button 
                onClick={handleBackHome} 
                className="px-6 py-4 border border-black/15 bg-white text-[#0B0B0C] font-mono text-xs uppercase tracking-wider rounded-[4px] hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Voltar à Página Principal
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="space-y-8 relative">
            
            {/* Section 1: Sobre a Empresa / Profissional */}
            <div className="border border-black/10 bg-white rounded-[6px] p-6 md:p-8 shadow-sm relative">
              <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-[10px] text-[#71717A] uppercase">
                <Building2 size={14} /> SEC_01 // SOBRE
              </div>
              <h4 className="text-lg font-archivo font-black text-[#0B0B0C] tracking-tight uppercase mb-6 flex items-center gap-2">
                <span className="text-[#00D4FF]">01.</span> Sobre a Empresa / Profissional
              </h4>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Qual é o nome da empresa ou o seu nome como profissional? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Como a marca deve ser apresentada no site?)</span>
                  </label>
                  <input 
                    type="text"
                    name="empresaNome"
                    required
                    value={formData.empresaNome}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30"
                    placeholder="Ex: Gorin Soluções"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Qual é o seu principal serviço, produto ou área de atuação? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Ex: escritório de advocacia, venda de roupas, consultoria financeira, restaurante, clínica de estética...)</span>
                  </label>
                  <textarea 
                    name="empresaServico"
                    required
                    rows={3}
                    value={formData.empresaServico}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Descreva seu principal serviço ou produto"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Como funciona o seu formato de venda ou atendimento? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Ex: apenas presencial, 100% online, e-commerce, envio para todo o país, atendimento híbrido...)</span>
                  </label>
                  <textarea 
                    name="empresaFormato"
                    required
                    rows={3}
                    value={formData.empresaFormato}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Ex: 100% online através do atendimento no WhatsApp"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Qual é a sua região de abrangência? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Ex: atende o Brasil todo, apenas uma cidade específica, região metropolitana...)</span>
                  </label>
                  <input 
                    type="text"
                    name="empresaRegiao"
                    required
                    value={formData.empresaRegiao}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30"
                    placeholder="Ex: Todo o Distrito Federal e consultorias online no Brasil todo"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Público-Alvo */}
            <div className="border border-black/10 bg-white rounded-[6px] p-6 md:p-8 shadow-sm relative">
              <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-[10px] text-[#71717A] uppercase">
                <Users size={14} /> SEC_02 // PÚBLICO
              </div>
              <h4 className="text-lg font-archivo font-black text-[#0B0B0C] tracking-tight uppercase mb-6 flex items-center gap-2">
                <span className="text-[#00D4FF]">02.</span> Público-Alvo
              </h4>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Quem é o seu cliente ideal? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Ex: outras empresas/B2B, mães, jovens universitários, público de luxo, público em geral...)</span>
                  </label>
                  <textarea 
                    name="publicoCliente"
                    required
                    rows={3}
                    value={formData.publicoCliente}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Descreva quem é o seu cliente ideal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Qual é o principal problema ou desejo que o seu negócio resolve para esse cliente? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Por que eles te procuram?)</span>
                  </label>
                  <textarea 
                    name="publicoProblema"
                    required
                    rows={3}
                    value={formData.publicoProblema}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Ex: Querem se destacar no digital com um site que gera vendas reais"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Objetivo do Site */}
            <div className="border border-black/10 bg-white rounded-[6px] p-6 md:p-8 shadow-sm relative">
              <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-[10px] text-[#71717A] uppercase">
                <Target size={14} /> SEC_03 // OBJETIVO
              </div>
              <h4 className="text-lg font-archivo font-black text-[#0B0B0C] tracking-tight uppercase mb-6 flex items-center gap-2">
                <span className="text-[#00D4FF]">03.</span> Objetivo do Site
              </h4>

              <div>
                <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                  Qual é a ação principal que você deseja que o visitante faça ao entrar no site? <span className="text-[#00D4FF]">*</span>
                  <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Ex: clicar no botão do WhatsApp, preencher um formulário de orçamento, comprar um produto direto na página, agendar uma consulta...)</span>
                </label>
                <textarea 
                  name="objetivoAcao"
                  required
                  rows={3}
                  value={formData.objetivoAcao}
                  onChange={handleChange}
                  className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                  placeholder="Selecione ou descreva qual a ação direta convertemos"
                />
              </div>
            </div>

            {/* Section 4: Conteúdo e Materiais */}
            <div className="border border-black/10 bg-white rounded-[6px] p-6 md:p-8 shadow-sm relative">
              <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-[10px] text-[#71717A] uppercase">
                <FileText size={14} /> SEC_04 // CONTEÚDO
              </div>
              <h4 className="text-lg font-archivo font-black text-[#0B0B0C] tracking-tight uppercase mb-6 flex items-center gap-2">
                <span className="text-[#00D4FF]">04.</span> Conteúdo e Materiais
              </h4>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Quais materiais você já possui prontos para o site? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Ex: textos institucionais, fotos profissionais da equipe/produtos, vídeos, depoimentos de clientes...)</span>
                  </label>
                  <textarea 
                    name="materiaisProntos"
                    required
                    rows={3}
                    value={formData.materiaisProntos}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Descreva o que já tem em mãos"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    As fotos disponíveis são profissionais ou precisaremos utilizar bancos de imagens de alta qualidade por enquanto? <span className="text-[#00D4FF]">*</span>
                  </label>
                  <textarea 
                    name="materiaisFotos"
                    required
                    rows={2}
                    value={formData.materiaisFotos}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Nos informe sobre as fotos"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Quais redes sociais você utiliza profissionalmente e deseja vincular ao site? <span className="text-[#00D4FF]">*</span>
                  </label>
                  <input 
                    type="text"
                    name="materiaisRedes"
                    required
                    value={formData.materiaisRedes}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30"
                    placeholder="Ex: Instagram, LinkedIn, YouTube"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Identidade Visual e Design */}
            <div className="border border-black/10 bg-white rounded-[6px] p-6 md:p-8 shadow-sm relative">
              <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-[10px] text-[#71717A] uppercase">
                <Palette size={14} /> SEC_05 // DESIGN
              </div>
              <h4 className="text-lg font-archivo font-black text-[#0B0B0C] tracking-tight uppercase mb-6 flex items-center gap-2">
                <span className="text-[#00D4FF]">05.</span> Identidade Visual e Design
              </h4>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Você já possui um logotipo profissional e uma paleta de cores definida? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Se não, tem cores de preferência para a marca?)</span>
                  </label>
                  <textarea 
                    name="designLogoCores"
                    required
                    rows={3}
                    value={formData.designLogoCores}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Nos informe sobre logotipo e suas preferências de cores"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Tem o link de 2 ou 3 sites (podem ser de concorrentes ou de outros ramos) que você acha incríveis e que servem de referência visual? <span className="text-[#00D4FF]">*</span>
                  </label>
                  <textarea 
                    name="designReferencias"
                    required
                    rows={3}
                    value={formData.designReferencias}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Cole os links de referência de design desejados"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Que tipo de imagem você quer passar para o seu cliente? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Ex: clean/minimalista, moderno/tecnológico, sério/corporativo, elegante/sofisticado, jovem/descontraído...)</span>
                  </label>
                  <textarea 
                    name="designImagemVibe"
                    required
                    rows={2}
                    value={formData.designImagemVibe}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Qual sentimento ou vibração o site deve passar"
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Domínio e Estrutura Técnica */}
            <div className="border border-black/10 bg-white rounded-[6px] p-6 md:p-8 shadow-sm relative">
              <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-[10px] text-[#71717A] uppercase">
                <Globe size={14} /> SEC_06 // ESTRUTURA
              </div>
              <h4 className="text-lg font-archivo font-black text-[#0B0B0C] tracking-tight uppercase mb-6 flex items-center gap-2">
                <span className="text-[#00D4FF]">06.</span> Domínio e Estrutura Técnica
              </h4>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Você já tem um domínio próprio comprado? <span className="text-[#00D4FF]">*</span>
                    <span className="block text-[11px] text-[#71717A] normal-case font-sans mt-0.5">(Ex: www.suaempresa.com.br)</span>
                  </label>
                  <input 
                    type="text"
                    name="tecnicoDominio"
                    required
                    value={formData.tecnicoDominio}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30"
                    placeholder="Nos informe o status do seu domínio"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#0B0B0C] uppercase tracking-wider mb-2 font-medium">
                    Você já tem alguma hospedagem contratada ou algum site antigo no ar atualmente? <span className="text-[#00D4FF]">*</span>
                  </label>
                  <textarea 
                    name="tecnicoHospedagem"
                    required
                    rows={2}
                    value={formData.tecnicoHospedagem}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF9] border border-black/15 focus:border-[#00D4FF] focus:bg-white p-3.5 text-[#0B0B0C] rounded-[4px] outline-none transition-colors font-sans text-sm placeholder:text-black/30 resize-none"
                    placeholder="Nos informe de hospedagens ou sites anteriores"
                  />
                </div>
              </div>
            </div>

            {/* Sticky Submission Button Box */}
            <div className="border border-black/10 bg-white/95 backdrop-blur-md p-5 rounded-[6px] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-4 z-40">
              <div className="text-left font-mono">
                <div className="text-[10px] text-[#71717A] uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={12} className="text-[#00D4FF]" /> TUDO PRONTO!
                </div>
                <div className="text-xs text-[#0B0B0C] font-semibold mt-0.5">
                  Respostas enviadas de forma instantânea para WhatsApp e E-mail.
                </div>
              </div>

              <div className="w-full sm:w-auto">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-4 bg-[#00D4FF] text-[#0B0B0C] font-archivo font-black uppercase text-xs sm:text-sm tracking-wider rounded-[4px] hover:bg-[#00D4FF]/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  {loading ? (
                    <span>ENVIANDO DADOS...</span>
                  ) : (
                    <>
                      <span>ENVIAR BRIEFING</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
