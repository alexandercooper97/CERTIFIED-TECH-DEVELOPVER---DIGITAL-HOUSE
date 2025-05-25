package com.example.usuariojuego;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UsuariojuegoApplication {

	private String nombre;
	private String clave;
	private double puntaje;
	private int nivel;

	UsuariojuegoApplication(String nombre, String clave) {
		this.nombre = nombre;
		this.clave = clave;
		this.puntaje = 0.0;
		this.nivel = 0;
	}

	public String getNombre() { return nombre;}
	public void setNombre(String nombre) { this.nombre = nombre;}

	public String getClave() {return clave;}
	public void setClave(String clave) {this.clave = clave;}

	public Double getPuntaje() { return puntaje;}

	public Integer getNivel() { return nivel;}

	//Metodos del Juego
	public void aumentarPuntaje() {
		this.puntaje += 1;
	}

	public void subirNivel() {
		this.nivel += 1;
	}

	public void bonus(int valorExtra) {
		this.puntaje += valorExtra;
	}

	public void mostrarEstado() {
		System.out.println("Usuario : " + getNombre());
		System.out.println("Nivel   : " + getNivel());
		System.out.println("Puntaje : " + getPuntaje());
	}

	public static void main(String[] args) {
		UsuariojuegoApplication usuario = new UsuariojuegoApplication("Miguel", "1234");
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

		SpringApplication.run(UsuariojuegoApplication.class, args);
	}

}
