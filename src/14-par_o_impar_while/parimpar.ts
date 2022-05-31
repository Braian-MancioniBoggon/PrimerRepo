/* CONSIGNA:
Realizar un algoritmo que dado un número entero ingresado
por el usuario, visualice en pantalla si es par o impar,
si el numero es 0 se vuelve a pedir otro.
*/
let numero: number = 0;
while (numero <= 0) {
  numero = Number(prompt("Ingrese un numero"));
  if (numero % 2 === 0) {
    console.log("El numero ingresado es par");
  } else {
    console.log("El numero ingresado es impar");
  }
}
