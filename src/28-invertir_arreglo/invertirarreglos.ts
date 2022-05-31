/* CONSIGNA:
Almacene en un arreglo de tamaño N los números ingresados por el usuario.
La dimensión N también es ingresada por el usuario.
Muestre los números del arreglo pero del último al primero.
*/
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
