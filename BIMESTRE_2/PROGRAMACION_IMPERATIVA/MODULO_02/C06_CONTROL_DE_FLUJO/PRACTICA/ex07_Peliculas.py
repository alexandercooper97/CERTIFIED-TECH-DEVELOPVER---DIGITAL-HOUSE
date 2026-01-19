# ============================================================================
# 🎬 EJERCICIO 7: Valoración de Películas (Match-Case / Switch)
# ============================================================================
from test_framework import TestSuite, TestRunner

def valorar_pelicula(valoracion: str) -> str:
    match valoracion.lower():
        case "muy mala":
            mensaje = "Calificaste la película como Muy Mala. Lo lamentamos mucho."
        case "mala":
            mensaje = "Calificaste la película como Mala. Lo lamentamos."
        case "mediocre":
            mensaje = "Calificaste la película como Mediocre. Esperamos mejorar."
        case "buena":
            mensaje = "Calificaste la película como Buena. ¡Nos alegra que te haya gustado!"
        case "muy buena":
            mensaje = "Calificaste la película como Muy Buena. ¡Nos alegramos mucho!"
        case _:
            return "Ingresaste un valor inválido"
    
    return mensaje + "\n¡Gracias por tu visita!"


# ============================================================================
# 🎯 BATERÍAS DE PRUEBAS
# ============================================================================

def test_valoracion_pelicula():
    suite = TestSuite("Valoración de Películas")
    
    # Valoraciones válidas
    suite.assert_equal("Muy mala", 
        valorar_pelicula("muy mala"), 
        "Calificaste la película como Muy Mala. Lo lamentamos mucho.\n¡Gracias por tu visita!")
    suite.assert_equal("Mala", 
        valorar_pelicula("mala"), 
        "Calificaste la película como Mala. Lo lamentamos.\n¡Gracias por tu visita!")
    suite.assert_equal("Mediocre", 
        valorar_pelicula("mediocre"), 
        "Calificaste la película como Mediocre. Esperamos mejorar.\n¡Gracias por tu visita!")
    suite.assert_equal("Buena", 
        valorar_pelicula("buena"), 
        "Calificaste la película como Buena. ¡Nos alegra que te haya gustado!\n¡Gracias por tu visita!")
    suite.assert_equal("Muy buena", 
        valorar_pelicula("muy buena"), 
        "Calificaste la película como Muy Buena. ¡Nos alegramos mucho!\n¡Gracias por tu visita!")
    
    # Mayúsculas/minúsculas
    suite.assert_equal("MUY MALA (mayúsculas)", 
        valorar_pelicula("MUY MALA"), 
        "Calificaste la película como Muy Mala. Lo lamentamos mucho.\n¡Gracias por tu visita!")
    suite.assert_equal("Buena (capitalizada)", 
        valorar_pelicula("Buena"), 
        "Calificaste la película como Buena. ¡Nos alegra que te haya gustado!\n¡Gracias por tu visita!")
    suite.assert_equal("MEDIOCRE (mayúsculas)", 
        valorar_pelicula("MEDIOCRE"), 
        "Calificaste la película como Mediocre. Esperamos mejorar.\n¡Gracias por tu visita!")
    
    # Valores inválidos
    suite.assert_equal("Excelente (inválida)", 
        valorar_pelicula("excelente"), 
        "Ingresaste un valor inválido")
    suite.assert_equal("Regular (inválida)", 
        valorar_pelicula("regular"), 
        "Ingresaste un valor inválido")
    suite.assert_equal("Pésima (inválida)", 
        valorar_pelicula("pésima"), 
        "Ingresaste un valor inválido")
    suite.assert_equal("5 estrellas (inválida)", 
        valorar_pelicula("5 estrellas"), 
        "Ingresaste un valor inválido")
    suite.assert_equal("10/10 (inválida)", 
        valorar_pelicula("10/10"), 
        "Ingresaste un valor inválido")
    suite.assert_equal(" (vacía)", 
        valorar_pelicula(""), 
        "Ingresaste un valor inválido")
    suite.assert_equal("horrible (inválida)", 
        valorar_pelicula("horrible"), 
        "Ingresaste un valor inválido")
    suite.assert_equal("genial (inválida)", 
        valorar_pelicula("genial"), 
        "Ingresaste un valor inválido")
    suite.assert_equal("fantástica (inválida)", 
        valorar_pelicula("fantástica"), 
        "Ingresaste un valor inválido")
    suite.assert_equal("okei (inválida)", 
        valorar_pelicula("okei"), 
        "Ingresaste un valor inválido")
    suite.assert_equal("así así (inválida)", 
        valorar_pelicula("así así"), 
        "Ingresaste un valor inválido")
    
    suite.report()


def run_all_tests():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 SUITE COMPLETA DE TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    test_valoracion_pelicula()

def test_user():
    print("\n" + "█" * 70)
    print("█" + " " * 68 + "█")
    print("█" + "  🚀 USER TESTING - PYTHON 🚀  ".center(66) + "█")
    print("█" + " " * 68 + "█")
    print("█" * 70 + "\n")

    valoracion = input("Ingrese Valoracion : ")
    print(valorar_pelicula(valoracion))

if __name__=="__main__":
    test_user()
    run_all_tests()