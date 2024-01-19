/*
Ejercicio 1: Fin de semana
El objetivo de este ejercicio es imprimir en consola un texto 
que irá variando según el día que contenga la variable dia. 
Para esto, ya presentamos un código hecho con if/else que 
tendremos que modificar y convertirlo a un switch, 
manteniendo el mismo resultado.

let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}
*/



function finDeSemana(dia){
    switch (dia){
        case 'viernes':
            console.log('buen finde');
            break;

        case 'lunes':
            console.log('buena semana');
            break;

        default:
            console.log('buen dia');
    }
}

let dia = 'viernes';
console.log(finDeSemana(dia));




