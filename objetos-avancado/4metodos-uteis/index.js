const produto = { nome: "Nomess", preco: 1.8, material: "lã"};
// console.log(Object.entries(produto)) // retorna um array com cada chave;

for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}



// console.log(Object.values(produto)) // retorna apenas os valores das chaves

// console.log(Object.getOwnPropertyDescriptor(produto, "nome")); // retornas as propriedades de DefineProperty/Properties


// const outraCoisa = {
//     ...produto, 
//     peso: 50};  // spread operator


// const outraCoisa = Object.assign({}, produto, {tamanho: "G"}); // assign

// const outraCoisa = {
//     nome: produto.nome, preco: produto.preco
// }

// console.log(Object.keys(produto)); // mostra as chaves

