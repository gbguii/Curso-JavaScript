const pessoa = {
    nome: "Gui",
    sobrenome: "Barbieri",
    idade: 22,
    endereco: {
        rua: "Rua Siqueira",
        numero: 209
    }
};

//const {nome, sobrenome, idade, endereco} = pessoa;
//console.log(endereco.rua)

// const {nome, ...resto} = pessoa;
// console.log(resto)

const {nome: primeiroNOme, sobrenome} = pessoa;
console.log(primeiroNOme);

