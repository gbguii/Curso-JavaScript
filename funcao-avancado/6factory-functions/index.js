(function(){
    function criaPessoa(nome, sobrenome, altura, peso){
        return {
            nome,
            sobrenome,
            altura,
            peso,
            fala(){
                return `${this.nome} ${this.sobrenome} tem ${this.altura} de altura e pesa ${this.peso} kg.`
            },
            get nomeCompleto(){
                return `${this.nome} ${this.sobrenome}`;
            },
            set nomeCompleto(valor){
                valor = valor.split(" ");
                this.nome = valor.shift();
                this.sobrenome = valor.join(" ");
              
            },
            get imc(){
                const calc = this.peso / (this.altura * this.altura)
                return calc.toFixed(2);
            }
        }
    }

    const pessoa1 = criaPessoa("Luiz", "Guilherme Barbieri", 1.85, 72);
    
    console.log(pessoa1.fala());
    console.log(pessoa1.nomeCompleto);
    pessoa1.nomeCompleto = "Maria Gabriele Alves Ramos"
    console.log(pessoa1.nomeCompleto)
    console.log(pessoa1.imc)
    
})()