/* CONSIGNA:
Determinar y mostrar el máximo, el mínimo y la media de todos
los números ingresados.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre los 10 pasos en consola y en el html
btnProbar.addEventListener("click", () => {
  //Declaro las variables
  let suma: number = 0;
  let contador: number = 0;
  let promedio: number;
  let numeroIngresado: number;
  //Solicito un número
  numeroIngresado = Number(prompt("Ingrese número"));
  //Inicializo las variables "maximo" y "minimo" con el primer valor ingresado
  let maximo: number = numeroIngresado;
  let minimo: number = numeroIngresado;
  //Mientras el usuario no ingrese un 0 va a seguir pidiendo números mientras guarda el numero mas grande y el mas chico
  while (numeroIngresado !== 0) {
    suma = suma + numeroIngresado;
    contador++;
    if (numeroIngresado > maximo) {
      maximo = numeroIngresado;
    } else if (numeroIngresado < minimo) {
      minimo = numeroIngresado;
    }
    numeroIngresado = Number(prompt("Ingrese número"));
  }
  promedio = suma / contador;

  //Muestro en consola y en el html los resultados
  console.log(
    "El número máximo es ",
    maximo,
    ", el mínimo es ",
    minimo,
    " y el promedio es ",
    promedio
  );
  resultado.innerHTML =
    "El número máximo es " +
    maximo +
    ", el mínimo es " +
    minimo +
    " y el promedio es " +
    promedio;
});
