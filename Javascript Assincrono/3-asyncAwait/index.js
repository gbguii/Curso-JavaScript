function rand(min=0, max=3){
    min *= 1000;
    max *= 1000;
    return Math.floor( Math.random() * (max - min) + min) 
}


function exibeMensagem(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg != "string") {reject(new Error("Não é uma String")); return;}

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    }) 
}

// exibeMensagem('testando 1', rand(1,3))
// .then((res) => {
//     console.log(res)
//     return exibeMensagem("Testando 2", rand(1,3))
// })
// .then((res) => {
//     console.log(res)
//     return res;
// })
// .then(res => {
//     console.log("O retorno foi", res)
// })
// .catch((e) => {
//     console.log("Erro", e)
// })


async function executa(){
    try{
        const fase1 = await exibeMensagem("Fase 1", rand());
        console.log(fase1);

        const fase2 = await exibeMensagem("Fase 2", rand());
        console.log(fase2);

        const fase3 = await exibeMensagem("Fase 3", rand());
        console.log(fase3);

    }catch(e){
        console.log("Erro ao tentar executar, tente novamente")
    }
}
executa()