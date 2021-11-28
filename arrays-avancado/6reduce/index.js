const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22,27];
// retorne a soma dos valores pares (filter)
// retorne um array com o dobro dos valores (map)
const total = numeros.reduce(function(acumulador, valor){
    // if(valor % 2 === 0) acumulador += valor;   soma dos valores, precisa atribuir o valor 0 para o acumulador
    acumulador.push(valor * 2);
    return acumulador
}, []);


const pessoas = [
    {nome:"Luiz", idade: 62},
    {nome:"Maria", idade: 23},
    {nome:"Eduardo", idade: 55},
    {nome:"Letícia", idade: 10},
    {nome:"Rosana", idade: 64},
    {nome:"Wallace", idade: 63}
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha)
