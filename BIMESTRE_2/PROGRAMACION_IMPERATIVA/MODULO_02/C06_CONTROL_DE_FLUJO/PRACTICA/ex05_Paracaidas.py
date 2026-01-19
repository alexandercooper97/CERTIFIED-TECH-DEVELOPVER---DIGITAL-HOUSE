# ============================================================================
# 🪂 EJERCICIO 5: Abrir Paracaídas
# ============================================================================
from test_framework import TestSuite, TestRunner

def abrir_paracaidas(velocidad: float, altura: float) -> str:
    velocidad_valida = velocidad < 1000
    altura_valida = 2000 <= altura < 3000
    
    if velocidad_valida and altura_valida:
        return "✅ Abrir paracaídas AHORA"
    else:
        return "⚠️ NO abrir paracaídas - Condiciones no seguras"
    


# ============================================================================
# 🎯 BATERÍAS DE PRUEBAS
# ============================================================================

def test_paracaidas():
    suite = TestSuite("Abrir Paracaídas")
    
    # Condiciones perfectas
    suite.assert_equal("Velocidad 800, Altura 2500 - ABRIR", 
        abrir_paracaidas(800, 2500), "✅ Abrir paracaídas AHORA")
    suite.assert_equal("Velocidad 500, Altura 2000 - ABRIR", 
        abrir_paracaidas(500, 2000), "✅ Abrir paracaídas AHORA")
    suite.assert_equal("Velocidad 999, Altura 2999 - ABRIR", 
        abrir_paracaidas(999, 2999), "✅ Abrir paracaídas AHORA")
    suite.assert_equal("Velocidad 100, Altura 2200 - ABRIR", 
        abrir_paracaidas(100, 2200), "✅ Abrir paracaídas AHORA")
    
    # Velocidad muy alta
    suite.assert_equal("Velocidad 1000, Altura 2500 - NO ABRIR", 
        abrir_paracaidas(1000, 2500), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    suite.assert_equal("Velocidad 1500, Altura 2500 - NO ABRIR", 
        abrir_paracaidas(1500, 2500), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    suite.assert_equal("Velocidad 2000, Altura 2500 - NO ABRIR", 
        abrir_paracaidas(2000, 2500), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    
    # Altura muy baja
    suite.assert_equal("Velocidad 500, Altura 1999 - NO ABRIR", 
        abrir_paracaidas(500, 1999), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    suite.assert_equal("Velocidad 500, Altura 1000 - NO ABRIR", 
        abrir_paracaidas(500, 1000), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    suite.assert_equal("Velocidad 500, Altura 500 - NO ABRIR", 
        abrir_paracaidas(500, 500), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    
    # Altura muy alta
    suite.assert_equal("Velocidad 500, Altura 3000 - NO ABRIR", 
        abrir_paracaidas(500, 3000), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    suite.assert_equal("Velocidad 500, Altura 3500 - NO ABRIR", 
        abrir_paracaidas(500, 3500), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    suite.assert_equal("Velocidad 500, Altura 5000 - NO ABRIR", 
        abrir_paracaidas(500, 5000), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    
    # Ambas condiciones malas
    suite.assert_equal("Velocidad 1200, Altura 1500 - NO ABRIR", 
        abrir_paracaidas(1200, 1500), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    suite.assert_equal("Velocidad 1500, Altura 3500 - NO ABRIR", 
        abrir_paracaidas(1500, 3500), "⚠️ NO abrir paracaídas - Condiciones no seguras")
    
    # Casos límite exactos
    suite.assert_equal("Velocidad 999, Altura 2000 - ABRIR (límites)", 
        abrir_paracaidas(999, 2000), "✅ Abrir paracaídas AHORA")
    suite.assert_equal("Velocidad 999, Altura 2999 - ABRIR (límites)", 
        abrir_paracaidas(999, 2999), "✅ Abrir paracaídas AHORA")
    suite.assert_equal("Velocidad 0, Altura 2500 - ABRIR", 
        abrir_paracaidas(0, 2500), "✅ Abrir paracaídas AHORA")
    suite.assert_equal("Velocidad 700, Altura 2750 - ABRIR", 
        abrir_paracaidas(700, 2750), "✅ Abrir paracaídas AHORA")
    suite.assert_equal("Velocidad 300, Altura 2100 - ABRIR", 
        abrir_paracaidas(300, 2100), "✅ Abrir paracaídas AHORA")
    
    suite.report()

def run_all_tests():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 SUITE COMPLETA DE TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    test_paracaidas()

def test_user():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 USER TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    velocidad = int(input("Ingrese Velocidad : "))
    altura = int(input("Ingrese Altura : "))
    print(abrir_paracaidas(velocidad,altura))

if __name__=="__main__":
    test_user()
    run_all_tests()