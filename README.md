# Gorin Soluções

Website institucional e comercial de alta performance para a **Gorin Soluções**, estúdio especializado em desenvolvimento web, landing pages de alta conversão e sistemas sob medida.

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ ou Bun

### Instalação das dependências
```bash
npm install
```

### Ambiente de Desenvolvimento
```bash
npm run dev
```
O servidor de desenvolvimento iniciará localmente (padrão `http://localhost:3000`).

### Build de Produção
```bash
npm run build
```
Valida a tipagem TypeScript (`tsc`) e compila o bundle otimizado com o Vite.

---

## 📁 Estrutura de Pastas

```
├── components/          # Componentes React da aplicação
│   ├── ui/              # Componentes de interface compartilhados (SectionHeading)
│   ├── BriefingPage.tsx # Página do formulário de briefing
│   ├── ContactPage.tsx  # Página dedicada de contato
│   ├── ElasticDivider.tsx # Divisor elástico interativo
│   ├── FluidCursor.tsx  # Cursor interativo suave com física fluida
│   ├── GorinSite.tsx    # Página principal com arquitetura editorial
│   ├── gorin-styles.css # Folha de estilos central e design system
│   ├── ImageReveal.tsx  # Efeito de revelação de imagem suave
│   ├── Mesh*.tsx        # Painéis gráficos e vetoriais decorativos
│   ├── PrivacyPage.tsx  # Página da política de privacidade
│   ├── StatCounter.tsx  # Contador numérico animado
│   └── TextRevealHeading.tsx # Tipografia animada com máscara de linha
├── data/
│   └── projects.ts      # Dados dos projetos do portfólio e cases de estudo
├── public/
│   └── images/          # Imagens otimizadas dos cases e identidade visual
├── App.tsx              # Componente raiz, roteador SPA e instâncias globais
├── index.html           # Ponto de entrada HTML com meta tags SEO e JSON-LD
├── index.tsx            # Inicialização e montagem do React
├── package.json         # Dependências e scripts do projeto
├── tsconfig.json        # Configuração do compilador TypeScript
└── vite.config.ts       # Configurações do Vite
```
