/* CONSIGNA:
Ingresar 2 números para sumarlos.
*/

//Declaro los elemementos que voy a usar del html
let num1: number = document.getElementById("num1");
let num2: number = document.getElementById("num2");
let btnSumar = document.getElementById("btnSumar");
let respuesta = document.getElementById("respuesta");

//Indico que, al pulsar el boton, muestre el resultado de la suma en consola y en el html
btnSumar.addEventListener("click", () => {
  let suma: number = Number(num1.value) + Number(num2.value);
  console.log("La suma es: ", suma);
  respuesta.innerHTML = "La suma es: " + suma;
});
