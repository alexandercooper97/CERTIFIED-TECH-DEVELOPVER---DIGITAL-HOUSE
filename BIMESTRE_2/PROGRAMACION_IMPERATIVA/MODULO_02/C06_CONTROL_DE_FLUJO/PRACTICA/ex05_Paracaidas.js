const prompt = require("prompt-sync")({ sigint: true });

// ============================================================================
// 🪂 EJERCICIO 5: Abrir Paracaídas
// ============================================================================

function abrirParacaidas(velocidad, altura) {
    const velocidadValida = velocidad < 1000;
    const alturaValida = altura >= 2000 && altura < 3000;
    
    if (velocidadValida && alturaValida) {
        return "✅ Abrir paracaídas AHORA";
    } else {
        return "⚠️ NO abrir paracaídas - Condiciones no seguras";
    }
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       👨‍💻 USER TESTING 👩‍💻                     █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

let velocidad = prompt(">>> Ingrese Velocidad : ");
let altura = prompt(">>> Ingrese Altura : ");

console.log(abrirParacaidas(velocidad, altura));

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
            const icon = result.passed ? "\n✅" : "\n❌";
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

function testParacaidas() {
    const suite = new TestSuite("Abrir Paracaídas");
    
    // Condiciones perfectas
    suite.assert("Velocidad 800, Altura 2500 - ABRIR", 
        abrirParacaidas(800, 2500), "✅ Abrir paracaídas AHORA");
    suite.assert("Velocidad 500, Altura 2000 - ABRIR", 
        abrirParacaidas(500, 2000), "✅ Abrir paracaídas AHORA");
    suite.assert("Velocidad 999, Altura 2999 - ABRIR", 
        abrirParacaidas(999, 2999), "✅ Abrir paracaídas AHORA");
    suite.assert("Velocidad 100, Altura 2200 - ABRIR", 
        abrirParacaidas(100, 2200), "✅ Abrir paracaídas AHORA");
    
    // Velocidad muy alta
    suite.assert("Velocidad 1000, Altura 2500 - NO ABRIR", 
        abrirParacaidas(1000, 2500), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    suite.assert("Velocidad 1500, Altura 2500 - NO ABRIR", 
        abrirParacaidas(1500, 2500), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    suite.assert("Velocidad 2000, Altura 2500 - NO ABRIR", 
        abrirParacaidas(2000, 2500), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    
    // Altura muy baja
    suite.assert("Velocidad 500, Altura 1999 - NO ABRIR", 
        abrirParacaidas(500, 1999), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    suite.assert("Velocidad 500, Altura 1000 - NO ABRIR", 
        abrirParacaidas(500, 1000), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    suite.assert("Velocidad 500, Altura 500 - NO ABRIR", 
        abrirParacaidas(500, 500), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    
    // Altura muy alta
    suite.assert("Velocidad 500, Altura 3000 - NO ABRIR", 
        abrirParacaidas(500, 3000), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    suite.assert("Velocidad 500, Altura 3500 - NO ABRIR", 
        abrirParacaidas(500, 3500), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    suite.assert("Velocidad 500, Altura 5000 - NO ABRIR", 
        abrirParacaidas(500, 5000), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    
    // Ambas condiciones malas
    suite.assert("Velocidad 1200, Altura 1500 - NO ABRIR", 
        abrirParacaidas(1200, 1500), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    suite.assert("Velocidad 1500, Altura 3500 - NO ABRIR", 
        abrirParacaidas(1500, 3500), "⚠️ NO abrir paracaídas - Condiciones no seguras");
    
    // Casos límite exactos
    suite.assert("Velocidad 999, Altura 2000 - ABRIR (límites)", 
        abrirParacaidas(999, 2000), "✅ Abrir paracaídas AHORA");
    suite.assert("Velocidad 999, Altura 2999 - ABRIR (límites)", 
        abrirParacaidas(999, 2999), "✅ Abrir paracaídas AHORA");
    suite.assert("Velocidad 0, Altura 2500 - ABRIR", 
        abrirParacaidas(0, 2500), "✅ Abrir paracaídas AHORA");
    suite.assert("Velocidad 700, Altura 2750 - ABRIR", 
        abrirParacaidas(700, 2750), "✅ Abrir paracaídas AHORA");
    suite.assert("Velocidad 300, Altura 2100 - ABRIR", 
        abrirParacaidas(300, 2100), "✅ Abrir paracaídas AHORA");
    
    suite.report();
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       🚀 UNIT TESTING 🚀                         █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

testParacaidas();

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█              ✨ TODAS LAS PRUEBAS COMPLETADAS ✨                 █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");