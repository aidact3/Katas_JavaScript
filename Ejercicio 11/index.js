//! Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:



const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let sum = 0;
  for ( i = 0; i < param.length; i++ ){
    if (typeof param[i] === "number") {
       sum += param[i];
    } else {
      sum += param [i].length
    }
  }
  return sum / param.length 
  //? en el caso de que sea calcular promedio total, si no, quitariamos "param.length"
}

console.log(averageWord(mixedElements));