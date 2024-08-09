package main.clinica;
import main.clinica.dao.OdontologoDao;
import main.clinica.dao.OdontologoDaoH2;
import main.clinica.model.Odontologo;
import main.clinica.util.ExportUtil;

import javax.swing.text.StyleContext;
import java.util.List;

public class Main {
    public static void main(String[] args) {


        ConexionH2.createTable();
        OdontologoDao dao = new OdontologoDaoH2();

        // Guardar algunos odontólogos
        dao.guardar(new Odontologo(1, "Alexander", "Cooper"));
        dao.guardar(new Odontologo(2, "María", "Torres de la Gala"));
        dao.guardar(new Odontologo(3, "Pablo Octavio", "Torres de la Gala"));

        // Listar todos los odontólogos
        List<Odontologo> odontologos = dao.listarTodos();

        // Mostrar resultados en consola
        System.out.println("Odontólogos Guardados:");
        for (Odontologo odontologo : odontologos) {
            System.out.println(odontologo.getMatricula() + ": " + odontologo.getNombre() + " " + odontologo.getApellido());
        }

        // Exportar resultados a archivo
        ExportUtil.exportarAArchivo(odontologos, "odontologos.txt");
    }
}