/*
Ejercicio 4: JS_funciones_estan_hablando_de_mi

Para el siguiente ejercicio vamos a suponer que 
tenemos un texto que copiamos y queremos saber 
si el texto menciona una palabra en particular.
Para lograrlo, tendremos que crear una función 
llamada menciona, que recibirá dos parámetros: 

un texto —que es donde vamos a buscar— y una palabra 
—que es la que vamos a averiguar si se menciona en el texto—. 
La misma función retorna true en el caso de encontrar la palabra.

Ejemplo:

menciona('Existen muchos lenguajes de programación y 
JavaScript es uno de ellos','programación'); // true

*/


function menciona(texto, palabra) {
    // Utilizamos el método includes() para verificar si la palabra está presente en el texto
    return texto.includes(palabra);
}

// Ejemplo de uso
let resultado = menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos', 'programación');
console.log(resultado); // Debería imprimir true
