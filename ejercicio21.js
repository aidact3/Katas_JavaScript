// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const mayorEdad = [];
const menorEdad = [];
for (const person of users) {

  if (person.years < 18) {
    menorEdad.push(person.name) //! añade sólo el nombre de la persona
  } else {
    mayorEdad.push(person.name) //! añade sólo el nombre de la persona
  }
}

console.log(`Usuarios menores de edad: ${menorEdad}`)
console.log(`Usuarios mayores de edad: ${mayorEdad}`)