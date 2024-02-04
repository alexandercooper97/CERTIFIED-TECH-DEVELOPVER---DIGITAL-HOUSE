/*
Ejercicio 2: filter()
Necesitamos enviarle un diploma a los alumnos 
que están aprobados y un e-mail a los alumnos 
desaprobados para acordar un recuperatorio. 

Por lo tanto, necesitamos dos listas: 

una lista que almacene todos los aprobados 
y otra los desaprobados. 

Deberemos guardarlos en las variables aprobados 
y desaprobados respectivamente.


let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];

*/


let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];

// Filtramos a los estudiantes aprobados
let aprobados = estudiantes.filter(function(estudiante) {
    return estudiante.aprobado === true;
});

// Filtramos a los estudiantes desaprobados
let desaprobados = estudiantes.filter(function(estudiante) {
    return estudiante.aprobado === false;
});

console.log("Estudiantes Aprobados:", aprobados);
console.log("Estudiantes Desaprobados:", desaprobados);
