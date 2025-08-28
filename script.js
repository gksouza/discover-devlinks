function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem  
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar-dark.png')
  }

  const alt = document.querySelector("#profile")
  if(html.classList.contains('light')) {
    alt.setAttribute("src", "Foto de GK sorrindo com fundo de bolinhas vermelhas")
  } else {
    alt.setAttribute("src", "Foto de GK sorrindo com fundo de bolinhas brancas")
  }
}

// if(html.classList.contains('light')) {
  //   html.classList.remove('light')  
  // } else {
  //   html.classList.add('light')
  // }
