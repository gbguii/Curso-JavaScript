// superClass
function Conta(agencia, conta, sal){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = sal
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
}
Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/c: ${this.agencia}/ ${this.conta} `+ 
        `Saldo Atual: R$${this.saldo}`)
}

function contaCorrente(agencia, conta, sal, limite){
    Conta.call(this, agencia, conta, sal);
    this.limite = limite;
}
contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;


contaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
const contCor = new contaCorrente(11, 22, 0, 100);
contCor.depositar(10);
contCor.sacar(110);
contCor.sacar(1);

console.log("---------------------------")

function contaPoupanca(agencia, conta, sal){
    Conta.call(this, agencia, conta, sal);

}
contaPoupanca.prototype = Object.create(Conta.prototype);
contaPoupanca.prototype.constructor = contaPoupanca;

const contPou = new contaPoupanca(12, 33, 0)
contPou.depositar(10);
contPou.sacar(2);
contPou.sacar(110);
