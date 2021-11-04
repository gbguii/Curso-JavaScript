const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-titulo");
const textoDiv = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
textoDiv.innerHTML += `<p>A raiz quadrada: ${numero ** 0.5}<p/>`;
textoDiv.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} <p/>`;
textoDiv.innerHTML += `<p><p/>`;
textoDiv.innerHTML += `<p>É NaN: ${isNaN(numero)}<p/>`;
textoDiv.innerHTML += `<p>Arrendodando para baixo: ${Math.floor(numero)}<p/>`;
textoDiv.innerHTML += `<p>Arrendodando para cima: ${Math.ceil(numero)}<p/>`;
textoDiv.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}<p/>`;