function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="rodape">
      <span>Jovi Câmera — projeto acadêmico, Sprint 3.</span>
      <span>© {ano} Jovi. Todas as specs desta vitrine são simuladas.</span>
    </footer>
  )
}

export default Footer
