//Microdesafio 01
console.log("\t MICRODESAFIO 01 \n");
function test1(x, y) {
    return y - x;
}

test1(10,40);
// Pruebas manuales
console.log("--- Test Micro Desafío 1 ---");
const resultado1 = test1(10, 40); 

console.log("¿El resultado es 30?:", resultado1 === 30); 
console.log("Resultado obtenido:", resultado1);

console.log("\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");

//Microdesafio 02 
console.log("\t MICRODESAFIO 02 \n");
function test2(x, y) {
    return x * 2;
    console.log(x);
    return x / 2;
}

test2(10);
console.log("\n--- Test Micro Desafío 2 ---");
const resultado2 = test2(10);

console.log("¿El resultado es 20?:", resultado2 === 20);
console.log("Resultado obtenido:", resultado2);
console.log("Nota: Si no viste un '10' en la consola antes de este mensaje, el test es exitoso.");

console.log("\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
console.log("\t Testing 1\n");
function validador(nombreTest, actual, esperado) {
    if (actual === esperado) {
        console.log(`✅ ${nombreTest}: Pasó la prueba.`);
    } else {
        console.log(`❌ ${nombreTest}: Falló. Se esperaba ${esperado} pero se obtuvo ${actual}.`);
    }
}

validador("Micro Desafío 1", test1(10, 40), 30);
validador("Micro Desafío 2", test2(10), 20);


console.log("\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
console.log("\t Testing 2\n");

function assertTest(nombre, actual, esperado) {
    const passed = actual === esperado;
    const icon = passed ? "✅" : "❌";
    console.log(`${icon} [${nombre}] | Esperado: ${esperado} | Obtenido: ${actual}`);
}

// Casos de Prueba
console.log("--- TESTING MICRO DESAFÍOS ---");
assertTest("test1: Orden de parámetros (40-10)", test1(10, 40), 30);
assertTest("test2: Corte por return (10*2)", test2(10), 20);
console.log("-------------------------------\n");

