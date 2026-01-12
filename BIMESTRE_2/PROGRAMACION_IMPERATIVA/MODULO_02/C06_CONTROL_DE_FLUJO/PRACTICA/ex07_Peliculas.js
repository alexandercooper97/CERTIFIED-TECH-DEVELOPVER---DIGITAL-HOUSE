const prompt = require("prompt-sync")({ sigint: true });

// ============================================================================
// 🎬 EJERCICIO 7: Valoración de Películas (Switch)
// ============================================================================

function valorarPelicula(valoracion) {
    let mensaje = "";
    
    switch(valoracion.toLowerCase()) {
        case "muy mala":
            mensaje = "Calificaste la película como Muy Mala. Lo lamentamos mucho.";
            break;
        case "mala":
            mensaje = "Calificaste la película como Mala. Lo lamentamos.";
            break;
        case "mediocre":
            mensaje = "Calificaste la película como Mediocre. Esperamos mejorar.";
            break;
        case "buena":
            mensaje = "Calificaste la película como Buena. ¡Nos alegra que te haya gustado!";
            break;
        case "muy buena":
            mensaje = "Calificaste la película como Muy Buena. ¡Nos alegramos mucho!";
            break;
        default:
            mensaje = "Ingresaste un valor inválido";
            break;
    }
    
    if (mensaje !== "Ingresaste un valor inválido") {
        mensaje += "\n¡Gracias por tu visita!";
    }
    
    return mensaje;
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       👨‍💻 USER TESTING 👩‍💻                     █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

let valoracion = prompt("Ingrese Valoracion(muy mala/ mala/ mediocre/ buena/ muy buena) : ");
console.log(valorarPelicula(valoracion));

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
function testValoracionPelicula() {
    const suite = new TestSuite("Valoración de Películas");
    
    // Valoraciones válidas
    suite.assert("Muy mala", 
        valorarPelicula("muy mala"), 
        "Calificaste la película como Muy Mala. Lo lamentamos mucho.\n¡Gracias por tu visita!");
    suite.assert("Mala", 
        valorarPelicula("mala"), 
        "Calificaste la película como Mala. Lo lamentamos.\n¡Gracias por tu visita!");
    suite.assert("Mediocre", 
        valorarPelicula("mediocre"), 
        "Calificaste la película como Mediocre. Esperamos mejorar.\n¡Gracias por tu visita!");
    suite.assert("Buena", 
        valorarPelicula("buena"), 
        "Calificaste la película como Buena. ¡Nos alegra que te haya gustado!\n¡Gracias por tu visita!");
    suite.assert("Muy buena", 
        valorarPelicula("muy buena"), 
        "Calificaste la película como Muy Buena. ¡Nos alegramos mucho!\n¡Gracias por tu visita!");
    
    // Mayúsculas/minúsculas
    suite.assert("MUY MALA (mayúsculas)", 
        valorarPelicula("MUY MALA"), 
        "Calificaste la película como Muy Mala. Lo lamentamos mucho.\n¡Gracias por tu visita!");
    suite.assert("Buena (capitalizada)", 
        valorarPelicula("Buena"), 
        "Calificaste la película como Buena. ¡Nos alegra que te haya gustado!\n¡Gracias por tu visita!");
    suite.assert("MEDIOCRE (mayúsculas)", 
        valorarPelicula("MEDIOCRE"), 
        "Calificaste la película como Mediocre. Esperamos mejorar.\n¡Gracias por tu visita!");
    
    // Valores inválidos
    suite.assert("Excelente (inválida)", 
        valorarPelicula("excelente"), 
        "Ingresaste un valor inválido");
    suite.assert("Regular (inválida)", 
        valorarPelicula("regular"), 
        "Ingresaste un valor inválido");
    suite.assert("Pésima (inválida)", 
        valorarPelicula("pésima"), 
        "Ingresaste un valor inválido");
    suite.assert("5 estrellas (inválida)", 
        valorarPelicula("5 estrellas"), 
        "Ingresaste un valor inválido");
    suite.assert("10/10 (inválida)", 
        valorarPelicula("10/10"), 
        "Ingresaste un valor inválido");
    suite.assert(" (vacía)", 
        valorarPelicula(""), 
        "Ingresaste un valor inválido");
    suite.assert("horrible (inválida)", 
        valorarPelicula("horrible"), 
        "Ingresaste un valor inválido");
    suite.assert("genial (inválida)", 
        valorarPelicula("genial"), 
        "Ingresaste un valor inválido");
    suite.assert("fantástica (inválida)", 
        valorarPelicula("fantástica"), 
        "Ingresaste un valor inválido");
    suite.assert("okei (inválida)", 
        valorarPelicula("okei"), 
        "Ingresaste un valor inválido");
    suite.assert("así así (inválida)", 
        valorarPelicula("así así"), 
        "Ingresaste un valor inválido");
    
    suite.report();
}

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                       🚀 UNIT TESTING 🚀                         █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

testValoracionPelicula();

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█              ✨ TODAS LAS PRUEBAS COMPLETADAS ✨                 █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");
