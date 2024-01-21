/*
Ejercicio 3: JS_funciones_reemplazo_fast_fast
Nuestra misión, ahora, es crear una función 
llamada reemplazoFastFast que va a recibir 
los siguientes tres parámetros:

1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada.

Ejemplo:

let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'
*/

function reemplazoFastFast(texto, palabraBuscar, palabraReemplazar) {
    // Utilizamos el método replace() para realizar el reemplazo de la palabra
    // La 'g' en la expresión regular indica que se deben reemplazar todas las ocurrencias, no solo la primera
    return texto.replace(new RegExp(palabraBuscar, 'g'), palabraReemplazar);
}

// Ejemplo de uso
let textoSinGuiones = reemplazoFastFast('Este texto es mala onda', 'mala', 'buena');
console.log(textoSinGuiones); // Debería imprimir 'Este texto es buena onda'
