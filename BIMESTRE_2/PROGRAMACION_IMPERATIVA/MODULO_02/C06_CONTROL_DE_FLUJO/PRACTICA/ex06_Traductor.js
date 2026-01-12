const prompt = require("prompt-sync")({ sigint: true });

// ============================================================================
// 🌍 EJERCICIO 6: Traductor (Switch)
// ============================================================================

function traducirPalabra(palabra) {
    switch(palabra.toLowerCase()) {
        case "casa":
            return "house";
        case "perro":
            return "dog";
        case "pelota":
            return "ball";
        case "árbol":
            return "tree";
        case "genio":
            return "genius";
        default:
            return "La palabra ingresada es incorrecta";
    }
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       👨‍💻 USER TESTING 👩‍💻                     █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

let palabra = prompt("Ingrese Palabra : ");
console.log(traducirPalabra(palabra));

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
function testTraductor() {
    const suite = new TestSuite("Traductor Condicional");
    
    // Palabras válidas
    suite.assert("casa", traducirPalabra("casa"), "house");
    suite.assert("perro", traducirPalabra("perro"), "dog");
    suite.assert("pelota", traducirPalabra("pelota"), "ball");
    suite.assert("árbol", traducirPalabra("árbol"), "tree");
    suite.assert("genio", traducirPalabra("genio"), "genius");
    
    // Mayúsculas/minúsculas
    suite.assert("CASA (mayúsculas)", traducirPalabra("CASA"), "house");
    suite.assert("Perro (capitalizada)", traducirPalabra("Perro"), "dog");
    suite.assert("PELOTA (mayúsculas)", traducirPalabra("PELOTA"), "ball");
    suite.assert("Árbol (capitalizada)", traducirPalabra("Árbol"), "tree");
    suite.assert("GENIO (mayúsculas)", traducirPalabra("GENIO"), "genius");
    
    // Palabras inválidas
    suite.assert("gato (inválida)", traducirPalabra("gato"), "La palabra ingresada es incorrecta");
    suite.assert("mesa (inválida)", traducirPalabra("mesa"), "La palabra ingresada es incorrecta");
    suite.assert("silla (inválida)", traducirPalabra("silla"), "La palabra ingresada es incorrecta");
    suite.assert("ventana (inválida)", traducirPalabra("ventana"), "La palabra ingresada es incorrecta");
    suite.assert("puerta (inválida)", traducirPalabra("puerta"), "La palabra ingresada es incorrecta");
    suite.assert("computadora (inválida)", traducirPalabra("computadora"), "La palabra ingresada es incorrecta");
    suite.assert("libro (inválida)", traducirPalabra("libro"), "La palabra ingresada es incorrecta");
    suite.assert(" (vacía)", traducirPalabra(""), "La palabra ingresada es incorrecta");
    suite.assert("123 (números)", traducirPalabra("123"), "La palabra ingresada es incorrecta");
    suite.assert("casa perro (múltiples)", traducirPalabra("casa perro"), "La palabra ingresada es incorrecta");
    
    suite.report();
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       🚀 UNIT TESTING 🚀                         █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

testTraductor();

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█              ✨ TODAS LAS PRUEBAS COMPLETADAS ✨                 █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");
