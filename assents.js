
// Funcion prueba generador textos 







// Funcion cronometro primer tiempo
function init () { 
 var tiempo1 =document.getElementById('contador1tiempo');
var star1tiempo= document.getElementById('btnIniciar1');
var stop1tiempo= document.getElementById('btnPausar1');
var reiniciar1tiempo= document.getElementById('btnReiniciar1');


var generarmin= document.getElementById('generartxt');




var sec1 =0;
var min1 =0;
var hrs1 = 0;
var t;
function reloj () {
    sec1 ++;
    if (sec1 >= 60){
        sec1 = 0;
        min1 ++;
        if(min1 >= 60){
            min1=0;
            hrs1 ++; 
        }
    }
}
function add() {
    reloj();
    tiempo1.textContent = (hrs1 > 9 ?  hrs1  : "0" + hrs1)
                                + ":" + (min1 > 9 ? min1 : "0" + min1)
                                + ":" + (sec1 > 9 ? sec1 : "0"+ sec1);
                                timer();
}
function timer ( ) {
    t =setTimeout (add, 1000);
}
timer();

star1tiempo.onclick = timer ;
stop1tiempo.onclick = function(){
    clearTimeout(t);
}
reiniciar1tiempo.onclick = function () {
    tiempo1.textContent = "00:00:00";
    sec1 = 0 ; min1 = 0 ; hrs1 = 0;
}


generarmin.addEventListener('click', imprimirmin);

    function imprimirmin() {

        var rivales =document.getElementById("rivalestxt").value;
         var jugadatxt = document.getElementById("jugadatxt").value;
       var  jugada= jugadatxt.replaceAll("\n", "<br>");
       
          var hastags = document.getElementById("hastagstxt").value;

           var textogenerado = document.getElementById("textogenerado");

           var  minutos1 = min1 ; 

           if ( sec1 >= 30){
            var minutosfinal = minutos1 + 1;
          
        }else{
            var minutosfinal = minutos1;
            
        }
        console.log(minutosfinal)
              
              var txtgeneradomin = rivales + "<br>"+"<br>"+ "|" + minutosfinal +"'"+ " ⏱|" + jugada + "<br>" +"<br>" +  hastags ;
              document.getElementById("textogenerado").innerHTML= txtgeneradomin ;
               
    
    }

    
} 
function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("textogenerado");
  
   
    /* Select the text field */
    
    /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.innerText);

  /* Alert the copied text */
  alert("Texto copiado: "
   + copyText.innerText );
}
    // Funcionalidad generar todo el texto 

  





