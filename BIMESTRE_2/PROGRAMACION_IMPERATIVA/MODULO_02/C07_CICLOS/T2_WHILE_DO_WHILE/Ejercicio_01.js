/*
Ejercicio 1
Vamos a crear una función y asignarla a una variable!.

Para este ejercicio te damos la función tablaDeMultiplicar ya definida, 
la cual recibe un número como parámetro. Queremos que al ejecutarse 
la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.

Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:

5 * 1 = 5
5 * 2 = 10

5 * 3 = 15

...

hasta llegar a multiplicarlo por 10.

*/
// Definición de la función
function tablaDeMultiplicar(numero){
    let i = 1;
    while( i <= 10){
        console.log(numero+ ' * '+ i + ' = ' + numero *i);
        i++;
    }
};

// Ejemplo de uso
tablaDeMultiplicar(5);
