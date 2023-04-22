export const nome = 'Luiz';
export const sobrenome = 'Barbieri';
export const idade = '24';

export function anoNascimento(idade){
    debugger;
    let dataAtaul = new Date();
    return dataAtaul.getFullYear() - idade;
}

export default class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
