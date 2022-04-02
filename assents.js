
// Funcion cronometro primer tiempo
function init () { 
 var tiempo1 =document.getElementById('contador1tiempo');
var star1tiempo= document.getElementById('btnIniciar1');
var stop1tiempo= document.getElementById('btnPausar1');
var reiniciar1tiempo= document.getElementById('btnReiniciar1');

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

        
  // Funcionalidad generar todo el texto 
  var generarmin= document.getElementById('generartxt');
  generarmin.addEventListener('click', imprimirmin);
  
  function imprimirmin() {  
  var rivales =document.getElementById("rivalestxt").value;
   var jugadatxt = document.getElementById("jugadatxt").value;
  var  jugada= jugadatxt.replaceAll("\n", "<br>");    
  var hastags = document.getElementById("hastagstxt").value;
  var textogenerado = document.getElementById("textogenerado");  
  
  
  
  // Aproximacion del minuto 
        var minutos1 = min1        
            if ( sec1 >= 30){
                minutosfinal = minutos1 + 1;                 
            }else{
                minutosfinal = minutos1;
                }

 // Funcion Generar texto            
        var txtgeneradomin = rivales + "<br>"+"<br>"+ "|" + minutosfinal +"'"+ " ⏱| " + jugada + "<br>" +"<br>" +  hastags ;
        document.getElementById("textogenerado").innerHTML= txtgeneradomin ;

  // Funcion Boton copiar texto
        function copyText() {
         /* Get the text field */
        var copyText = document.getElementById("textogenerado");   
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.innerText);
        /* Alert the copied text */
    document.getElementById("respuestatxt").innerText ="Texto copiado"
    }
    }
}

// Cronometro segundo tiempo
    function init2() { 
        var tiempo2 =document.getElementById('contador2tiempo');
       var star2tiempo= document.getElementById('btnIniciar2');
       var stop2tiempo= document.getElementById('btnPausar2');
       var reiniciar2tiempo= document.getElementById('btnReiniciar2');
              
       var generarmin2= document.getElementById('generartxt');
       var sec2 =0;
       var min2 =45;
       var hrs2 = 0;
       var t2;
       function reloj2 () {
           sec2 ++;
           if (sec2 >= 60){
               sec2 = 0;
               min2 ++;
               if(min2 >= 60){
                   min2=0;
                   hrs2 ++; 
               }
           }
       }
       function add2() {
           reloj2();
           tiempo2.textContent = (hrs2 > 9 ?  hrs2  : "0" + hrs2)
                                       + ":" + (min2 > 9 ? min2 : "0" + min2)
                                       + ":" + (sec2 > 9 ? sec2 : "0"+ sec2);
                                       timer2();
       }
       function timer2 ( ) {
           t2 =setTimeout (add2, 1000);
       }
       timer2();       
       star2tiempo.onclick = timer2 ;
       stop2tiempo.onclick = function(){
           clearTimeout(t2);
       }
       reiniciar2tiempo.onclick = function () {
           tiempo2.textContent = "00:45:00";
           sec2 = 0 ; min2 = 45 ; hrs2 = 0;
       }
      
        // Funcionalidad generar todo el texto 
  var generarmin= document.getElementById('generartxt');
  generarmin.addEventListener('click', imprimirmin);
  
  function imprimirmin() {  
  var rivales =document.getElementById("rivalestxt").value;
   var jugadatxt = document.getElementById("jugadatxt").value;
  var  jugada= jugadatxt.replaceAll("\n", "<br>");    
  var hastags = document.getElementById("hastagstxt").value;
  var textogenerado = document.getElementById("textogenerado");  
  
    
  // Aproximacion del minuto     
  var minutos2 = min2
         if ( sec2 >= 30){
          minutosfinal = minutos2 + 1;             
      }else{
          minutosfinal = minutos2;
           }
//generador de texto
  var txtgeneradomin = rivales + "<br>"+"<br>"+ "|" + minutosfinal +"'"+ " ⏱|  " + jugada + "<br>" +"<br>" +  hastags ;
  document.getElementById("textogenerado").innerHTML= txtgeneradomin ;
    }
    } 


  // funcion bloquear anuncios
    window.onload = function(){
        var button = document.getElementsByName("sandbox")[0]
        var iframe = document.getElementsByName("framez")[0]
        button.addEventListener('click',sndbx,false);
    
        function sndbx(){
        var nibba = document.getElementById("framez").src;
        if(iframe.sandbox == 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation'){
        document.getElementById("framez").removeAttribute("sandbox"); 
        }
        frames['framez'].location.href=nibba;
        iframe.sandbox = 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation';
        }
    }


    function copyText() {
        /* Get the text field */
        var copyText = document.getElementById("textogenerado");      
          /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.innerText);
      /* Alert the copied text */
    document.getElementById("respuestatxt").innerText ="Texto copiado"
    }

