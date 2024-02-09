public class Caballo{

    private String nombre;
    private String color;
    private int edad;
    private double costoMantenimientoSemanal;

    // Constructor 
    public Caballo(String nombre, String color, int edad, double costoMantenimientoSemanal) {
        this.nombre = nombre;
        this.color = color;
        this.edad = edad;
        this.costoMantenimientoSemanal = costoMantenimientoSemanal;
    }

    public void mostrarCaracteristicas() {
        System.out.println("Nombre del caballo: " + nombre);
        System.out.println("Color del caballo: " + color);
        System.out.println("Edad del caballo: " + edad + " años");
        System.out.println("Costo de mantenimiento semanal: $" + costoMantenimientoSemanal);
    }

    public static void main(String[] args) {
        // Crear una instancia de Caballo = Braulio
        Caballo braulio = new Caballo("Braulio", "Blanco", 2, 1250.40);
        
        System.out.println("Características del caballo Braulio:");
        braulio.mostrarCaracteristicas();
    }
}
