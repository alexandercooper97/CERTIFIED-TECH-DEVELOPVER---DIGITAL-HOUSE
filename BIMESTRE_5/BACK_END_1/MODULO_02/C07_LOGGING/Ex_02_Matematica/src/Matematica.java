import org.apache.log4j.Logger;

public class Matematica {
    private final static Logger LOGGER = Logger.getLogger(Matematica.class);

    public static void main(String[] args){
        CalculoMatematico division_1 = new CalculoMatematico();
        CalculoMatematico division_2 = new CalculoMatematico();

        try{
            LOGGER.info("Se inicio la ejecucion del programa");
            LOGGER.info("Ejecutando Primera Division");
            double oper_1 = division_1.calculoDivision(10, 0);
            System.out.println(oper_1);

        }catch (ArithmeticException e){
            System.out.println("Se produjo un error al dividir por cero" + e.getMessage());
            LOGGER.error("Se produjo un error al dividir por cero" + e.getMessage());
        }

        LOGGER.info("Ejecutando Segunda Division");
        double oper_2 = division_2.calculoDivision(20,5);
        System.out.println(oper_2);

    }
}
