package main.clinica.util;
import org.apache.log4j.Logger;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.stream.Collectors;

public class ConexionH2 {
    private static final Logger LOGGER = Logger.getLogger(ConexionH2.class);
    private static final String URL = "jdbc:h2:~/test;INIT=RUNSCRIPT FROM 'classpath:create_table.sql'";
    private static final String USER = "sa";
    private static final String PASS = "";

    static {
        try {
            Class.forName("org.h2.Driver");
        } catch (ClassNotFoundException e) {
            LOGGER.error("ERROR al Cargar el Driver de H2", e);
            System.out.println("ERROR al Cargar el Driver de H2" + e);
        }
    }

    public static Connection getConnection() throws SQLException {
        try {
            Connection connection = DriverManager.getConnection(URL, USER, PASS);
            executeInitScript(connection);
            return connection;
        } catch (SQLException e) {
            LOGGER.error("ERROR al Obtener la Conexión a la Base de Datos", e);
            throw e;
        }
    }

    private static void executeInitScript(Connection connection) {
        try (InputStream is = ConexionH2.class.getClassLoader().getResourceAsStream("create_table.sql")) {
            if (is == null) {
                LOGGER.error("No se pudo encontrar el archivo create_table.sql");
                System.out.println("No se pudo encontrar el archivo create_table.sql");
                return;
            }

            String sql = new BufferedReader(new InputStreamReader(is))
                    .lines().collect(Collectors.joining("\n"));

            try (Statement stmt = connection.createStatement()) {
                stmt.execute(sql);
                LOGGER.info("Script de inicialización ejecutado con éxito");
                System.out.println("Script de inicialización ejecutado con éxito");
            }
        } catch (Exception e) {
            LOGGER.error("Error al ejecutar el script de inicialización" , e);
            System.out.println("Error al ejecutar el script de inicialización" + e);
        }
    }
}