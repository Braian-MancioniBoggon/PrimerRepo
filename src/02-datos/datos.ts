/* CONSIGNA:
Ingresar un dato y mostrarlo por consola.
*/

//Declaro los 3 elemementos que voy a usar del html
let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let respuesta = document.getElementById("respuesta");

//Indico que, al pulsar el boton, muestre el daton en consola y en el html
btnEnv.addEventListener("click", () => {
  console.log("el dato ingresado es ", dato.value);
  respuesta.innerHTML = "el dato ingresado es " + dato.value;
});
