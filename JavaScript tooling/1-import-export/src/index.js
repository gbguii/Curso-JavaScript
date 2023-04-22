// Importando o default
import Pessoa from './modulo1';
// Importando pelo nome correspondente
import {nome, sobrenome, idade, anoNascimento} from './modulo1'

console.log(nome, sobrenome, idade, anoNascimento(idade))

const pessoa1 = new Pessoa("Luiz", "Barbieri");
console.log(pessoa1);