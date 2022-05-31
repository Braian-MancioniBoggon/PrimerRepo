/* CONSIGNA:
Leer valores hasta que se introduzca un cero (0). 
El usuario puede introducir valores positivos y negativos. 
Encontrar el máximo de los elementos que se introdujeron.
*/

//----------------------------------------------------------------------
// MAYOR NUMERO

let num: number = 0;
let max: number = 0;
let control: number = 1;

while (control < 2) {
  num = Number(prompt("Ingrese un número - Ingrese 0 para salir"));
  if (num === 0) {
    control = 3;
  } else if (num > max) {
    max = num;
  }
}
console.log("El número ingresado mas grande es: ", max);

//----------------------------------------------------------------------
// MENOR NUMERO
/*
let num: number = 0;
let min: number = 0;
let control: number = 1;

while (control < 2) {
  num = Number(prompt("Ingrese un número - Ingrese 0 para salir"));
  min = num;
  if (num === 0) {
    control = 3;
  } else if (min > num) {
    min = num;
  }
}
console.log("El número ingresado mas chico es: ", min);
*/
