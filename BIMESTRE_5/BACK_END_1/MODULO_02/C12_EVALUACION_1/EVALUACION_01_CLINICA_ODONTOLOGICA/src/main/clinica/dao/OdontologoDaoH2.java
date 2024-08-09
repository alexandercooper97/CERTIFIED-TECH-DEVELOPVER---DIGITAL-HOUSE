package main.clinica.dao;
import main.clinica.model.Odontologo;
import main.clinica.util.ConexionH2;
import org.apache.log4j.Logger;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class OdontologoDaoH2 implements OdontologoDao {
    private static final Logger LOGGER = Logger.getLogger(OdontologoDaoH2.class);

    @Override
    public void guardar(Odontologo odontologo) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            connection = ConexionH2.getConnection();
            preparedStatement = connection.prepareStatement("INSERT INTO odontologos (matricula, nombre, apellido) VALUES (?, ?, ?)");
            preparedStatement.setInt(1, odontologo.getMatricula());
            preparedStatement.setString(2, odontologo.getNombre());
            preparedStatement.setString(3, odontologo.getApellido());

            preparedStatement.executeUpdate();
            LOGGER.info("Odontólogo Guardado: " + odontologo.getNombre() + " " + odontologo.getApellido());
            System.out.println("Odontólogo Guardado: " + odontologo.getNombre() + " " + odontologo.getApellido());

        } catch (SQLException e) {
            LOGGER.error("Error al Guardar Odontólogo", e);
            System.out.println("Error al Guardar Odontólogo" + e);
        } finally {
            cerrarRecursos(connection, preparedStatement, null);
        }
    }

    @Override
    public List<Odontologo> listarTodos() {
        List<Odontologo> odontologos = new ArrayList<>();
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            connection = ConexionH2.getConnection();
            statement = connection.createStatement();
            resultSet = statement.executeQuery("SELECT * FROM odontologos");

            while (resultSet.next()) {
                Odontologo odontologo = new Odontologo(
                        resultSet.getInt("matricula"),
                        resultSet.getString("nombre"),
                        resultSet.getString("apellido")
                );
                odontologos.add(odontologo);
            }
            LOGGER.info("Odontólogos Listados: " + odontologos.size());
            System.out.println("Odontólogos Listados: " + odontologos.size());

        } catch (SQLException e) {
            LOGGER.error("Error al Listar Odontólogos", e);
            System.out.println("Error al Listar Odontólogos" + e);
        } finally {
            cerrarRecursos(connection, statement, resultSet);
        }

        return odontologos;
    }

    private void cerrarRecursos(Connection connection, Statement statement, ResultSet resultSet) {
        try {
            if (resultSet != null) resultSet.close();
            if (statement != null) statement.close();
            if (connection != null) connection.close();
        } catch (SQLException e) {
            LOGGER.error("Error al Cerrar Recursos", e);
            System.out.println("Error al Cerrar Recursos" + e);
        }
    }
}