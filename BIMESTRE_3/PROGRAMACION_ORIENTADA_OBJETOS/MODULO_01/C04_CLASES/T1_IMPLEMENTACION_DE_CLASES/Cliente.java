//package MODULO_01.C04_CLASES.T1_IMPLEMENTACION_DE_CLASES;

/*
 * EJERCICIO 1 
 * Ejercicio Cliente (Constructor)
    Ejercicio Cliente (Constructor)
    Aprobado
    Instrucciones

    Una vez que ya tenemos nuestra clase Cliente funcionando 
    es hora de crearle una constructor

    Nuestro constructor tiene que recibir nombre y apellido 
    y asignárselo a los atributos de nuestra clase Cliente

    public class Cliente {

    //NO TOCAR CODIGO
        private String nombre;
        private String apellido;



    //NO TOCAR ESTE CODIGO
        public String getNombre() {
            return nombre;
        }

        public String getApellido() {
            return apellido;
        }
    }
 */

public class Cliente {
    //NO TOCAR CODIGO
    private String nombre;
    private String apellido;

    public Cliente(String nombre, String apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    //NO TOCAR ESTE CODIGO
    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public static void main(String[] args) {
        Cliente cl1 = new Cliente("Alexander","Cooper");

        System.out.println(cl1.nombre);
        System.out.println(cl1.apellido);
    }

}
