let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

function obtener_Columna(matriz, columna) {
    if (columna < 0 || columna >= matriz[0].length) {
        console.log("La columna especificada está fuera de los límites.");
        return [];
    }

    return matriz.map(fila => fila[columna]);
}

function cambiar_Impares_X_Cero(matriz) {
    return matriz.map(fila =>
        fila.map(elemento => (elemento % 2 !== 0 ? 0 : elemento))
    );
}



const columna_Deseada = obtener_Columna(matrix, 1);
console.log(columna_Deseada);

const matriz_Modificada = cambiar_Impares_X_Cero(matrix);
console.log(matriz_Modificada);