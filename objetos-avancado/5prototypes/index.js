// function Pessoa(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
// }
// Pessoa.prototype.nomeCompleto = function(){
//     return `${this.nome} ${this.sobrenome}`
// }
// const pessoa1 = new Pessoa("Luiz", "Barbieri");
// const pessoa2 = new Pessoa("Maria", "Ramos");

// console.log(pessoa1, pessoa1.nomeCompleto());
// console.log(pessoa2);

function Pessoa(nome, sobrenome, anoNascimento, altura, peso){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.anoNascimento = anoNascimento,
    this.altura = altura;
    this.peso = peso;
}
Pessoa.prototype.idade = function(){
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - this.anoNascimento;
    return idade;
}
Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.imc = function(){
    return (this.peso / (this.altura ** 2)).toFixed(2);
}
const pesso1 = new Pessoa("Luiz", "Barbieri", 1999, 1.87, 70);
console.log(pesso1);