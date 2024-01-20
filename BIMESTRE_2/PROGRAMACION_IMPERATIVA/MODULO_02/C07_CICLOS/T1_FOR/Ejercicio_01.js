/*
Ejercicio 1: Estructura for1
Vamos a programar una función que se comporte como un loro. 
Sí, todo lo que "oye", ¡lo repite!

La función debe llamarse loro y debe recibir como 
parámetro el texto y repetirlo 5 veces por consola.

*/
function loro(texto) {
    for (let i = 0; i < 5; i++) {
        console.log(texto);
    }
}

// Ejemplo de uso
let mensaje = "oye";
loro(mensaje);
