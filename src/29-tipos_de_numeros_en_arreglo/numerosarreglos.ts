/* CONSIGNA:
Muestre cuántos números son positivos, cuántos son negativos
y cuántos ceros hay.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btnProbar.addEventListener("click", () => {
  //Pido la longitud del arreglo
  let dimencionArreglo: number = Number(
    prompt("Ingrese la longitud del arreglo")
  );
  //Asigno la longitud al arreglo
  let arreglo: number[] = new Array(dimencionArreglo);

  //Declaro las variables
  let indice: number;
  let positivos: number = 0;
  let negativos: number = 0;
  let ceros: number = 0;

  //Cargo el arreglo y voy separando los datos necesarios en las variables correspondientes
  for (indice = 0; indice < dimencionArreglo; indice++) {
    arreglo[indice] = Number(
      prompt(
        "ingrese un númerp para la posición " + (indice + 1) + " del arreglo"
      )
    );
    if (arreglo[indice] === 0) {
      ceros = ceros + 1;
    } else if (arreglo[indice] > 0) {
      positivos = positivos + 1;
    } else {
      negativos = negativos + 1; //si ponia, por ejemplo, negativos++ me figuraba que no usaba las variables
    }
  }

  //Muesto los resultados en consola y en html
  console.log(
    "Se ingresaron " +
      positivos +
      " números positivos, " +
      negativos +
      " números negativos y " +
      ceros +
      " ceros."
  );
  resultado.innerHTML =
    "Se ingresaron " +
    positivos +
    " números positivos, " +
    negativos +
    " números negativos y " +
    ceros +
    " ceros.";
});
