/*
Ahora vamos a refactorizar nuestro código con la siguiente indicación.

Dados 4 números reales (enteros, decimales, positivos y/o negativos), 
¿cómo podemos identificar el número mayor y mostrarlo por la consola? 
Modifiquemos el código para que ahora acepte 4 números.

*/

// Función que compara cuatro números y devuelve el mayor
function encontrarNumeroMayor(numero1, numero2, numero3, numero4) {
    var mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }

    if (numero3 > mayor) {
        mayor = numero3;
    }

    if (numero4 > mayor) {
        mayor = numero4;
    }

    return mayor;
}

// Ejemplo de uso
var resultado = encontrarNumeroMayor(-5, 10.5, 3, -8);

console.log("El número mayor es: " + resultado);
