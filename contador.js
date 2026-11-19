
// ========================================
// CONTADOR REGRESIVO GTA VI
// ========================================

// Fecha objetivo: 19 de noviembre de 2026
// Hora: 00:00 del dispositivo

const fechaObjetivo = new Date(2026, 10, 19, 0, 0, 0).getTime();

// Elementos del contador
const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");

const mensajeElemento = document.getElementById("mensaje");

// ========================================
// MENSAJES PARA NOE ❤️
// ========================================

const mensajes = [
    "¿Ya estás emocionado, amor? ♡",
    "Cada vez falta menos para nuestra aventura.",
    "¿Ya preparaste el control, corazón?",
    "¡La espera casi termina!",
    "¿Listo para descubrir Vice City?",
    "Ya casi, mi amor. ♡",
    "Espero que estés tan emocionado como yo.",
    "¡Se acerca nuestro gran momento!",
    "¿Qué será lo primero que haremos?",
    "¡Prepara todo, amor!",
    "La cuenta regresiva está por terminar.",
    "¡UNA HORA, AMOR! 😍"
];

let ultimoMensaje = "";
let intervalo;

// ========================================
// FORMATO DE NÚMEROS
// ========================================

function dosDigitos(numero) {
    return String(numero).padStart(2, "0");
}

// ========================================
// CAMBIAR MENSAJE CADA HORA
// ========================================

function obtenerMensaje(diferencia) {

    const horasRestantes = Math.ceil(diferencia / 3600000);

    let indice;

    if (horasRestantes <= 12) {

        indice = 12 - horasRestantes;

    } else {

        indice = (12 - (horasRestantes % 12)) % 12;

    }

    return mensajes[indice];
}

// ========================================
// ACTUALIZAR CONTADOR
// ========================================

function actualizarContador() {

    const ahora = Date.now();

    const diferencia = fechaObjetivo - ahora;

    // Cuando llegue la fecha
    if (diferencia <= 0) {

        diasElemento.textContent = "000";
        horasElemento.textContent = "00";
        minutosElemento.textContent = "00";
        segundosElemento.textContent = "00";

        mensajeElemento.textContent =
            "¡LA AVENTURA COMIENZA AHORA, AMOR! ♡";

        clearInterval(intervalo);

        return;
    }

    // Cálculos del tiempo
    const totalSegundos = Math.floor(diferencia / 1000);

    const dias = Math.floor(totalSegundos / 86400);

    const horas = Math.floor(
        (totalSegundos % 86400) / 3600
    );

    const minutos = Math.floor(
        (totalSegundos % 3600) / 60
    );

    const segundos = totalSegundos % 60;

    // Mostrar números
    diasElemento.textContent = String(dias).padStart(3, "0");

    horasElemento.textContent = dosDigitos(horas);

    minutosElemento.textContent = dosDigitos(minutos);

    segundosElemento.textContent = dosDigitos(segundos);

    // Actualizar mensaje
    const nuevoMensaje = obtenerMensaje(diferencia);

    if (nuevoMensaje !== ultimoMensaje) {

        mensajeElemento.textContent = nuevoMensaje;

        ultimoMensaje = nuevoMensaje;

    }
}

// ========================================
// INICIAR CONTADOR
// ========================================

actualizarContador();

intervalo = setInterval(actualizarContador, 1000);
```
