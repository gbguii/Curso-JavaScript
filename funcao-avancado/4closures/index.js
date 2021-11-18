function returnoOutra(nome){
    return function(){
        return nome;
    }
}

const luiz = returnoOutra("Luiz");
const maria = returnoOutra("Maria");

console.log(luiz);
console.log(maria);
