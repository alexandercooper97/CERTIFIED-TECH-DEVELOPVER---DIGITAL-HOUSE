//#ifndef TEST_FRAMEWORK_H
#define TEST_FRAMEWORK_H

#include <iostream>
#include <string>
#include <vector>
#include <functional>
#include <cmath>
#include <iomanip>
using namespace std;
/**
 * @brief Resultado de una prueba individual
 */

struct TestResult {
    string name;
    bool passed;
    string actual;
    string expected;
    
    TestResult(string n, bool p, string a, string e) 
        : name(n), passed(p), actual(a), expected(e) {}
};

/**
 * @brief Suite de pruebas profesional
 * 
 * Ejemplo de uso:
 *   TestSuite suite("Mi Suite");
 *   suite.assertEqual("Test 1", resultado, esperado);
 *   suite.report();
 */
class TestSuite {
private:
    string name;
    int passed = 0;
    int failed = 0;
    int total = 0;
    vector<TestResult> results;

public:
    /**
     * @brief Constructor
     * @param testName Nombre de la suite de pruebas
     */
    TestSuite(string testName) : name(testName) {}
    
    /**
     * @brief Verifica que dos strings sean iguales
     * @param testName Nombre del test
     * @param actual Valor obtenido
     * @param expected Valor esperado
     */
    void assertEqual(string testName, string actual, string expected) {
        total++;
        bool testPassed = (actual == expected);
        
        if (testPassed) {
            passed++;
        } else {
            failed++;
        }
        
        results.push_back(TestResult(testName, testPassed, actual, expected));
    }
    
    /**
     * @brief Verifica que dos números sean aproximadamente iguales
     * @param testName Nombre del test
     * @param actual Valor numérico obtenido
     * @param expected Valor numérico esperado
     * @param tolerance Tolerancia aceptable (default: 0.1)
     */
    void assertNumeric(string testName, double actual, double expected, double tolerance = 0.1) {
        total++;
        bool testPassed = abs(actual - expected) < tolerance;
        
        if (testPassed) {
            passed++;
        } else {
            failed++;
        }
        
        results.push_back(TestResult(testName, testPassed, to_string(actual), to_string(expected)));
    }
    
    /**
     * @brief Verifica que una condición sea verdadera
     */
    void assertTrue(string testName, bool condition) {
        assertEqual(testName, condition ? "true" : "false", "true");
    }
    
    /**
     * @brief Verifica que una condición sea falsa
     */
    void assertFalse(string testName, bool condition) {
        assertEqual(testName, condition ? "true" : "false", "false");
    }
    
    /**
     * @brief Verifica que un string contenga un substring
     */
    void assertContains(string testName, string substring, string text) {
        bool contains = text.find(substring) != string::npos;
        assertTrue(testName, contains);
    }
    
    /**
     * @brief Genera y muestra un reporte detallado
     */
    void report() {
        cout << "\n" << string(70, '=') << endl;
        cout << "🧪 TEST SUITE: " << name << endl;
        cout << string(70, '=') << endl;
        
        for (const auto& result : results) {
            string icon = result.passed ? "✅" : "❌";
            string status = result.passed ? "PASS" : "FAIL";
            cout << icon << " " << status << " | " << result.name << endl;
            if (!result.passed) {
                cout << "   Expected: " << result.expected << endl;
                cout << "   Got:      " << result.actual << endl;
            }
        }
        
        cout << string(70, '=') << endl;
        double percentage = (total > 0) ? (passed * 100.0 / total) : 0;
        string statusIcon = (failed == 0) ? "🏆" : "⚠️";
        cout << statusIcon << " RESULTADO: " << passed << "/" << total 
             << " PASSED (" << fixed << setprecision(1) << percentage << "%)" << endl;
        cout << string(70, '=') << "\n" << endl;
    }
    
    // Getters
    int getPassed() const { return passed; }
    int getFailed() const { return failed; }
    int getTotal() const { return total; }
    string getName() const { return name; }
};

/**
 * @brief Ejecutor de múltiples suites de pruebas
 */
class TestRunner {
private:
    string title;
    vector<TestSuite*> suites;

public:
    TestRunner(string t) : title(t) {}
    
    void addSuite(TestSuite* suite) {
        suites.push_back(suite);
    }
    
    void runAll() {
        cout << "\n" << string(70, '█') << endl;
        cout << "█" << string(68, ' ') << "█" << endl;
        cout << "█  " << title << string(66 - title.length(), ' ') << "  █" << endl;
        cout << "█" << string(68, ' ') << "█" << endl;
        cout << string(70, '█') << "\n" << endl;
        
        int totalTests = 0, totalPassed = 0, totalFailed = 0;
        
        for (auto suite : suites) {
            totalTests += suite->getTotal();
            totalPassed += suite->getPassed();
            totalFailed += suite->getFailed();
        }
        
        cout << "\n" << string(70, '█') << endl;
        cout << "█  ✨ REPORTE GLOBAL ✨" << string(46, ' ') << "█" << endl;
        cout << string(70, '█') << endl;
        cout << "\n📊 Total de Pruebas: " << totalTests << endl;
        cout << "✅ Exitosas: " << totalPassed << endl;
        cout << "❌ Fallidas: " << totalFailed << endl;
        double percentage = (totalTests > 0) ? (totalPassed * 100.0 / totalTests) : 0;
        cout << "📈 Porcentaje: " << fixed << setprecision(1) << percentage << "%" << endl;
        cout << "\n" << string(70, '█') << "\n" << endl;
    }
};