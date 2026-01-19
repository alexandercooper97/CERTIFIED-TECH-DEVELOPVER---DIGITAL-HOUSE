# ============================================================================
# 🥪 EJERCICIO 3: Local de Sándwiches
# ============================================================================
from test_framework import TestSuite, TestRunner

def calcular_precio_sandwich(base: str, pan: str, queso: bool, tomate: bool, 
                            lechuga: bool, cebolla: bool, mayonesa: bool, 
                            mostaza: bool) -> float:
    total = 0
    
    # Precio base del sándwich
    if base == "pollo":
        total += 150
    elif base == "carne":
        total += 200
    elif base == "veggie":
        total += 100
    
    # Precio del pan
    if pan == "blanco":
        total += 50
    elif pan == "negro":
        total += 60
    elif pan == "s/gluten":
        total += 75
    
    # Adicionales
    if queso: total += 20
    if tomate: total += 15
    if lechuga: total += 10
    if cebolla: total += 15
    if mayonesa: total += 5
    if mostaza: total += 5
    
    return total



# ============================================================================
# 🎯 BATERÍAS DE PRUEBAS
# ============================================================================

def test_control_acceso():
    suite = TestSuite("Local de Sándwiches")
    
    # Solo base y pan
    suite.assert_numeric("Pollo + Blanco, sin extras", 
        calcular_precio_sandwich("pollo", "blanco", False, False, False, False, False, False), 200)
    suite.assert_numeric("Carne + Negro, sin extras", 
        calcular_precio_sandwich("carne", "negro", False, False, False, False, False, False), 260)
    suite.assert_numeric("Veggie + S/Gluten, sin extras", 
        calcular_precio_sandwich("veggie", "s/gluten", False, False, False, False, False, False), 175)
    
    # Con un adicional
    suite.assert_numeric("Pollo + Blanco + Queso", 
        calcular_precio_sandwich("pollo", "blanco", True, False, False, False, False, False), 220)
    suite.assert_numeric("Carne + Negro + Tomate", 
        calcular_precio_sandwich("carne", "negro", False, True, False, False, False, False), 275)
    suite.assert_numeric("Veggie + S/Gluten + Lechuga", 
        calcular_precio_sandwich("veggie", "s/gluten", False, False, True, False, False, False), 185)
    
    # Con múltiples adicionales
    suite.assert_numeric("Pollo + Blanco + Todos los extras", 
        calcular_precio_sandwich("pollo", "blanco", True, True, True, True, True, True), 270)
    suite.assert_numeric("Carne + Negro + Todos los extras", 
        calcular_precio_sandwich("carne", "negro", True, True, True, True, True, True), 330)
    suite.assert_numeric("Veggie + S/Gluten + Todos los extras", 
        calcular_precio_sandwich("veggie", "s/gluten", True, True, True, True, True, True), 245)
    
    # Combinaciones específicas
    suite.assert_numeric("Pollo + Negro + Queso + Lechuga + Mayonesa", 
        calcular_precio_sandwich("pollo", "negro", True, False, True, False, True, False), 245)
    suite.assert_numeric("Carne + Blanco + Tomate + Cebolla + Mostaza", 
        calcular_precio_sandwich("carne", "blanco", False, True, False, True, False, True), 285)
    suite.assert_numeric("Veggie + Negro + Todos menos queso y carne", 
        calcular_precio_sandwich("veggie", "negro", False, True, True, True, True, True), 210)
    
    # Casos máximos y mínimos
    suite.assert_numeric("Mínimo: Veggie + Blanco", 
        calcular_precio_sandwich("veggie", "blanco", False, False, False, False, False, False), 150)
    suite.assert_numeric("Máximo: Carne + S/Gluten + Todos", 
        calcular_precio_sandwich("carne", "s/gluten", True, True, True, True, True, True), 345)
    suite.assert_numeric("Pollo + S/Gluten + Solo salsas", 
        calcular_precio_sandwich("pollo", "s/gluten", False, False, False, False, True, True), 235)
    suite.assert_numeric("Carne + Blanco + Solo vegetales", 
        calcular_precio_sandwich("carne", "blanco", False, True, True, True, False, False), 290)
    suite.assert_numeric("Veggie + Negro + Solo queso y salsas", 
        calcular_precio_sandwich("veggie", "negro", True, False, False, False, True, True), 190)
    suite.assert_numeric("Pollo + Blanco + Queso + Tomate + Lechuga", 
        calcular_precio_sandwich("pollo", "blanco", True, True, True, False, False, False), 245)
    suite.assert_numeric("Carne + Negro + Cebolla + Mostaza", 
        calcular_precio_sandwich("carne", "negro", False, False, False, True, False, True), 280)
    
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

    base = input("Ingrese Pedido Base : ")
    pan = input("Ingrese Tipo de Pan : ")
    print(calcular_precio_sandwich(base,pan,False, False, False, False, False, False))

if __name__=="__main__":
    test_user()
    run_all_tests()