/* CONSIGNA:
Sumar los elementos de cada una de las posiciones de dos arreglos
y guardar el resultado en otro arreglo.
*/

//Declaro los elemementos que voy a usar del html y los arreglos
let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let arregloSuma: number[] = new Array(6);
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, solicite los valores para sumar
btnProbar.addEventListener("click", () => {
  resultado.innerHTML = " ";
  let indice: number;
  //Pido los valores para el primer arreglo
  for (indice = 0; indice < 6; indice++) {
    arreglo1[indice] = Number(
      prompt(
        "ingrese un númerp para la posición " + (indice + 1) + " del arreglo 1"
      )
    );
  }
  //Pido los valores para el segundo arreglo
  for (indice = 0; indice < 6; indice++) {
    arreglo2[indice] = Number(
      prompt(
        "ingrese un númerp para la posición " + (indice + 1) + " del arreglo 2"
      )
    );
  }
  //Sumo ambos arreglos y los muestro en consola y en el html
  for (indice = 0; indice < 6; indice++) {
    arregloSuma[indice] = arreglo1[indice] + arreglo2[indice];
    console.log(
      "La suma de los numeros " +
        arreglo1[indice] +
        " y " +
        arreglo2[indice] +
        " correspondientes a la posición " +
        (indice + 1) +
        " de ambos arreglos es: " +
        arregloSuma[indice]
    );
    resultado.innerHTML +=
      "<p>La suma de los numeros " +
      arreglo1[indice] +
      " y " +
      arreglo2[indice] +
      " correspondientes a la posición " +
      (indice + 1) +
      " de ambos arreglos es: " +
      arregloSuma[indice] +
      "</p>";
  }
});
