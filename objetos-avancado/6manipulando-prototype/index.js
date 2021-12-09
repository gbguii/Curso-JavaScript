function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};



const produto1 = new Produto("Camiseta", 50);

produto1.desconto(100);
produto1.aumento(100);
console.log(produto1);

const produto2 = {
    nome: "Caneca",
    preco: 15
};
Object.setPrototypeOf(produto2, Produto.prototype);

produto2.aumento(50);
console.log(produto2);


const produto3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "G"
    }
})
produto3.aumento(10);
console.log(produto3)
