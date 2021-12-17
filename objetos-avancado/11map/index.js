const pessoas = [
    {id: 4, nome: "Luiz"},
    {id: 2, nome: "Maria"},
    {id: 5, nome: "Pedro"}
]
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas);
