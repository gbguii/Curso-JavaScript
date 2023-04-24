import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdeCaracter = document.querySelector('.qtde-caracter');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
}

function gera(){
    const senha = geraSenha(
        qtdeCaracter.value, 
        chkMaiuscula.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || "Nada Selecionado";
}