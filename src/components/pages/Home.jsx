import ApertureLogo from '../ApertureLogo.jsx'
import modos from '../../data/modos.js'
import layouts from '../../data/layouts.js'
import { botaoPrincipal, botaoFantasma, eyebrow } from '../../utils/estilos.js'

function Home({ aoNavegar }) {
  return (
    <section className="animate-entrar">
      <div className="mb-8 flex flex-col items-center justify-between gap-6 border-b border-linha pt-6 pb-12 text-center md:flex-row md:gap-10 md:text-left xl:mb-12 xl:pt-10 xl:pb-[72px]">
        <div>
          <span className={eyebrow}>Vitrine de câmera — Jovi</span>
          <h1 className="text-[clamp(2rem,4vw,2.9rem)] xl:text-[3.4rem]">
            Uma câmera pensada
            <br />
            lâmina por lâmina.
          </h1>
          <p className="xl:max-w-[62ch] xl:text-[1.1rem]">
            Explore os modos de captura e os conceitos de interface que
            estamos testando para o sistema de câmera do próximo aparelho
            Jovi. Tudo aqui é simulado — specs, resolução e layout — pra
            comparar ideias antes de qualquer hardware existir.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <button
              className={`${botaoPrincipal} px-5 py-[11px]`}
              onClick={() => aoNavegar('modos')}
            >
              Ver modos de captura
            </button>
            <button
              className={`${botaoFantasma} px-5 py-[11px]`}
              onClick={() => aoNavegar('layouts')}
            >
              Ver conceitos de layout
            </button>
          </div>
        </div>
        <div
          className="hero-visual shrink-0 [&_svg]:h-auto [&_svg]:w-[min(220px,60vw)] xl:[&_svg]:w-[clamp(260px,24vw,380px)]"
          aria-hidden="true"
        >
          <ApertureLogo size={220} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:justify-start xl:gap-[72px]">
        <div className="flex flex-col">
          <strong className="font-mono text-[1.8rem] text-acento xl:text-[2.4rem]">
            {modos.length}
          </strong>
          <span className="text-[0.85rem] text-texto-fraco">modos de captura</span>
        </div>
        <div className="flex flex-col">
          <strong className="font-mono text-[1.8rem] text-acento xl:text-[2.4rem]">
            {layouts.length}
          </strong>
          <span className="text-[0.85rem] text-texto-fraco">conceitos de layout</span>
        </div>
        <div className="flex flex-col">
          <strong className="font-mono text-[1.8rem] text-acento xl:text-[2.4rem]">
            100%
          </strong>
          <span className="text-[0.85rem] text-texto-fraco">specs simuladas</span>
        </div>
      </div>
    </section>
  )
}

export default Home