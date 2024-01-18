/*
Para este ejercicio vamos a dar tres funciones ya definidas. 
Nuestro trabajo será cambiarle la sintaxis y volver a 
escribirlas para que sean funciones de tipo arrow.

function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}
*/

// Función que devuelve el array [1, 2, 3, 4, 5]
let dameCinco = () => [1, 2, 3, 4, 5];

// Función que devuelve el resultado de multiplicar 123 por 2
let multiplicarPorDos = () => 123 * 2;

// Función que devuelve la cadena "Mi nombre es Hernán"
let mostrarNombre = () => "Mi nombre es Hernán";

// Ejemplos de uso
console.log(dameCinco());
console.log(multiplicarPorDos());
console.log(mostrarNombre());

