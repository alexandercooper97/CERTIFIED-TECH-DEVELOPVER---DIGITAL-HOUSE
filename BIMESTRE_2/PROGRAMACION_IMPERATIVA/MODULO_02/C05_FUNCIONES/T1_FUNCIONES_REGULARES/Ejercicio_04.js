/*
Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.

triple: recibe un número como parámetro y devuelve el triple de ese número.

anteriorDelTriple: recibe un número como parámetro y, 
                   utilizando las dos funciones anteriores, 
                   tendrá que devolver el número recibido 
                   multiplicado por 3 (tres) y al resultado 
                   restarle 1 (uno).
*/
// Función que devuelve el número anterior
function anterior(numero) {
    return numero - 1;
  }
  
  // Función que devuelve el triple de un número
  function triple(numero) {
    return numero * 3;
  }
  
  // Función que utiliza las dos funciones anteriores para calcular el resultado
  function anteriorDelTriple(numero) {
    var resultadoTriple = triple(numero);
    var resultadoFinal = anterior(resultadoTriple);
    return resultadoFinal;
  }
  
  // Ejemplos de uso
  var numeroEjemplo = 5;
  console.log("Anterior de " + numeroEjemplo + ": " + anterior(numeroEjemplo));
  console.log("Triple de " + numeroEjemplo + ": " + triple(numeroEjemplo));
  console.log("Anterior del triple de " + numeroEjemplo + ": " + anteriorDelTriple(numeroEjemplo));
  