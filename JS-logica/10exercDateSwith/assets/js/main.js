// function getDayWeek(dia){
//     let diaSemanaTexto;
//     switch(dia){
//         case 0:
//         return diaSemanaTexto = "Domingo";

//         case 1:
//         return diaSemanaTexto = "Segunda-feira";

//         case 2:
//         return diaSemanaTexto = "Terça-feira";

//         case 3:
//         return diaSemanaTexto = "Quarta-feira";
        
//         case 4:
//         return diaSemanaTexto = "Quinta-feira";

//         case 5:
//         return diaSemanaTexto = "Sexta-feira";

//         case 6:
//         return diaSemanaTexto = "Sabado";

//         default:
//         return diaSemanaTexto = "";
//     }
// }

// function getMontOfYear(mes){
//     let mesDoAnoTexto;
//     switch(mes){
//         case 0:
//         return mesDoAnoTexto = "Janeiro";

//         case 1:
//         return mesDoAnoTexto = "Fevereiro";

//         case 2:
//         return mesDoAnoTexto = "Março";

//         case 3:
//         return mesDoAnoTexto = "Abril";

//         case 4:
//         return mesDoAnoTexto = "Maio";

//         case 5:
//         return mesDoAnoTexto = "Junho";

//         case 6:
//         return mesDoAnoTexto = "Julho";

//         case 7:
//         return mesDoAnoTexto = "Agosto";

//         case 8:
//         return mesDoAnoTexto = "Setembro";

//         case 9:
//         return mesDoAnoTexto = "Outubro";

//         case 10:
//         return mesDoAnoTexto = "Novembro";

//         case 11:
//         return mesDoAnoTexto = "Dezembro";

//         default:
//         return mesDoAnoTexto = "";
//     }
// }
// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`
// }

// const dataAtual = new Date();
// const ano = dataAtual.getFullYear();
// const diaMes = dataAtual.getDate();
// const diaSemana = dataAtual.getDay();
// const mes = dataAtual.getMonth();
// const hora = dataAtual.getHours();
// const minutos = dataAtual.getMinutes();
// const segundos = dataAtual.getSeconds();

// const diaSemanaTexto = getDayWeek(diaSemana);
// const mesDoAnoTexto = getMontOfYear(mes);

// const visor = document.querySelector("#visor");
// visor.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesDoAnoTexto} de ${ano} ${zeroAEsquerda(hora)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`;

// const visor = document.querySelector("#visor");
// const data = new Date();
// const opcoes = {
//     dateStyle: "full" ,
//     timeStyle: "short"
// };
// visor.innerHTML = data.toLocaleString("pt-BR", opcoes);


function getDayWeek(dia){
    let diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

    return diasSemana[dia]
}

function getMontOfYear(mes){
   let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

   return meses[mes]
}


function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const diaMes = dataAtual.getDate();
const diaSemana = dataAtual.getDay();
const mes = dataAtual.getMonth();
const hora = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();

const diaSemanaTexto = getDayWeek(diaSemana);
const mesDoAnoTexto = getMontOfYear(mes);

const visor = document.querySelector("#visor");
visor.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesDoAnoTexto} de ${ano} ${zeroAEsquerda(hora)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`;