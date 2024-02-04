/*

Ejercicio 4: forEach()
Para este ejercicio tenemos el array listaDeSupermercado. 
Nuestro trabajo será mostrar cada ítem de esa lista por 
consola utilizando un foreach.

let listaDeSupermercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

*/

function mostrarListaDeSupermercado(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeSupermercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

mostrarListaDeSupermercado(listaDeSupermercado);
