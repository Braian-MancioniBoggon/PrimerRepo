let btn01 = document.getElementById("botonEjercicio1");
let btn02 = document.getElementById("botonEjercicio2");

let multiplicarArreglo = (
  arreglo1: number[],
  arreglo2: number[],
  arregloMultiplicacion: number[],
  longitudArreglo: number
): number => {
  for (let i: number = 0; i < longitudArreglo; i++) {
    arregloMultiplicacion[i] = arreglo1[i] * arreglo2[i];
  }
};

//PRIMERA PARTE DEL ENUNCIADO - MULTIPLICACIÓN DE 2 ARREGLOS

btn01.addEventListener("click", () => {
  let longitud: number = Number(prompt("Ingrese la longitud del arreglo:"));
  let arregloNumero1: number[] = new Array(longitud);
  let arregloNumero2: number[] = new Array(longitud);
  let arregloResultado: number[] = new Array(longitud);

  let cargarArreglo = (arreglo: number[], longitudArreglo: number): number => {
    for (let i: number = 0; i < longitudArreglo; i++) {
      arreglo[i] = Number(
        prompt("ingrese el valor de la posición " + (i + 1) + " del arreglo")
      );
    }
  };

  cargarArreglo(arregloNumero1, longitud);
  cargarArreglo(arregloNumero2, longitud);
  multiplicarArreglo(
    arregloNumero1,
    arregloNumero2,
    arregloResultado,
    longitud
  );
  console.log(arregloNumero1);
  console.log(arregloNumero2);
  console.log(arregloResultado);
});

//SEGUNDA PARTE DEL ENUNCIADO - MULTIPLICACIÓN DE 4 ARREGLOS

btn02.addEventListener("click", () => {
  let arregloNumero1: number = [1, 2, 3];
  let arregloNumero2: number = [4, 5, 6];
  let arregloNumero3: number = [2, 1, 2];
  let arregloNumero4: number = [1, 2, 1];
  let arregloResultado: number[] = new Array(3);
  let arregloResultadoAux: number[] = new Array(3);

  multiplicarArreglo(arregloNumero1, arregloNumero2, arregloResultadoAux, 3);
  multiplicarArreglo(arregloNumero3, arregloNumero4, arregloResultado, 3);
  multiplicarArreglo(
    arregloResultado,
    arregloResultadoAux,
    arregloResultado,
    3
  );
  console.log(arregloNumero1);
  console.log(arregloNumero2);
  console.log(arregloNumero3);
  console.log(arregloNumero4);
  console.log(arregloResultado);
});

//SEGUNDA PARTE DEL ENUNCIADO - MULTIPLICACIÓN DE 4 ARREGLOS
/*
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
*/
