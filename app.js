/**querySelector es el metodo que permite acceder a cada uno de los elementos del html
 Como parametro se define el elemento que se quiere traer
titulo es una variable de tipo objeto
innerHTML se usa para definir un titulo al h1**/

//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Juego del número secreto";

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Indica un número del 1 al 10";




// Variable de tipo global, fuera de funciones y la dentro de funciones es local
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];//Inicializar el Array
let numeroMaximo = 10;


//Para definir funciones se usa la palabra 'function'junto con el nombre de ella
function verificarIntento(){
    // En caso de tener mas de un input se le busca por el id mediante el getElementById y se busca su valor mediante .value
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //El === sirve para verificar que sean del mismo tipo y en valor
    /**console.log(numeroDeUsuario === numeroSecreto);
    console.log(numeroSecreto);
    console.log(intentos); */
    
    // Si acierta el parrafo debe mostrar un mesaje diciendo que acerto 
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en  ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        //Cuando se adivina el numero se habilita e boton de nuevo juego, eliminando el disabled con el .removeAtribute.
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        // Si no se le dan ayudas de si es menor o mayor 
        intentos++;
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        limpiarCaja();
    }
    return;
}



//Funcion que limpia el campo donde se ingresa el número
function limpiarCaja(){
    //Si se desea utilizar el querySelector con el ID del elemento.
    //Se deja el valor en vacio, para limpiar la caja
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}



//Funcion generica, se va a modificar con respecto a lo que reciba 
//Al usar un parametro que ingresa en el querySelector no es necesario comillas
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}


//Funcion que contiene las condiciones inciales del juego (titulo, parrafo, nuevo numero secreto y el numero de intentos)
function condicionesIniciales(){
    //Llamado de la función 
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}


//Funcion para generar un número aleatorio
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
         //Si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){ //includes determina si dentro de una lista se encuentra un elemento
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }   
    }
}



//Función que reinicie el juego
function reiniciarJuego(){
    //Limpiar la caja 
    limpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar intentos
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');



}

condicionesIniciales();

//Para agregar elemetos al final de un array se usa push
//Verificar el tamaño del array es nombreArray.length
//Los arreglos empiezan siempre por la posición 0 y la ultima posicion es el tamaño del arreglo menos 1
//Para ir a un elemento en una posicion es nombreArray[posicion]
//Para eliminar el ultimo elemento se usa el nombreArray.pop
