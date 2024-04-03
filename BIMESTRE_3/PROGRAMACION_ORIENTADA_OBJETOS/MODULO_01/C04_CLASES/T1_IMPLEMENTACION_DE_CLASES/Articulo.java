

public class Articulo{
    //Se define los atributos como privados
    // para preservar el encapsulamiento
    private String descripcion;
    private double precioVenta;
    private int stock;

    public Articulo(String descripcion, int cantidad, double precio){
        this.descripcion = descripcion;
        precioVenta = precio;
        stock = cantidad;
    }

    public boolean hayStock(){
        return stock > 0;
    }

    public double consultarPrecio(){
        return precioVenta;
    }

    public static void main(String[] args) {
        Articulo art = new Articulo("Anillo", 3,777);
        System.out.println(art.descripcion);
        System.out.println(art.precioVenta);
        System.out.println(art.stock);
    }

}
