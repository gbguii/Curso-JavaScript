function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "*") acumulador *= numero;
        if(operador === "/") acumulador /= numero;

    }
    console.log(acumulador);
}

conta("*", 1, 5, 3)

// function soma(a = 0, b = 4, c = 2){
//     console.log(a + b + c);
// }
// soma(2, undefined, 10);


// function soma(a = 0, b = 0){
//     console.log(a + b);
// }
// soma(2)



// function funcao(){
//    let total =  0;
//    for (let argumento of arguments){
//        total +=argumento;
//    }
//    console.log(total)
// }

// funcao( 1, 2, 3, 4, 5, 6, 7);