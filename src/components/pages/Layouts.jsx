import layouts from '../../data/layouts.js'
import LayoutCard from '../LayoutCard.jsx'
import {
  eyebrow,
  cabecalhoPagina,
  tituloPagina,
  gridLayouts,
} from '../../utils/estilos.js'

function Layouts() {
  return (
    <section className="animate-entrar">
      <header className={cabecalhoPagina}>
        <span className={eyebrow}>Conceitos de interface</span>
        <h2 className={tituloPagina}>Quatro formas de organizar a mesma câmera</h2>
        <p>
          Miniaturas esquemáticas de cada proposta de layout do app de
          câmera — pensadas pra formatos de uso diferentes, de uma mão só ao
          modo manual.
        </p>
      </header>

      <div className={gridLayouts}>
        {layouts.map((layout) => (
          <LayoutCard key={layout.id} layout={layout} />
        ))}
      </div>
    </section>
  )
}

export default Layouts