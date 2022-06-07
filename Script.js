var Data = new Date("Jun, 17, 2022, 20:00:00").getTime();
var DataAtual = new Date()

function Aleatorizar(Lista){return Lista[Math.floor((Math.random()*Lista.length))]}

Som = document.getElementById("Plim");
function TocarSom(){
    Som.play();
    document.getElementById("Frase").innerHTML = '<p class="Zooming">🔊 <span class="Gradient">Aishiteru!</span> 🔊</p><br>'
}

var Hora = DataAtual.getHours()
if (Hora >= 0 && Hora < 12){Saudar = 'Bom dia'}
else if (Hora >= 12 && Hora < 17){Saudar = 'Boa tarde'}
else if (Hora >= 17 && Hora < 24){Saudar = 'Boa noite'}
document.getElementById("Saudar").innerHTML = Saudar

document.getElementById("Dias").innerHTML = "00"
document.getElementById("Horas").innerHTML = "00"
document.getElementById("Minutos").innerHTML = "00"
document.getElementById("Segundos").innerHTML = "00"

setInterval(function(){
    var Agora=new Date().getTime();
    var Distância=Data-Agora
    var Dias=Math.floor(Distância/(1000*60*60*24))
    var Horas=Math.floor(Distância%(1000*60*60*24)/(1000*60*60))
    var Minutos=Math.floor((Distância%(1000*60*60))/(1000*60))
    var Segundos=Math.floor((Distância%(1000*60)/1000))

    document.getElementById("Dias").innerHTML = Dias
    document.getElementById("Horas").innerHTML = Horas
    document.getElementById("Minutos").innerHTML = Minutos
    document.getElementById("Segundos").innerHTML = Segundos
}, 1000);