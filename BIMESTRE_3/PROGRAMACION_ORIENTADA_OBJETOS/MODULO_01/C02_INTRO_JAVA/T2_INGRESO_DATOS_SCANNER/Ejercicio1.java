import java.util.Scanner;

public class Ejercicio1 {
    public static void main(String[] args) {
        // Crea un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // Solicita al usuario que ingrese su nombre
        System.out.println("Ingrese su nombre:");
        String nombre = scanner.nextLine();

        // Solicita al usuario que ingrese su apellido
        System.out.println("Ingrese su apellido:");
        String apellido = scanner.nextLine();

        // Cierra el scanner
        scanner.close();

        // Obtiene las iniciales
        // Asumimos que tanto el nombre como el apellido tienen al menos un carácter
        char inicialNombre = nombre.charAt(0);
        char inicialApellido = apellido.charAt(0);

        // Construye una cadena con las iniciales
        String iniciales = "" + inicialNombre + inicialApellido;

        // Muestra las iniciales en consola
        System.out.println("Tus iniciales son: " + iniciales.toUpperCase());
    }
}
