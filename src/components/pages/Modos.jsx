import modos from '../../data/modos.js'
import ModoCard from '../ModoCard.jsx'

function Modos({ ultimoModo, aoEscolherModo }) {
  return (
    <section className="pagina">
      <header className="cabecalho-pagina">
        <span className="eyebrow">Modos de captura</span>
        <h2>Cada modo, um conjunto de specs</h2>
        <p>
          Escolha um modo para deixá-lo marcado como atual — a escolha fica
          salva no seu navegador. Use "Sortear specs" pra ver outra variação
          simulada do mesmo modo.
        </p>
      </header>

      <div className="grid-cards">
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
