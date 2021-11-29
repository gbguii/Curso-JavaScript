// defineProperty / defineProperties

function Produto(nome, preco, estoque){
    Object.defineProperty(this, "estoque", {
        enumerable: true,  //chave
        value: estoque,   //valor
        writable: false, // pode alterar
        configurable: false // configurável
    })
    Object.defineProperty(this, {
        nome: {
        enumerable: true,  //chave
        value: nome,   //valor
        writable: true, // pode alterar
        configurable: true // configurável
        },
        preco: {
        enumerable: true,  //chave
        value: preco,   //valor
        writable: true, // pode alterar
        configurable: true // configurável
        }
    })
}
const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 3000;
delete p1.estoque;
p1.fala = function(){
    return "Olá"
}
console.log(p1)