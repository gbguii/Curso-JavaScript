function Calculadora(){
    this.display = document.querySelector(".display");

    this.capturaCliques = () => {
        document.addEventListener("click", event  =>{
            const el = event.target;
            if(el.classList.contains("btn-num")) this.addNumDisplay(el);
            if(el.classList.contains("btn-clear")) this.clearDisplay();
            if(el.classList.contains("btn-del")) this.removeElDisplay();
            if(el.classList.contains("btn-eq")) this.calcular();
        })
    }
    this.BotaoEnter = () => {
        this.display.addEventListener("keyup", (e) => {
            if(e.keyCode === 13) this.calcular();
        })
    }

    this.calcular = () => {
        
        try{
            const calc = eval(this.display.value);
            if(!calc){
                alert("Conta Inválida")
                return;
            }
            this.display.value = calc;
        }catch(e){
            if(!calc){
                alert("Conta Inválida")
            }
        }
    }

    this.removeElDisplay = () =>{
        this.display.value = this.display.value.slice(0, -1);
    }

    this.clearDisplay = () =>{
        this.display.value = "";
    }


    this.addNumDisplay = (elemento) =>{
        this.display.value += elemento.innerText;
        this.display.focus()
    }

    this.inicia = () => {
        this.capturaCliques();
        this.BotaoEnter()
    }





}

const calculadora = new Calculadora();
calculadora.inicia();