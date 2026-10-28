
jsx
import { eyebrow, cabecalhoPagina, tituloPagina } from '../../utils/estilos.js'

function Sobre() {
  return (
    <section className="animate-entrar max-w-[640px] xl:max-w-[820px]">
      <header className={cabecalhoPagina}>
        <span className={eyebrow}>Sobre</span>
        <h2 className={tituloPagina}>O que é o Jovi Câmera</h2>
      </header>

      <p>

        Este site é uma vitrine interna, do tipo usado por equipes de
        produto para comparar modos de captura e conceitos de interface
        antes de qualquer decisão de hardware.
      </p>
      <p>
        Todas as especificações técnicas mostradas nos modos de câmera são
        geradas dinamicamente.
      </p>

      <h3>Tecnologias</h3>
      <ul className="list-disc pl-5 font-mono text-[0.88rem] leading-[1.9] text-texto-fraco">
        <li>React 18 com componentes funcionais</li>
        <li>Vite como bundler e servidor de desenvolvimento</li>
        <li>Tailwind CSS para a estilização e a responsividade</li>
        <li>localStorage para lembrar tema de cor e modo escolhido</li>
        <li>Math (random, round, sqrt, max) para simular specs</li>
        <li>Deploy na Vercel com Git</li>
      </ul>
    </section>
  )
}

export default Sobre