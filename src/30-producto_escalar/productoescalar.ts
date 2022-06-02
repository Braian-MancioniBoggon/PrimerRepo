/* CONSIGNA:
Cargue dos arreglos de dimensión N números (la cantidad
  es ingresada por el usuario). Calcule el producto escalar
  entre los dos arreglos.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btnProbar.addEventListener("click", () => {
  //Pido la longitud del arreglo
  let longitud: number = Number(prompt("Ingrese la longitud del arreglo:"));

  //Asigno la longitud al los arreglos y declaro la variable "suma"
  let arreglo1: number[] = new Array(longitud);
  let arreglo2: number[] = new Array(longitud);
  let arregloEscalar: number[] = new Array(longitud);
  let suma: number = 0;

  //Función para cargar un arreglo
  let cargarArreglo = (arreglo: number[], longitudArreglo: number): number => {
    for (let i: number = 0; i < longitudArreglo; i++) {
      arreglo[i] = Number(
        prompt("ingrese el valor de la posición " + (i + 1) + " del arreglo")
      );
    }
  };

  //Función para calcular el producto escalar del arreglo
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

  //Llamo a las funciones y luego muestro en consola y en el html
  cargarArreglo(arreglo1, longitud);
  cargarArreglo(arreglo2, longitud);
  escalarArreglo(arreglo1, arreglo2, arregloEscalar, longitud);
  console.log("El producto escalar es: " + suma);
  resultado.innerHTML = "El producto escalar es: " + suma;
});
