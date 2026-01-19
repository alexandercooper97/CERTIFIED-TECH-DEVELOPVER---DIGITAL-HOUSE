# ============================================================================
# ⛽ EJERCICIO 2: Cálculo de Combustible
# ============================================================================

from test_framework import TestSuite, TestRunner

def total_a_pagar(vehiculo: str, litros_consumidos: float) -> float:
    precio_por_litro = 0
    
    if vehiculo == "coche":
        precio_por_litro = 86
    elif vehiculo == "moto":
        precio_por_litro = 70
    elif vehiculo == "autobús":
        precio_por_litro = 55
    
    total = precio_por_litro * litros_consumidos
    
    if 0 < litros_consumidos <= 25:
        total += 50
    elif litros_consumidos > 25:
        total += 25
    
    return total


# ============================================================================
# 🎯 BATERÍAS DE PRUEBAS
# ============================================================================

def test_control_acceso():
    suite = TestSuite("Calculo de Combustible")

    # Coche
    suite.assert_numeric("Coche 10L (0-25)", total_a_pagar("coche", 10), 910) # 86*10 + 50
    suite.assert_numeric("Coche 20L (0-25)", total_a_pagar("coche", 20), 1770) # 86*20 + 50
    suite.assert_numeric("Coche 25L (0-25)", total_a_pagar("coche", 25), 2200) # 86*25 + 50
    suite.assert_numeric("Coche 30L (>25)", total_a_pagar("coche", 30), 2605) # 86*30 + 25
    suite.assert_numeric("Coche 50L (>25)", total_a_pagar("coche", 50), 4325) # 86*50 + 25
    
    # Moto
    suite.assert_numeric("Moto 10L (0-25)", total_a_pagar("moto", 10), 750) # 70*10 + 50
    suite.assert_numeric("Moto 15L (0-25)", total_a_pagar("moto", 15), 1100) # 70*15 + 50
    suite.assert_numeric("Moto 25L (0-25)", total_a_pagar("moto", 25), 1800) # 70*25 + 50
    suite.assert_numeric("Moto 30L (>25)", total_a_pagar("moto", 30), 2125) # 70*30 + 25
    suite.assert_numeric("Moto 40L (>25)", total_a_pagar("moto", 40), 2825) # 70*40 + 25
    
    # Autobús
    suite.assert_numeric("Autobús 10L (0-25)", total_a_pagar("autobús", 10), 600) # 55*10 + 50
    suite.assert_numeric("Autobús 20L (0-25)", total_a_pagar("autobús", 20), 1150) # 55*20 + 50
    suite.assert_numeric("Autobús 25L (0-25)", total_a_pagar("autobús", 25), 1425) # 55*25 + 50
    suite.assert_numeric("Autobús 30L (>25)", total_a_pagar("autobús", 30), 1675) # 55*30 + 25
    suite.assert_numeric("Autobús 50L (>25)", total_a_pagar("autobús", 50), 2775) # 55*50 + 25
    
    # Casos límite
    suite.assert_numeric("Coche 0L", total_a_pagar("coche", 0), 0) # Sin cargo adicional
    suite.assert_numeric("Moto 1L (0-25)", total_a_pagar("moto", 1), 120) # 70*1 + 50
    suite.assert_numeric("Autobús 26L (>25)", total_a_pagar("autobús", 26), 1455) # 55*26 + 25
    suite.assert_numeric("Coche 100L (>25)", total_a_pagar("coche", 100), 8625) # 86*100 + 25
    suite.assert_numeric("Moto 5L (0-25)", total_a_pagar("moto", 5), 400) # 70*5 + 50

    suite.report()


def run_all_tests():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 SUITE COMPLETA DE TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    test_control_acceso()

def test_user():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 USER TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    vehiculo = input("Ingrese Vehiculo : ")
    libros = int(input("Ingrese Libros : "))
    print(total_a_pagar(vehiculo,libros))

if __name__=="__main__":
    test_user()
    run_all_tests()