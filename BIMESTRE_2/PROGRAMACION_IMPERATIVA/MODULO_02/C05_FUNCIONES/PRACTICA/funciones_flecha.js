/**
 * SISTEMA DE EVALUACIÓN AUTOMATIZADA - MESA DE TRABAJO
 * Basado en el estándar de Computer Science (Princeton/Coursera)
 */

// --- 1. DEFINICIÓN DE FUNCIONES (Tu lógica) ---

const funciones = {
    pulgadasACm: (p) => {
        if (typeof p !== 'number' || p < 0) return null;
        return p * 2.54;}, // Ejercicio 01
    
    convertirUrl: (nombre) => {
        if (!nombre || typeof nombre !== 'string') return "Invalid URL";
        return `http://www.${nombre}.com`;
    }, // Ejercicio 02

    admiracion : (frase) => {
        if (!frase || typeof frase !== 'string') return "Invalid Text";
        return `${frase}!!!`;
    }, // Ejercicio 03
    
    edadPerro: (anios) => {
        if (anios < 0) return 0;
        return anios * 7;
    }, //Ejercicio 04

    valorHora: (sueldo) => {
        if (sueldo < 0) return 0;
        return sueldo / 40;
    }, // Ejercicio 05
    
    calculadorIMC: (peso, altura) => {
        if (typeof peso !== 'number' || typeof altura !== 'number' || altura <= 0) return 0;
        return peso / (altura * altura); // Ejercicio 06
    },

    mayuscula : (frase) => frase.toUpperCase(), // Ejercicio 07

    tipoDato : (dato) => typeof dato, // Ejercicio 08

    circunferencia : (radio) => 2 * Math.PI * radio, // Ejercicio 09


    // Micro Desafíos 
    test1: (x, y) => y - x,
    test2: (x, y) => x * 2
};

// --- 2. MOTOR DE PRUEBAS (The Grader) ---

function runGrader() {
    console.log("==========================================");
    console.log("    🚀 NPM TEST RUNNER: CS EVALUATOR      ");
    console.log("==========================================\n");

    let totalTests = 0;
    let passedTests = 0;

    function check(description, actual, expected) {
        totalTests++;
        // Usamos un pequeño margen de error para números flotantes (precisión)
        const isMatch = typeof actual === 'number' 
            ? Math.abs(actual - expected) < 0.001 
            : actual === expected;

        if (isMatch) {
            passedTests++;
            console.log(`✅ [PASS] ${description}`);
        } else {
            console.log(`❌ [FAIL] ${description}`);
            console.log(`   > Esperado: ${expected}`);
            console.log(`   > Obtenido: ${actual}`);
        }
    }

    // --- 3. CASOS DE PRUEBA (Test Cases) ---

    // Pruebas de Micro Desafíos
    check("[Test 01] Micro Desafío 1: test1(10, 40) debe dar 30", funciones.test1(10, 40), 30);
    check("[Test 02] Micro Desafío 2: test2(10) debe dar 20", funciones.test2(10), 20);

    // Pruebas de Funciones Simples 
    check("[Test 03] Conversión: 10 pulgadas a cm", funciones.pulgadasACm(10), 25.4);
    check("[Test 04] URL       : 'google' -> http://www.google.com", funciones.convertirUrl("google"), "http://www.google.com");
    check("[Test 05] Admiracion: 'alexander -> alexander!!!", funciones.admiracion("alexander"), "alexander!!!");
    check("[Test 05] Edad Perro: 7 años humanos -> 49 años perro", funciones.edadPerro(7), 49);
    check("[Test 07] Hora Job  : 4000 -> 100", funciones.valorHora(4000), 100);
    check("[Test 08] Calc. IMC : (80, 1.80) -> 24.691358024691358", funciones.calculadorIMC(80, 1.80), 24.691358024691358);
    
    // Pruebas de Dificultad Extra 
    check("[Test 09] Uppercase : 'javascript' -> 'JAVASCRIPT'", funciones.mayuscula("javascript"), "JAVASCRIPT");
    check("[Test 10] Tipo Dato : 100 -> number", funciones.tipoDato(100), "number");
    check("[Test 07] Circunferencia: Radio 1 -> 6.283...", funciones.circunferencia(1), 2 * Math.PI);

    // --- 4. REPORTE FINAL ---
    console.log("\n==========================================");
    console.log(`RESULTADO FINAL: ${passedTests}/${totalTests} tests pasados.`);
    const grade = (passedTests / totalTests) * 100;
    console.log(`CALIFICACIÓN: ${grade.toFixed(2)}/100`);
    console.log("==========================================");

    if (grade === 100) {
        console.log("PASSED: All criteria met. High distinction.");
    } else {
        console.log("FAILED: Check the logs above for specific mismatches.");
    }
}

// Ejecutar el calificador
runGrader();