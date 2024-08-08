import org.apache.log4j.Logger;

public class CalculoMatematico {
    private final static Logger LOGGER = Logger.getLogger(CalculoMatematico.class);

    public double calculoDivision(double numerador, double denominador){
        LOGGER.info("Se ingreso al Metodo que calcula la division");
        if (denominador == 0){
            LOGGER.warn("Log -> No se pudo dividir por cero");
            // si se divide un numero por cero --> nos va a dar ERROR
            throw new ArithmeticException("No se puede dividir un numero por cero");
        }
        LOGGER.info("Termino la Ejecucion del Metodo");
        return numerador/denominador;
    }
}
