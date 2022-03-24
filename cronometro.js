let tiempo1 = document.getElementById("contador1tiempo")
let incio1 = document.getElementById("btnIniciar1")
let parar1 = document.getElementById("btnPausar1")
let reiniciar1 = document.getElementById("btnReiniciar1")


let tiempo = 0, intervalo = 0;
let verificador = false;

init();

function init(){
    incio1.addEventListener('click', iniciarcontador);
    reiniciar1.addEventListener('click',resetearcontador);
}

function iniciarcontador () {
    if (verificador == false){
        intervalo= setInterval(function() {
            tiempo +=0.01;
            tiempo1.innerHTML = tiempo.toFixed(1);
        }, 10);
        verificador = true;
    } else {
        verificador = false;
        clearInterval(intervalo);
    }
}

function resetearcontador () {
    verificador = false;
    tiempo = 0 ;
    tiempo1.innerHTML = tiempo ;
    clearInterval(intervalo);
}