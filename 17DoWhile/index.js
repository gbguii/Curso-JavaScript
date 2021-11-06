function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = 10;

//ferifica antes de executar
while (rand !== 10){
    
    console.log(rand)
}
console.log("##########")
//sempre irá execcutar alguma coisa antes de verir=ficar
do{
    rand = random (min, max)
    console.log(rand)
} while( rand !== 10)




// let controle = 0;
// while(controle <=10){
//     console.log(controle);
//     controle++
// }