const prompt = require("prompt-sync")({ sigint: true });

// --- SITUACIÓN 1: Preparar un café ---
console.log("--- SITUACIÓN 1: PREPARAR CAFÉ ---");

const temperaturaIdealAgua = 90; 
const tieneGranos = true;        

let endulzante = prompt("¿Qué endulzante prefieres (Azúcar/Miel/Sin nada)?: ");

console.log("Configuración: Agua a " + temperaturaIdealAgua + "°C");
console.log("¿Hay café disponible?: " + tieneGranos);
console.log("Tu café saldrá con: " + endulzante);
console.log("----------------------------------\n");


// --- SITUACIÓN 2: Ir al Gimnasio ---
console.log("--- SITUACIÓN 2: IR AL GIMNASIO ---");

const distanciaKm = 2.5;         
const requiereMembresia = true; 

let ejercicioFavorito = prompt("¿Qué grupo muscular vas a entrenar hoy?: ");

console.log("Distancia al gym: " + distanciaKm + " km");
console.log("¿Requiere carnet?: " + requiereMembresia);
console.log("Hoy entrenarás: " + ejercicioFavorito);
console.log("----------------------------------\n");


// --- DESAFÍO EXTRA: Intercambio de Cajones --- 
console.log("--- DESAFÍO EXTRA: LOS CAJONES ---");

let cajonPantalones = "remeras";
let cajonRemeras = "pantalones";

console.log("Antes del cambio:");
console.log("Cajón Pantalones tiene: " + cajonPantalones);
console.log("Cajón Remeras tiene: " + cajonRemeras);

let cajaTemporal = cajonPantalones; // Guardamos "remeras" en la caja temporal
cajonPantalones = cajonRemeras;    // Ahora cajonPantalones tiene "pantalones"
cajonRemeras = cajaTemporal;      // Ahora cajonRemeras tiene "remeras"

console.log("\nDespués del cambio:");
console.log("Cajón Pantalones tiene: " + cajonPantalones);
console.log("Cajón Remeras tiene: " + cajonRemeras);