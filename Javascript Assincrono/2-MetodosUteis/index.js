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

const promessas = [
    //'Texto sem promessa',
    exibeMensagem("Promessa 1", rand(1,4)),
    exibeMensagem("Promessa 2", rand(1,4)),
    exibeMensagem("Promessa 3", rand(1,4)),
    // exibeMensagem(1111, rand(1,4)),
]

Promise.all(promessas)
.then(dados => {
    console.log(dados)
    console.log("*************")
})
.catch(e => {console.log("Erro gerado " + e)})


Promise.race(promessas)
.then(dados => {
    console.log(dados)
    console.log("*************")
})
.catch(e => {console.log("Erro gerado " + e)})

function baixaPagina(){
    const isCache = true;

    if(isCache){
        return Promise.resolve("Pagina Carregada");
    }else{
        return Promise.reject("Carregando Página")
    }
}

baixaPagina()
.then(dado => {console.log(dado)})
.catch(e => {console.log(e)})
