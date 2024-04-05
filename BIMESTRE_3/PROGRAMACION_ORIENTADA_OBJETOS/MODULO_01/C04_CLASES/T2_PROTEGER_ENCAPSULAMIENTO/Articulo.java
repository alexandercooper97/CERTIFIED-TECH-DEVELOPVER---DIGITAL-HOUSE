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

    //GETTERS
    public String getDescripcion(){
        return descripcion;
    }

    public double getPrecioVenta(){
        return precioVenta;
    }

    public int getStock(){
        return stock;
    }

    //SETTERS

    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }

    public void setPrecioVenta(Double precio){
        this.precioVenta = precio;
    }

    public void setStock(int stock){
        this.stock = stock;
    }

    public static void main(String[] args) {
        Articulo art1 = new Articulo("Anillo", 3,777);
        System.out.println("Descripción: " + art1.descripcion);
        System.out.println("Precio de venta: " + art1.precioVenta);
        System.out.println("Stock: " + art1.stock);

        //Modificando los atributos con los setters
        art1.setDescripcion("Anillo de Diamates");
        art1.setPrecioVenta(1000.50);
        art1.setStock(5);

        System.out.println("Nueva Descripcion : " + art1.getDescripcion());
        System.out.println("Nuevo Precio de Venta : " + art1.getPrecioVenta());
        System.out.println("Nuevo Stock : " + art1.getStock());
    
        Articulo art2 = new Articulo ("Collar de Perlas", 10, 1500.50);

        System.out.println("Descripción: " + art2.getDescripcion());
        System.out.println("Precio de venta: " + art2.getPrecioVenta());
        System.out.println("Stock: " + art2.getStock());
    
        art2.setDescripcion("Collar de Esmeraldas");
        art2.setPrecioVenta(2500.75);
        art2.setStock(8);

        System.out.println("Nueva Descripcion : " + art2.getDescripcion());
        System.out.println("Nuevo Precio de Venta : " + art2.getPrecioVenta());
        System.out.println("Nuevo Stock : " + art2.getStock());
    


    
    }

}
