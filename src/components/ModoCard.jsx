import { useState } from 'react'
import { gerarSpecs, calcularResolucao } from '../utils/specs.js'

function ModoCard({ modo, ativo, aoEscolher }) {
  const [specs, setSpecs] = useState(() => gerarSpecs(modo))
  const resolucao = calcularResolucao(specs.megapixels, modo.proporcao)

  function sortearNovamente(e) {
    e.stopPropagation()
    setSpecs(gerarSpecs(modo))
  }

  return (
    <article className={'card-modo' + (ativo ? ' card-modo-ativo' : '')}>
      <div className="card-modo-topo">
        <span className="sigla-af">{modo.sigla}</span>
        {ativo && <span className="etiqueta-ativo">Em uso</span>}
      </div>

      <h3>{modo.nome}</h3>
      <p className="descricao">{modo.descricao}</p>

      <dl className="specs">
        <div>
          <dt>Zoom</dt>
          <dd>{specs.zoom}x</dd>
        </div>
        <div>
          <dt>Abertura</dt>
          <dd>f/{specs.abertura}</dd>
        </div>
        <div>
          <dt>Resolução</dt>
          <dd>{specs.megapixels} MP</dd>
        </div>
        <div>
          <dt>ISO</dt>
          <dd>{specs.iso}</dd>
        </div>
        <div>
          <dt>Focal</dt>
          <dd>{specs.focal}mm</dd>
        </div>
        <div>
          <dt>Pixels</dt>
          <dd>
            {resolucao.largura}×{resolucao.altura}
          </dd>
        </div>
      </dl>

      <div className="card-modo-acoes">
        <button className="botao-fantasma" onClick={sortearNovamente}>
          Sortear specs
        </button>
        <button className="botao-principal" onClick={() => aoEscolher(modo.id)}>
          {ativo ? 'Modo atual' : 'Usar este modo'}
        </button>
      </div>
    </article>
  )
}

export default ModoCard
