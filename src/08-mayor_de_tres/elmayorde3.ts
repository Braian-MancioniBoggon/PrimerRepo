/* CONSIGNA:
Desarrolle un algoritmo que dados tres números determine cuál
es el mayor de los tres.
*/
let numero1: number = document.getElementById("num1");
let numero2: number = document.getElementById("num2");
let numero3: number = document.getElementById("num3");
let btnVerificar = document.getElementById("verificar");

btnVerificar.addEventListener("click", () => {
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
  let num3: number = Number(numero3.value);

  if (num1 > num2 && num1 > num3) {
    console.log(
      "El número " + num1 + " (primer número) es el mas grande de los tres"
    );
  } else if (num2 > num1 && num2 > num3) {
    console.log(
      "El número " + num2 + " (segundo número) es el mas grande de los tres"
    );
  } else {
    console.log(
      "El número " + num3 + " (tercer número) es el mas grande de los tres"
    );
  }
});
