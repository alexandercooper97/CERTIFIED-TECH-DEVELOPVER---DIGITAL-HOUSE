function Filtrar_Paises_X_Continente_Y_Poblacion(paises, continente, poblacionMinima) {
 
    const paises_Filtrados = paises.filter((pais) => {
      return pais.continente === continente && pais.poblacion >= poblacionMinima;
    });
  
    return paises_Filtrados;
  }
  


  let paises = [
    {
      nombre: "Argentina",
      continente: "Sudamérica",
      poblacion: 40000000
    },
  {
      nombre: "Colombia",
      continente: "Sudamérica",
      poblacion: 50372000
    },
 
    {
      nombre: "Brasil",
      continente: "Sudamérica",
      poblacion: 300000000
    },
    {
      nombre: "Etiopía",
      continente: "África",
      poblacion: 15000000
    },
    {
      nombre: "Chile",
      continente: "Sudamérica",
      poblacion: 10000000
    }
  ];   


  const res_Filtro_1 = Filtrar_Paises_X_Continente_Y_Poblacion(paises, "Sudamérica", 20000000);
  const res_Filtro_2 = Filtrar_Paises_X_Continente_Y_Poblacion(paises, "sudamerica", 70000700);
  const res_Filtro_3 = Filtrar_Paises_X_Continente_Y_Poblacion(paises, "África", 100000);
  const res_Filtro_4 = Filtrar_Paises_X_Continente_Y_Poblacion(paises, "Africa", 7000000);

  console.log("CASO 1");
  console.log("Filtrar_Paises_X_Continente_Y_Poblacion(paises, 'Sudamérica', 20000000);\n");
  console.log(res_Filtro_1);
  console.log("-------------------------------------\n");

  console.log("CASO 2");
  console.log("Filtrar_Paises_X_Continente_Y_Poblacion(paises, 'sudamerica', 70000700)\n");
  console.log(res_Filtro_2);
  console.log("-------------------------------------\n");

  console.log("CASO 3");
  console.log("Filtrar_Paises_X_Continente_Y_Poblacion(paises, 'África', 100000);\n");
  console.log(res_Filtro_3);
  console.log("-------------------------------------\n");

  console.log("CASO 4");
  console.log("Filtrar_Paises_X_Continente_Y_Poblacion(paises, 'Africa', 7000000);\n");
  console.log(res_Filtro_4);
  console.log("-------------------------------------\n");