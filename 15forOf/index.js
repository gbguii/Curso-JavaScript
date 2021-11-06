const nome = "Luiz Barbieri";
const nomes = ["Luiz", "Guilherme", "Barbieri"]
//Para Array e variaveis funcionam, para obejtos não

// for Clássico - geralmente com iteráveis (array ou strings)
// for in - retorna o indice ou chave (strings, array ou objetos)
// for of - retorna o valor em si (iteráveis, array ou strings)

//forEach vai ser visto mais para frente

nomes.forEach(function(valor, indices){
    console.log(valor, indices)
})

// for (let valor of nomes){
//     console.log(valor)
// }

// //Pega os valores
// for ( let valor of nome){
//     console.log(valor)
// }

//pega os indices
// for (let i in nome){
//     console.log(nome[i])
// }

// for (let i = 0; i<nome.length; i++){
//     console.log(nome[i])
// }