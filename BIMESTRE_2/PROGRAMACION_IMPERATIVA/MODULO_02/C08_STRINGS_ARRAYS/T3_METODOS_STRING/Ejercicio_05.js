/*
Ejercicio 5: JS Funciones solo el nombre


Teniendo como punto de partida la cadena de texto 
'Hola!, soy Carli', almacenada en la variable 'frase' 
deberemos recortarla para poder obtener el nombre 'Carli' 
en una nueva variable llamada licenciada.

IMPORTANTE: Para la resolución tendremos que usar la función slice().

let frase = 'Hola!, soy Carli';
*/

let frase = 'Hola!, soy Carli';

// Utilizamos indexOf() para encontrar la posición del nombre y luego slice() para extraerlo
let posicionNombre = frase.indexOf('Carli');
let licenciada = frase.slice(posicionNombre, posicionNombre + 'Carli'.length);

console.log(licenciada); // Debería imprimir 'Carli'

