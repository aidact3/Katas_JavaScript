// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
// function removeDuplicates(param) {
//   for (i = 0; i < param.length; i++) {
//     const word1 = param[i]
//     for (j = i + 1; j < param.length; j++) {
//       const word2 = param[j]

//       if (word1 === word2) {
//         param.splice(j, 1)
        
//       }
//     }
//     console.log(param);; // se tiene que poner asi porque si no, devuelve duplicates sin el cambio de los duplicados.
//   }
// }
//  removeDuplicates(duplicates)


 //! Otra forma de hacerlo para que sólo te quede el array único:
 
 function removeDuplicates(param) {
  const uniqueArray = []; // un nuevo array donde almacenaremos los elementos únicos. para que no se repita todo el rato.

  for (let i = 0; i < param.length; i++) {
    const word = param[i];
    if (uniqueArray.indexOf(word) === -1) { // el -1 se usa para indicar que algo no fue encontrado. 
      //? cuando una palabra no está, devuelve "-1"
      uniqueArray.push(word); // Eso quiere decir que si no lo encuentra en uniqueArray, se añadirá la palabra.
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates(duplicates));