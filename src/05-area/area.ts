/* CONSIGNA:
Calcular el área de un rectangulo.
*/

//Declaro los elemementos que voy a usar del html
let btnCon = document.getElementById("btnCalcular");
let base: number = document.getElementById("base");
let altura: number = document.getElementById("altura");
let resultado = document.getElementById("resultado");

//Indico que, al pulsar el boton, muestre el área en consola y en el html
btnCon.addEventListener("click", () => {
  console.log("El area es ", base.value * altura.value);
  resultado.innerHTML = "El area es: " + base.value * altura.value;
});
