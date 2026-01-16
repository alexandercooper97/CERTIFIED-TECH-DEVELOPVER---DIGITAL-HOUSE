# ============================================================================
# 🧪 FRAMEWORK DE TESTING PROFESIONAL
# ============================================================================

## 🐍 PYTHON - Framework Modular

### Archivo: `test_framework.py`
"""
🧪 Framework de Testing Profesional
Autor: Alexander Cooper
Versión: 1.0.0
"""

from typing import Callable, Any, List, Dict
from dataclasses import dataclass

@dataclass
class TestResult:
    """Resultado de una prueba individual"""
    name: str
    passed: bool
    actual: Any
    expected: Any

class TestSuite:
    """
    Suite de pruebas profesional con reportes detallados
    
    Ejemplo de uso:
        suite = TestSuite("Mi Suite de Pruebas")
        suite.assert_equal("Test 1", resultado, esperado)
        suite.report()
    """
    
    def __init__(self, name: str):
        self.name = name
        self.passed = 0
        self.failed = 0
        self.total = 0
        self.results: List[TestResult] = []
    
    def assert_equal(self, test_name: str, actual: Any, expected: Any, 
                    comparator: Callable[[Any, Any], bool] = lambda a, e: a == e) -> None:
        """
        Verifica que dos valores sean iguales
        
        Args:
            test_name: Nombre descriptivo del test
            actual: Valor obtenido
            expected: Valor esperado
            comparator: Función de comparación personalizada
        """
        self.total += 1
        passed = comparator(actual, expected)
        
        if passed:
            self.passed += 1
        else:
            self.failed += 1
        
        self.results.append(TestResult(test_name, passed, actual, expected))
    
    def assert_numeric(self, test_name: str, actual: float, expected: float, 
                      tolerance: float = 0.1) -> None:
        """
        Verifica que dos números sean aproximadamente iguales
        
        Args:
            test_name: Nombre descriptivo del test
            actual: Valor numérico obtenido
            expected: Valor numérico esperado
            tolerance: Tolerancia aceptable (default: 0.1)
        """
        self.assert_equal(
            test_name, 
            actual, 
            expected, 
            lambda a, e: abs(a - e) < tolerance
        )
    
    def assert_true(self, test_name: str, condition: bool) -> None:
        """Verifica que una condición sea verdadera"""
        self.assert_equal(test_name, condition, True)
    
    def assert_false(self, test_name: str, condition: bool) -> None:
        """Verifica que una condición sea falsa"""
        self.assert_equal(test_name, condition, False)
    
    def assert_contains(self, test_name: str, substring: str, text: str) -> None:
        """Verifica que un texto contenga un substring"""
        self.assert_equal(
            test_name,
            substring in text,
            True,
            lambda a, e: a == e
        )
    
    def report(self) -> None:
        """Genera y muestra un reporte detallado de los resultados"""
        print("\n" + "=" * 70)
        print(f"🧪 TEST SUITE: {self.name}")
        print("=" * 70)
        
        for result in self.results:
            icon = "\n✅" if result.passed else "\n❌"
            status = "PASS" if result.passed else "FAIL"
            print(f"{icon} {status} | {result.name}")
            if not result.passed:
                print(f"   Expected: {result.expected}")
                print(f"   Got:      {result.actual}")
            else: 
                print(f"   Expected: {result.expected}")
                print(f"   Got:      {result.actual}")

        print("=" * 70)
        percentage = (self.passed / self.total * 100) if self.total > 0 else 0
        status_icon = "🏆" if self.failed == 0 else "⚠️"
        print(f"{status_icon} RESULTADO: {self.passed}/{self.total} PASSED ({percentage:.1f}%)")
        print("=" * 70 + "\n")
    
    def get_summary(self) -> Dict[str, Any]:
        """Retorna un resumen de los resultados"""
        return {
            'name': self.name,
            'total': self.total,
            'passed': self.passed,
            'failed': self.failed,
            'percentage': (self.passed / self.total * 100) if self.total > 0 else 0
        }


class TestRunner:
    """Ejecutor de múltiples suites de pruebas"""
    
    def __init__(self, title: str = "Suite de Pruebas"):
        self.title = title
        self.suites: List[TestSuite] = []
    
    def add_suite(self, suite: TestSuite) -> None:
        """Agrega una suite al runner"""
        self.suites.append(suite)
    
    def run_all(self) -> None:
        """Ejecuta todas las suites y genera un reporte global"""
        print("\n" + "█" * 70)
        print("█" + " " * 68 + "█")
        print(f"█  {self.title.center(66)}  █")
        print("█" + " " * 68 + "█")
        print("█" * 70 + "\n")
        
        total_tests = sum(suite.total for suite in self.suites)
        total_passed = sum(suite.passed for suite in self.suites)
        total_failed = sum(suite.failed for suite in self.suites)
        
        print("\n" + "█" * 70)
        print("█" + " " * 68 + "█")
        print("█  ✨ REPORTE GLOBAL ✨".center(70) + "█")
        print("█" + " " * 68 + "█")
        print("█" * 70)
        print(f"\n📊 Total de Pruebas: {total_tests}")
        print(f"✅ Exitosas: {total_passed}")
        print(f"❌ Fallidas: {total_failed}")
        percentage = (total_passed / total_tests * 100) if total_tests > 0 else 0
        print(f"📈 Porcentaje: {percentage:.1f}%")
        print("\n" + "█" * 70 + "\n")
