let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //se importa como objeto que tiene y se le pueden asignar unos atributos
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos>=2) ? 'intentos' : 'intento'}!`);
        document.getElementById('reiniciar ').removeAttribute('disabled');
    } else {
        //el usuario no acertó;
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        return;
    }

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si ya sorteamos todos los números salimos del juego

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los números posibles');
    } else {

        //si el número generado está en la lista, generamos uno nuevo.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //recursiidad
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log()
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';


}

function condicionesIniciales() {
    //mensajes iniciales
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    //generar un nuevo número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //reiniciar intentos
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //mensaje de inicio intervalo de números
    condicionesIniciales();
    //deshabilitar el botón
    document.getElementById('reiniciar ').setAttribute('disabled', 'true');
}




////////ejercicios de práctica
/*
function saludo() {
    console.log('hola mundo');
}

function saludoNombre(nombrePersona) {
    console.log(`Bienvenido ${nombrePersona}`);

}

function duplicar(numero) {
    console.log(`este es el doble del número ingresado = ${numero*2}`);
}

function promedio(n1, n2, n3) {
    console.log(`este es el promedio de los números = ${(n1+n2+n3)/3}`);
}

let lenguajesProg = ['php', 'java', 'js'];

function invertir(array) {
    let i;
    for (i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}
invertir(lenguajesProg);

let listaParaSumar = [1, 2, 7, 5, 3, 9];

function sumarLista(arraeglo) {
    let suma = 0;
    for (let i = 0; i < arraeglo.length; i++) {
        suma += arraeglo[i];
    }
    return suma;
}

console.log(sumarLista(listaParaSumar));

let listaParaSumar = [1, 2, 7, 5, 3, 9];

function cuadradoLista(arreglo) {
    arreglo.forEach(elemento => {
        console.log(elemento * elemento);
    });
}

cuadradoLista(listaParaSumar);

*/

//saludo();
//saludoNombre(prompt('digite su nombre'));
//duplicar(parseInt(prompt('ingresa un numero para duplicarlo')));
//promedio(4, 8, 12);
//verificarIntento();
condicionesIniciales();