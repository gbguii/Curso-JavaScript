const primeiroNOme = "Luiz";
const segundoNome = "Guilherme";
const sobreNome = "Barbieri";
const anos = 22;
const peso = 77;
const altura = 1.87;
let imc = (peso / (altura * altura)).toFixed(3)
let anoNacimento = 2021 - anos;

console.log(primeiroNOme, segundoNome, sobreNome + " tem "+anos+" anos, pesa "+peso+" kg");
console.log("tem "+altura+" e seu IMC é de "+imc);
console.log("Nasceu no ano de "+anoNacimento);