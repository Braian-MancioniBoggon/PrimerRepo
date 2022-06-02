/* CONSIGNA:
Cree un algoritmo que visualice los números que son múltiplos
de 2 o de 3 que hay entre 1 y 100.
*/

//Declaro la variable y el elememento que voy a usar del html
let resultado: string = "";
let mostrarResultado = document.getElementById("resultado");

//Calculo todos los multiplos que hay de 2 o 3 entre 1 y 100
for (let numero: number = 1; numero <= 100; numero++)
  if (numero % 2 === 0 || numero % 3 === 0) {
    resultado = resultado + " " + numero;
  }
// muestro los resultados en consola y en el html
console.log("Los multiplos de 2 o de 3 son: ", resultado);
mostrarResultado.innerHTML = resultado;
