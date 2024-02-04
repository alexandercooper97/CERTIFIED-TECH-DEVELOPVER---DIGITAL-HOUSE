function Sumar_Fila_1(matriz) {
    let suma = 0;
  
    for (let i = 0; i < matriz[1].length; i++) {
      suma += matriz[1][i];
    }
  
    return suma;
  }
  

  function get_Vals_Pares(matriz) {
    const vals_Pares = [];
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 === 0) {
          vals_Pares.push(matriz[i][j]);
        }
      }
    }
  
    return vals_Pares;
  }
  

  let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

console.log("\t MATRIZ PRINCIPAL \n");
console.log(matriz);

console.log("\nSUMA DE VALORES DE LA FILA 1 \n");
const res_Suma = Sumar_Fila_1(matriz);
console.log("La suma de la fila 1 es:", res_Suma);
console.log("----------------------------------------------\n");
  
console.log("\n VECTOR DE VALORES PARES \n");
const res_Vals_Pares = get_Vals_Pares(matriz);
console.log("Valores pares de la matriz:", res_Vals_Pares);
console.log("----------------------------------------------\n");


 