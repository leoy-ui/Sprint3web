import layouts from '../../data/layouts.js'
import LayoutCard from '../LayoutCard.jsx'

function Layouts() {
  return (
    <section className="pagina">
      <header className="cabecalho-pagina">
        <span className="eyebrow">Conceitos de interface</span>
        <h2>Quatro formas de organizar a mesma câmera</h2>
        <p>
          Miniaturas esquemáticas de cada proposta de layout do app de
          câmera — pensadas pra formatos de uso diferentes, de uma mão só ao
          modo manual.
        </p>
      </header>

      <div className="grid-cards grid-cards--layouts">
        {layouts.map((layout) => (
          <LayoutCard key={layout.id} layout={layout} />
        ))}
      </div>
    </section>
  )
}

export default Layouts
