import org.apache.log4j.Logger;
import java.util.List;
import java.io.FileNotFoundException;
import java.io.PrintStream;
import java.io.FileOutputStream;
import java.util.Arrays;


public class Test {
    private static final Logger LOGGER = Logger.getLogger(Test.class);

    public static void main(String[] args){
        try{
            //Exportar System.out a un archivo .txt
            PrintStream consoleOutput = new PrintStream(new FileOutputStream("output.txt", true));
            System.setOut(consoleOutput);

            //Caso con mas de 10 elementos
            List<Integer> lista1 = Arrays.asList(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140);
            ListaPromedio.calcularEstadisticas(lista1);

            // Caso con mas de 5 elementos
            List<Integer> lista2 = Arrays.asList(11, 22, 33, 44, 55, 66, 77);
            ListaPromedio.calcularEstadisticas(lista2);

            // Caso con la lista vacia
            List<Integer> lista3 = Arrays.asList();
            ListaPromedio.calcularEstadisticas(lista3);

        }catch (FileNotFoundException e){
            LOGGER.error("No se pudo redirigir la salida a output.txt: " + e.getMessage());
            System.out.println("No se pudo redirigir la salida a output.txt: " + e.getMessage());
        }
        catch (Exception e){
            LOGGER.error("Excepcion atrapada : " + e.getMessage());
            e.printStackTrace();
        }
    }
}
