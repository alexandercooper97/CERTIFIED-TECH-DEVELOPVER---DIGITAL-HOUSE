package main.clinica.dao;

import main.clinica.model.Odontologo;
import java.util.List;

public interface OdontologoDao {
    void guardar(Odontologo odontologo);
    List<Odontologo> listarTodos();
}