const slide = document.querySelector(".projetos .slides");
const inputs = [...document.querySelectorAll(".projetos .btn-manual")];
const labels = [...document.querySelectorAll(".projetos .label-manual")];

const inputs2 = [...document.querySelectorAll(".galeria .btn-manual")];
const labels2 = [...document.querySelectorAll(".galeria .label-manual")];

const textos = [...document.querySelectorAll('.projetos p')];

var contador = 0;
var contador2 = 0;
var percentil = -100;

const menuBtn = document.querySelector('.mobile-menu-btn');
const menuMobile = document.querySelector('.mobile-menu');



menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('menu-active')
    menuMobile.classList.toggle('menu-mobile-show')
})

labels.forEach(e=>{
    e.addEventListener('click', trocar)
})

function trocar (){
    let titulo = document.querySelector('.projetos h4');
    
    inputs[contador].checked = true;
    switch(contador){
        case 0:
        textos[0].style.opacity = 1;
        textos[1].style.opacity = 0;
        titulo.innerText = 'Projeto 3D'
        break
        case 1:
        textos[0].style.opacity = 0;
        textos[1].style.opacity = 1;
        titulo.innerText = 'Projeto 2D';
        break
    }
    contador++;
    if(contador ==2 ) contador = 0
}


var interval1 = setInterval(()=>{
    // contador++;
    // if(contador ==2 ) contador = 0
    trocar();
}, 10000)

var interval2 = setInterval(() =>{
    inputs2[contador2].checked = true;
    contador2++;
    if( contador2 == 4 ) contador2 = 0
},3000)


window.addEventListener('scroll', function(){
    let header = document.querySelector('header')
    header.classList.toggle('show',window.scrollY > 60)
    console.log(window.screenY)
})
/*
document.addEventListener("keydown",e=>{
    let tecla = e.key
    if (tecla.toLowerCase() == "a"){
        window.scroll(
            {
            top: 300,
            left: 0,
            behavior: "smooth"
          }
          )
    }
})
*/