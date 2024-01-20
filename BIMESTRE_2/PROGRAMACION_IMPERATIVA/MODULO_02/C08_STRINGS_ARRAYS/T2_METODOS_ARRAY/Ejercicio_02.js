/*
Ejercicio 2: pop()
¡Sí! ¡Alexis se egresó del terciario!

Para este ejercicio contamos con el array estudiantes, 
en donde, en cada índice, almacena un objeto con 
las propiedades nombre, promedio y curso.

Queremos sacar a Alexis, que acaba de egresar, 
y sabemos que está último en ese array.

Para eso debemos, utilizando un método de array, 
guardar los datos de Alexis en una variable nueva 
llamada alumnoEgresado.

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
  }
];

*/
let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  
  let alumnoEgresado = estudiantes.pop();
  
  console.log(alumnoEgresado); // Muestra el objeto con los datos de Alexis
  console.log(estudiantes); // Muestra el array sin el último elemento (Alexis)
  


