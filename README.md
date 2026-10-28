# Jovi Câmera

Vitrine em React dos modos de captura e conceitos de layout de interface
para o sistema de câmera do celular Jovi (projeto, Sprint 3, evoluído para Sprint 4
com Tailwind CSS, Responsividade e Deploy).

## Tecnologias utilizadas

- React 18 (componentes funcionais, estrutura pai → filho)
- Vite 5 (bundler e servidor de desenvolvimento)
- Tailwind CSS v4 (estilização por classes no JSX, via plugin `@tailwindcss/vite`)
- JavaScript (ES6+)
- CSS3 (`index.css` com variáveis de tema e `App.css` como arquivo de estilos do projeto)
- localStorage (persistência da cor de tema e do último modo escolhido)
- Deploy: Git + GitHub + Vercel

## O que precisa estar instalado

Para rodar o projeto **no computador** (é ele que executa o código):

| Programa | Versão | Para que serve | Download |
| --- | --- | --- | --- |
| Node.js (já inclui o `npm`) | 20 ou superior (LTS) | Executar o Vite e instalar as dependências | https://nodejs.org |
| Git | qualquer recente | Baixar (clonar) o projeto do GitHub | https://git-scm.com |
| Navegador | Chrome, Edge, Firefox ou Safari atualizado | Abrir o site | — |
| Editor de código (opcional) | VS Code | Editar o projeto | https://code.visualstudio.com |

Para conferir se o Node e o npm foram instalados, rode no terminal:

```bash
node -v
npm -v
```

**No celular, tablet ou iPad não é preciso instalar nada**: basta um navegador
(Chrome, Safari etc.). Os dispositivos só *abrem* o site, quem roda o projeto é o
computador (veja a seção "Abrir no celular, tablet ou iPad").

## Como executar o projeto no computador

1. Baixe o projeto:

```bash
git clone https://github.com/leoy-ui/Sprint3web.git
cd Sprint3web
```

2. Instale as dependências (só na primeira vez, precisa de internet):

```bash
npm install
```

Isso instala React, Vite, Tailwind CSS e o plugin do Tailwind para o Vite, todos
listados no `package.json`. Não é preciso instalar nada além disso.

3. Rode em modo de desenvolvimento (recarrega automaticamente ao salvar):

```bash
npm run dev
```

4. O terminal vai mostrar um endereço parecido com:

```
Local:   http://localhost:5173/
```

Abra esse endereço no navegador. Para parar o servidor, use `Ctrl + C` no terminal.

### Gerar a versão de produção (a mesma usada no deploy)

```bash
npm run build
npm run preview
```

O `build` cria a pasta `dist/` e o `preview` abre essa versão para você testar.

## Abrir no celular, tablet ou iPad

Existem três formas. Escolha a que for mais prática.

### Opção 1: pela mesma rede Wi-Fi (para testar durante o desenvolvimento)

Funciona com Android, iPhone, tablets e iPad.

1. Conecte o computador **e** o aparelho na **mesma rede Wi-Fi**.
2. No computador, rode o servidor liberando o acesso pela rede:

```bash
npm run dev -- --host
```

3. O terminal vai mostrar, além do endereço local, um endereço de rede:

```
Local:   http://localhost:5173/
Network: http://192.168.0.15:5173/
```

4. No celular, tablet ou iPad, abra o navegador e digite o endereço da linha
`Network` (o número será diferente no seu computador).

Se a linha `Network` não aparecer, descubra o IP do computador:

- Windows: `ipconfig` (procure por "Endereço IPv4")
- macOS: `ipconfig getifaddr en0`
- Linux: `hostname -I`

Depois abra `http://SEU-IP:5173` no aparelho.

**Se não abrir:**

- Confirme que os dois aparelhos estão na mesma rede (rede de visitantes e Wi-Fi de
  faculdade costumam bloquear a comunicação entre aparelhos; nesse caso, use a
  Opção 3 ou o "roteador" do próprio celular).
