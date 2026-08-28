// Funções que usam Math (operações matemáticas, randomização e arredondamento)
// para simular as especificações técnicas de cada modo de câmera.

/**
 * Gera specs "realistas" para um modo de câmera, variando um pouco a cada
 * chamada a partir dos valores-base definidos em data/modos.js.
 */
export function gerarSpecs(modo) {
  const zoom =
    Math.round((modo.zoomBase + Math.random() * modo.zoomVariacao) * 10) / 10

  const abertura = (
    modo.aberturaBase + Math.random() * 0.6
  ).toFixed(1)

  const megapixels = Math.round(
    modo.mpBase + Math.random() * modo.mpVariacao
  )

  const iso = Math.round(100 + Math.random() * 3400)

  // Distância focal aproximada (mm) a partir do zoom, só pra dar mais um
  // número técnico "calculado" na tela.
  const focal = Math.max(13, Math.round(24 * zoom))

  return { zoom, abertura, megapixels, iso, focal }
}

/**
 * A partir da quantidade de megapixels e de uma proporção (ex: "4:3"),
 * calcula a resolução aproximada em pixels (largura x altura).
 */
export function calcularResolucao(megapixels, proporcao = '4:3') {
  const [w, h] = proporcao.split(':').map(Number)
  const razao = w / h
  const altura = Math.round(Math.sqrt((megapixels * 1_000_000) / razao))
  const largura = Math.round(altura * razao)
  return { largura, altura }
}
