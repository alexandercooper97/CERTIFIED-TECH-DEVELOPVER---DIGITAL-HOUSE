package main.clinica.dao;
import main.clinica.model.Odontologo;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class OdontologoDaoMemoria implements OdontologoDao {
    private static final Logger LOGGER = Logger.getLogger(OdontologoDaoMemoria.class);
    private List<Odontologo> odontologos = new ArrayList<>();

    @Override
    public void guardar(Odontologo odontologo) {
        odontologos.add(odontologo);
        LOGGER.info("Odontólogo Guardado en Memoria: " + odontologo.getNombre() + " " + odontologo.getApellido());
        System.out.println("Odontólogo Guardado en Memoria: " + odontologo.getNombre() + " " + odontologo.getApellido());
    }

    @Override
    public List<Odontologo> listarTodos() {
        LOGGER.info("Odontólogos listados desde memoria: " + odontologos.size());
        System.out.println("Odontólogos Listados desde Memoria: " + odontologos.size());
        return new ArrayList<>(odontologos);
    }
}