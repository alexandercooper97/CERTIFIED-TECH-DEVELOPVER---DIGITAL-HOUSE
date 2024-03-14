public class Calculadora {

    // Completamos la función de sumar.
    public int sumar(int a, int b) {
        return a + b;
    }

    // Función para restar dos números.
    public int restar(int a, int b) {
        return a - b;
    }

    // Función para multiplicar dos números.
    public int multiplicar(int a, int b) {
        return a * b;
    }

    // Función para dividir dos números.
    // Nota: Esta función devuelve un entero y no maneja división por cero explícitamente.
    // En caso de división por cero, devolverá Infinity convertido a int, lo cual no es ideal.
    // Se podría manejar de una mejor manera con excepciones o devolviendo un tipo diferente (como float o double).
    public int dividir(int a, int b) {
        if (b == 0) {
            // Podemos decidir qué hacer aquí. Por ahora, simplemente imprimiremos un mensaje y devolveremos 0.
            System.out.println("Error: División por cero.");
            return 0;
        }
        return a / b;
    }

    // Método main para probar la calculadora.
    public static void main(String[] args) {
        Calculadora calc = new Calculadora();

        // Pruebas básicas
        System.out.println("Suma: 5 + 3 = " + calc.sumar(5, 3));
        System.out.println("Resta: 5 - 3 = " + calc.restar(5, 3));
        System.out.println("Multiplicación: 5 * 3 = " + calc.multiplicar(5, 3));
        System.out.println("División: 5 / 3 = " + calc.dividir(5, 3));
        System.out.println("División por cero: 5 / 0 = " + calc.dividir(5, 0)); // Manejo de
    }
}