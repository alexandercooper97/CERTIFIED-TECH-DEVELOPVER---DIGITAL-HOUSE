import java.util.Scanner;

public class Ejercicio_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Ingrese el primer número: ");
        Integer numeroA = scanner.nextInt();
        
        System.out.print("Ingrese el segundo número: ");
        Integer numeroB = scanner.nextInt();
        
        System.out.print("Ingrese el tercer número: ");
        Integer numeroC = scanner.nextInt();
        
        Integer maximo = maximoEntreTresNumeros(numeroA, numeroB, numeroC);
        
        System.out.println("El máximo entre los tres números es: " + maximo);
    }

    public static Integer maximoEntreTresNumeros(Integer unNumeroA, Integer unNumeroB, Integer unNumeroC) {
        return Math.max(Math.max(unNumeroA, unNumeroB), unNumeroC);
    }
}
