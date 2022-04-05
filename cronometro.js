
var cronometro;
var tiemposec1 =document.getElementById('contador1segundos');
var tiempomin1 =document.getElementById('contador1minutos');
    var star1tiempo= document.getElementById('btnIniciar1');
    var stop1tiempo= document.getElementById('btnPausar1');
    var reiniciar1tiempo= document.getElementById('btnReiniciar1');

    var sec1 ;
    var min1 ;
    var hora1 ;
    var t;

function reiniciar1(){
    clearInterval(cronometro)
    sec1=0;
    tiemposec1.innerHTML = 0;
    tiempomin1.innerHTML = 0;
}

function detenerse1 (){
    clearInterval(cronometro);
}
function carga1() { 
   
        
        var sec1 =0;
        var min1 =0;
        var hora1 =0;
      

cronometro = setInterval(
    function segundosfinales1(){
        if (sec1 == 60)
        {
            sec1 = 0;
            min1 ++;
            
            if (min1 == 0)
            {
                min1= 0;
             }
        }    

            sec1++
            return sec1
       

},1000)
if(sec1<10){sec1= "0"+sec1;}
if(min1<10){min1= "0"+min1;}


 tiemposec1.innerHTML = hora1 + ":" + min1 + ":" + sec1;
}
