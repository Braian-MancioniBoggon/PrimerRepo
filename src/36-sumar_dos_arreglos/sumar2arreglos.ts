/* CONSIGNA:
Hacer la suma de dos arreglos y dejarlo en otro arreglo.
La dimensión de los arreglos es solicitada al usuario.
Los dos arreglos son cargados al azar.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btnProbar.addEventListener("click", () => {
  //Pido la longitud del arreglo
  let longitud: number = Number(
    prompt("Ingrese la cantidad de numeros dentro de los arreglos")
  );

  //Asigno la longitud ingresada a los arreglos
  let arreglo1: number[] = new Array(longitud);
  let arreglo2: number[] = new Array(longitud);
  let arregloSuma: number[] = new Array(longitud);

  //Función para crear números aleatorios
  let crearNumeroAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //Función para cargar arreglos con números aleatorios
  let cargarAleatorio = (
    arreglo: number[],
    longitudArreglo: number
  ): number[] => {
    for (let indice: number = 0; indice < longitudArreglo; indice++) {
      arreglo[indice] = crearNumeroAleatorio(0, 100);
    }
  };

  //Función para mostrar un arreglo en consola
  let mostrarArreglo = (
    arreglo: number[],
    longitudArreglo: number
  ): number[] => {
    let numerosEnArreglo: string = "";
    for (let indice: number = 0; indice < longitudArreglo; indice++) {
      numerosEnArreglo += arreglo[indice] + ", ";
    }
    console.log("Los valores dentro del arreglo son: " + numerosEnArreglo);
  };

  //Función para sumar arreglos
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
  //Muestro los datos en el html
  resultado.innerHTML =
    "<p>Los valores dentro del primer arreglo son: " +
    arreglo1 +
    "</p><p>Los valores dentro del segundo arreglo son: " +
    arreglo2 +
    "</p><p>La suma de ambos arreglos es: " +
    arregloSuma +
    "</p>";
});
