function criaMultiplicador(multiplicador){

    function multiplicacao(numero){
        return numero * multiplicador;
    };
    return multiplicacao;
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));








// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + " " + resto;
//     }
//     return falaResto;
// }
// const fala = falaFrase("Olá")
// const resto = fala("mundo")
// console.log(resto);

// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome}
// }

// const pessoa1 = criaPessoa("Guilherme", "Barbieri");
// console.log(pessoa1);


// function soma (a, b){
//     return a + b;
// }
// let soma2 = soma(1,1);
// console.log(soma2)