- No Windows, quando aparecer o aviso do Firewall, clique em **Permitir acesso** em
  redes privadas.
- O computador precisa continuar com o `npm run dev -- --host` rodando.

Para testar a versão de produção no aparelho, use `npm run build` e depois
`npm run preview -- --host`.

### Opção 2: simular os tamanhos no navegador do computador

Boa para conferir a responsividade sem usar o aparelho:

- **Chrome / Edge:** pressione `F12` e depois `Ctrl + Shift + M` (no Mac,
  `Cmd + Option + I` e `Cmd + Shift + M`). Escolha um aparelho na barra
  superior (iPhone, iPad, Galaxy...) ou digite a largura desejada.
- **Firefox:** `Ctrl + Shift + M`.
- **Safari (Mac):** ative o menu Desenvolvedor em Ajustes → Avançado e use
  Desenvolvedor → Entrar no Modo Design Responsivo.

### Opção 3: pelo link publicado na Vercel (funciona em qualquer lugar)

Depois do deploy, o site fica disponível por um link `https://...vercel.app`,
que abre em qualquer aparelho com internet, sem precisar do computador ligado.

Como fazer o deploy:

1. Envie o projeto para o GitHub (`git add .`, `git commit`, `git push`).
2. Acesse https://vercel.com e entre com a conta do GitHub.
3. Clique em **Add New → Project** e escolha o repositório.
4. Confirme as configurações (a Vercel detecta o Vite sozinha):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Se o `package.json` estiver dentro de uma subpasta do repositório, aponte
     essa pasta em **Root Directory**.
5. Clique em **Deploy** e use o link gerado.

## Responsividade

O layout se adapta a três tamanhos, usando os breakpoints padrão do Tailwind:

| Aparelho | Largura da tela | Prefixo Tailwind |
| --- | --- | --- |
| Celular | até 767 px | (sem prefixo, é a base) |
| Tablet / iPad | de 768 px a 1279 px | `md:` |
| Computador | a partir de 1280 px | `xl:` |

## Problemas comuns

| Problema | O que fazer |
| --- | --- |
| `npm` ou `node` não é reconhecido | Instale o Node.js e **feche e abra o terminal** de novo |
| `Cannot find module '@tailwindcss/vite'` (ou `vite`) | Rode `npm install` dentro da pasta do projeto |
| Tela branca | Aperte `F12`, abra a aba **Console** e leia o erro em vermelho |
| `Port 5173 is already in use` | Feche o outro terminal que está rodando o projeto, ou o Vite usará a próxima porta (use o endereço que ele mostrar) |
| Erro de "execução de scripts desabilitada" no PowerShell | Use o terminal **Prompt de Comando (cmd)** ou o terminal do VS Code com cmd |
| Fontes diferentes do esperado | As fontes vêm do Google Fonts, então é preciso internet |
| Cor de tema ou último modo "lembrados" de outro jeito | São salvos no `localStorage` de cada navegador e aparelho; limpe os dados do site para resetar |

## Usuários e senhas de teste

Não há autenticação neste projeto, todas as páginas são de acesso livre.

## Onde e como a IA foi utilizada

O Claude (Anthropic) foi utilizado como assistente de desenvolvimento
durante o projeto: ajudou a corrigir erros e no desenvolvimento do Tailwind CSS
(pai → filho), gerou o código inicial dos componentes React, das funções
utilitárias que usam `Math` para simular as especificações da câmera, da
lógica de persistência com `localStorage`, da estilização e, na Sprint 4,
da migração para Tailwind CSS, da responsividade e da correção de erros
do projeto. As decisões de conteúdo (marca Jovi, modos de câmera, conceitos
de layout) e a revisão final do código foram feitas pela equipe.

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
    estilos.js        # classes Tailwind reutilizadas
  App.jsx              # componente raiz: estado global + localStorage
  App.css              # estilos do projeto
  index.css            # Tailwind + variáveis de tema
  main.jsx
```

## Link do repositório Git

https://github.com/leoy-ui/Sprint3web.git
