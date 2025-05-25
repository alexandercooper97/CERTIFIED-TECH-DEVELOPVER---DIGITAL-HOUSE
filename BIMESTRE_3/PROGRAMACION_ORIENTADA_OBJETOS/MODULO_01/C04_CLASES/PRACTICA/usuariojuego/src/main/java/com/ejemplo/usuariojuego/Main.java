package com.ejemplo.usuariojuego;

public class Main {
    public static void main(String[] args) {

        UsuarioJuego usuario = new UsuarioJuego("Miguel", "1234");

        //Usando metodos del Juego
        usuario.aumentarPuntaje();
        usuario.subirNivel();
        usuario.bonus(50);

        // Usamos getters
        System.out.println("Nombre  : " + usuario.getNombre());
        System.out.println("Puntaje : " + usuario.getPuntaje());
        System.out.println("Nivel   : " + usuario.getNivel());

        System.out.println("\n---------------------------------------\n");

        //Cambiamos nombre usando setter
        usuario.setNombre("Alexander");

        System.out.println("\n---------------------------------------\n");

        System.out.println("Nombre  : " + usuario.getNombre());
        System.out.println("Puntaje : " + usuario.getPuntaje());
        System.out.println("Nivel   : " + usuario.getNivel());
    }
}
