const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}


const prototypePessoa = {...falar, ...comer}


function criaPessoa(nome, sobrenome){
    return Object.create(prototypePessoa, {
        nome:{ value: nome},
        sobrenome: {value: sobrenome}
    })
}

const pessoa1 = criaPessoa("Luiz", "Barbieri");

pessoa1.comer()
