/* CONSIGNA:
Escriba un programa que pida al usuario dos números enteros,
y luego retorne la suma de todos los números que están entre ellos.
*/

////Declaro las variables y los elemementos que voy a usar del html
let num1: number;
let num2: number;
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre la suma en consola y en el html
btnProbar.addEventListener("click", () => {
  //Pido los números a sumar
  num1 = Number(prompt("Ingrese el primer numero entero"));
  num2 = Number(prompt("Ingrese el segundo numero entero"));

  //Declaro las variables del contador y en la que se guarda el resultado
  let contador: number;
  let total: number;
  total = 0;

  //Voy sumando cada numero que hay entre los ingresados
  for (contador = num1; contador <= num2; contador++) {
    total = total + contador;
  }
  //Muesto el resultado en consola y en el html
  console.log("la suma de ambos números es: " + total);
  resultado?.innerHTML = "la suma de ambos números es: " + total;
});
