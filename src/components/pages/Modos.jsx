import modos from '../../data/modos.js'
import ModoCard from '../ModoCard.jsx'
import {
  eyebrow,
  cabecalhoPagina,
  tituloPagina,
  gridModos,
} from '../../utils/estilos.js'

function Modos({ ultimoModo, aoEscolherModo }) {
  return (
    <section className="animate-entrar">
      <header className={cabecalhoPagina}>
        <span className={eyebrow}>Modos de captura</span>
        <h2 className={tituloPagina}>Cada modo, um conjunto de specs</h2>
        <p>
          Escolha um modo para deixá-lo marcado como atual — a escolha fica
          salva no seu navegador. Use "Sortear specs" pra ver outra variação
          simulada do mesmo modo.
        </p>
      </header>

      <div className={gridModos}>
        {modos.map((modo) => (
          <ModoCard
            key={modo.id}
            modo={modo}
            ativo={ultimoModo === modo.id}
            aoEscolher={aoEscolherModo}
          />
        ))}
      </div>
    </section>
  )
}

export default Modos