// NAV
const hamburger = document.querySelector(".hamburger");
const navMenuDcha = document.querySelector(".desktop-dcha");
const navMenuIzq = document.querySelector(".desktop-izq");

hamburger.addEventListener("click", function () {
    navMenuDcha.classList.toggle("active");
    navMenuIzq.classList.toggle("active");
    }
);


// CUENTA ATRÁS DEL HOME

let fecha = new Date(2027, 1, 18, 0, 0);
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");

if (spanFecha) {
    spanFecha.innerText = fecha.toLocaleDateString();
}

let intervalo = setInterval(() => {

    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;

    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    parrafoDias.innerText = dias;
    parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;

    if (distancia < 0) {
        clearInterval(intervalo);
        cuentaAtras.innerHTML = "<p class='grande'>¡LLEGÓ EL MOMENTO!</p>";
    }

}, 1000);