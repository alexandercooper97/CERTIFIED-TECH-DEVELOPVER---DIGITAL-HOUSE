/*
Ejercicio 1: JS Funciones URL completa
Debemos crear una función llamada dominio 
que recibirá un string como "digitalhouse.com.ar" 
y su función será retornar: 
"http://www.digitalhouse.com.ar".
*/

function dominio(sitio) {
    return "http://www." + sitio;
}

// Ejemplo de uso
let urlCompleta = dominio("digitalhouse.com.ar");
console.log(urlCompleta); // Debería imprimir "http://www.digitalhouse.com.ar"
