package test;
import main.clinica.dao.OdontologoDao;
import main.clinica.dao.OdontologoDaoH2;
import main.clinica.model.Odontologo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class OdontologoDaoH2Test {
    private OdontologoDao odontologoDao;

    @BeforeEach
    void setUp() {
        odontologoDao = new OdontologoDaoH2();
    }

    @Test
    void testListarTodos() {
        // Guardar algunos odontólogos de prueba
        odontologoDao.guardar(new Odontologo(1, "Alexander", "Cooper"));
        odontologoDao.guardar(new Odontologo(2, "María", "Torres de la Gala"));
        odontologoDao.guardar(new Odontologo(3, "Pablo Octavio", "Torres de la Gala"));

        // Listar todos los odontólogos
        List<Odontologo> odontologos = odontologoDao.listarTodos();

        // Verificar que se hayan guardado y listado correctamente
        assertNotNull(odontologos);
        assertTrue(odontologos.size() >= 3);
        assertTrue(odontologos.stream().anyMatch(o -> o.getMatricula().equals(1) && o.getNombre().equals("Alexander") && o.getApellido().equals("Cooper")));
        assertTrue(odontologos.stream().anyMatch(o -> o.getMatricula().equals(2) && o.getNombre().equals("María") && o.getApellido().equals("Torres de la Gala")));
        assertTrue(odontologos.stream().anyMatch(o -> o.getMatricula().equals(3) && o.getNombre().equals("Pablo Octavio") && o.getApellido().equals("Torres de la Gala")));
    }
}