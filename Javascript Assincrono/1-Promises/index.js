function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor( Math.random() * (max - min) + min) 
}


function exibeMensagem(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg != "string") reject(new Error("Não é uma String"))

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    }) 
}

exibeMensagem([], rand(1,3))
.then((res) => {
    console.log(res)
    return exibeMensagem("Testando 2", rand(1,3))
})
.then((res) => {
    console.log(res)
}).catch((e) => {
    console.log("Erro", e)
})