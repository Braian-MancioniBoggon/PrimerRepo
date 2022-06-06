/* CONSIGNA:
Diseñar un algoritmo que recorra las butacas de una sala de cine
y determine cuántas butacas desocupadas hay.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btnProbar.addEventListener("click", () => {
  let butacas: boolean[] = [
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false
  ];
  let butacasVacias: number = 0;

  //Corroboro las butacas libres dentro del arreglo
  for (let i: number = 0; i <= butacas.length; i++) {
    if (butacas[i] === false) {
      butacasVacias++;
    }
  }

  //Muestro el resultado en consola y en el html
  console.log("Hay " + butacasVacias + " butacas vacias");
  resultado.innerHTML = "Hay " + butacasVacias + " butacas vacias";
});
