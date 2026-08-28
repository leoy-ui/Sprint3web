function MockupTela({ tipo }) {
  return (
    <div className={`mockup-tela mockup-${tipo}`}>
      <div className="mockup-visor" />
      {tipo === 'minimalista' && (
        <>
          <div className="mockup-obturador mockup-obturador--central" />
        </>
      )}

      {tipo === 'manual' && (
        <>
          <div className="mockup-regua-lateral">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="mockup-obturador mockup-obturador--central" />
        </>
      )}

      {tipo === 'compacto' && (
        <div className="mockup-faixa-lateral">
          <div className="mockup-obturador mockup-obturador--pequeno" />
          <span className="mockup-ponto" />
          <span className="mockup-ponto" />
        </div>
      )}

      {tipo === 'modular' && (
        <div className="mockup-carrossel">
          <span className="mockup-modulo mockup-modulo--ativo" />
          <span className="mockup-modulo" />
          <span className="mockup-modulo" />
          <span className="mockup-modulo" />
        </div>
      )}
    </div>
  )
}

function LayoutCard({ layout }) {
  return (
    <article className="card-layout">
      <div className="mockup-telefone">
        <MockupTela tipo={layout.tipo} />
      </div>
      <div className="card-layout-texto">
        <h3>{layout.nome}</h3>
        <p>{layout.resumo}</p>
      </div>
    </article>
  )
}

export default LayoutCard
