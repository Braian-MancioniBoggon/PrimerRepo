let dimencionArreglo: number = Number(
  prompt("Ingrese la longitud del arreglo")
);
let arreglo: number[] = new Array(dimencionArreglo);

let indice: number;
for (indice = 0; indice < dimencionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt("ingrese un númerp para la posición " + indice + " del arreglo")
  );
}
for (indice = dimencionArreglo - 1; indice >= 0; indice--) {
  console.log("El número en la posición " + indice + " es: " + arreglo[indice]);
}
