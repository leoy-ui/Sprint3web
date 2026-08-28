// Marca da Jovi: uma íris de diafragma feita em SVG, com lâminas que
// abrem sutilmente ao carregar a página (via CSS em index.css).
function ApertureLogo({ size = 40 }) {
  const laminas = Array.from({ length: 6 })

  return (
    <svg
      className="aperture-logo"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Logo Jovi — íris de diafragma"
    >
      <circle cx="50" cy="50" r="48" className="aperture-ring" />
      <g className="aperture-blades">
        {laminas.map((_, i) => (
          <polygon
            key={i}
            className="aperture-blade"
            points="50,50 90,38 76,10"
            transform={`rotate(${i * 60} 50 50)`}
          />
        ))}
      </g>
    </svg>
  )
}

export default ApertureLogo
