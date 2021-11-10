function relogio(){
const relogio = document.querySelector("#relogio");
let segundos = 0;
let timer;


function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br",{
        hour12: false, 
        timeZone: "GMT"
    })
}

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

document.addEventListener("click", function(e){
    const element = e.target;

    if(element.classList.contains("iniciar")){
        relogio.classList.remove("pausado");
        clearInterval(timer)
        iniciaRelogio();
    }

    if(element.classList.contains("pausar")){
        relogio.classList.add("pausado");
        clearInterval(timer);
    }

    if(element.classList.contains("zerar")){
        relogio.classList.remove("pausado");
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = "00:00:00"
    }
})
}
relogio()


