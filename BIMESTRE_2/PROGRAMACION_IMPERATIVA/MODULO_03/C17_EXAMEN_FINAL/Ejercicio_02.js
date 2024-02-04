function bubbleSort(vector, orden) {
    const n = vector.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
    
        if ((orden === "ASC" && vector[j] > vector[j + 1]) ||
            (orden === "DESC" && vector[j] < vector[j + 1])) {
        
          const temp = vector[j];
          vector[j] = vector[j + 1];
          vector[j + 1] = temp;
        }
      }
    }
  
    console.log("\nVector después del Ordenamiento :\n ", vector);
  }
  


const vector_nums = [1,2,3, 8, 9, 104, 5, 6, 7, 15];

console.log("\nVector antes del Ordenamiento :\n ", vector_nums);

console.log("\nCASO 1 : ASCENDENTE ");

bubbleSort(vector_nums, "ASC");
console.log("-------------------------------------\n");
  

console.log("CASO 2 : DESCENDENTE");
bubbleSort(vector_nums, "DESC");
console.log("-------------------------------------\n");