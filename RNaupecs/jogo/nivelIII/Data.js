export function getPecs(val) {
  var data = [];
  switch (val) {
    case 'A':
      data = [
        { letras: 'AGUA', key: '1', img: require("../../assets/Pecs/A/agua.jpg") },
        { letras: 'ANDAR', key: '2', img: require("../../assets/Pecs/A/andar.jpg") },
        { letras: 'ANEL', key: '3', img: require("../../assets/Pecs/A/anel.jpg") },
        { letras: 'ARROZ', key: '4', img: require("../../assets/Pecs/A/arroz.jpg") },
        { letras: 'AZUL', key: '5', img: require("../../assets/Pecs/A/azul.jpg") },

      ];
      break;
    case 'B':

      data = [
        { letras: 'BALA', key: '1', img: require("../../assets/Pecs/B/bala.jpg") },
        { letras: 'BOLO', key: '5', img: require("../../assets/Pecs/B/bolo.jpg") },
        { letras: 'BANANA', key: '2', img: require("../../assets/Pecs/B/banana.jpg") },
        { letras: 'BARCO', key: '3', img: require("../../assets/Pecs/B/barco.jpg") },
        { letras: 'BOLA', key: '4', img: require("../../assets/Pecs/B/bola.jpg") },

      ];
      break;
    case 'C':
      data = [
        { letras: 'CASA', key: '1', img: require("../../assets/Pecs/C/casa.jpg") },
        { letras: 'CARRO', key: '2', img: require("../../assets/Pecs/C/carro.jpg") },
        { letras: 'CANETA', key: '3', img: require("../../assets/Pecs/C/caneta.jpg") },
        { letras: 'CEREJA', key: '4', img: require("../../assets/Pecs/C/cereja.jpg") },
        { letras: 'COMER', key: '5', img: require("../../assets/Pecs/C/comer.jpg") },

      ];
      break;
    case 'D':
      data = [
        { letras: 'DADO', key: '1', img: require("../../assets/Pecs/D/dado.jpg") },
        { letras: 'DENTE', key: '2', img: require("../../assets/Pecs/D/dente.jpg") },
        { letras: 'DEDOS', key: '3', img: require("../../assets/Pecs/D/dedos.jpg") },
        { letras: 'DOCES', key: '4', img: require("../../assets/Pecs/D/doces.jpg") },
        { letras: 'DORMIR', key: '5', img: require("../../assets/Pecs/D/dormir.jpg") },

      ];
      break;










  }


  return data;

}
