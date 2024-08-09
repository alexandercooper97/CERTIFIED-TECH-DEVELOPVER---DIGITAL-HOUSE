package main.clinica.util;
import main.clinica.model.Odontologo;
import org.apache.log4j.Logger;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class ExportUtil {
    private static final Logger LOGGER = Logger.getLogger(ExportUtil.class);

    public static void exportarAArchivo(List<Odontologo> odontologos, String nombreArchivo) {
        try (PrintWriter writer = new PrintWriter(new FileWriter(nombreArchivo))) {
            writer.println("LISTA DE ODONTOLOGOS: ");
            System.out.println("LISTA DE ODONTOLOGOS: \n");
            for (Odontologo odontologo : odontologos) {
                writer.println(odontologo.getMatricula() + ": " + odontologo.getNombre() + " " + odontologo.getApellido());
            }
            LOGGER.info("Datos Exportados Exitosamente!!! a " + nombreArchivo);
            System.out.println("Datos Exportados Exitosamente!!! a " + nombreArchivo);
        } catch (IOException e) {
            LOGGER.error("Error al Exportar Datos a Archivo", e);
            System.out.println("Error al Exportar Datos a Archivo" + e);
        }
    }
}