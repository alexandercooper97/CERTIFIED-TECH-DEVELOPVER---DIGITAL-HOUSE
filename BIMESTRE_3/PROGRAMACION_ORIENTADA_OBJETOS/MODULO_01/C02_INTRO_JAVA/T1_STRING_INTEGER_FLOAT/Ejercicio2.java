public class Ejercicio2 {

    public static void main(String[] args) {
        // Definir dos números enteros
        Integer numero1 = 10;
        Integer numero2 = 20;

        // Determinar si son iguales, mayor o menor
        if (numero1.equals(numero2)) {
            System.out.println("Los números son iguales.");
        } else if (numero1 > numero2) {
            System.out.println("El primer número es mayor que el segundo.");
        } else {
            System.out.println("El primer número es menor que el segundo.");
        }
    }
}
