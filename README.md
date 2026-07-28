# Maurício Reis — Frontend Portfolio

Portfólio semântico e interativo para apresentar trajetória, competências,
serviços e projetos como desenvolvedor Frontend Sênior e Tech Lead.

## Tecnologias

- Next.js, React e TypeScript
- CSS com animações nativas e uma ilha de interação orientada ao scroll
- Vinext, Vite e Cloudflare

## Executando localmente

Requisito: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

## Qualidade e produção

```bash
npm run lint
npm run build
npm test
```

## Arquitetura

```text
app/
  layout.tsx            metadados e estrutura global
  page.tsx              ponto de entrada da página
  globals.css           identidade visual e responsividade
src/features/portfolio/
  components/           seções e elementos visuais
  content.ts            projetos, experiências e demais conteúdos
  types.ts              contratos dos conteúdos
  PortfolioPage.tsx     composição da feature
public/                 imagens e marcas
worker/                 adaptação do site para hospedagem
```

O conteúdo fica separado da apresentação. Para adicionar um projeto,
experiência, habilidade ou formação, basta editar `content.ts`; os componentes
renderizam as novas informações automaticamente.

## SEO e GEO

- HTML semântico renderizado no servidor
- Metadados Open Graph e Twitter
- JSON-LD com `Person`, `WebSite` e `CreativeWork`
- `robots.txt`, `sitemap.xml`, manifesto e `llms.txt`
- Conteúdo legível mesmo sem executar JavaScript

Defina a URL pública antes do deploy:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

Depois do lançamento, cadastre o domínio no Google Search Console e envie o
`sitemap.xml`. O arquivo `llms.txt` é complementar e não garante inclusão em
respostas de ferramentas de IA.
