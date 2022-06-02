/* CONSIGNA:
Escriba un programa que calcule la probabilidad de sacar
todos los dados 6 siendo que tiramos N dados (dato ingresado
  por al usuario).
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre las probabilidades en consola y en el html
btnProbar.addEventListener("click", () => {
  //Pido la cantidad de dados
  let cantidadDados: number = Number(prompt("Ingrese la cantidad de dados"));
  //Muestro la probabilidad en consola y en el html
  console.log(
    "La probabilidad de caer en 6 todos los dados es de 1/" + 6 ** cantidadDados
  );
  resultado.innerHTML =
    "La probabilidad de caer en 6 todos los dados es de 1/" +
    6 ** cantidadDados;
});
