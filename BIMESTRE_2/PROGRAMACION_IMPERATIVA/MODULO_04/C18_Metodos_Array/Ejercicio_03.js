/*
Ejercicio 3: reduce()
Nos dejaron un array con las vueltas que 
dio una corredora entrenando en distintos 
momentos para una maratón.

Nuestro desafío será crear la variable totalVueltas 
y almacenar en ella el total, usando el método reduce.

let vueltas = [5, 8, 12, 3, 22];

*/

let vueltas = [5, 8, 12, 3, 22];

// Utilizamos reduce para sumar todas las vueltas
let totalVueltas = vueltas.reduce(function(acumulador, vuelta) {
    return acumulador + vuelta;
}, 0);

console.log("Total de Vueltas:", totalVueltas);
