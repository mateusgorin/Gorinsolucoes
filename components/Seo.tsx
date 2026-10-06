import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "Gorin Soluções | Criação de Sites e Sistemas Web em Brasília";
    let description = "Criação de sites profissionais, landing pages e sistemas web em Brasília. Fale direto com o Mateus e peça seu orçamento.";
    let robots = "index, follow";
    const domain = "https://www.gorinsolucoes.com.br";
    const normalizedPath = pathname.replace(/\/+$/, '');
    const canonicalUrl = normalizedPath === '' ? `${domain}/` : `${domain}${normalizedPath}`;

    if (normalizedPath === '/contato') {
      title = "Contato | Gorin Soluções";
      description = "Fale direto com o Mateus pelo WhatsApp e peça o orçamento do seu site ou sistema web.";
      robots = "index, follow";
    } else if (normalizedPath === '/politica-de-privacidade') {
      title = "Política de Privacidade | Gorin Soluções";
      description = "Como a Gorin Soluções trata e protege os dados pessoais, de acordo com a LGPD.";
      robots = "index, follow";
    } else if (normalizedPath === '/briefing') {
      title = "Briefing de Projeto | Gorin Soluções";
      description = "Formulário de briefing para iniciar o seu projeto.";
      robots = "noindex, nofollow";
    }

    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', robots);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

  }, [pathname]);

  return null;
};
