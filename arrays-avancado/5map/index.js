// dobre os números
//               0   1   2  3  4  5 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22,27];
const numerosEmDobro = numeros.map((valor) => valor * 2
)
//para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    {nome:"Luiz", idade: 62},
    {nome:"Maria", idade: 23},
    {nome:"Eduardo", idade: 55},
    {nome:"Letícia", idade: 19},
    {nome:"Rosana", idade: 32},
    {nome:"Wallace", idade: 47}
]

const nome = pessoas.map((obj) => obj.nome);
const idade = pessoas.map((obj) => ({ idade: obj.idade}));
const comIDS = pessoas.map(function(valor, indices){
    const newObj = {... valor};
    newObj.id = indices;
    return newObj;
})
console.log(nome)
console.log(idade)
console.log(comIDS)