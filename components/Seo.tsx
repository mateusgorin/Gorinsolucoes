import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { articlesData } from '../data/articles';

export const Seo: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "Gorin Soluções | Criação de Sites e Sistemas Web em Brasília";
    let description = "Criação de sites profissionais, landing pages e sistemas web em Brasília. Fale direto com o Mateus e peça seu orçamento.";
    let robots = "index, follow";
    let ogType = "website";
    const domain = "https://www.gorinsolucoes.com.br";
    const defaultOgImage = `${domain}/og-image.jpg`;
    let ogImage = defaultOgImage;

    const normalizedPath = pathname.replace(/\/+$/, '') || '/';
    const canonicalUrl = normalizedPath === '/' ? `${domain}/` : `${domain}${normalizedPath}`;

    let blogArticleJsonLd: object | null = null;

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
    } else if (normalizedPath === '/blog') {
      title = "Blog | Gorin Soluções";
      description = "Artigos sobre criação de sites, SEO, performance web e inteligência artificial para pequenos negócios.";
      robots = "index, follow";
    } else if (normalizedPath.startsWith('/blog/')) {
      const slug = normalizedPath.replace(/^\/blog\//, '');
      const article = articlesData.find(a => a.slug === slug);
      if (article) {
        title = `${article.title} | Gorin Soluções`;
        description = article.excerpt;
        robots = "index, follow";
        ogType = "article";
        if (article.image) {
          ogImage = article.image;
        }

        // Parse date DD/MM/YYYY into YYYY-MM-DD
        const [day, month, year] = article.date.split('/');
        const isoDate = year && month && day ? `${year}-${month}-${day}` : '2026-10-15';

        blogArticleJsonLd = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.excerpt,
          "datePublished": isoDate,
          "image": article.image,
          "url": canonicalUrl,
          "author": {
            "@type": "Person",
            "name": "Mateus Miranda Amaral"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Gorin Soluções",
            "url": domain,
            "logo": {
              "@type": "ImageObject",
              "url": `${domain}/images/mascot-trimmed.webp`
            }
          }
        };
      }
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
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:locale', 'pt_BR');
    setMetaTag('property', 'og:site_name', 'Gorin Soluções');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // JSON-LD BlogPosting injection for article pages
    const jsonLdScriptId = 'seo-blogposting-jsonld';
    let scriptEl = document.getElementById(jsonLdScriptId);
    if (blogArticleJsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = jsonLdScriptId;
        scriptEl.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(blogArticleJsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [pathname]);

  return null;
};
