# Jovi Câmera

Vitrine em React dos modos de captura e conceitos de layout de interface
para o sistema de câmera do celular Jovi (projeto, Sprint 3).

## Tecnologias utilizadas

- React 18 (componentes funcionais, estrutura pai → filho)
- Vite (bundler e servidor de desenvolvimento)
- JavaScript (ES6+)
- CSS3 (sem frameworks de UI)
- localStorage (persistência da cor de tema e do último modo escolhido)

## Como executar o projeto

Modo de desenvolvimento (recarrega automaticamente):

```bash
npm run dev
```

O terminal vai mostrar um endereço local, algo como
`http://localhost:5173` — abra esse endereço no navegador.

Para gerar a versão de produção (usada no deploy):

```bash
npm run build
npm run preview
```

## Usuários e senhas de teste

Não há autenticação neste projeto — todas as páginas são de acesso livre.

## Onde e como a IA foi utilizada

O Claude (Anthropic) foi utilizado como assistente de desenvolvimento
durante todo o projeto: ajudou a planejar a estrutura de componentes
(pai → filho), gerou o código inicial dos componentes React, das funções
utilitárias que usam `Math` para simular as especificações da câmera, da
lógica de persistência com `localStorage`, e da estilização em CSS. As
decisões de conteúdo (marca Jovi, modos de câmera, conceitos de layout) e
a revisão final do código foram feitas pela equipe.

## Estrutura do projeto

```
src/
  components/
    Header.jsx        # navegação + seletor de cor
    Footer.jsx
    ApertureLogo.jsx   # logo animado (SVG)
    ModoCard.jsx        # card de modo de câmera
    LayoutCard.jsx       # card de conceito de layout
    pages/
      Home.jsx
      Modos.jsx
      Layouts.jsx
      Sobre.jsx
  data/
    modos.js        # dados dos modos de captura
    layouts.js       # dados dos conceitos de layout
  utils/
    specs.js          # funções com Math (random, round, sqrt, max)
  App.jsx              # componente raiz: estado global + localStorage
  main.jsx
```

## Link do repositório Git

[https://github.com/leoy-ui/Sprint3web.git]

