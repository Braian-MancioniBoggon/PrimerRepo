//SEGUNDA PARTE DEL ENUNCIADO - MULTIPLICACIÓN DE 4 ARREGLOS

let arregloNumero1: number = [1, 2, 3];
let arregloNumero2: number = [4, 5, 6];
let arregloNumero3: number = [2, 1, 2];
let arregloNumero4: number = [1, 2, 1];
let arregloResultado: number[] = new Array(3);

let multiplicarArreglo = (
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[],
  arreglo4: number[],
  arregloMultiplicacion: number[]
): number => {
  for (let i: number = 0; i < 3; i++) {
    arregloMultiplicacion[i] =
      arreglo1[i] * arreglo2[i] * arreglo3[i] * arreglo4[i];
  }
};

multiplicarArreglo(
  arregloNumero1,
  arregloNumero2,
  arregloNumero3,
  arregloNumero4,
  arregloResultado
);
console.log(arregloNumero1);
console.log(arregloNumero2);
console.log(arregloNumero3);
console.log(arregloNumero4);
console.log(arregloResultado);