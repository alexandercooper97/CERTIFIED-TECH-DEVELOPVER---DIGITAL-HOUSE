# ============================================================================
# 🎲 EJERCICIO 4: Número Secreto
# ============================================================================
from test_framework import TestSuite, TestRunner
import random

def adivinar_numero_secreto(numero_ingresado: int) -> str:
    numero_secreto = random.randint(1, 10)
    
    if numero_ingresado == numero_secreto:
        return f"¡Felicitaciones! Adivinaste el número secreto: {numero_secreto}"
    else:
        return f"No acertaste. Tu número: {numero_ingresado}, Número secreto: {numero_secreto}. ¡Sigue intentando!"
    


# ============================================================================
# 🎯 BATERÍAS DE PRUEBAS
# ============================================================================

def test_numero_secreto():
    suite = TestSuite("Número Secreto (Adivinanza)")
    
    print("⚠️  NOTA: Este ejercicio usa random, por lo que los resultados varían.")
    print("    Estas pruebas verifican el formato correcto de las respuestas.\n")
    
    # Test con números del 1 al 10 (rango válido)
    for i in range(1, 11):
        resultado = adivinar_numero_secreto(i)
        es_acierto = "¡Felicitaciones!" in resultado
        es_fallo = "No acertaste" in resultado
        tiene_numero_ingresado = f"Tu número: {i}" in resultado
        tiene_numero_secreto = "Número secreto:" in resultado
        
        formato_correcto = es_acierto or (es_fallo and tiene_numero_ingresado and tiene_numero_secreto)
        
        suite.assert_equal(f"Número {i} - Formato válido", formato_correcto, True)
    
    # Test con números fuera de rango
    test_cases = [0, 11, -1, 15, 20, 100, -5, 25, 50, 999]
    for num in test_cases:
        resultado = adivinar_numero_secreto(num)
        tiene_respuesta = len(resultado) > 0
        es_acierto = "¡Felicitaciones!" in resultado
        es_fallo = "No acertaste" in resultado
        
        suite.assert_equal(f"Número {num} - Tiene respuesta válida", 
            tiene_respuesta and (es_acierto or es_fallo), True)
    
    suite.report()

def run_all_tests():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 SUITE COMPLETA DE TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    test_numero_secreto()

def test_user():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 USER TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")


    numero = int(input("Ingrese Numero: "))
    print(adivinar_numero_secreto(numero))

if __name__=="__main__":
    test_user()
    run_all_tests()