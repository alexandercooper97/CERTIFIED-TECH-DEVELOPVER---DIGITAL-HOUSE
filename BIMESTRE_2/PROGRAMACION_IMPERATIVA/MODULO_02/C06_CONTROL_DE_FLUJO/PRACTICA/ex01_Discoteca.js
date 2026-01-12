const prompt = require("prompt-sync")({ sigint: true });

// ============================================================================
// 🎯 EJERCICIO 1: Control de Acceso a Discoteca
// ============================================================================

function controlAccesoDiscoteca(edad) {
    if (edad < 0) {
        return "Error, edad inválida. Por favor ingrese un número válido.";
    }
    
    const esImpar = edad % 2 !== 0;
    const mensajeImpar = esImpar ? " ¿Sabías que tu edad es impar?" : "";
    
    if (edad < 18) {
        return "No puede pasar al bar." + mensajeImpar;
    } else if (edad < 21) {
        return "Puede pasar al bar, pero no puede tomar alcohol." + mensajeImpar;
    } else if (edad === 21) {
        return "Puede pasar al bar y tomar alcohol. ¡Felicitaciones por haber llegado a la mayoría de edad!" + mensajeImpar;
    } else {
        return "Puede pasar al bar y tomar alcohol." + mensajeImpar;
    }
}



console.log("==========================================");
console.log("---         🚀 USER TESTING            ---");
console.log("==========================================");
    
let edad = prompt("Ingrese edad : ");
console.log(controlAccesoDiscoteca(edad));

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

function testControlAcceso() {
    const suite = new TestSuite("Control de Acceso a Discoteca");
    
    // Casos de edad negativa
    suite.assert("Edad negativa -1", 
        controlAccesoDiscoteca(-1), 
        "Error, edad inválida. Por favor ingrese un número válido.");
    suite.assert("Edad negativa -100", 
        controlAccesoDiscoteca(-100), 
        "Error, edad inválida. Por favor ingrese un número válido.");
    
    // Menores de edad
    suite.assert("Edad 0", 
        controlAccesoDiscoteca(0), 
        "No puede pasar al bar.");
    suite.assert("Edad 17 (impar)", 
        controlAccesoDiscoteca(17), 
        "No puede pasar al bar. ¿Sabías que tu edad es impar?");
    suite.assert("Edad 16 (par)", 
        controlAccesoDiscoteca(16), 
        "No puede pasar al bar.");
    suite.assert("Edad 10 (par)", 
        controlAccesoDiscoteca(10), 
        "No puede pasar al bar.");
    
    // Entre 18 y 20 años
    suite.assert("Edad 18 (par)", 
        controlAccesoDiscoteca(18), 
        "Puede pasar al bar, pero no puede tomar alcohol.");
    suite.assert("Edad 19 (impar)", 
        controlAccesoDiscoteca(19), 
        "Puede pasar al bar, pero no puede tomar alcohol. ¿Sabías que tu edad es impar?");
    suite.assert("Edad 20 (par)", 
        controlAccesoDiscoteca(20), 
        "Puede pasar al bar, pero no puede tomar alcohol.");
    
    // Exactamente 21 años
    suite.assert("Edad 21 (impar) - Mayoría de edad", 
        controlAccesoDiscoteca(21), 
        "Puede pasar al bar y tomar alcohol. ¡Felicitaciones por haber llegado a la mayoría de edad! ¿Sabías que tu edad es impar?");
    
    // Mayores de 21
    suite.assert("Edad 22 (par)", 
        controlAccesoDiscoteca(22), 
        "Puede pasar al bar y tomar alcohol.");
    suite.assert("Edad 25 (impar)", 
        controlAccesoDiscoteca(25), 
        "Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?");
    suite.assert("Edad 30 (par)", 
        controlAccesoDiscoteca(30), 
        "Puede pasar al bar y tomar alcohol.");
    suite.assert("Edad 45 (impar)", 
        controlAccesoDiscoteca(45), 
        "Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?");
    suite.assert("Edad 50 (par)", 
        controlAccesoDiscoteca(50), 
        "Puede pasar al bar y tomar alcohol.");
    suite.assert("Edad 65 (impar)", 
        controlAccesoDiscoteca(65), 
        "Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?");
    
    // Casos extremos
    suite.assert("Edad 100 (par)", 
        controlAccesoDiscoteca(100), 
        "Puede pasar al bar y tomar alcohol.");
    suite.assert("Edad 99 (impar)", 
        controlAccesoDiscoteca(99), 
        "Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?");
    suite.assert("Edad 1 (impar)", 
        controlAccesoDiscoteca(1), 
        "No puede pasar al bar. ¿Sabías que tu edad es impar?");
    suite.assert("Edad 2 (par)", 
        controlAccesoDiscoteca(2), 
        "No puede pasar al bar.");
    
    suite.report();
}

testControlAcceso();



