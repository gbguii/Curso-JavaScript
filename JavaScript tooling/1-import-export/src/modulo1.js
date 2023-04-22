export const nome = 'Luiz';
export const sobrenome = 'Barbieri';
export const idade = '24';

export function soma(x, y){
    return x + y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
