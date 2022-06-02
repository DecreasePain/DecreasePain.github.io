var Data = new Date("Jul, 08, 2022, 00:00:00").getTime();
var DataAtual = new Date()

var Hora = DataAtual.getHours()
Saudar = "Boa noite, Lívia! 🥰"
if (Hora >= 0 && Hora < 12){Saudar = "Bom dia, Lívia!"}
else if (Hora >= 12 && Hora < 17){Saudar = "Boa tarde, Lívia!"}
else if (Hora >= 17 && Hora < 0){Saudar = "Boa noite, Lívia!"}
document.getElementById("Saudação").innerHTML = Saudar

var Timer=setInterval(function(){
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
