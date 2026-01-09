const prompt = require("prompt-sync")({sigint: true});

let nombre = prompt("¿Cómo te llamas? :  ");
console.log("Hola " + nombre + " !!!");
console.log(`Hola ${nombre}!!!`);
