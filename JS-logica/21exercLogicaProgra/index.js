// Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = retorne o próprio número
// Checar se o número é realmente um número
//Use a função com números de 0 a 100


const FizzBuzz = (num) => {
    if(isNaN(num)) return "NaN";
    if(num % 3 === 0 && num % 5 === 0 ) return "FizzBuzz";
    if(num % 3 === 0) return "Fizz";
    if(num % 5 === 0) return "Buzz";
    if(num % 3 !== 0 && num % 5 !== 0) return num;
}

for(let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i));
}

