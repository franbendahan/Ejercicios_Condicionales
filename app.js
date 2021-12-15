// Ejercicios con cadenas de textos:

// Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.
// Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
// Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
// Solicitar un texto y mostrarlo todo menos la primera letra.
// Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.


// 1 Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.

// function preguntar() {
//     let string = prompt("escribi")
//     if (string.includes("a")) {
//         alert("contiene a")
//     } else { alert("no contiene a") }
// }
// preguntar();

// let palabra = prompt("Ingrese una palabra");

// for (let i = 0; i <= palabra.length - 1; i++) {

//     if (palabra[i] == 'a') {
//         alert("La letra A se encuentra en la posición " + (i+1));
//     }
//     else if (i == palabra.length-1) {
//         alert("No se encontró la letra A");
//     }
// }

//---------------------------------------------------------------------------------------------------------------
// 2 Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
// let text = prompt("Ingrese un texo: ")
// let minus = text.toLowerCase();
// let mayus = text.toUpperCase();
// alert ("Texto en minuscula: " + minus + "\nTexto en mayuscula: " + mayus);

//---------------------------------------------------------------------------------------------------------------

// Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.

// let palabra = prompt("Ingrese una palabra");

// alert("La primer letra es " + palabra[0]);

//---------------------------------------------------------------------------------------------------------------

// Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.

let frase = prompt("Ingrese una frase ");

let contador = 0;

for (let i=0; i<= frase.length-1; i++){
    if (frase[i] !== ' '){
        contador++;
    }
}

alert("Su frase contiene " + contador + " caracteres" );
//---------------------------------------------------------------------------------------------------------------
// Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.

