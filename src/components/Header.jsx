import ApertureLogo from './ApertureLogo.jsx'

const PAGINAS = [
  { id: 'home', label: 'Home' },
  { id: 'modos', label: 'Modos' },
  { id: 'layouts', label: 'Layouts' },
  { id: 'sobre', label: 'Sobre' },
]

const CORES = [
  { id: 'ambar', hex: '#ffb238' },
  { id: 'ciano', hex: '#5fd9d0' },
  { id: 'magenta', hex: '#ff6f9c' },
]

function Header({ paginaAtual, aoNavegar, corTema, aoMudarCor }) {
  return (
    <header className="cabecalho">
      <button
        className="marca"
        onClick={() => aoNavegar('home')}
        aria-label="Ir para a Home"
      >
        <ApertureLogo size={32} />
        <span className="marca-texto">
          JOVI<span className="marca-texto-fraca">CAM</span>
        </span>
      </button>

      <nav className="navegacao" aria-label="Navegação principal">
        {PAGINAS.map((pagina) => (
          <button
            key={pagina.id}
            className={
              'nav-link' + (paginaAtual === pagina.id ? ' nav-link-ativo' : '')
            }
            onClick={() => aoNavegar(pagina.id)}
            aria-current={paginaAtual === pagina.id ? 'page' : undefined}
          >
            {pagina.label}
          </button>
        ))}
      </nav>

      <div className="seletor-cor" role="group" aria-label="Cor de destaque">
        {CORES.map((cor) => (
          <button
            key={cor.id}
            className={
              'swatch' + (corTema === cor.id ? ' swatch-ativo' : '')
            }
            style={{ '--swatch-hex': cor.hex }}
            onClick={() => aoMudarCor(cor.id)}
            aria-label={`Usar cor ${cor.id}`}
            aria-pressed={corTema === cor.id}
          />
        ))}
      </div>
    </header>
  )
}

export default Header
