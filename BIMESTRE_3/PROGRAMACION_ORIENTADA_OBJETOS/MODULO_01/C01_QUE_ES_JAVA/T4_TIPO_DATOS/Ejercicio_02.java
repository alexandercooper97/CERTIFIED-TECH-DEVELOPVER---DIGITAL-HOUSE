public class Ejercicio_02 {
    public int numeroEntero;
    public double numeroConComa;

    public void sumarYMostrar() {
      numeroEntero = 20; 
      numeroConComa = 4.75;

      double suma = numeroEntero + numeroConComa;

      System.out.println("La suma es: " + suma);
   }

    public static void main(String[] args) {
        Ejercicio_02 main = new Ejercicio_02();
        main.sumarYMostrar();
    }
}