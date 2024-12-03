

import _ from "underscore"; 

// export const miNombre = 'Laura';
/**
 * 
  @param {string[]} tiposDeCarta - Un arreglo de cartas. ['C','D','H','S']
 * @param {string[]} tiposEspeciales - Un arreglo de tipos especiales ['A','J','Q','K'].
 * @returns {string[]} - Retorna un nuevo deck de cartas .
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {


    if (!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error ('tiposDeCarta es obligatorio como un arreglo de string');
    // if (tiposDeCarta.length >0) throw new Error ('tiposDeCarta tiene que ser un arreglo de string');


    if (!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error ('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [] ;

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;

}

// export default crearDeck