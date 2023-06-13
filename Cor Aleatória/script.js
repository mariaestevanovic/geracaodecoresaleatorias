function gerarCorAleatoria() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    
    var hexRed = red.toString(16).padStart(2, '0');
    var hexGreen = green.toString(16).padStart(2, '0');
    var hexBlue = blue.toString(16).padStart(2, '0');
    
    return '#' + hexRed + hexGreen + hexBlue;
  }

  function exibirCorAleatoria() {
    var corAleatoria = gerarCorAleatoria();
    document.body.style.backgroundColor = corAleatoria;
    document.getElementById('cor').textContent = corAleatoria;
  }

  exibirCorAleatoria();
  