package com.ejemplo.usuariojuego;

public class UsuarioJuego {
    private String nombre;
    private String clave;
    private double puntaje = 0;
    private int nivel = 0;

    public UsuarioJuego(String nombre, String clave) {
        this.nombre = nombre;
        this.clave = clave;
    }


    public String getNombre() {
        return nombre;
    }

    public String getClave() {
        return clave;
    }

    public double getPuntaje() {
        return puntaje;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public void aumentarPuntaje() {
        this.puntaje += 1;
    }

    public void subirNivel() {
        this.nivel += 1;
    }

    public void bonus(int valor) {
        this.puntaje += valor;
    }
}