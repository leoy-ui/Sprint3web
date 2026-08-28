import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/pages/Home.jsx'
import Modos from './components/pages/Modos.jsx'
import Layouts from './components/pages/Layouts.jsx'
import Sobre from './components/pages/Sobre.jsx'
import './App.css'

const CHAVE_COR = 'jovi_cor_tema'
const CHAVE_MODO = 'jovi_ultimo_modo'

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home')

  // Lê do localStorage na primeira renderização (função de inicialização
  // do useState, roda uma única vez).
  const [corTema, setCorTema] = useState(
    () => localStorage.getItem(CHAVE_COR) || 'ambar'
  )
  const [ultimoModo, setUltimoModo] = useState(
    () => localStorage.getItem(CHAVE_MODO) || null
  )

  // Sempre que a cor mudar, grava no localStorage e aplica no <html>
  // como atributo, pra as variáveis CSS de tema reagirem.
  useEffect(() => {
    localStorage.setItem(CHAVE_COR, corTema)
    document.documentElement.setAttribute('data-tema', corTema)
  }, [corTema])

  useEffect(() => {
    if (ultimoModo) {
      localStorage.setItem(CHAVE_MODO, ultimoModo)
    }
  }, [ultimoModo])

  function renderizarPagina() {
    switch (paginaAtual) {
      case 'modos':
        return (
          <Modos ultimoModo={ultimoModo} aoEscolherModo={setUltimoModo} />
        )
      case 'layouts':
        return <Layouts />
      case 'sobre':
        return <Sobre />
      case 'home':
      default:
        return <Home aoNavegar={setPaginaAtual} />
    }
  }

  return (
    <div className="app">
      <Header
        paginaAtual={paginaAtual}
        aoNavegar={setPaginaAtual}
        corTema={corTema}
        aoMudarCor={setCorTema}
      />
      <main className="conteudo">{renderizarPagina()}</main>
      <Footer />
    </div>
  )
}

export default App
