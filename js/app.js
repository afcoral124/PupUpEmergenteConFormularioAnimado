var btnAbrirPopUp = document.getElementById("btn-abrir-popup");
var overlay = document.getElementById("overlay");
var popUp = document.getElementById("popup");
var btnCerrarPopUp= document.getElementById("cerrar-pupup");
var btnIngresar = document.getElementById("btn-submit");

btnAbrirPopUp.addEventListener("click", function(){
    overlay.classList.add("active");
    popUp.classList.add("active");
});

btnCerrarPopUp.addEventListener("click", function(){
    overlay.classList.remove("active");
    popUp.classList.remove("active");
});

btnIngresar.addEventListener("click", function(){
    overlay.classList.remove("active");
    popUp.classList.remove("active");
});