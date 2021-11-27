// const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];


// const numerosFiltrados = numeros.filter((valor) =>valor > 10);
// console.log(numerosFiltrados)


//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com A
const pessoas = [
    {nome:"Luiz", idade: 62},
    {nome:"Maria", idade: 23},
    {nome:"Eduardo", idade: 55},
    {nome:"Letícia", idade: 19},
    {nome:"Rosana", idade: 32},
    {nome:"Wallace", idade: 47}
];
const pessoas5Letras = pessoas.filter((pessoa) => pessoa.nome.length >= 5)
const pessoas50Anos = pessoas.filter((pessoas) => pessoas.idade > 50)
const pessoaTerminaA = pessoas.filter((pessoas) => pessoas.nome.toLocaleLowerCase().endsWith("a"));
console.log(pessoas5Letras);
console.log(pessoas50Anos);
console.log(pessoaTerminaA);