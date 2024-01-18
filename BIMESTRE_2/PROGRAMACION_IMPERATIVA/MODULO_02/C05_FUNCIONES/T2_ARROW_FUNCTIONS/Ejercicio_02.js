/*

Ejercicio 2: convertir a arrow 2 (con parámetro)

Ahora nuestro trabajo será refactorizar la función saludar() 
que recibe un parámetro, es decir, escribirla con la sintaxis 
necesaria para convertirla en una arrow function.

function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}
*/

let saludar = nombre => 'Hola, ' + nombre + '!';

// Ejemplo de uso
const mensajeSaludo = saludar('Usuario');
console.log(mensajeSaludo);
