/*
Ejercicio 3: push()
Se inscribieron dos estudiantes nuevos y 
queremos agregarlos al final del array estudiantes.

Nuestro trabajo será agregar de a un alumno por vez, 
utilizando algún método de array.

Los valores de cada uno son:

nombre: Juan

promedio: 5

curso: iOS

------------------

nombre: Miguel

promedio: 2

curso: Android

let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio: 9,
    curso: 'Android',
  },
  {
    nombre: 'Daniel',
    promedio: 6,
    curso: 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio: 3,
    curso: 'iOS',
  },
];

*/

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio: 9,
      curso: 'Android',
    },
    {
      nombre: 'Daniel',
      promedio: 6,
      curso: 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio: 3,
      curso: 'iOS',
    },
  ];
  
  // Nuevo estudiante: Juan
  let nuevoEstudianteJuan = {
    nombre: 'Juan',
    promedio: 5,
    curso: 'iOS',
  };
  
  // Agregar a Juan al final del array
  estudiantes.push(nuevoEstudianteJuan);
  
  // Nuevo estudiante: Miguel
  let nuevoEstudianteMiguel = {
    nombre: 'Miguel',
    promedio: 2,
    curso: 'Android',
  };
  
  // Agregar a Miguel al final del array
  estudiantes.push(nuevoEstudianteMiguel);
  
  console.log(estudiantes);
  
