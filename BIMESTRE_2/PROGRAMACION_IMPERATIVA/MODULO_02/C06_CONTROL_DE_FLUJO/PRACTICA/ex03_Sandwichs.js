const prompt = require("prompt-sync")({ sigint: true });

// ============================================================================
// 🥪 EJERCICIO 3: Local de Sándwiches
// ============================================================================

function calcularPrecioSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let total = 0;
    
    // Precio base del sándwich
    if (base === "pollo") {
        total += 150;
    } else if (base === "carne") {
        total += 200;
    } else if (base === "veggie") {
        total += 100;
    }
    
    // Precio del pan
    if (pan === "blanco") {
        total += 50;
    } else if (pan === "negro") {
        total += 60;
    } else if (pan === "s/gluten") {
        total += 75;
    }
    
    // Adicionales
    if (queso) total += 20;
    if (tomate) total += 15;
    if (lechuga) total += 10;
    if (cebolla) total += 15;
    if (mayonesa) total += 5;
    if (mostaza) total += 5;
    
    return total;
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       👨‍💻 USER TESTING 👩‍💻                     █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

let base = prompt("Ingrese Pedido Base : ");
let pan = prompt("Ingrese Tipo de Pan : ");


console.log(calcularPrecioSandwich(base,pan,false, false, false, false, false, false));

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

function testSandwich() {
    const suite = new TestSuite("Local de Sándwiches");
    
    // Solo base y pan
    suite.assertNumeric("Pollo + Blanco, sin extras", 
        calcularPrecioSandwich("pollo", "blanco", false, false, false, false, false, false), 200);
    suite.assertNumeric("Carne + Negro, sin extras", 
        calcularPrecioSandwich("carne", "negro", false, false, false, false, false, false), 260);
    suite.assertNumeric("Veggie + S/Gluten, sin extras", 
        calcularPrecioSandwich("veggie", "s/gluten", false, false, false, false, false, false), 175);
    
    // Con un adicional
    suite.assertNumeric("Pollo + Blanco + Queso", 
        calcularPrecioSandwich("pollo", "blanco", true, false, false, false, false, false), 220);
    suite.assertNumeric("Carne + Negro + Tomate", 
        calcularPrecioSandwich("carne", "negro", false, true, false, false, false, false), 275);
    suite.assertNumeric("Veggie + S/Gluten + Lechuga", 
        calcularPrecioSandwich("veggie", "s/gluten", false, false, true, false, false, false), 185);
    
    // Con múltiples adicionales
    suite.assertNumeric("Pollo + Blanco + Todos los extras", 
        calcularPrecioSandwich("pollo", "blanco", true, true, true, true, true, true), 270);
    suite.assertNumeric("Carne + Negro + Todos los extras", 
        calcularPrecioSandwich("carne", "negro", true, true, true, true, true, true), 330);
    suite.assertNumeric("Veggie + S/Gluten + Todos los extras", 
        calcularPrecioSandwich("veggie", "s/gluten", true, true, true, true, true, true), 245);
    
    // Combinaciones específicas
    suite.assertNumeric("Pollo + Negro + Queso + Lechuga + Mayonesa", 
        calcularPrecioSandwich("pollo", "negro", true, false, true, false, true, false), 245);
    suite.assertNumeric("Carne + Blanco + Tomate + Cebolla + Mostaza", 
        calcularPrecioSandwich("carne", "blanco", false, true, false, true, false, true), 285);
    suite.assertNumeric("Veggie + Negro + Todos menos queso y carne", 
        calcularPrecioSandwich("veggie", "negro", false, true, true, true, true, true), 210);
    
    // Casos máximos y mínimos
    suite.assertNumeric("Mínimo: Veggie + Blanco", 
        calcularPrecioSandwich("veggie", "blanco", false, false, false, false, false, false), 150);
    suite.assertNumeric("Máximo: Carne + S/Gluten + Todos", 
        calcularPrecioSandwich("carne", "s/gluten", true, true, true, true, true, true), 345);
    suite.assertNumeric("Pollo + S/Gluten + Solo salsas", 
        calcularPrecioSandwich("pollo", "s/gluten", false, false, false, false, true, true), 235);
    suite.assertNumeric("Carne + Blanco + Solo vegetales", 
        calcularPrecioSandwich("carne", "blanco", false, true, true, true, false, false), 290);
    suite.assertNumeric("Veggie + Negro + Solo queso y salsas", 
        calcularPrecioSandwich("veggie", "negro", true, false, false, false, true, true), 190);
    suite.assertNumeric("Pollo + Blanco + Queso + Tomate + Lechuga", 
        calcularPrecioSandwich("pollo", "blanco", true, true, true, false, false, false), 245);
    suite.assertNumeric("Carne + Negro + Cebolla + Mostaza", 
        calcularPrecioSandwich("carne", "negro", false, false, false, true, false, true), 280);
    
    suite.report();
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       🚀 UNIT TESTING 🚀                         █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");


testSandwich();

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█              ✨ TODAS LAS PRUEBAS COMPLETADAS ✨                 █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");