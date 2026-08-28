import ApertureLogo from '../ApertureLogo.jsx'
import modos from '../../data/modos.js'
import layouts from '../../data/layouts.js'

function Home({ aoNavegar }) {
  return (
    <section className="pagina pagina-home">
      <div className="hero">
        <div className="hero-texto">
          <span className="eyebrow">Vitrine de câmera — Jovi</span>
          <h1>
            Uma câmera pensada
            <br />
            lâmina por lâmina.
          </h1>
          <p>
            Explore os modos de captura e os conceitos de interface que
            estamos testando para o sistema de câmera do próximo aparelho
            Jovi. Tudo aqui é simulado — specs, resolução e layout — pra
            comparar ideias antes de qualquer hardware existir.
          </p>
          <div className="hero-acoes">
            <button
              className="botao-principal"
              onClick={() => aoNavegar('modos')}
            >
              Ver modos de captura
            </button>
            <button
              className="botao-fantasma"
              onClick={() => aoNavegar('layouts')}
            >
              Ver conceitos de layout
            </button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <ApertureLogo size={220} />
        </div>
      </div>

      <div className="faixa-numeros">
        <div>
          <strong>{modos.length}</strong>
          <span>modos de captura</span>
        </div>
        <div>
          <strong>{layouts.length}</strong>
          <span>conceitos de layout</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>specs simuladas</span>
        </div>
      </div>
    </section>
  )
}

export default Home
