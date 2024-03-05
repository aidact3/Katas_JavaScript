//! Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//!Puedes usar este array para probar tu función:

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

 function findLongestWord(param) {
     let longestWord = "";

     for (let i = 0; i < param.length; i++) {
         if (param[i].length > longestWord.length) {
             longestWord = param[i];
         }
         //? aqui lo que hace es que, AL COMIENZO, longestWord.lenght es "0", porque no tiene nada. Entonces el primer elemento, que en este caso es HULK, tomará el valor de "longestWord" y se irá comparando una a una con cada elemento. Hasta que se compare con uno que sea mayor que HULK y entonces longestWord se cambie de valor por este. Y finalmente, la función retornará (return) el nombre que se le ha asignado a longestWord.
     }

     return longestWord;
}

console.log(findLongestWord(avengers));


//! OPCIÓN 2 (te limitas a que el primer elemento sea 100% menor a los demás:)
//   function findLongestWord(param) {
//     let longestWord = param[0];
  
//     for (let i = 1; i < param.length; i++) {
//       const element = param[i];
  
//       if (element.length > longestWord.length) {
//         longestWord = element;
//       }
//     }
  
//     return longestWord;
//   }
  
//   console.log(findLongestWord(avengers));
