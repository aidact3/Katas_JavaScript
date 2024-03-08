// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  const wordsRepeat = [];
  for (i= 0; i < param.length; i++){
    const word1 = param[i];
    for (j = i+1; j < param.length; j++){
      const word2 = param[j];
      if (word1 === word2){
        wordsRepeat.push(word2)
      }
    }
  }
  return wordsRepeat.length
}

console.log(repeatCounter(counterWords));