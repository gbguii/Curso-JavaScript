// função construtora --> objetos
// função fabrica --> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome}: Sou um método.`)
    }
}

const p1 = new Pessoa("Luiz", "Barbieri");
console.log(p1.nome)
p1.metodo();
