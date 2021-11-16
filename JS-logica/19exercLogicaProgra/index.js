// Escreva uma função que recebe 2 números e retorne o maior deles

const numero1 = Math.floor(Math.random() * 10);
const numero2 = Math.floor(Math.random() * 10);

const maiorNumero = (x, y) => x > y ? x : y;
console.log(`1° número = ${numero1} e 2° número = ${numero2}`);
console.log(maiorNumero(numero1, numero2));