/*
totalAPagar()
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.
*/
/*
function totalPagar(vehiculo, litros) {
    let precioLitro = 0;

    switch (vehiculo.toLowerCase())  {
        case "coche": precioLitro = 86; break;
        case "moto":  precioLitro = 70; break;
        case "autobús": precioLitro = 55; break;
        default: return "Vehículo no reconocido";
    }

    let total = precioLitro * litros;

    if (litros > 0 && litros <= 25) {
        total += 50;
    } else if (litros > 25) {
        total += 25;
    }

    return total;
}

// --- TEST SUITE (Automated) ---

function assertTest(nombre, actual, esperado) {
    const passed = actual === esperado;
    const icon = passed ? "✅" : "❌";
    console.log(`${icon} [${nombre}] | Esperado: ${esperado} | Obtenido: ${actual}`);
}

console.log("--- TESTING : totalPagar ---");
assertTest(">>> Test1: ('coche', 20)", totalPagar("coche", 20), 1770);
assertTest(">>> Test2: ('moto', 30)", totalPagar("moto", 30), 2125);
assertTest(">>> Test3: ('autobus', 10)", totalPagar("autobús", 10), 600);
assertTest(">>> Test4: ('avion', 10)", totalPagar("avion", 10), "Vehículo no reconocido" );
/*
console.log("--- TEST: totalAPagar ---");
const testCases = [
    { v: "coche", l: 20, exp: 1770 }, // (86*20) + 50
    { v: "moto", l: 30, exp: 2125 },  // (70*30) + 25
    { v: "autobús", l: 10, exp: 600 }, // (55*10) + 50
    { v: "avion", l: 10, exp: "Vehículo no reconocido" } // Edge Case
];

testCases.forEach((t, i) => {
    const res = totalPagar(t.v, t.l);
    console.log(`${res === t.exp ? "✅" : "❌"} Test ${i+1}: ${res}`);
});
*/

/**
 * @param {string} vehiculo - coche, moto o autobús 
 * @param {number} litros - cantidad consumida 
 */
function totalAPagar(vehiculo, litros) {
    let precios = { "coche": 86, "moto": 70, "autobús": 55 }; 
    let precioBase = precios[vehiculo.toLowerCase()] || 0;
    let total = precioBase * litros;

    if (litros > 0 && litros <= 25) total += 50; 
    else if (litros > 25) total += 25;

    return total;
}

function runCombustibleTests() {
    let passed = 0, total = 0;
    const assert = (name, v, l, exp) => {
        total++;
        const res = totalAPagar(v, l);
        const ok = Math.abs(res - exp) < 0.1;
        if(ok) passed++;
        console.log(`${ok ? "✅" : "❌"} [${name}] | Exp: ${exp} | Got: ${res}`);
    };


    console.log("==========================================");
    console.log("--- 🚀 BATERÍA DE PRUEBAS: COMBUSTIBLE ---");
    console.log("==========================================");
    assert("Coche 20L", "coche", 20, 1770); // (86*20)+50 
    assert("Moto 30L", "moto", 30, 2125);  // (70*30)+25 
    for(let i=1; i<=18; i++) assert(`Autobus ${i}`, "autobús", i+5, ((55*(i+5)) + (i+5 <= 25 ? 50 : 25)));

    console.log("==========================================");
    console.log("---          🚀 REPORTE FINAL          ---");
    console.log("==========================================");
    console.log(`\n🏆 ${passed}/${total} PASSED 🏆`);
}

runCombustibleTests();