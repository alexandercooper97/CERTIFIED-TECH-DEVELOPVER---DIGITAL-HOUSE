let misMascotas = [
    {
      nombre: 'Luna',
      raza: 'Labrador',
      edad: 5,
      sonido: 'Guau',
      obtenerSonido: function() {
        return this.sonido.repeat(2);
      },
    },
    {
      nombre: 'Bruno',
      raza: 'Siamés',
      edad: 10,
      sonido: 'Woof Woof  ',
      obtenerSonido: function() {
        return this.sonido.repeat(2);
      },
    },
    // Puedes agregar más mascotas aquí
  ];
  

  console.log(misMascotas);
  misMascotas.forEach(mascota => {
    console.log(`${mascota.nombre} dice: ${mascota.obtenerSonido()}`);
  });
  


  function aumentarEdad() {
    misMascotas.forEach(mascota => {
      mascota.edad += 1;
    });
  }
  
  aumentarEdad();
  console.log(misMascotas); 
  
  /***************************************************************************** 
                               PASO 4 
*********************************************************************************/
  function aumentarEdad2() {
    misMascotas.forEach(mascota => {
      if (mascota.edad < 6) {
        mascota.edad += 1;
      } else if (mascota.edad >= 6 && mascota.edad <= 10) {
        mascota.edad += 2;
      } else {
        mascota.edad += mascota.edad / 2;
      }
    });
  }
  

  aumentarEdad2();
  console.log(misMascotas); // Verificar el cambio en la consola
  

  /***************************************************************************** 
                               PASO 5 
*********************************************************************************/
function asignarID() {
    misMascotas.forEach((mascota, index) => {
      mascota.id = index + 1;
    });
  }
  

  asignarID();
  console.log(misMascotas); 
  