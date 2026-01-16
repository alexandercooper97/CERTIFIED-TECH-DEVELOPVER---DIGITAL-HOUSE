# ============================================================================
# 🎯 EJERCICIO 1: Control de Acceso a Discoteca
# ============================================================================
from test_framework import TestSuite, TestRunner

def control_acceso_discoteca(edad: int) -> str:
    if edad < 0:
        return "Error, edad inválida. Por favor ingrese un número válido."
    
    es_impar = edad % 2 != 0
    mensaje_impar = " ¿Sabías que tu edad es impar?" if es_impar else ""
    
    if edad < 18:
        return "No puede pasar al bar." + mensaje_impar
    elif edad < 21:
        return "Puede pasar al bar, pero no puede tomar alcohol." + mensaje_impar
    elif edad == 21:
        return "Puede pasar al bar y tomar alcohol. ¡Felicitaciones por haber llegado a la mayoría de edad!" + mensaje_impar
    else:
        return "Puede pasar al bar y tomar alcohol." + mensaje_impar


# ============================================================================
# 🎯 BATERÍAS DE PRUEBAS
# ============================================================================

def test_control_acceso():
    suite = TestSuite("Control de Acceso a Discoteca")
    
    # Casos de edad negativa
    suite.assert_equal("Edad negativa -1", 
        control_acceso_discoteca(-1), 
        "Error, edad inválida. Por favor ingrese un número válido.")
    suite.assert_equal("Edad negativa -100", 
        control_acceso_discoteca(-100), 
        "Error, edad inválida. Por favor ingrese un número válido.")
    
    # Menores de edad
    suite.assert_equal("Edad 0", 
        control_acceso_discoteca(0), 
        "No puede pasar al bar.")
    suite.assert_equal("Edad 17 (impar)", 
        control_acceso_discoteca(17), 
        "No puede pasar al bar. ¿Sabías que tu edad es impar?")
    suite.assert_equal("Edad 16 (par)", 
        control_acceso_discoteca(16), 
        "No puede pasar al bar.")
    suite.assert_equal("Edad 10 (par)", 
        control_acceso_discoteca(10), 
        "No puede pasar al bar.")
    
    # Entre 18 y 20 años
    suite.assert_equal("Edad 18 (par)", 
        control_acceso_discoteca(18), 
        "Puede pasar al bar, pero no puede tomar alcohol.")
    suite.assert_equal("Edad 19 (impar)", 
        control_acceso_discoteca(19), 
        "Puede pasar al bar, pero no puede tomar alcohol. ¿Sabías que tu edad es impar?")
    suite.assert_equal("Edad 20 (par)", 
        control_acceso_discoteca(20), 
        "Puede pasar al bar, pero no puede tomar alcohol.")
    
    # Exactamente 21 años
    suite.assert_equal("Edad 21 (impar) - Mayoría de edad", 
        control_acceso_discoteca(21), 
        "Puede pasar al bar y tomar alcohol. ¡Felicitaciones por haber llegado a la mayoría de edad! ¿Sabías que tu edad es impar?")
    
    # Mayores de 21
    suite.assert_equal("Edad 22 (par)", 
        control_acceso_discoteca(22), 
        "Puede pasar al bar y tomar alcohol.")
    suite.assert_equal("Edad 25 (impar)", 
        control_acceso_discoteca(25), 
        "Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?")
    suite.assert_equal("Edad 30 (par)", 
        control_acceso_discoteca(30), 
        "Puede pasar al bar y tomar alcohol.")
    suite.assert_equal("Edad 45 (impar)", 
        control_acceso_discoteca(45), 
        "Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?")
    suite.assert_equal("Edad 50 (par)", 
        control_acceso_discoteca(50), 
        "Puede pasar al bar y tomar alcohol.")
    suite.assert_equal("Edad 65 (impar)", 
        control_acceso_discoteca(65), 
        "Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?")
    
    # Casos extremos
    suite.assert_equal("Edad 100 (par)", 
        control_acceso_discoteca(100), 
        "Puede pasar al bar y tomar alcohol.")
    suite.assert_equal("Edad 99 (impar)", 
        control_acceso_discoteca(99), 
        "Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?")
    suite.assert_equal("Edad 1 (impar)", 
        control_acceso_discoteca(1), 
        "No puede pasar al bar. ¿Sabías que tu edad es impar?")
    suite.assert_equal("Edad 2 (par)", 
        control_acceso_discoteca(2), 
        "No puede pasar al bar.")
    
    suite.report()

def run_all_tests():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 SUITE COMPLETA DE TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    test_control_acceso()

if __name__=="__main__":
    run_all_tests()