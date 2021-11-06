const frutas = ["Pera", "Maça", "Uva"];

const pessoa = {
    nome:"Luiz",
    sobrenome:"Barbieri",
    idade:20
}

//objeto não tem length
for (let chaves in pessoa){
    console.log(chaves, pessoa[chaves])
}

// for(let indice in frutas){
//     console.log(frutas[indice]);
// }


// for (let i = 0; i<frutas.length; i++){ 
//     console.log(frutas[i]);
// }