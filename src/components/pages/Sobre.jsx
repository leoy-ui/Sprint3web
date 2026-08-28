function Sobre() {
  return (
    <section className="pagina pagina-sobre">
      <header className="cabecalho-pagina">
        <span className="eyebrow">Sobre</span>
        <h2>O que é o Jovi Câmera</h2>
      </header>

      <p>
        Jovi é uma marca fictícia de celulares criada como projeto acadêmico.
        Este site é uma vitrine interna, do tipo usado por equipes de
        produto para comparar modos de captura e conceitos de interface
        antes de qualquer decisão de hardware.
      </p>
      <p>
        Todas as especificações técnicas mostradas nos modos de câmera são
        geradas dinamicamente — não correspondem a um aparelho real.
      </p>

      <h3>Tecnologias</h3>
      <ul className="lista-tech">
        <li>React 18 com componentes funcionais</li>
        <li>Vite como bundler e servidor de desenvolvimento</li>
        <li>localStorage para lembrar tema de cor e modo escolhido</li>
        <li>Math (random, round, sqrt, max) para simular specs</li>
        <li>CSS puro para os mockups de interface</li>
      </ul>
    </section>
  )
}

export default Sobre
