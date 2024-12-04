

/**
 * Genera la imagen de una carta
 * @param {string} carta 
 * @returns {HTMLImageElement} imagen de la carta
 */

export const cartaHTML = (carta) =>{

    if(!carta) throw Error ('La carta es un argumento obligatorio');
      // <img class="carta" src="assets/cartas/2C.png">
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      imgCarta.classList.add('carta');

      return imgCarta;
}