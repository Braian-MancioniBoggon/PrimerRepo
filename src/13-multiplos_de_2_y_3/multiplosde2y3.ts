/* CONSIGNA:
Cree un algoritmo que visualice los números que son múltiplos
de 2 o de 3 que hay entre 1 y 100.
*/
let resultado: string = "";

for (let numero: number = 1; numero <= 100; numero++)
  if (numero % 2 === 0 || numero % 3 === 0) {
    resultado = resultado + " " + numero;
  }
console.log("Los multiplos de 2 o de 3 son: ", resultado);
