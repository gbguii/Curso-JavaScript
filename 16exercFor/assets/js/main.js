const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");


const stylesBody = getComputedStyle(document.body)
const backgroundColor = stylesBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backgroundColor;
    p.style.color = "White";
}