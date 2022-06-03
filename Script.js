var Data = new Date("Jul, 08, 2022, 00:00:00").getTime();
var DataAtual = new Date()

function Aleatorizar(Lista){return Lista[Math.floor((Math.random()*Lista.length))]}

var Apelido = Aleatorizar([
    "nenequinha",
    "coisa linda",
    "vida",
    "vidinha",
    "amorzinho",
    "mô"])

var Hora = DataAtual.getHours()
if (Hora >= 0 && Hora < 12){Saudar = `Bom dia, ${Apelido}!`}
else if (Hora >= 12 && Hora < 17){Saudar = `Boa tarde, ${Apelido}!`}
else if (Hora >= 17 && Hora < 24){Saudar = `Boa noite, ${Apelido}!`}
document.getElementById("Saudação").innerHTML = Saudar

document.getElementById("Dias").innerHTML = "⭐"
document.getElementById("Horas").innerHTML = "⭐"
document.getElementById("Minutos").innerHTML = "⭐"
document.getElementById("Segundos").innerHTML = "⭐"

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