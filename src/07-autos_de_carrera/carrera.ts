/* CONSIGNA:
Calcular el tiempo total de la carrera y el promedio por vuelta.
*/

//Declaro los elemementos que voy a usar del html
let vuelta1 = document.getElementById("vuelta1");
let vuelta2 = document.getElementById("vuelta2");
let vuelta3 = document.getElementById("vuelta3");
let vuelta4 = document.getElementById("vuelta4");
let btnCalcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

//Indico que, al pulsar el boton, calcule el promedio y el tiempo total
//y los muestro en consola y en el html
btnCalcular.addEventListener("click", () => {
  let tiempoTotal: number =
    Number(vuelta1.value) +
    Number(vuelta2.value) +
    Number(vuelta3.value) +
    Number(vuelta4.value);
  console.log(
    "El tiempo total es ",
    tiempoTotal,
    "min y el promedio de vuelta es de ",
    tiempoTotal / 4 "min"
  );
  resultado.innerHTML =
    "El tiempo total es " +
    tiempoTotal +
    "min y el promedio de vuelta es de " +
    tiempoTotal / 4 +
    "min";
});
