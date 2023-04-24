import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

const BtnGerarCpf = document.querySelector('.btn-gerar-cpf');
BtnGerarCpf.addEventListener("click", () => {
    const geraCpf = new GeraCPF();
    const inputCpfGerado = document.querySelector('.cpf-gerado');
    inputCpfGerado.value = geraCpf.geraNovoCpf();
})
