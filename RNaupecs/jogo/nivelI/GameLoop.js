const { array } = require("prop-types");


export function getCor() {
  var background = ["#32CD32", "#00CED1", "#C71585", "#8B008B", "#FF4500", "#32CD32", "#FF0000", "#FFD700", "#9400D3"];
  const cor = Math.floor(Math.random() * background.length);

  return background[cor];

}

export function randOrd() {
  return (Math.round(Math.random()) - 0.5);
}


function getLetra(limite, letra) {

  function filtrarLetra(value) {
    return value !== letra;
  }

  let filtered = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'].filter(filtrarLetra)

  filtered.sort(randOrd)
  var itensRemovidos = filtered.splice(0, limite)

  return itensRemovidos

}


export function getArrayLetras(letra, limite) {
  var array = []
  let letras = getLetra(limite - 1, letra)
  var i = 0;

  for (i; i < limite - 1; i++) {
    array.push({ id: i, letra: letras[i], y: 450, desabilitado: true })
  }



  return array;

}



