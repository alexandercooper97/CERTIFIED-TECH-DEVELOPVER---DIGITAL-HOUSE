const prompt = require("prompt-sync")({ sigint: true });

// ============================================================================
// 🎲 EJERCICIO 4: Número Secreto
// ============================================================================

function adivinarNumeroSecreto(numeroIngresado) {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    
    if (numeroIngresado === numeroSecreto) {
        return `¡Felicitaciones! Adivinaste el número secreto: ${numeroSecreto}`;
    } else {
        return `No acertaste. Tu número: ${numeroIngresado}, Número secreto: ${numeroSecreto}. ¡Sigue intentando!`;
    }
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       👨‍💻 USER TESTING 👩‍💻                     █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

let numero = prompt("Ingrese Numero : ");
console.log(adivinarNumeroSecreto(numero));

// ============================================================================
// 🧪 FRAMEWORK DE TESTING PROFESIONAL
// ============================================================================

class TestSuite {
    constructor(name) {
        this.name = name; 
        this.passed = 0;
        this.failed = 0;
        this.total = 0;
        this.result = [];
    }

    assert(testName, actual, expected, comparator = (a, e) => a === e) {
        this.total++;
        const passed = comparator(actual,expected);

        if(passed) {
            this.passed++;
        } else {
            this.failed++;
        }

        this.result.push({
            name : testName,
            passed,
            actual,
            expected
        });
    }

    assertNumeric(testName, actual, expected, tolerance = 0.1) {
        this.assert(testName, actual, expected, (a, e) => Math.abs(a-e) < tolerance);
    }

    report() {
        console.log("\n" + "=".repeat(70));
        console.log(` 🧪 TEST SUITE : ${this.name}`);
        console.log("=".repeat(70));

        this.result.forEach(result => {
            const icon = result.passed ? "✅" : "❌";
            const status = result.passed ? "PASS" : "FAIL";
            console.log(`${icon} ${status} | ${result.name}`);
            if (!result.passed) {
                console.log(`   Expected: ${JSON.stringify(result.expected)}`);
                console.log(`   Got:      ${JSON.stringify(result.actual)}`);
            }else{
                console.log(`   Expected: ${JSON.stringify(result.expected)}`);
                console.log(`   Got     : ${JSON.stringify(result.actual)}`);
            }
        });
        
        console.log("=".repeat(70));
        const percentage = ((this.passed / this.total) * 100).toFixed(1);
        const statusIcon = this.failed === 0 ? "🏆" : "⚠️";
        console.log(`${statusIcon} RESULTADO: ${this.passed}/${this.total} PASSED (${percentage}%)`);
        console.log("=".repeat(70) + "\n");
    }
}

// ============================================================================
// 🎯 BATERÍAS DE PRUEBAS
// ============================================================================
function testNumeroSecreto() {
    const suite = new TestSuite("Número Secreto (Adivinanza)");
    
    console.log("⚠️  NOTA: Este ejercicio usa Math.random(), por lo que los resultados varían.");
    console.log("    Estas pruebas verifican el formato correcto de las respuestas.\n");
    
    // Test con números del 1 al 10 (rango válido)
    for (let i = 1; i <= 10; i++) {
        const resultado = adivinarNumeroSecreto(i);
        const esAcierto = resultado.includes("¡Felicitaciones!");
        const esFallo = resultado.includes("No acertaste");
        const tieneNumeroIngresado = resultado.includes(`Tu número: ${i}`);
        const tieneNumeroSecreto = resultado.includes("Número secreto:");
        
        const formatoCorrecto = esAcierto || (esFallo && tieneNumeroIngresado && tieneNumeroSecreto);
        
        suite.assert(`Número ${i} - Formato válido`, 
            formatoCorrecto, 
            true);
    }
    
    // Test con números fuera de rango (para ver comportamiento)
    const testCases = [0, 11, -1, 15, 20, 100, -5, 25, 50, 999];
    testCases.forEach(num => {
        const resultado = adivinarNumeroSecreto(num);
        const tieneRespuesta = resultado.length > 0;
        const esAcierto = resultado.includes("¡Felicitaciones!");
        const esFallo = resultado.includes("No acertaste");
        
        suite.assert(`Número ${num} - Tiene respuesta válida`, 
            tieneRespuesta && (esAcierto || esFallo), 
            true);
    });
    
    suite.report();
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       🚀 UNIT TESTING 🚀                         █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

testNumeroSecreto();

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█              ✨ TODAS LAS PRUEBAS COMPLETADAS ✨                 █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");