
public class Ejercitacion_Funciones{
    public static void main(String[] args) {
        // Ejemplo de uso
        int n = 10;
        int divisor = 2;
        System.out.println("¿Es " + n + " divisible por " + divisor + "? " + esDivisible(n, divisor));

        n = 7;
        divisor = 3;
        System.out.println("¿Es " + n + " divisible por " + divisor + "? " + esDivisible(n, divisor));
    }

    public static boolean esDivisible(int n, int divisor) {
        // Comprobar si n es divisible por divisor
        return n % divisor == 0;
    }
}
