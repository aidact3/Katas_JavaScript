// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let sum = 0;
for (const product of products) {
  sum = sum += product.sellCount
}
console.log(sum);