/* CONSIGNA:
Leer valores del usuario hasta que introduzca un 0.
Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre lla cantidad de numeros positivos y el porsentaje del total en consola y en el html
btnProbar.addEventListener("click", () => {
  //Declaro las variables
  let numeros: number = 0;
  let contador: number = 0;
  let positivo: number = 0;
  let porcentaje: number;
  let control: number = 1;
  //Mientras el usuario no ingrese un 0 va a seguir pidiendo números y va a guardar la cantidad de números positivos y de números ingresados
  while (control < 2) {
    numeros = Number(prompt("Ingrese numero - Utilize 0 para salir"));
    if (numeros === 0) {
      control = 3;
    } else {
      contador++;
      if (numeros > 0) {
        positivo++;
      }
    }
  }
  //Se calcula el porsentaje de números positivos ingresados
  porcentaje = (positivo / contador) * 100;

  //Muestro en consola y en el html los resultados
  console.log(positivo, " números positivos, ", porcentaje, "% del total.");
  resultado.innerHTML =
    positivo + " números positivos, " + porcentaje + "% del total.";
});
