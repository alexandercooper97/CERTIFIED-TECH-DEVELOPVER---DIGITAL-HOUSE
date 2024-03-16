import java.util.Scanner;

public class Ejercicio_Sintaxis {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese su nombre:");
        String nombre = scanner.nextLine();
        
        System.out.println("Ingrese su apellido:");
        String apellido = scanner.nextLine();
        
        System.out.println("Ingrese su fecha de nacimiento (día, mes y año separados por espacios):");
        int dia = scanner.nextInt();
        int mes = scanner.nextInt();
        int año = scanner.nextInt();
        
        // Obtener las iniciales y la fecha de nacimiento formateada
        String iniciales = obtenerIniciales(nombre, apellido);
        String fechaNacimiento = formatearFecha(dia, mes, año);
        
        System.out.println("Ficha:");
        System.out.println("Nombre completo: " + nombre + " " + apellido);
        System.out.println("Iniciales: " + iniciales);
        System.out.println("Fecha de nacimiento: " + fechaNacimiento);
        
        scanner.close();
    }
    
    public static String obtenerIniciales(String nombre, String apellido) {
        char inicialNombre = nombre.charAt(0);
        char inicialApellido = apellido.charAt(0);
        return inicialNombre + "." + inicialApellido + ".";
    }
    
    public static String formatearFecha(int dia, int mes, int año) {
        return String.format("%02d/%02d/%04d", dia, mes, año);
    }
}
