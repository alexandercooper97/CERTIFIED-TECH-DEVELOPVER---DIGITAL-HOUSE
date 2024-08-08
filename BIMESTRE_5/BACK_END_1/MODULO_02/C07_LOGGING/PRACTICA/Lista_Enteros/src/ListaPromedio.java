import java.util.List;
import org.apache.log4j.Logger;

public class ListaPromedio{
    private static final Logger LOGGER = Logger.getLogger(ListaPromedio.class);

    public static void calcularEstadisticas(List<Integer> listaEnteros) throws Exception{

        if (listaEnteros == null || listaEnteros.isEmpty()){
            LOGGER.error("La lista NO tiene elementos");
            throw new Exception("La lista NO tiene elementos");
        }

        System.out.println("Lista : " + listaEnteros);

        if (listaEnteros.size() > 5){
            LOGGER.info("La longitud de la lista es mayor a 5");
            System.out.println("La longitud de la lista es mayor a 5");
        }

        if (listaEnteros.size() > 10){
            LOGGER.info("La longitud de la lista es mayor a 10");
            System.out.println("La longitud de la lista es mayor a 10");
        }

        //Calculamos Promedio, Maximo y Minimo
        double promedio = listaEnteros.stream().mapToInt(Integer::intValue).average().orElse(0.0);
        int maximo = listaEnteros.stream().mapToInt(Integer::intValue).max().orElseThrow();
        int minimo = listaEnteros.stream().mapToInt(Integer::intValue).min().orElseThrow();

        //loggers de informacion de resultados
        LOGGER.info("El promedio es : " + promedio);
        LOGGER.info("El valor maximo es : " + maximo);
        LOGGER.info("El valor minimo es : " + minimo);

        //Impresion en consola (redirigida a .txt en Test)
        System.out.println("El promedio es : " + promedio);
        System.out.println("El valor maximo es : " + maximo);
        System.out.println("El valor minimo es : " + minimo);
    }
}