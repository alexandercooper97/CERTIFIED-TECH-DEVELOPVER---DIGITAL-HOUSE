/*
Ejercicio 1: map()
Hagamos lío...

Nos dejaron una lista con los horarios 
de partida de algunos aviones. 
Esta lista se reproduce directamente 
en las pantallas del aeropuerto y, 
a modo de travesura, queremos adelantar 
una hora cada partida. 

Nuestro trabajo será utilizar el método map 
para poder lograrlo y almacenar la lista en 
una variable nueva llamada horariosAtrasados.

let horariosPartida = [12, 14, 18, 21];

*/

let horariosPartida = [12, 14, 18, 21];

// Utilizamos map para adelantar una hora cada partida
let horariosAtrasados = horariosPartida.map(function(horario) {
    return horario - 1;
});

console.log("Horarios de Partida Originales:", horariosPartida);
console.log("Horarios Atrasados:", horariosAtrasados);
