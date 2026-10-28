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
    <header className="sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-linha bg-ink/90 px-4 py-[18px] backdrop-blur-sm md:flex-nowrap md:gap-6 md:px-8 xl:gap-8 xl:px-16">
      <button
        className="flex items-center gap-2.5 p-0 text-texto"
        onClick={() => aoNavegar('home')}
        aria-label="Ir para a Home"
      >
        <ApertureLogo size={32} />
        <span className="font-display text-[1.05rem] font-bold tracking-[0.02em]">
          JOVI<span className="font-medium text-texto-fraco">CAM</span>
        </span>
      </button>

      <nav
        className="order-3 flex w-full justify-between gap-1 md:order-none md:mr-auto md:w-auto md:justify-start"
        aria-label="Navegação principal"
      >
        {PAGINAS.map((pagina) => (
          <button
            key={pagina.id}
            className={
              'rounded-full px-3 py-2 text-[0.92rem] transition-colors duration-150 ' +
              (paginaAtual === pagina.id
                ? 'bg-acento font-semibold text-ink'
                : 'text-texto-fraco hover:bg-panel-alto hover:text-texto')
            }
            onClick={() => aoNavegar(pagina.id)}
            aria-current={paginaAtual === pagina.id ? 'page' : undefined}
          >
            {pagina.label}
          </button>
        ))}
      </nav>

      <div className="flex gap-2" role="group" aria-label="Cor de destaque">
        {CORES.map((cor) => (
          <button
            key={cor.id}
            className={
              'size-[18px] cursor-pointer rounded-full border-2 bg-(--swatch-hex) p-0 transition-transform duration-150 hover:scale-110 ' +
              (corTema === cor.id ? 'border-texto' : 'border-transparent')
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