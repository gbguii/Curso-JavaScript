function soma (x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw new Error("x e y precisam ser números.")
        //Lançando erros de "propósitos para serem capturados"
    }


    return x + y;
}
try{
    console.log(soma(1, 2));
    console.log(soma("1", 2));
}catch(err){
    //console.log(err); não é interessante mostrar para o usuário o erro.
    console.log("Uma coisa amigavel");
}

//Vai tentar executar o que está no Try, caso apresente algum erro, vai ser executado o que esta no Catch