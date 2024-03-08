// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

for (i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1)
    i-- //! Esto decrementa el valor de i después de eliminar un elemento, de modo que en la próxima iteración del bucle for, el bucle examinará el próximo elemento del array después del que acabamos de eliminar, evitando que se omitan elementos. Es una forma de asegurarse de que todos los elementos se revisen correctamente después de realizar una eliminación.
  }
}
console.log(placesToTravel) //! poner fuera del for, para que no se repita todo el rato
