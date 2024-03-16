import java.util.Scanner;
public class Ejercicio_03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese el primer texto:");
        String texto1 = scanner.nextLine();

        System.out.println("Ingrese el segundo texto:");
        String texto2 = scanner.nextLine();

        System.out.println(cadenasDeTextoDistintas(texto1, texto2));
        
        scanner.close();
    }
    
    public static boolean cadenasDeTextoDistintas(String TextoA, String TextoB) {
        return !TextoA.equals(TextoB);
    }
}
