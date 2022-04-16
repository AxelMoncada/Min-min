
    var pantalla = document.getElementById("contador1");

    var hh1 = 0;
    var mm1 = 0;
    var ss1 = 0;

var isMarch = false;
var acumularTiempo = 0;



function start1 () {
    if (isMarch == false ){
        timeInicial = new Date();
        control1 = setInterval(cronometro,10);
        isMarch=true;
    }
}

function cronometro () { 
    timeActual = new Date();
    acumularTiempo = timeActual - timeInicial;
    acumularTiempo2 = new Date() ;
    acumularTiempo2.setTime(acumularTiempo);

    cc1 = Math.round(acumularTiempo2.getMilliseconds()/10);
    ss1 = acumularTiempo2.getSeconds();
    mm1 = acumularTiempo2.getMinutes();
    hh1 = acumularTiempo2.getHours()-19;

    if (cc1 < 10) {cc1 = "0"+cc1;}
    if (ss1 < 10) {ss1 = "0"+ss1;}
    if (mm1 < 10) {mm1 = "0"+mm1;}
    if (hh1 < 10) {hh1 = "0"+hh1;}

   
    pantalla.innerHTML = hh1+" : "+mm1+" : "+ss1;
}

function stop (){
    if (isMarch == true){
        clearInterval(control1);
        isMarch = false
    }
}

function reset (){
    if (isMarch == true ){
        clearInterval(control1);
        isMarch = false;
    }
    acumularTiempo =0 ;
    pantalla.innerHTML = "00 : 00 : 00";
}

function resume () {
    if (isMarch == false){
        timeContinuar = new Date();
        timeContinuar = timeContinuar.getTime();
        acumularResume = timeContinuar-acumularTiempo;

        timeInicial.setTime(acumularResume);
        control1 = setInterval(cronometro,10);
        isMarch = true;
    }
}
     
  
  
  
  
// Cronometro segundo tiempo


var pantalla2 = document.getElementById("contador2");

var hh2 = 0;
var mm2 = 45;
var ss2 = 0;

var isMarch2 = false;
var acumularTiempo2 = 0;


function start2 () {
if (isMarch2 == false ){
    timeInicial2 = new Date();
    control2 = setInterval(cronometro2,10);
    isMarch2=true;
}
}

function cronometro2 () { 
timeActual2 = new Date();


acumularTiempo22 = timeActual2 - timeInicial2;
acumularTiempo3 = new Date() ;
acumularTiempo3.setTime(acumularTiempo22);

cc2 = Math.round(acumularTiempo3.getMilliseconds()/10);
ss2 = acumularTiempo3.getSeconds();
mm2 = acumularTiempo3.getMinutes()+45;
hh2 = acumularTiempo3.getHours()-19;

if (cc2 < 10) {cc2 = "0"+cc2;}
if (ss2 < 10) {ss2 = "0"+ss2;}
if (mm2 < 10) {mm2 = "0"+mm2;}
if (hh2 < 10) {hh2 = "0"+hh2;}

pantalla2.innerHTML = hh2+" : "+mm2+" : "+ss2;
}

function stop2 (){
if (isMarch2 == true){
    clearInterval(control2);
    isMarch2 = false
}
}

function reset2 (){
if (isMarch2 == true ){
    clearInterval(control2);
    isMarch2 = false;
}
acumularTiempo22 =0 ;
pantalla2.innerHTML = "00 : 00 : 00";
}

function resume2 () {
    if (isMarch2 == false){
        timeContinuar2 = new Date();
        timeContinuar2 = timeContinuar2.getTime();
        acumularResume2 = timeContinuar2-acumularTiempo22;

        timeInicial2.setTime(acumularResume2);
        control2 = setInterval(cronometro2,10);
        isMarch2 = true;
    }
}


if ( ss2 >= 30){
    minutos2valor = Number(mm2);
    minutosfinal2 = minutos2valor + 1;                 
}else{
    minutos2valor = Number(mm1);
    minutosfinal2 = minutos2valor;
    }


// Funcion Generar texto            


// Funcionalidad generar todo el texto 
var generarmin= document.getElementById('generartxt');
generarmin.addEventListener('click', imprimirmin);

function imprimirmin() {  

    if ( ss1 >= 30){
        minutos1valor = Number(mm1);
        minutosfinal1 = minutos1valor + 1;                 
    }else{
        minutos1valor = Number(mm1);
        minutosfinal1 = minutos1valor;
        }

    if ( ss2 >= 30){
            minutos2valor = Number(mm2);
            minutosfinal2 = minutos2valor + 1;                 
    }else{
            minutos2valor = Number(mm2);
            minutosfinal2 = minutos2valor;
         }
    
if (isMarch2 == false){
    minutosfinal=minutosfinal1;
}else{
    minutosfinal = minutosfinal2;
}




var rivales =document.getElementById("rivalestxt").value;
 var jugadatxt = document.getElementById("jugadatxt").value;
var  jugada= jugadatxt.replaceAll("\n", "<br>");    
var hastags = document.getElementById("hastagstxt").value;
var textogenerado = document.getElementById("textogenerado");  



 var txtgeneradomin = rivales + "<br>"+"<br>"+ "|" + minutosfinal +"'"+ " ⏱| " + jugada + "<br>" +"<br>" +  hastags ;
 document.getElementById("textogenerado").innerHTML= txtgeneradomin ;
 

}
// Funcion Boton copiar texto
 function copyText() {
  /* Get the text field */
 var copyText = document.getElementById("textogenerado");   
  /* Copy the text inside the text field */
 navigator.clipboard.writeText(copyText.innerText);
 /* Alert the copied text */
document.getElementById("respuestatxt").innerText ="Texto copiado"
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




    const button = document.querySelector('#emoji-button');

const picker = new EmojiButton();

button.addEventListener('click', () => {
  picker.togglePicker(button);
  
});

  picker.on('emoji', emoji => {
    document.querySelector('input').value += emoji;
  });