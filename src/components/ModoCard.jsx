import { useState } from 'react'
import { gerarSpecs, calcularResolucao } from '../utils/specs.js'
import { botaoPrincipal, botaoFantasma } from '../utils/estilos.js'

function ModoCard({ modo, ativo, aoEscolher }) {
  const [specs, setSpecs] = useState(() => gerarSpecs(modo))
  const resolucao = calcularResolucao(specs.megapixels, modo.proporcao)

  function sortearNovamente(e) {
    e.stopPropagation()
    setSpecs(gerarSpecs(modo))
  }

  const dt = 'text-[0.65rem] uppercase tracking-[0.05em] text-texto-fraco'
  const dd = 'font-mono text-[0.85rem]'

  return (
    <article
      className={
        'relative flex flex-col rounded-card border bg-panel p-5 transition duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ' +
        (ativo ? 'border-acento ring-1 ring-acento-fraco' : 'border-linha')
      }
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-md border border-linha px-1.5 py-0.5 font-mono text-xs text-texto-fraco">
          {modo.sigla}
        </span>
        {ativo && (
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.06em] text-acento">
            Em uso
          </span>
        )}
      </div>

      <h3>{modo.nome}</h3>
      <p className="mb-3.5 text-[0.88rem]">{modo.descricao}</p>

      <dl className="mb-[18px] grid grid-cols-3 gap-x-2 gap-y-2.5 rounded-[10px] bg-panel-alto p-3">
        <div>
          <dt className={dt}>Zoom</dt>
          <dd className={dd}>{specs.zoom}x</dd>
        </div>
        <div>
          <dt className={dt}>Abertura</dt>
          <dd className={dd}>f/{specs.abertura}</dd>
        </div>
        <div>
          <dt className={dt}>Resolução</dt>
          <dd className={dd}>{specs.megapixels} MP</dd>
        </div>
        <div>
          <dt className={dt}>ISO</dt>
          <dd className={dd}>{specs.iso}</dd>
        </div>
        <div>
          <dt className={dt}>Focal</dt>
          <dd className={dd}>{specs.focal}mm</dd>
        </div>
        <div>
          <dt className={dt}>Pixels</dt>
          <dd className={dd}>
            {resolucao.largura}×{resolucao.altura}
          </dd>
        </div>
      </dl>

      <div className="mt-auto flex gap-2">
        <button
          className={`${botaoFantasma} flex-1 px-3 py-[9px] text-[0.85rem]`}
          onClick={sortearNovamente}
        >
          Sortear specs
        </button>
        <button
          className={`${botaoPrincipal} flex-1 px-3 py-[9px] text-[0.85rem]`}
          onClick={() => aoEscolher(modo.id)}
        >
          {ativo ? 'Modo atual' : 'Usar este modo'}
        </button>
      </div>
    </article>
  )
}

export default ModoCard