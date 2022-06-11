var Data = new Date("Jun, 17, 2022, 20:00:00").getTime();
var DataAtual = new Date()

const myArray = []
for (let i = 0; i < 61; i++) {
  myArray.push(i)
}

function Aleatorizar(Lista){return Lista[Math.floor((Math.random()*Lista.length))]}

document.getElementById("Dias").innerHTML = "00"
document.getElementById("Horas").innerHTML = "00"
document.getElementById("Minutos").innerHTML = "00"
document.getElementById("Segundos").innerHTML = "00"

setInterval(function(){
    var Aum = Aleatorizar(myArray);
    var Adois = Aleatorizar(myArray);
    var Atres = Aleatorizar(myArray);
    var Aquatro = Aleatorizar(myArray);

    if (Aum < 10){Aum = `0${Aum}`}
    if (Adois < 10){Adois = `0${Adois}`}
    if (Atres < 10){Atres = `0${Atres}`}
    if (Aquatro < 10){Aquatro = `0${Aquatro}`}

    document.getElementById("Dias").innerHTML = Aum
    document.getElementById("Horas").innerHTML = Adois
    document.getElementById("Minutos").innerHTML = Atres
    document.getElementById("Segundos").innerHTML = Aquatro
}, 500)

Som = document.getElementById("Plim");
function TocarSom(){
    Som.play();
    document.getElementById("Frase").innerHTML = '<p class="Zooming"><span class="Gradiente">It's an exciting time<br>in the world right now.</span></p>'
    document.querySelector(".bg").style.background = "url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FUQdBeGb.jpg&f=1&nofb=1) no-repeat;"
}

var Hora = DataAtual.getHours()
if (Hora >= 0 && Hora < 12){Saudar = 'Bom dia'}
else if (Hora >= 12 && Hora < 17){Saudar = 'Boa tarde'}
else if (Hora >= 17 && Hora < 24){Saudar = 'Boa noite'}
document.getElementById("Saudar").innerHTML = Saudar

/*document.getElementById("Dias").innerHTML = "00"
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

    if (Dias < 10){Dias = `0${Dias}`}
    if (Horas < 10){Horas = `0${Horas}`}
    if (Minutos < 10){Minutos = `0${Minutos}`}
    if (Segundos < 10){Segundos = `0${Segundos}`}

    document.getElementById("Dias").innerHTML = Dias
    document.getElementById("Horas").innerHTML = Horas
    document.getElementById("Minutos").innerHTML = Minutos
    document.getElementById("Segundos").innerHTML = Segundos
}, 1000);*/
