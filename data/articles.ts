export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const articlesData: Article[] = [
  {
    id: 'ai-code-acceleration',
    slug: 'como-uso-ia-para-entregar-sites-mais-rapido',
    title: 'Como uso IA para entregar sites mais rápido',
    category: 'Inteligência Artificial',
    date: '15/10/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792434337/Captura_de_tela_2026-10-19_152447_qwqsu5.webp',
    excerpt: 'Uso inteligência artificial no meu dia a dia para acelerar o desenvolvimento sem perder a qualidade.',
    content: [
      'Uso ferramentas de inteligência artificial para adiantar a parte repetitiva do código. Isso me dá tempo para focar no que realmente importa no seu projeto.',
      'Eu mesmo decido a estrutura, o visual e as partes importantes do site. Depois que a ferramenta gera a base do código, eu reviso cada detalhe antes de publicar.',
      'Para você, essa combinação traz um site pronto mais rápido, sem abrir mão do cuidado do trabalho feito à mão.'
    ]
  },
  {
    id: 'react-vs-wordpress',
    slug: 'site-em-codigo-proprio-ou-wordpress-qual-escolher',
    title: 'Site em código próprio ou WordPress: qual escolher?',
    category: 'Engenharia Web',
    date: '10/10/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792434381/Gemini_Generated_Image_228kid228kid228k_xhvthq.webp',
    excerpt: 'O WordPress atende muitos casos, mas o código próprio deixa o site institucional leve e simples.',
    content: [
      'O WordPress serve muito bem para vários projetos e permite que você altere textos sozinho. O problema aparece quando você instala vários plugins que deixam tudo pesado e pedem atualizações constantes.',
      'Quando crio um site institucional em código próprio, ele fica leve e rápido. Por não usar plugins pesados, a estrutura continua simples e tranquila de manter ao longo do tempo.',
      'A escolha depende das suas necessidades. A única diferença é que, no código próprio, qualquer alteração futura passa por mim, enquanto no WordPress você mesmo consegue mexer.'
    ]
  },
  {
    id: 'seo-performance-conversion',
    slug: 'por-que-a-velocidade-do-site-importa',
    title: 'Por que a velocidade do site importa',
    category: 'Performance',
    date: '05/10/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792434390/Gemini_Generated_Image_90katb90katb90ka_in6y87.webp',
    excerpt: 'Páginas rápidas evitam que os visitantes desistam do acesso antes de conhecer a sua empresa.',
    content: [
      'Quem acessa um site pelo celular costuma ter pouca paciência. Se a página demora para abrir, a pessoa fecha o navegador e busca outra opção.',
      'A velocidade ajuda o seu cliente e também o Google. O buscador prefere indicar sites que abrem sem travar e carregam o conteúdo de forma direta.',
      'No meu trabalho, cuido disso usando imagens leves, fontes otimizadas e apenas o código necessário. Isso garante uma navegação fluida em qualquer aparelho.'
    ]
  },
  {
    id: 'mobile-first-whatsapp-conversion',
    slug: 'um-site-pensado-para-o-celular-com-whatsapp-a-mao',
    title: 'Um site pensado para o celular, com WhatsApp à mão',
    category: 'Conversão & Vendas',
    date: '28/09/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792434400/Gemini_Generated_Image_jix1zajix1zajix1_r4yuyj.webp',
    excerpt: 'Facilitar o contato pelo celular é o caminho mais simples para receber mensagens de clientes.',
    content: [
      'A maioria das pessoas que procura os seus serviços está usando o celular. Por isso, eu crio a página pensando primeiro na tela pequena.',
      'Coloco botões grandes e visíveis, posicionados ao alcance do seu polegar. Assim, quem se interessa pelo seu trabalho não precisa procurar onde clicar.',
      'Também preparo mensagens prontas para o WhatsApp. Com menos etapas entre a visita e a conversa, fica mais fácil para o cliente falar direto com você.'
    ]
  },
  {
    id: 'design-editorial-autoridade-marca',
    slug: 'design-limpo-passa-mais-confianca',
    title: 'Design limpo passa mais confiança',
    category: 'Design & UX',
    date: '22/09/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792434454/Captura_de_tela_2026-10-19_152709_esjn54.webp',
    excerpt: 'Um visual organizado ajuda o visitante a entender a sua proposta e a confiar na sua empresa.',
    content: [
      'Um site cheio de elementos piscando e informações espalhadas costuma afastar quem entra. A poluição visual gera dúvida e faz o visitante sair rápido.',
      'Eu prefiro um visual limpo e bem organizado. Escolho letras fáceis de ler, mantenho espaços vazios para a tela respirar e organizo os títulos em ordem clara.',
      'Uso apenas animações leves e discretas. Esse cuidado no acabamento mostra profissionalismo e ajuda a passar a confiança necessária para o cliente conversar com você.'
    ]
  },
  {
    id: 'core-web-vitals-google-ranking',
    slug: 'core-web-vitals-o-que-o-google-mede-no-seu-site',
    title: 'Core Web Vitals: o que o Google mede no seu site',
    category: 'Performance',
    date: '14/09/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792434486/Gemini_Generated_Image_bllhxlbllhxlbllh_ddscfn.webp',
    excerpt: 'Entenda como o Google analisa a velocidade e o comportamento da sua página de forma simples.',
    content: [
      'Essas siglas do Google avaliam pontos simples da navegação. O carregamento do conteúdo principal, a rapidez com que a página responde ao clique e se os elementos mudam de lugar sozinhos.',
      'No meu processo, cuido disso usando imagens leves, fontes preparadas e pouco código. Isso evita que a página trave ou fique pulando na tela durante a leitura.',
      'Eu não prometo notas específicas, mas você mesmo pode testar o seu site na ferramenta oficial do PageSpeed Insights para acompanhar a evolução.'
    ]
  },
  {
    id: 'seguranca-estabilidade-cloud',
    slug: 'menos-plugins-menos-pontos-fracos-no-seu-site',
    title: 'Menos plugins, menos pontos fracos no seu site',
    category: 'Engenharia Web',
    date: '05/09/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792434535/Captura_de_tela_2026-10-19_152835_kw9tgy.webp',
    excerpt: 'Uma estrutura simples e sem acúmulo de componentes reduz os riscos de falhas na sua página.',
    content: [
      'Plugins desatualizados são uma porta de entrada comum para problemas de segurança na internet. Quanto mais ferramentas externas você acumula, mais pontos fracos o site pode ter.',
      'Para proteger o seu endereço, eu crio a página sem banco de dados exposto. Além disso, uso navegação segura por protocolo HTTPS e redes de distribuição de conteúdo.',
      'Sendo muito honesto, nenhum site na internet é totalmente invulnerável. No entanto, uma estrutura enxuta reduz bastante as chances de tentativas de ataque.'
    ]
  },
  {
    id: 'ia-atendimento-automacao-comercial',
    slug: 'ia-no-atendimento-quando-faz-sentido',
    title: 'IA no atendimento: quando faz sentido',
    category: 'Inteligência Artificial',
    date: '26/08/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792435141/Picsart_26-10-19_15-37-46-215_ivrlbo.webp',
    excerpt: 'Entenda como a inteligência artificial pode ajudar no primeiro contato sem substituir o atendimento humano.',
    content: [
      'Responder rápido a quem procura o seu serviço ajuda muito no primeiro contato. A inteligência artificial pode fazer essa triagem inicial das dúvidas mais frequentes da sua empresa.',
      'Mas nem todo negócio precisa dessa ferramenta. No final das contas, quem fecha a venda de verdade continua sendo você ou sua equipe em uma conversa no WhatsApp.',
      'Se você quiser avaliar se a automação vale a pena para a sua rotina, é só me chamar para conversarmos sem compromisso.'
    ]
  },
  {
    id: 'copywriting-estrategico-sites-profissionais',
    slug: 'texto-de-site-como-escrever-para-quem-tem-pressa',
    title: 'Texto de site: como escrever para quem tem pressa',
    category: 'Conversão & Vendas',
    date: '18/08/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792435759/Screenshot_20261019_154907_Google_se2v2c.webp',
    excerpt: 'Aprenda a organizar as informações da sua página para apresentar o seu trabalho de forma direta.',
    content: [
      'As pessoas leem rápido na internet e querem entender o assunto sem enrolação. A primeira tela do seu site deve dizer o que você faz, para quem faz e qual é o próximo passo.',
      'Recomendo evitar frases genéricas como qualidade e excelência, que não dizem quase nada na prática. É melhor explicar exatamente o problema que você resolve para o seu cliente.',
      'Eu organizo os textos do site usando frases curtas, títulos diretos e pequenos blocos de leitura. Dessa forma, o visitante encontra o que precisa sem perder tempo.'
    ]
  },
  {
    id: 'serverless-cloud-infrastructure',
    slug: 'hospedagem-moderna-pagar-so-pelo-que-o-site-usa',
    title: 'Hospedagem moderna: pagar só pelo que o site usa',
    category: 'Engenharia Web',
    date: '10/08/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792435467/1792435312805_mrwjjq.webp',
    excerpt: 'Conheça a diferença entre hospedagem tradicional e em nuvem para escolher a melhor opção para o seu site.',
    content: [
      'Na hospedagem tradicional, você paga um valor fixo por um servidor que fica ligado direto, mesmo sem visitas. Na hospedagem em nuvem com rede de distribuição, a estrutura responde sob demanda.',
      'Para um site institucional, esse modelo moderno costuma sair bastante barato e oferece ótima estabilidade no dia a dia.',
      'Eu configuro esse tipo de hospedagem para que você tenha uma página rápida e estável, pagando um valor justo pela infraestrutura que o seu projeto realmente consome.'
    ]
  },
  {
    id: 'cro-ab-testing-conversao',
    slug: 'testes-ab-melhorar-o-site-com-dados',
    title: 'Testes A/B: melhorar o site com dados',
    category: 'Conversão & Vendas',
    date: '02/08/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792435725/Screenshot_20261019_154808_Google_wwxqaa.webp',
    excerpt: 'Descubra como pequenos ajustes no texto e na estrutura ajudam os visitantes a entender melhor a sua oferta.',
    content: [
      'O teste comparativo funciona assim: criamos duas versões de uma mesma página mudando um título ou botão para ver qual opção desperta mais interesse dos visitantes.',
      'Essa estratégia vale muito a pena para sites com volume grande de acessos. Em sites menores, o melhor caminho no começo é deixar a mensagem principal simples e direta.',
      'Sem prometer ganhos milagrosos, o importante é acompanhar como as pessoas navegam na sua página e fazer ajustes constantes para tirar dúvidas antes do contato no WhatsApp.'
    ]
  },
  {
    id: 'acessibilidade-web-inclusiva',
    slug: 'acessibilidade-um-site-que-todo-mundo-consegue-usar',
    title: 'Acessibilidade: um site que todo mundo consegue usar',
    category: 'Design & UX',
    date: '25/07/2026',
    readTime: '3 min de leitura',
    image: 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,w_900/v1792435607/Screenshot_20261019_154622_Google_kpqeyh.webp',
    excerpt: 'Criar páginas acessíveis garante uma boa experiência de leitura e navegação para qualquer pessoa.',
    content: [
      'Acessibilidade web significa criar uma página que qualquer pessoa consiga navegar com facilidade. Isso inclui um bom contraste de cores para leitura e suporte a teclado.',
      'Também coloco texto alternativo descritivo em cada imagem. Esse recurso permite que leitores de tela expliquem para pessoas com deficiência visual o que está na foto.',
      'Esses cuidados ajudam todo mundo, inclusive quem acessa em uma tela pequena sob luz do sol. Um site bem construído atende qualquer visitante de forma agradável.'
    ]
  }
];
