// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers.splice(0,1,"IRON MAN")
console.log(avengers)

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length)

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.splice(3,2,"Morty","Summer");
console.log(rickAndMortyCharacters)

// Muestra en consola el último personaje del array
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
//? no entiendo muy bien cómo funciona este



// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const deleteLast = rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);

console.log("Primer personaje:", rickAndMortyCharacters[0]);
console.log("Último personaje:", rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);



// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);