/* CONSIGNA:
Calcular el tiempo total de la carrera y el promedio por vuelta.
*/
let vuelta1 = document.getElementById("vuelta1");
let vuelta2 = document.getElementById("vuelta2");
let vuelta3 = document.getElementById("vuelta3");
let vuelta4 = document.getElementById("vuelta4");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let tiempoTotal: number =
    Number(vuelta1.value) +
    Number(vuelta2.value) +
    Number(vuelta3.value) +
    Number(vuelta4.value);
  console.log(
    "El tiempo total es",
    tiempoTotal,
    "y el promedio de vuelta es de",
    tiempoTotal / 4
  );
});
