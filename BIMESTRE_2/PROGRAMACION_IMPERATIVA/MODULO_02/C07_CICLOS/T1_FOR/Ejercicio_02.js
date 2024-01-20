/*
Ejercicio 2: Estructura for 2
¡Vamos a crear una función interesante!

En este ejercicio nuestra tarea es completar la función 
noParesDeContarImparesHasta. Esta función recibe un número X 
por parámetro y cuenta la cantidad de números impares que hay 
desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. 
Para resolver la ejercitación debemos utilizar el for .

Ejemplo:

console.log(noParesDeContarImparesHasta(4)) 
// imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. 
//Los valores 0, 2 y 4 no los contabiliza por ser números pares.

*/

function noParesDeContarImparesHasta(X) {
    let contadorImpares = 0;

    for (let i = 0; i <= X; i++) {
        if (i % 2 !== 0) {
            contadorImpares++;
        }
    }

    return contadorImpares;
}

// Ejemplo de uso
let resultado = noParesDeContarImparesHasta(10);
console.log(resultado); // Debería imprimir 5, ya que hay 5 números impares (1, 3, 5, 7, 9) hasta el número 10

