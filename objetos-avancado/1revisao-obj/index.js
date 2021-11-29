// factory functions / constructor functions / classes

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this)
}

const p1 = new Pessoa("Luiz", "Barbieri")
p1.fala = function(){
    return`${this.nome} é meu nome`
}
console.log(p1.fala())



// function criaPessoa(nome, sobrenome){
//     return{
//         nome, sobrenome,
//         nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     }
// }
// const p1 = criaPessoa("Luiz", "Barbieri");
// console.log(p1.nomeCompleto())






// const pessoa1 = new Object();
// pessoa1.nome = "Luiz";
// pessoa1.sobrenome = "Barbieri";
// pessoa1.idade = 22;
// pessoa1.falarNome = function(){
//     return `${this.nome} é meu nome`;
// };
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }
// for(let chave in pessoa1){
//     console.log(chave);
// }
// for(let elementos in pessoa1){
//     console.log(pessoa1[elementos])
// }