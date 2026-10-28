function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="flex flex-wrap justify-between gap-2 border-t border-linha px-4 py-5 text-[0.78rem] text-texto-fraco md:px-8 xl:px-16">
      <span>Jovi Câmera — projeto acadêmico, Sprint 4.</span>
      <span>© {ano} Jovi. Todas as specs desta vitrine são simuladas.</span>
    </footer>
  )
}

export default Footer