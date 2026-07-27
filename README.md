# Maurício Reis — Frontend Portfolio

Portfólio interativo para apresentar trajetória, competências e projetos como
desenvolvedor Frontend e Tech Lead.

## Tecnologias

- Next.js, React e TypeScript
- CSS com animações nativas
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
  hooks/                comportamento e animações
  content.ts            projetos, experiências e demais conteúdos
  types.ts              contratos dos conteúdos
  PortfolioPage.tsx     composição da feature
public/                 imagens e marcas
worker/                 adaptação do site para hospedagem
```

O conteúdo fica separado da apresentação. Para adicionar um projeto,
experiência, habilidade ou formação, basta editar `content.ts`; os componentes
renderizam as novas informações automaticamente.
