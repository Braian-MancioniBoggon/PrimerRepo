/* CONSIGNA:
Almacene en un arreglo de tamaño N los números ingresados por el usuario.
La dimensión N también es ingresada por el usuario.
Muestre los números del arreglo pero del último al primero.
*/

//Declaro los elemementos que voy a usar del html
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre el arreglo invertido en consola y en el html
btnProbar.addEventListener("click", () => {
  //Solicito la longitud del arreglo
  let dimencionArreglo: number = Number(
    prompt("Ingrese la longitud del arreglo")
  );
  //Asigno la longitud ingresada al arreglo que voy a invertir
  let arreglo: number[] = new Array(dimencionArreglo);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = " ";

  let indice: number;
  //Se cargan los datos en el arreglo
  for (indice = 0; indice < dimencionArreglo; indice++) {
    arreglo[indice] = Number(
      prompt(
        "ingrese un númerp para la posición " + (indice + 1) + " del arreglo"
      )
    );
  }
  //Se muestra el arreglo en pantalla de forma invertida
  for (indice = dimencionArreglo - 1; indice >= 0; indice--) {
    console.log(
      "El número en la posición " + (indice + 1) + " es: " + arreglo[indice]
    );
    resultado.innerHTML +=
      "<p>El número en la posición " +
      (indice + 1) +
      " es: " +
      arreglo[indice] +
      "</p>";
  }
});
