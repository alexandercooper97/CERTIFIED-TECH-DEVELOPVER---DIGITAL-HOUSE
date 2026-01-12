// ============================================================================
// ⛽ EJERCICIO 2: Cálculo de Combustible
// ============================================================================

const prompt = require("prompt-sync")({ sigint: true });

function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro = 0;
    
    if (vehiculo === "coche") {
        precioPorLitro = 86;
    } else if (vehiculo === "moto") {
        precioPorLitro = 70;
    } else if (vehiculo === "autobús") {
        precioPorLitro = 55;
    }
    
    let total = precioPorLitro * litrosConsumidos;
    
    if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
        total += 50;
    } else if (litrosConsumidos > 25) {
        total += 25;
    }
    
    return total;
}


console.log("==========================================");
console.log("---         🚀 USER TESTING            ---");
console.log("==========================================");
    
let vehiculo = prompt("Ingrese Vehiculo : ");
let litros = prompt("Ingrese Litros : ");
console.log(totalAPagar(vehiculo,litros));

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
            }
        });
        
        console.log("=".repeat(70));
        const percentage = ((this.passed / this.total) * 100).toFixed(1);
        const statusIcon = this.failed === 0 ? "🏆" : "⚠️";
        console.log(`${statusIcon} RESULTADO: ${this.passed}/${this.total} PASSED (${percentage}%)`);
        console.log("=".repeat(70) + "\n");
    }
}

console.log("==========================================");
console.log("---         🚀 UNIT TESTING            ---");
console.log("==========================================");


// ============================================================================
// 🎯 BATERÍAS DE PRUEBAS
// ============================================================================

function testTotalAPagar() {
    const suite = new TestSuite("Cálculo de Combustible");
    
    // Coche
    suite.assertNumeric("Coche 10L (0-25)", totalAPagar("coche", 10), 910); // 86*10 + 50
    suite.assertNumeric("Coche 20L (0-25)", totalAPagar("coche", 20), 1770); // 86*20 + 50
    suite.assertNumeric("Coche 25L (0-25)", totalAPagar("coche", 25), 2200); // 86*25 + 50
    suite.assertNumeric("Coche 30L (>25)", totalAPagar("coche", 30), 2605); // 86*30 + 25
    suite.assertNumeric("Coche 50L (>25)", totalAPagar("coche", 50), 4325); // 86*50 + 25
    
    // Moto
    suite.assertNumeric("Moto 10L (0-25)", totalAPagar("moto", 10), 750); // 70*10 + 50
    suite.assertNumeric("Moto 15L (0-25)", totalAPagar("moto", 15), 1100); // 70*15 + 50
    suite.assertNumeric("Moto 25L (0-25)", totalAPagar("moto", 25), 1800); // 70*25 + 50
    suite.assertNumeric("Moto 30L (>25)", totalAPagar("moto", 30), 2125); // 70*30 + 25
    suite.assertNumeric("Moto 40L (>25)", totalAPagar("moto", 40), 2825); // 70*40 + 25
    
    // Autobús
    suite.assertNumeric("Autobús 10L (0-25)", totalAPagar("autobús", 10), 600); // 55*10 + 50
    suite.assertNumeric("Autobús 20L (0-25)", totalAPagar("autobús", 20), 1150); // 55*20 + 50
    suite.assertNumeric("Autobús 25L (0-25)", totalAPagar("autobús", 25), 1425); // 55*25 + 50
    suite.assertNumeric("Autobús 30L (>25)", totalAPagar("autobús", 30), 1675); // 55*30 + 25
    suite.assertNumeric("Autobús 50L (>25)", totalAPagar("autobús", 50), 2775); // 55*50 + 25
    
    // Casos límite
    suite.assertNumeric("Coche 0L", totalAPagar("coche", 0), 0); // Sin cargo adicional
    suite.assertNumeric("Moto 1L (0-25)", totalAPagar("moto", 1), 120); // 70*1 + 50
    suite.assertNumeric("Autobús 26L (>25)", totalAPagar("autobús", 26), 1455); // 55*26 + 25
    suite.assertNumeric("Coche 100L (>25)", totalAPagar("coche", 100), 8625); // 86*100 + 25
    suite.assertNumeric("Moto 5L (0-25)", totalAPagar("moto", 5), 400); // 70*5 + 50
    
    suite.report();
}

testTotalAPagar();

