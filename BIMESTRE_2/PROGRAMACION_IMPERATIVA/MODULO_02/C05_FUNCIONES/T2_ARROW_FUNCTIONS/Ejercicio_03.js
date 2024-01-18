/*
Ejercicio 3: convertir a arrow 2 (con mas parámetros)
¡Vamos a pasar nuestra función declarada a una arrow!



Y sí, solo nos falta practicar la sintaxis de una arrow function 
que reciba más de un parámetro. Tomemos la función saludar(), 
que esta vez recibe un nombre y un apellido, y veamos de convertirla 
en una arrow function.


function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
*/


let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

const mensajeSaludo = saludar('Alexander', 'Cooper');
console.log(mensajeSaludo);

