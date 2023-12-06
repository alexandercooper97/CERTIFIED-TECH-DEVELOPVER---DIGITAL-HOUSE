/*
En el ejemplo que presentamos hay una función que ya está creada, 
pero sucede que cuando la invocamos, no funciona. Eso es porque 
la función necesita ciertos parámetros y no los tiene.

Debemos modificar el código que ya está escrito para 
agregarle los parámetros que la función necesita
*/

function saludar(nombre,apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

console.log(saludar("Alexander", "Cooper"));

