const nomes = ["Luiz", "Maria", "Pedro", "João"];

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}
console.log("------------");
for(let i = nomes.length -1; i >=0; i--){
    console.log(nomes[i]);
}
console.log("------------");
for(let i = 0; i <=10; i++){
    const par = i % 2 === 0 ? "Par" : "Impar";
    console.log(`O número ${i} é ${par}`);
}