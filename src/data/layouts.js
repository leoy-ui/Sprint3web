// Conceitos de layout de interface para o app de câmera Jovi.
// "tipo" define qual mockup em CSS o LayoutCard vai desenhar.
const layouts = [
  {
    id: 'minimalista',
    tipo: 'minimalista',
    nome: 'Minimalista',
    resumo:
      'Só o essencial na tela: obturador central e nada mais disputando atenção.',
  },
  {
    id: 'manual',
    tipo: 'manual',
    nome: 'Manual / Pro',
    resumo:
      'Régua de controles (ISO, velocidade, foco) sempre visível na lateral.',
  },
  {
    id: 'compacto',
    tipo: 'compacto',
    nome: 'Compacto lateral',
    resumo:
      'Controles concentrados numa faixa lateral, pensado para uso com uma mão.',
  },
  {
    id: 'modular',
    tipo: 'modular',
    nome: 'Modular',
    resumo:
      'Carrossel de módulos que o usuário reordena conforme o que mais usa.',
  },
]

export default layouts
