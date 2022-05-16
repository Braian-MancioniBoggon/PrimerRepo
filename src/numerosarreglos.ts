let dimencionArreglo: number = Number(
  prompt("Ingrese la longitud del arreglo")
);
let arreglo: number[] = new Array(dimencionArreglo);

let indice: number;
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;

for (indice = 0; indice < dimencionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt("ingrese un númerp para la posición " + indice + " del arreglo")
  );
  if (arreglo[indice] === 0) {
    ceros = ceros + 1;
  } else if (arreglo[indice] > 0) {
    positivos = positivos + 1;
  } else {
    negativos = negativos + 1; //si ponia, por ejemplo, negativos++ me figuraba que no usaba las variables
  }
}

console.log(
  "Se ingresaron " +
    positivos +
    " números positivos, " +
    negativos +
    " números negativos y " +
    ceros +
    " ceros."
);
