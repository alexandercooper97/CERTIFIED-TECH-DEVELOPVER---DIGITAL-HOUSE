/*
 * Ahora ya te damos dos variables creadas, 
 * numeroEntero y numeroConComa;

El objetivo del ejercicio es que le asignes un valor 
acorde a su tipo a cada variable, el valor puede ser 
cualquiera mientras que respetes el tipo de dato

Luego vas a declarar la variable suma de tipo double, 
sumar ambos valores y asignárselos a suma
 */

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