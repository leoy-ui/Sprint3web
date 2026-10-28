const obturador = 'absolute rounded-full bg-acento'

function MockupTela({ tipo }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-linear-to-b from-[#262620] to-[#1a1a16]">
      <div className="absolute inset-2 rounded-[10px] border border-dashed border-linha" />

      {tipo === 'minimalista' && (
        <div
          className={`${obturador} bottom-3.5 left-1/2 size-[34px] -translate-x-1/2`}
        />
      )}

      {tipo === 'manual' && (
        <>
          <div className="absolute top-4 right-2.5 bottom-[60px] flex w-2.5 flex-col justify-between">
            <span className="h-[3px] rounded-[2px] bg-linha" />
            <span className="h-[3px] rounded-[2px] bg-linha" />
            <span className="h-[3px] rounded-[2px] bg-linha" />
            <span className="h-[3px] rounded-[2px] bg-linha" />
          </div>
          <div
            className={`${obturador} bottom-3.5 left-1/2 size-[34px] -translate-x-1/2`}
          />
        </>
      )}

      {tipo === 'compacto' && (
        <div className="absolute inset-y-0 right-0 flex w-10 flex-col items-center justify-end gap-2.5 border-l border-linha bg-panel pb-[18px]">
          <div className={`${obturador} size-[22px]`} />
          <span className="size-2 rounded-full border border-linha" />
          <span className="size-2 rounded-full border border-linha" />
        </div>
      )}

      {tipo === 'modular' && (
        <div className="absolute bottom-3.5 left-1/2 flex -translate-x-1/2 gap-2">
          <span className="size-4 rounded-md border border-acento bg-acento" />
          <span className="size-4 rounded-md border border-linha bg-panel" />
          <span className="size-4 rounded-md border border-linha bg-panel" />
          <span className="size-4 rounded-md border border-linha bg-panel" />
        </div>
      )}
    </div>
  )
}

function LayoutCard({ layout }) {
  return (
    <article className="flex flex-col items-center rounded-card border border-linha bg-panel p-5 text-center transition duration-150 hover:-translate-y-0.5 hover:border-acento">
      <div className="mb-4 h-[260px] w-[130px] rounded-[26px] border-[3px] border-linha bg-panel-alto p-2 xl:h-[300px] xl:w-[150px]">
        <MockupTela tipo={layout.tipo} />
      </div>
      <div>
        <h3 className="mb-1.5 text-[1.05rem]">{layout.nome}</h3>
        <p className="m-0 text-[0.85rem]">{layout.resumo}</p>
      </div>
    </article>
  )
}

export default LayoutCard