let longitud: number = Number(prompt("Ingrese la longitud del arreglo:"));

let arreglo1: number[] = new Array(longitud);
let arreglo2: number[] = new Array(longitud);
let arregloEscalar: number[] = new Array(longitud);
let suma: number = 0;

let cargarArreglo = (arreglo: number[], longitudArreglo: number): number => {
  for (let i: number = 0; i < longitudArreglo; i++) {
    arreglo[i] = Number(
      prompt("ingrese el valor de la posición " + (i + 1) + " del arreglo")
    );
  }
};

let escalarArreglo = (
  arregloN1: number[],
  arregloN2: number[],
  escalar: number[],
  longitudArreglo: number
): number => {
  for (let i: number = 0; i < longitudArreglo; i++) {
    escalar[i] = arregloN1[i] * arregloN2[i];
    suma += arregloEscalar[i];
  }
  return suma;
};

cargarArreglo(arreglo1, longitud);
cargarArreglo(arreglo2, longitud);
escalarArreglo(arreglo1, arreglo2, arregloEscalar, longitud);
console.log(suma);
