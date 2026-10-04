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

// FAQ

const preguntas = document.querySelectorAll('.faq-pregunta');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        pregunta.parentElement.classList.toggle('activo');
    });
});

// CARRITO
let contadorCarrito = 0;

const botonesAnadir = document.querySelectorAll('.c-btn-comprar');
const globito = document.querySelector('.cart-count');

if (botonesAnadir.length > 0 && globito) {
    botonesAnadir.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            
            contadorCarrito++;
            globito.textContent = contadorCarrito;
            
            if (!globito.classList.contains('visible')) {
                globito.classList.add('visible');
            }

            globito.style.transform = 'scale(1.3)';
            setTimeout(() => {
                globito.style.transform = 'scale(1)';
            }, 150);
        });
    });
}


// SUMA Y RESTA FORMULARIO
let n = 1;

function sumar() {
    n++;
    cambiar();
}

function restar() {
    if (n > 1) {
        n--;
        cambiar();
    }
}

function cambiar() {
    document.querySelector('.f-cant').textContent = n;
    document.querySelector('.f-prod-subtotal').textContent = (n * 48.5) + '€';
    document.querySelector('.f-total p').textContent = (n * 50.5) + '€';
    document.querySelector('.f-total p').textContent = (n * 50.5) + '€';
}

// cookies
function cerrarCookies() {
    const modal = document.getElementById('cookies-modal');
    if (modal) {
        modal.classList.add('oculto');
    }
}