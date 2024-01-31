/*
Crear un algoritmo  que permita identificar el número mayor. 
Utilizar condicionales como el if, else, o else if. 
*/

function encontrarNumeroMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1 + " es el número mayor.";
    } else if (numero2 > numero1) {
        return numero2 + " es el número mayor.";
    } else {
        return "Ambos números son iguales.";
    }
}

// Ejemplos de uso
var resultado1 = encontrarNumeroMayor(5, 10);
var resultado2 = encontrarNumeroMayor(20, 5);
var resultado3 = encontrarNumeroMayor(7, 7);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
