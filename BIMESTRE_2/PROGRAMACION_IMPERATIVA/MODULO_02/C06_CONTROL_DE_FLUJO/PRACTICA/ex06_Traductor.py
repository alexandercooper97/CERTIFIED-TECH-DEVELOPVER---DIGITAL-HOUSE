# ============================================================================
# 🌍 EJERCICIO 6: Traductor (Match-Case / Switch)
# ============================================================================
from test_framework import TestSuite, TestRunner

def traducir_palabra(palabra: str) -> str:
    match palabra.lower():
        case "casa":
            return "house"
        case "perro":
            return "dog"
        case "pelota":
            return "ball"
        case "árbol":
            return "tree"
        case "genio":
            return "genius"
        case _:
            return "La palabra ingresada es incorrecta"


# ============================================================================
# 🎯 BATERÍAS DE PRUEBAS
# ============================================================================

def test_traductor():
    suite = TestSuite("Traductor Condicional")
    
    # Palabras válidas
    suite.assert_equal("casa", traducir_palabra("casa"), "house")
    suite.assert_equal("perro", traducir_palabra("perro"), "dog")
    suite.assert_equal("pelota", traducir_palabra("pelota"), "ball")
    suite.assert_equal("árbol", traducir_palabra("árbol"), "tree")
    suite.assert_equal("genio", traducir_palabra("genio"), "genius")
    
    # Mayúsculas/minúsculas
    suite.assert_equal("CASA (mayúsculas)", traducir_palabra("CASA"), "house")
    suite.assert_equal("Perro (capitalizada)", traducir_palabra("Perro"), "dog")
    suite.assert_equal("PELOTA (mayúsculas)", traducir_palabra("PELOTA"), "ball")
    suite.assert_equal("Árbol (capitalizada)", traducir_palabra("Árbol"), "tree")
    suite.assert_equal("GENIO (mayúsculas)", traducir_palabra("GENIO"), "genius")
    
    # Palabras inválidas
    suite.assert_equal("gato (inválida)", traducir_palabra("gato"), "La palabra ingresada es incorrecta")
    suite.assert_equal("mesa (inválida)", traducir_palabra("mesa"), "La palabra ingresada es incorrecta")
    suite.assert_equal("silla (inválida)", traducir_palabra("silla"), "La palabra ingresada es incorrecta")
    suite.assert_equal("ventana (inválida)", traducir_palabra("ventana"), "La palabra ingresada es incorrecta")
    suite.assert_equal("puerta (inválida)", traducir_palabra("puerta"), "La palabra ingresada es incorrecta")
    suite.assert_equal("computadora (inválida)", traducir_palabra("computadora"), "La palabra ingresada es incorrecta")
    suite.assert_equal("libro (inválida)", traducir_palabra("libro"), "La palabra ingresada es incorrecta")
    suite.assert_equal(" (vacía)", traducir_palabra(""), "La palabra ingresada es incorrecta")
    suite.assert_equal("123 (números)", traducir_palabra("123"), "La palabra ingresada es incorrecta")
    suite.assert_equal("casa perro (múltiples)", traducir_palabra("casa perro"), "La palabra ingresada es incorrecta")
    
    suite.report()

def run_all_tests():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 SUITE COMPLETA DE TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    test_traductor()

def test_user():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 USER TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    palabra = input("Ingrese Palabra : ")
    print(traducir_palabra(palabra))

if __name__=="__main__":
    test_user()
    run_all_tests()