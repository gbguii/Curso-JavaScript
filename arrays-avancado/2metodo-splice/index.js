// indices -    -5        -4      -3          -2         -1
// indices +     0         1       2           3         4
const nomes = ["Maria", "Luiz", "Eduardo", "Gabriel", "Julia"];



console.log(nomes);

//unshift
//nomes.splice(0, 0, "Jorge", "Gustavo")

//push
//nomes.splice(nomes.length, 0, "Guilherme")


//pop
// nomes.splice(-1, 1)

// nomes.plice(indice, delete, elem1, eleme2, elem3);
//pop
//const removidos = nomes.splice(3, 2) a partir do indice 3 remove 2 elementos

//const removidos = nomes.splice(-1, 2) a partir do indice -1 remove 2 elemento

//const removidos = nomes.splice(3, 0, "Guilherme") a partir do indice 3, não removeu nada e adicionou um elemento

//const removidos = nomes.splice(3, 1, "Guilherme"); a partir do indice 3, remove um elemento e adiciona o elemento

//const removidos = nomes.splice(3, 2, "Guilherme", "Gabriele"); a partir do indice 3, remove 2 elementos e adiconas os novos elementos.
