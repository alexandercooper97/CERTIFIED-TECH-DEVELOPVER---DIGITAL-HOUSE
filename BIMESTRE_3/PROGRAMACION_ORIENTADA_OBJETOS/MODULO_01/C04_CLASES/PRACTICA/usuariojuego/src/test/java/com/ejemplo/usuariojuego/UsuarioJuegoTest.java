package com.ejemplo.usuariojuego;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UsuarioJuegoTest {

    private UsuarioJuego usuario;

    @BeforeEach
    void init() {

        usuario = new UsuarioJuego("Ana", "clave123");
    }

    @Test
    void testInicializacionCorrecta() {
        assertEquals("Ana", usuario.getNombre());
        assertEquals("clave123", usuario.getClave());
        assertEquals(0, usuario.getNivel());
        assertEquals(0.0, usuario.getPuntaje());
    }

    @Test
    void testAumentarPuntaje() {
        usuario.aumentarPuntaje();
        assertEquals(1.0, usuario.getPuntaje());
    }

    @Test
    void testSubirNivel() {
        usuario.subirNivel();
        assertEquals(1, usuario.getNivel());
    }

    @Test
    void testBonus() {
        usuario.bonus(10);
        assertEquals(10.0, usuario.getPuntaje());
    }

    @Test
    void testSetNombreYClave() {
        usuario.setNombre("Alex");
        usuario.setClave("nuevaClave");
        assertEquals("Alex", usuario.getNombre());
        assertEquals("nuevaClave", usuario.getClave());
    }

    @Test
    void testMainExecution() {
        Main.main(new String[]{});
    }
}