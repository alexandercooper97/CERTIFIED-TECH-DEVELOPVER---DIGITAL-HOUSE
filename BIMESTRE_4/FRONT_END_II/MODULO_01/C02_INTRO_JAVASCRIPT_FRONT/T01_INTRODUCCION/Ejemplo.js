
function mostrarNombre() {
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var mensaje = "Hola, " + nombreUsuario + "!";
    document.getElementById('saludo').textContent = mensaje;
}



window.onload = function() {
    let tratoPersonalizado = confirm("¿Desea un trato personalizado?");
    if (tratoPersonalizado) {
        let nombre = prompt("Por favor, introduzca su nombre");
        alert("Le damos la bienvenida a nuestro sitio, " + nombre + ". ¡Muchas gracias por visitarnos, estamos a su disposición!");
    } else {
        alert("Gracias por conectarse.");
    }
};
