
// Función que encuentra el número mayor en una lista de números usando reduce
function encontrarNumeroMayor(listaNumeros) {
    if (listaNumeros.length === 0) {
        return "La lista está vacía, no hay número mayor.";
    }

    return listaNumeros.reduce(function(mayor, numero) {
        return numero > mayor ? numero : mayor;
    }, listaNumeros[0]);
}

// Generar una lista aleatoria de un millón de números para prueba
var listaAleatoria = [];
for (var i = 0; i < 1000000; i++) {
    listaAleatoria.push(Math.random() * 1000); // Números aleatorios entre 0 y 1000
}

// Medir el tiempo que tarda en encontrar el número mayor
console.time("Tiempo de ejecución");
var resultado = encontrarNumeroMayor(listaAleatoria);
console.timeEnd("Tiempo de ejecución");

console.log("El número mayor es: " + resultado);
