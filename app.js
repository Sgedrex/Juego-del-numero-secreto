let numeroSecreto = 0;
let intentos = 1; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor al número ingresado');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor al número ingresado');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
  let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Introduzca un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales(); 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


function generarNumeroSecreto(){
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+ 1;
 
    if (generarNumeroSecreto.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se asignaron todos los números posibles');
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto;
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

condicionesIniciales();