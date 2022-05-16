let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let arregloSuma: number[] = new Array(6);

let indice: number;
for (indice = 0; indice < 6; indice++) {
  arreglo1[indice] = Number(
    prompt("ingrese un númerp para la posición " + indice + " del arreglo 1")
  );
}
for (indice = 0; indice < 6; indice++) {
  arreglo2[indice] = Number(
    prompt("ingrese un númerp para la posición " + indice + " del arreglo 2")
  );
}
for (indice = 0; indice < 6; indice++) {
  arregloSuma[indice] = arreglo1[indice] + arreglo2[indice];
  console.log(
    "La suma de los numeros " +
      arreglo1[indice] +
      " y " +
      arreglo2[indice] +
      " correspondientes a la posición " +
      indice +
      " de los arreglos 1 y 2 es: " +
      arregloSuma[indice]
  );
}
