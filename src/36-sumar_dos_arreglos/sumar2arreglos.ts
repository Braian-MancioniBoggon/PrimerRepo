let longitud: number = Number(
  prompt("Ingrese la cantidad de numeros dentro de los arreglos")
);

let arreglo1: number[] = new Array(longitud);
let arreglo2: number[] = new Array(longitud);
let arregloSuma: number[] = new Array(longitud);

let crearNumeroAleatorio = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let cargarAleatorio = (
  arreglo: number[],
  longitudArreglo: number
): number[] => {
  for (let indice: number = 0; indice < longitudArreglo; indice++) {
    arreglo[indice] = crearNumeroAleatorio(0, 100);
  }
};
let mostrarArreglo = (arreglo: number[], longitudArreglo: number): number[] => {
  let numerosEnArreglo: string = "";
  for (let indice: number = 0; indice < longitudArreglo; indice++) {
    numerosEnArreglo += arreglo[indice] + ", ";
  }
  console.log("Los valores dentro del arreglo son: " + numerosEnArreglo);
};
let sumarArreglo = (
  arregloParaSumar1: number[],
  arregloParaSumar2: number[],
  arregloResultado: number[],
  longitudArreglo: number
): number[] => {
  for (let indice: number = 0; indice < longitudArreglo; indice++) {
    arregloResultado[indice] =
      arregloParaSumar1[indice] + arregloParaSumar2[indice];
  }
};

cargarAleatorio(arreglo1, longitud);
mostrarArreglo(arreglo1, longitud);
cargarAleatorio(arreglo2, longitud);
mostrarArreglo(arreglo2, longitud);
sumarArreglo(arreglo1, arreglo2, arregloSuma, longitud);
mostrarArreglo(arregloSuma, longitud);
