const prompt = require("prompt-sync")({sigint: true});

/* 
####################################################################
##
##                           EJERCICIO 01
##
#################################################################### 

Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

*/

function pulgadasCm(pulgadas) {
    return pulgadas * 2.54;
}


/* 
####################################################################
##
##                           EJERCICIO 02
##
#################################################################### 

Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”

*/

function convetirURL(nombre) {
    return `http://www.${nombre}.com`;
}


/* 
####################################################################
##
##                           EJERCICIO 03
##
#################################################################### 

Crear una función que recibe un string y devuelve la misma frase pero con
admiración.

*/

function fraseAdmiracion(frase) {
    return `${frase}!`;
}


/* 
####################################################################
##
##                           EJERCICIO 04
##
#################################################################### 

Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.

*/

function edadPerro(edad) {
    return edad * 7 ;
}

/* 
####################################################################
##
##                           EJERCICIO 05
##
#################################################################### 

Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.

*/

function horaTrabajo(sueldo) {
    return sueldo / 40;
}

/* 
####################################################################
##
##                           EJERCICIO 06
##
#################################################################### 

Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.

*/

function calculadorIMC(peso, altura) {
    return peso / (altura * altura);
}


/* 
####################################################################
##
##                           EJERCICIO 07
##
#################################################################### 

Crear una función que recibe un string en minúscula, 
lo convierta a mayúsculas y lo retorne.
Investigá qué hace el método de strings .toUpperCase()

*/

function aMayusculas(texto) {
    return texto.toUpperCase();
}

/* 
####################################################################
##
##                           EJERCICIO 08
##
#################################################################### 

Crear una función que recibe un parámetro y devuelve qué 
tipo de dato es ese parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.

*/

function tipoDato(parametro) {
    return typeof parametro;
}
/* 
####################################################################
##
##                           EJERCICIO 09
##
#################################################################### 

Crear una función que le pasamos el radio de un círculo y 
nos devuelve la circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.

*/

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

/*
// Función Expresada (Almacenada en una variable)
const convertirPulgadasExpre = function(pulgadas) {
    return pulgadas * 2.54;
};

// Función Flecha (Arrow Function - versión moderna y corta)
const edadPerroFlecha = anios => anios * 7;

const calculadorIMCFlecha = (peso, altura) => peso / (altura * altura);

console.log("Edad perro (flecha): " + edadPerroFlecha(5));
*/

function assertTest(nombre, actual, esperado) {
    const passed = actual === esperado;
    const icon = passed ? "✅" : "❌";
    console.log(`${icon} [${nombre}] | Esperado: ${esperado} | Obtenido: ${actual}`);
}

// Casos de Prueba
console.log("--- TESTING FUNCIONES SIMPLES ---");
assertTest(">>> Test1: Pulgadas a Cm (10)", pulgadasCm(10), 25.4);
assertTest(">>> Test2: Formato URL ('google')", convetirURL("google"), "http://www.google.com");
assertTest(">>> Test3: Exclamacion ('Hola')", fraseAdmiracion("Hola"), "Hola!");
assertTest(">>> Test4: Edad Perro (2 años)", edadPerro(2), 14);
assertTest(">>> Test5: Valor Hora ($4000)", horaTrabajo(4000), 100);

const imcEsperado = 80 / (1.80 * 1.80); 
assertTest(">>> Test6: Cálculo IMC", calculadorIMC(80, 1.80), imcEsperado);


console.log("--- TESTING FUNCIONES SIMPLES ---");
assertTest(">>> Test 07: Mayusculas ('hola mundo'))", aMayusculas("hola mundo"), "HOLA MUNDO");
assertTest(">>> Test 08: Mayusculas ('casa'))", aMayusculas("casa"), "CASA");
assertTest(">>> Test 09: Tipo de Dato (100)", tipoDato(100), "number");
assertTest(">>> Test 10: Tipo de Dato ('hola')", tipoDato('hola'), "string");


const circEsperada = 2 * Math.PI * 5;
assertTest(">>> Test 11: Circunferencia (5)", calcularCircunferencia(5), circEsperada);

console.log("-------------------------------\n");

