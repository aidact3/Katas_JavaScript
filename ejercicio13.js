// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true (boolean) y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];


function finderName(param) {
  let name = 'Bruce' // este valor es el que se cambia.
  for (i=0; i < param.length; i++){
    if (name === param[i]) {
      return {found: true, position: i } 
  }
}
    return false // es muy importante que esté fuera del for, si no, nada más ver que el primer elemento no está en la lista, devolverá false. 
}
console.log(finderName(nameFinder))